import { MainPage } from "./pages/MainPage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { ProfilePage } from "./pages/ProfilePage.js";

const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  render();
};

export const render = () => {
  const path = window.location.pathname;
  const page = routes[path] || MainPage;
  document.getElementById("app").innerHTML = page();
};

window.addEventListener("popstate", render);

document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-link]");
  if (target) {
    e.preventDefault();
    navigateTo(target.href);
  }
});
