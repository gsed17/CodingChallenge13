// Task 2: Adding Employee Cards Dynamically
document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer"); // Employee card container
    const addEmployeeButton = document.getElementById("addEmployee"); // Button to add employees
    let employeeCounter = 0; // Counter for unique employee IDs

    function addEmployeeCard(name, position) {
        // Create a div element for the employee card
        const card = document.createElement("div");
        card.classList.add("employeeCard"); // Assign a class for styling
        card.setAttribute("id", `employee-${employeeCounter}`); // Assign a unique ID

        // Create an element for the employee name
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = name;

        // Create an element for the employee position
        const positionParagraph = document.createElement("p");
        positionParagraph.textContent = position;

        // Create a "Remove" button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Create an "Edit" button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");

        // Attach an event listener to the remove button
        removeButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event bubbling
            card.remove(); // Remove the employee card
            console.log(`Employee removed: ${card.id}`); // Log removal
        });

        // Append all elements to the employee card
        card.appendChild(nameHeading);
        card.appendChild(positionParagraph);
        card.appendChild(editButton);
        card.appendChild(removeButton);

        // Append the new employee card to the container
        employeeContainer.appendChild(card);

        employeeCounter++; // Increment the unique employee counter
    }

    // Event listener for adding new employees
    addEmployeeButton.addEventListener("click", () => {
        const name = prompt("Enter employee name:");
        const position = prompt("Enter employee position:");
        if (name && position) {
            addEmployeeCard(name, position);
        }
    });

    // Add sample employees for testing
    addEmployeeCard("Doctor Doom", "Scientist");
    addEmployeeCard("Tony Stark", "Engineer");
});

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function updateEmployeeCardStyles() {
    // Select all employee cards
    const employeeCards = document.querySelectorAll(".employeeCard");

    // Convert NodeList to an array and update styles
    Array.from(employeeCards).forEach(card => {
        card.style.border = "2px solid black"; // Add a black border
        card.style.backgroundColor = "#f0f0f0"; // Light grey background
        card.style.padding = "10px"; // Add spacing for readability
    });
}

// Apply bulk styling to all employee cards
updateEmployeeCardStyles();

// Task 4: Implementing Removal of Employee Cards with Event Bubbling
employeeContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".employeeCard"); // Identify the clicked card
    if (card) {
        console.log(`Employee card clicked: ${card.id}`); // Log the card ID when clicked
    }
});
// Task 5: Inline Editing of Employee Details
function enableEditing(card) {
    // Get references to the employee name and position elements
    const nameElement = card.querySelector("h3");
    const positionElement = card.querySelector("p");

    // Store current values for editing
    const currentName = nameElement.textContent;
    const currentPosition = positionElement.textContent;

    // Create input fields for editing
    const nameInput = document.createElement("input");
    nameInput.value = currentName;

    const positionInput = document.createElement("input");
    positionInput.value = currentPosition;

    // Create a "Save" button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("save-btn");

    // Replace the static text with input fields
    card.replaceChild(nameInput, nameElement);
    card.replaceChild(positionInput, positionElement);
    card.insertBefore(saveButton, card.querySelector(".remove-btn"));

    // Event listener for saving the updated details
    saveButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event bubbling

        // Update the employee card with the new values
        nameElement.textContent = nameInput.value;
        positionElement.textContent = positionInput.value;

        // Restore static text
        card.replaceChild(nameElement, nameInput);
        card.replaceChild(positionElement, positionInput);
        card.removeChild(saveButton); // Remove the save button
    });
}

// Attach an event listener to enable editing when clicking the "Edit" button
employeeContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-btn")) {
        const card = event.target.closest(".employeeCard");
        if (card) {
            enableEditing(card);
        }
    }
});
