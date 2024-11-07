var Form = document.getElementById('resume');
var resumeDisplayelement = document.getElementById('resume-display');
// Handling Form Submission
Form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // collecting values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skill = document.getElementById('skill').value;
    // Generating the resume dynamically
    var resumeHTML = "\n    <h2 style = \"color: blueviolet\"><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skill, "</p>    \n    ");
    // Display the generated resume
    if (resumeDisplayelement) {
        resumeDisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume display Element is missing!');
    }
});
