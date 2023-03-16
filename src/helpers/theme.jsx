export const onDarkMode = (moon, darkMode) => {
  if (!localStorage.getItem("dark-mode")) {
    moon.current.classList.add("active");
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "dark");
  } else {
    if (darkMode === "dark") {
      moon.current.classList.add("active");
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "dark");
    } else {
      moon.current.classList.remove("active");
      localStorage.setItem("dark-mode", "light");
      document.body.classList.remove("dark-mode");
    }
  }
};
