document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const submitButton = document.getElementById("submit");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate name
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate age
        const age = parseInt(ageInput.value);
        if (isNaN(age) || age < 10 || age > 100) {
            alert("Please enter a valid age between 10 and 100.");
            return;
        }

        // If all validations pass, you can submit the form data
        alert("Form data submitted successfully!");
    });
});