//slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5s seconds
}

// Initialize slideshow
showSlides();
//slideshow

// latest projects
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
// latest projects

// News&articles
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".article");

  articles.forEach((article) => {
    article.addEventListener("mouseover", function () {
      this.classList.add("hovered");
    });

    article.addEventListener("mouseleave", function () {
      this.classList.remove("hovered");
    });
  });
});
// News&articles
// Rosa team
document.addEventListener("DOMContentLoaded", function () {
  const logoBoxes = document.querySelectorAll(".logo-box");
  const clientTitle = document.getElementById("client-title");
  const clientDesc = document.getElementById("client-desc");

  const clientDetails = {
    1: { title: "CLIENT 1", desc: "Client 1 is a premium design studio." },
    2: {
      title: "CLIENT 2",
      desc: "Client 2 specializes in branding and identity.",
    },
    3: {
      title: "CLIENT 3",
      desc: "Client 3 is a leader in web design services.",
    },
    4: {
      title: "CLIENT 4",
      desc: "Client 4 provides high-quality custom graphics.",
    },
    5: {
      title: "CLIENT 5",
      desc: "Client 5 focuses on creative digital solutions.",
    },
  };

  logoBoxes.forEach((logoBox) => {
    logoBox.addEventListener("mouseover", function () {
      const clientId = this.getAttribute("data-client");
      clientTitle.textContent = clientDetails[clientId].title;
      clientDesc.textContent = clientDetails[clientId].desc;
    });

    logoBox.addEventListener("mouseleave", function () {
      clientTitle.textContent = "CLIENT 2";
      clientDesc.textContent = "Hover over a logo to see details.";
    });
  });
});
// Rosa team
// form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      website: formData.get("website"),
      message: formData.get("message"),
    };

    fetch("https://borjomi.loremipsum.ge/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 1) {
          modal.style.display = "flex"; // Show modal
          form.reset(); // Reset form fields
        } else {
          alert("Error: Unable to send message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was a problem sending the message.");
      });
  });

  // Close modal when clicking OK
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
// form
//reviews
const reviews = [
  {
    review: "Just a pleasure to work with. What a guy",
    image: "Staff/images/d3.svg",
    profession: "Graphic Designer",
    name: "Mau Thomas",
  },
  {
    review: "Amazing experience! Highly recommended.",
    image: "Staff/images/d4.svg",
    profession: "Web Developer",
    name: "Sarah Lee",
  },
  {
    review: "Superb service and great communication.",
    image: "Staff/images/d5.svg",
    profession: "Marketing Expert",
    name: "John Doe",
  },
];

const reviewText = document.querySelector(".user-review");
const reviewImage = document.querySelector(".user-border");
const professionText = document.querySelector(".user-profession");
const userName = document.querySelector(".user-name");
const buttons = document.querySelectorAll(".reviews-btn");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    reviewText.textContent = reviews[index].review;
    reviewImage.src = reviews[index].image;
    professionText.textContent = reviews[index].profession;
    userName.textContent = reviews[index].name;
  });
});
//reviews
// skills bar
document.addEventListener("DOMContentLoaded", function () {
  const skills = {
    html: "85%",
    css: "75%",
    js: "60%",
    design: "45%",
  };

  const bars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const className = [...bar.classList].find((cls) => skills[cls]);
          if (className) {
            bar.style.width = skills[className];
            observer.unobserve(bar); // Animate only once
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  bars.forEach((bar) => observer.observe(bar));
});
// skills bar
