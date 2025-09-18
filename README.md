# 🧠 Interactive Web Pages with JavaScript

## Table of Contents
1. [Project Overview](#project-overview)  
2. [Project Goals](#project-goals)  
3. [Features](#features)  
4. [Project Structure](#project-structure)  
5. [Getting Started](#getting-started)  
6. [Technologies Used](#technologies-used)  
7. [Detailed Feature Breakdown](#detailed-feature-breakdown)  
8. [How It Works](#how-it-works)  
9. [Best Practices and Code Structure](#best-practices-and-code-structure)  
10. [Author](#author)  

---

## Project Overview
This project demonstrates fundamental **JavaScript skills** applied to **interactive web pages**. It emphasizes real-world programming techniques including:

- **Event Handling:** Listening and responding to user interactions such as clicks, hovers, and keyboard input.  
- **DOM Manipulation:** Dynamically updating the webpage content and styles.  
- **Form Validation:** Implementing custom, user-friendly checks for input correctness.  

The final result is a **responsive, engaging, and functional web page** where users can interact without reloading the page.

---

## Project Goals
The purpose of this project is to:

1. Gain mastery over **JavaScript events** and learn how to react to user actions dynamically.  
2. Build **interactive web elements** like counters, light/dark mode toggles, and collapsible sections.  
3. Implement **custom form validation** to improve usability and prevent invalid submissions.  
4. Produce **clean, modular, and well-commented code** that follows best practices.  

---

## Features

### Part 1: Event Handling
- **Click Event:** Displays a message when the button is clicked.  
- **Hover Event:** Displays dynamic messages when the user hovers over or out of an input.  
- Demonstrates understanding of **`addEventListener`**, event types, and dynamic DOM updates.

### Part 2: Interactive Elements
- **Light/Dark Mode Toggle:** Switches the page theme between light and dark modes.  
- **Counter Game:** Increment and decrement a counter displayed dynamically.  
- **Collapsible FAQ Section:** Expand or collapse answers by clicking questions.  
- **Goal:** Create engaging features using **DOM manipulation** and **event-driven programming**.

### Part 3: Form Validation
- Custom validation for **Name**, **Email**, and **Password** fields.  
- Validates:
  - Non-empty fields  
  - Correct email format using **regular expressions**  
  - Minimum password length requirement  
- Displays **inline error messages** next to invalid fields.  
- Shows **success feedback** upon valid submission.  
- Uses **`event.preventDefault()`** to prevent page reload until the form is valid.  

---

## Project Structure
interactive-webpage/
│
├── index.html # HTML file containing page structure, buttons, inputs, and forms
├── style.css # CSS file for styling elements, layout, and interactive features
└── script.js # JavaScript file handling events, interactive components, and validation


---

## Getting Started

### Prerequisites
- Modern web browser: Chrome, Firefox, Edge, or Safari  
- Text editor or IDE: VS Code, Sublime Text, Atom, etc.

### Instructions
1. **Download or clone** the project repository.  
   ```bash
   git clone <repository_url>
