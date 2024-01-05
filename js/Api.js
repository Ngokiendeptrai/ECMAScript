

// Bài 1.3
fetch("https://www.boredapi.com/api/activity")
    .then(function (giatritravetuAPI){
        giatritravetuAPI.json().then(function (data){
            let app = document.getElementById('pc07176');
            let html = `<ul>
            <li>${data.accessibility}</li>
            <li>${data.activity}</li>
            <li>${data.key}</li>
            <li>${data.link}</li>
            <li>${data.participants}</li>
            <li>${data.price}</li>
            <li>${data.type}</li>
             </ul>`;
            app.innerHTML = html;
            console.log(data);
        })
    })
    .catch(function (canhbaoloi){

    })

// Bài 1.4


fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(function (giatritravetuAPI){
        giatritravetuAPI.json().then(function (data){
            let app = document.getElementById('lab1.4');
            let list = data.data;
            let html = '';
            let i = 1;
            list.forEach(data => {
                html += `
    <tr>
      <th scope="row">${i}</th>
      <td>${data['Nation']}</td>
      <td>${data['Year']}</td>
      <td>${data['Population']}</td>
    </tr>
      
      `; i++
            });
            app.innerHTML = html;
        });


    }
    );




fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function (giatritravetuAPI){
        giatritravetuAPI.json().then(function (data){
            let app = document.getElementById('lab1.4v2');
            let list = data;
            let html = '';
            let i =1;
            list.forEach(data => {
                html += `
    <tr>
      <th scope="row">${i}</th>
      <td><img src="${data['avatar']}" alt=""></td>
      <td>${data['name']}</td>
      <td>${data['createdAt']}</td>
      
    </tr>
       
      `;i++
            });
            app.innerHTML = html;
        });
    });









