// latst projects
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  const sidebarItems = document.querySelectorAll(".sidebar li");

  function filterProjects(category, clickedItem) {
    // Check if the clicked item is already selected
    if (clickedItem.classList.contains("selected")) {
      // Remove all highlights and show all projects
      sidebarItems.forEach((item) => item.classList.remove("selected"));
      projects.forEach((project) => project.classList.remove("dimmed"));
    } else {
      // Remove 'selected' from all items
      sidebarItems.forEach((item) => item.classList.remove("selected"));
      clickedItem.classList.add("selected");

      // Filter projects
      projects.forEach((project) => {
        if (category === "all" || project.dataset.category === category) {
          project.classList.remove("dimmed");
        } else {
          project.classList.add("dimmed");
        }
      });
    }
  }

  // Sidebar Click Event
  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterProjects(category, this);
    });
  });

  // Image Click Event
  projects.forEach((project) => {
    project.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterProjects(
        category,
        document.querySelector(`.sidebar li[data-category="${category}"]`)
      );
    });
  });
});
// latst projects
