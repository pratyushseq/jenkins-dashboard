module.exports = [
  {
    name: "FE",
    baseUrl: "https://jenkins-qa.sequoia-development.com",
    jobs: [
      { name: "Adminshell", job: "pp-kernel-adminshell-frontend" },
      {
        name: "HRX",
        job: "pp-sp-benefits-admincore-frontend",
      },
      {
        name: "PX",
        job: "pp-sp-benefits-px-frontend",
      },
      {
        name: "TR",
        job: "pp-ptr-totalrewards-frontend",
      },
      {
        name: "Wellbeing",
        job: "pp-sp-wellbeing-frontend",
      },
      {
        name: "Kernel",
        job: "pp-kernel-frontend",
      },
      {
        name: "UWP",
        job: "pp-po-s1-frontend",
      },
      {
        name: "Eureka",
        job: "pp-kernel-eureka-frontend",
      },
      {
        name: "IDM",
        job: "pp-kernel-idm-frontend",
      },
    ],
  },
  {
    name: "FE Prod",
    baseUrl: "https://jenkins-production.sequoia-development.com",
    jobs: [
      { name: "Adminshell", job: "pp-kernel-adminshell-frontend" },
      {
        name: "HRX",
        job: "pp-sp-benefits-admincore-frontend",
      },
      {
        name: "PX",
        job: "pp-sp-benefits-px-frontend",
      },
      {
        name: "TR",
        job: "pp-ptr-totalrewards-frontend",
      },
      {
        name: "Wellbeing",
        job: "pp-sp-wellbeing-frontend",
      },
      {
        name: "Kernel",
        job: "pp-kernel-frontend",
      },
      {
        name: "UWP",
        job: "pp-po-s1-frontend",
      },
      {
        name: "Eureka",
        job: "pp-kernel-eureka-frontend",
      },
      {
        name: "IDM",
        job: "pp-kernel-idm-frontend",
      },
    ],
  },
];







