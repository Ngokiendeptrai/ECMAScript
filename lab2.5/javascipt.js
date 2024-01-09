let API_URL = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/";

let TableHeader = (headerTitles) => {
    let html = ``;

    headerTitles.forEach(element => {
        html += `<th>${element}</th>`
    });
    return `<thead><tr>${html}</tr></thead>`;
}

let TablerowStudents = (data) => {
    return `<tr>
        <td>${data.id}</td>
        <td><img src="${data.avatar}"></td>
        <td>${data.name}</td>
        <td>${data.createdAt}</td>
    </tr>`;
}

let Table = (header, data) => {
    let html = ``;
    let headerRow = TableHeader(header);
    data.forEach(element => {
        html += TablerowStudents(element);
    });
    return `<table>${headerRow}<tbody>${html}</tbody></table>`;
}

fetch(API_URL + 'students')
    .then(
        function (response) {
            console.log(response);
            response.json().then(function (data) {
                let header = [
                    "id",
                    "anh dai dien",
                    "ten",
                    "ngay tao"
                ];
                let app = document.getElementById("app");
                app.innerHTML = Table(header, data);
                console.log(data);
            });
        }
    )
    .catch(function (error) {
        console.log("error \n" + error);
    });
