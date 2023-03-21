export const onDarkMode = (darkMode) => {
  if (!localStorage.getItem("dark-mode")) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "dark");
  } else {
    if (darkMode === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "dark");
    } else {
      localStorage.setItem("dark-mode", "light");
      document.body.classList.remove("dark-mode");
    }
  }
};
