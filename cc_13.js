// Task 2: Adding Employee Cards Dynamically
document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer"); 
    const addEmployeeButton = document.getElementById("addEmployee"); 
    let employeeCounter = 0; 

    function addEmployeeCard(name, position) {
       
        const card = document.createElement("div");
        card.classList.add("employeeCard"); 
        card.setAttribute("id", `employee-${employeeCounter}`); 

        // Create an element for the employee name
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = name;

        // Create an element for the employee position
        const positionParagraph = document.createElement("p");
        positionParagraph.textContent = position;

        // Create a Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Create an Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");

        // Attach an event listener to the remove button
        removeButton.addEventListener("click", (event) => {
            event.stopPropagation();
            card.remove(); 
            console.log(`Employee removed: ${card.id}`); 
        });

        // Append all elements to the employee card
        card.appendChild(nameHeading);
        card.appendChild(positionParagraph);
        card.appendChild(editButton);
        card.appendChild(removeButton);

        // Append the new employee card to the container
        employeeContainer.appendChild(card);

        employeeCounter++; 
    }

    // Event listener for adding new employees
    addEmployeeButton.addEventListener("click", () => {
        const name = prompt("Enter employee name:");
        const position = prompt("Enter employee position:");
        if (name && position) {
            addEmployeeCard(name, position);
        }
    });

    //Sample
    addEmployeeCard("Doctor Doom", "Scientist");
    addEmployeeCard("Tony Stark", "Engineer");
});

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function updateEmployeeCardStyles() {
    // Select all employee cards
    const employeeCards = document.querySelectorAll(".employeeCard");

    Array.from(employeeCards).forEach(card => {
        card.style.border = "2px solid black"; 
        card.style.backgroundColor = "#f0f0f0"; 
        card.style.padding = "10px"; 
    });
}

// Apply styling to cards
updateEmployeeCardStyles();

// Task 4: Implementing Removal of Employee Cards 
employeeContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".employeeCard"); 
    if (card) {
        console.log(`Employee card clicked: ${card.id}`); 
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

    // Create a Save button
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

employeeContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-btn")) {
        const card = event.target.closest(".employeeCard");
        if (card) {
            enableEditing(card);
        }
    }
});
