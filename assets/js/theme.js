const STORAGE_KEY = "theme";
const THEME_ATTR = "data-theme";
const QUERY_KEY = "(prefers-color-scheme: dark)";
const themes = { LIGHT: "light", DARK: "dark" };
function setTheme(value) { document.documentElement.setAttribute(THEME_ATTR, value); }
function getTheme() { return document.documentElement.getAttribute(THEME_ATTR); }
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  setTheme(savedTheme || themes.DARK);
}
function toggleTheme() {
  const next = getTheme() === themes.DARK ? themes.LIGHT : themes.DARK;
  setTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
}
initTheme();