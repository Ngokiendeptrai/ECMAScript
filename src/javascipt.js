let API_URL = "  http://localhost:3000/";

let TableHeader = (headerTitles) => {
    let html = ``;

    headerTitles.forEach(element => {
        html += `<ul>${element}</ul>`;
    });
    return `${html}`;
}

let TablerowStudents = (data) => {
    return ` <li>
            <div class="fh5co-food-desc">
                <figure>
                    <img src="${data.image}" class="img-responsive" alt="Free HTML5 Templates by FREEHTML5.co">
                </figure>
                <div>
                    <h3>${data.name}</h3>
                    <p>${data.detail}</p>
                </div>
            </div>
        
        <div class="fh5co-food-pricing">
            ${data.price} VNĐ
        </div>
        </li>
    `;
}

let Table = (header, data) => {
    let html = ``;
    let headerRow = TableHeader(header);
    data.forEach(element => {
        html += TablerowStudents(element);
    });
    return `${headerRow}${html}`;
}

fetch(API_URL + 'products')
    .then(
        function (response) {
            response.json().then(function (data) {
                let header = [];
                let app = document.getElementById("drink");
                app.innerHTML = Table(header, data);
                console.log(data);
            });

        }
    )
    .catch(function (error) {
        console.log("error \n" + error);
    });
