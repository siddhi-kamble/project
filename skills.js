const items = [
    { name: "Adaptability", type: "soft"},
    { name: "Flexibility", type: "soft"},
    { name: "Effective Communication", type: "soft"},
    { name: "Time Management", type: "soft"},
    { name: "Teamwork", type: "soft"},
    { name: "Creativity", type: "soft"},
    { name: "Presentation skills", type: "soft"},

    { name: "Python", type: "hard"},
    { name: "Javascript", type: "hard"},
    { name: "HTML", type: "hard"},
    { name: "CSS", type: "hard"},
    { name: "Excel", type: "hard"},

]

document.getElementById('hardSkills').addEventListener('click', displayHardSkills);

function displayHardSkills() {
    const hardSkills = items.filter(item => item.type === 'hard');
    displaySkills(hardSkills);

} 

document.getElementById('softSkills').addEventListener('click', displaySoftSkills);

function displaySoftSkills() {
    const softSkills = items.filter(item => item.type === 'soft');
    displaySkills(softSkills);

}

function displaySkills(skills) {
    const container = document.getElementById('skills-container');
    container.innerHTML = ''; // Clear previous content

    skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.textContent = skill.name;
        container.appendChild(skillDiv);
    });
}