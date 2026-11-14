// SERVICES DATA
const services = [
    {
        icon: "💻",
        name: "Web Development",
        category: "Technology",
        description: "Responsive and modern website development."
    },
    {
        icon: "⚙️",
        name: "Software Development",
        category: "Technology",
        description: "Custom software and digital solutions."
    },
    {
        icon: "📱",
        name: "Mobile Applications",
        category: "Technology",
        description: "Mobile application development services."
    },
    {
        icon: "🎨",
        name: "Graphic Design",
        category: "Creative",
        description: "Creative graphics and branding designs."
    },
    {
        icon: "🎬",
        name: "Video Creation",
        category: "Creative",
        description: "Video editing and promotional content."
    },
    {
        icon: "📢",
        name: "Digital Marketing",
        category: "Business",
        description: "Online marketing and social media promotion."
    },
    {
        icon: "📈",
        name: "Business Development",
        category: "Business",
        description: "Business promotion and development solutions."
    },
    {
        icon: "🖥️",
        name: "IT Support",
        category: "Technology",
        description: "Hardware support and IT services."
    }
];

// DISPLAY SERVICES
function displayServices(items) {
    const grid = document.getElementById("serviceGrid");

    grid.innerHTML = "";

    items.forEach(service => {
        grid.innerHTML += `
            <div class="service-card">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <small>${service.category}</small>
            </div>
        `;
    });
}

// FILTER SERVICES
function filterServices(category, button) {
    const filtered = category === "All"
        ? services
        : services.filter(item => item.category === category);

    displayServices(filtered);

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

// DARK MODE
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.querySelector(".theme-btn");

    button.textContent =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// MOBILE MENU
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("show");
    });
});

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const result = document.getElementById("formMessage");

    if (!name || !email || !message) {
        result.textContent = "Please fill all required fields.";
        return;
    }

    result.textContent =
        "Thank you, " + name + "! Your demo message is ready.";

    this.reset();
});

// BACK TO TOP BUTTON
window.addEventListener("scroll", function() {
    const button = document.getElementById("topButton");

    button.style.display =
        window.scrollY > 300 ? "block" : "none";
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// INITIAL DISPLAY
displayServices(services);