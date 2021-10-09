import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

// application: nav
registerApplication(
  "@thawkin3/single-spa-demo-nav",
  () => System.import("@thawkin3/single-spa-demo-nav"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

// application: page 1
// add elment id: main-container
registerApplication(
  "@thawkin3/single-spa-demo-page-1",
  () => System.import("@thawkin3/single-spa-demo-page-1"),
  isActive.page1,
  { domElement: document.getElementById("main-container") }
);

// application: page 2
// add elment id: main-container
registerApplication(
  "@thawkin3/single-spa-demo-page-2",
  () => System.import("@thawkin3/single-spa-demo-page-2"),
  isActive.page2,
  { domElement: document.getElementById("main-container") }
);

// application: employee
// add elment id: main-container
registerApplication(
  "@thawkin3/employee",
  () => System.import("@thawkin3/employee"),
  isActive.employee,
  document.getElementById("main-container")
);

start();
