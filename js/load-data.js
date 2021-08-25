/* Load projects */
fetch('./js/data/projects.json')
    .then(response => {
        response.json().then((data) => {
            let rawHTML = '';
            const container = document.getElementById('project-list');

            data.forEach(item => {
                rawHTML += `
                <div class="col-lg-6 project-item">
                    <a class="portfolio-item" href="${item.link}" target="_blank">
                    <span class="caption">
                        <span class="caption-content">
                        <h2>${item.title}</h2>
                        <p class="mb-0">${item.description}</p>
                        </span>
                    </span>
                    <img class="img-fluid project-image" src="${item.cover_img}" alt="">
                    </a>
                </div>`;
            });

            container.innerHTML = rawHTML;
        })
    });

/* Load Skils */
fetch('./js/data/skills.json')
    .then(response => {
        response.json().then((data) => {
            let rawHTML = '';
            const container = document.getElementById('skill-list');

            data.forEach(item => {
                rawHTML += `
                <div class="col-lg-3 col-md-6 mb-5">
                    <span class="service-icon rounded-circle mx-auto mb-3">
                        <i class="${item.fawesome_icon}"></i>
                    </span>
                    <h4>
                        <strong>${item.title}</strong>
                    </h4>
                    <p class="text-faded mb-0">
                        ${item.description}
                    </p>
                </div>
                `;
            });

            container.innerHTML = rawHTML;
        })
    })