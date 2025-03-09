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