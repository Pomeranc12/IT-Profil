// Načtení dat z JSON
fetch('profile.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Síťová odpověď nebyla v pořádku');
        }
        return response.json();
    })
    .then(data => {
        // Vložení jména a bio
        document.getElementById('name').textContent = data.name;
        document.getElementById('bio').textContent = data.bio;

        // Vykreslení skills
        const skillsList = document.getElementById('skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        // Vykreslení projektů
        const projectsContainer = document.getElementById('projects-container');
        data.projects.forEach(proj => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project-card');
            projectDiv.innerHTML = `
                <h3>${proj.title}</h3>
                <p>${proj.desc}</p>
            `;
            projectsContainer.appendChild(projectDiv);
        });
    })
    .catch(error => {
        console.error('Chyba při načítání:', error);
        document.getElementById('name').textContent = 'Ups, něco se nepovedlo.';
    });