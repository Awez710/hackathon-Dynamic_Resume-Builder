const form = document.getElementById('resume') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handling Form Submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload


    // collecting values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skill = (document.getElementById('skill') as HTMLTextAreaElement).value

    // Generating the resume dynamically
    const resumeHTML = `
    <h2 style = "color: blueviolet"><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Phone:</b>${phone}</p>
    <p><b>Email:</b>${email}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skill}</p>    
    `;  
    // Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The Resume display Element is missing!')
    }
})