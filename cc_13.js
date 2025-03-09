document.addEventListener("DOMContentLoaded", () => {
    // Get references to the employee container and add button
    const employeeContainer = document.getElementById("employeeContainer");
    const addEmployeeButton = document.getElementById("addEmployee");

    let employeeCounter = 0; // Unique ID counter for employee cards