// latst projects
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  const sidebarItems = document.querySelectorAll(".sidebar li");

  function filterProjects(category) {
    projects.forEach((project) => {
      if (category === "all" || project.dataset.category === category) {
        project.classList.remove("dimmed");
      } else {
        project.classList.add("dimmed");
      }
    });

    // Remove 'selected' class from all sidebar items
    sidebarItems.forEach((item) => item.classList.remove("selected"));

    // Add 'selected' class to the clicked sidebar item
    document
      .querySelector(`.sidebar li[data-category="${category}"]`)
      .classList.add("selected");
  }

  // Sidebar Click Event
  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterProjects(category);
    });
  });

  // Image Click Event
  projects.forEach((project) => {
    project.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterProjects(category);
    });
  });
});

// latst projects
