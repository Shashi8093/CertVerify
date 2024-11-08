// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling (you'll need to implement actual form submission logic)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! (Note: This is a placeholder. Implement actual submission logic.)');
    });
});

// Add active class to current navigation item
const currentLocation = location.href;
const menuItems = document.querySelectorAll('nav a');
menuItems.forEach(item => {
    if(item.href === currentLocation){
        item.classList.add('active');
    }

    // This file can remain empty for now, as we don't have any specific JavaScript functionality for the dashboard yet.
console.log('Dashboard loaded');

console.log('Certificate verification page loaded');

// University login form submission
const loginForm = document.querySelector('#login-form form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('Login attempted with:', username, password);
        // Here you would typically send these credentials to your server for verification
        alert('Login functionality will be implemented in the backend.');
    });
}
}); 

// Existing code...

// Handle grade upload form submission
const gradesForm = document.getElementById('grades-form');
if (gradesForm) {
    gradesForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const studentId = document.getElementById('student-id').value;
        const course = document.getElementById('course').value;
        const grade = document.getElementById('grade').value;
        console.log('Grade upload attempted:', { studentId, course, grade });
        alert('Grade upload functionality will be implemented in the backend.');
    });
}

// Handle certificate upload form submission
const certificateForm = document.getElementById('certificate-form');
if (certificateForm) {
    certificateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const studentName = document.getElementById('student-name').value;
        const certificateType = document.getElementById('certificate-type').value;
        const issueDate = document.getElementById('issue-date').value;
        const certificateFile = document.getElementById('certificate-file').files[0];
        console.log('Certificate upload attempted:', { studentName, certificateType, issueDate, certificateFile });
        alert('Certificate upload functionality will be implemented in the backend.');
    });
}