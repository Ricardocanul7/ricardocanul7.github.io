/* Load projects */
fetch('./js/data/projects.json')
    .then(response => {
        response.json().then((data) => {
            console.log(data);
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
    })