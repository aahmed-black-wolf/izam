import {
  AsideMenu,
  AsideToggle,
  Dropdown,
  JobList,
  MenuToggle,
} from './app'; // Adjust the import path based on your project structure

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = new Dropdown(
    ".dropdown-button", // The button selector
    ".dropdown-menu", // The menu selector
    ".selected-option", // The selected option span
    ".dropdown-item" // The dropdown items selector
  );

  const asideToggle = new AsideToggle(
    "aside", // The aside element selector
    ".aside-toggle-btn", // The button that toggles the aside
    ".aside-close-btn" // The  button to close the aside
  );

  const asideMenu = new AsideMenu(".button-rest[data-toggle]");

  const jobList = new JobList(".job-list");

  const menuToggle = new MenuToggle(".side-menu", ".profile-btn", ".user-info");
});
