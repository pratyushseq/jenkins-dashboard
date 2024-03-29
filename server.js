const express = require("express");
const shrinkRay = require("shrink-ray-current");
const dashboards = require("./config");

const app = express();

const finalPort =
  process.env.PORT || process.env.NODE_ENV === "production" ? 3001 : 3002;

const getJobStatus = (job, baseUrl) =>
  fetch(`${baseUrl}/job/${job}/wfapi/runs`)
    .then((res) => res.json())
    .then((data) =>
      data.filter(
        (item) => !item.name.includes("-PR-")
      )
    );

let statusCache = [];

const getDashboards = async () => {
  try {
    const dashboardResponses = await Promise.allSettled(
      dashboards.map(({ name, jobs, baseUrl }) =>
        getStatuses({ name, jobs, baseUrl })
      )
    );
    statusCache = dashboardResponses.map(({ value }) => value);
    getDashboards();
  } catch (_err) {
    statusCache = "error";
    setTimeout(() => {
      getDashboards();
    }, 1000);
  }
};

const getStatuses = async ({ name, jobs, baseUrl }) => {
  const statuses = await Promise.allSettled(
    jobs.map(({ job }) => getJobStatus(job, baseUrl))
  );
  return {
    name,
    baseUrl,
    jobs: jobs.map(({ name, job }, index) => ({
      job,
      name: name,
      runs: statuses[index].value,
    })),
  };
};

getDashboards();

app.use(shrinkRay());

app.get("/status", async (_req, res) => {
  if (statusCache === "error") {
    return res.status(400).send("Error");
  }
  res.send(statusCache);
});

app.get("/", (_req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.use(express.static("public"));

app.listen(finalPort, () => {
  console.log(
    `\x1b[33m\nServer running on http://localhost:${finalPort}\n\x1b[0m`
  );
});

