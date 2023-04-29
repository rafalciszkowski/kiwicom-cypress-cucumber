const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/report/cucumber-json/",
    reportPath: "cypress/report/html-multi-report/",
    ignoreBadJsonFile: true,
    displayReportTime: true,
    displayDuration: true,
    metadata: {
        device: "Local test machine.",
        platform: { name: "Windows", version: "10" },
    },
});