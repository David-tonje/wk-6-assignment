// =========================
// Part 1: Event Handling
// =========================

// Click event
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("clickMessage").textContent = "Button clicked! 🎉";
});

// Hover event
document.getElementById("hoverInput").addEventListener("mouseover", function() {
  document.getElementById("hoverMessage").textContent = "You hovered over the input!";
});

document.getElementById("hoverInput").addEventListener("mouseout", function() {
  document.getElementById("hoverMessage").textContent = "";
});

// =========================
// Part 2: Interactive Features
// =========================

// Light/Dark mode toggle
document.getElementById("toggleModeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter game
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("incrementBtn").addEventListener("click", function() {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decrementBtn").addEventListener("click", function() {
  counter--;
  counterValue.textContent = counter;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", function() {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// =========================
// Part 3: Form Validation
// =========================

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let valid = true;

  // Name validation
  if(name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if(!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  // Password validation
  if(password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if(valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully! ✅";
    // Optionally reset form
    this.reset();
  }
});
