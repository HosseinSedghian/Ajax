let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.onreadystatechange = function() {
    let statusbar = document.getElementById("StatusBar");
    if (request.readyState < 4) {
        statusbar.innerHTML = "Data is loading.";
    }
    if (request.readyState === 4 && request.status === 200) {
        statusbar.innerHTML = "Data Loaded."
        let records = JSON.parse(request.responseText);
        let element = document.getElementById("table-body");
        for (let i = 0; i < records.length; i++) {
            let row = document.createElement("tr");

            let cellId = document.createElement("td");
            cellId.textContent = records[i].id;
            row.appendChild(cellId);

            let cellUserId = document.createElement("td");
            cellUserId.textContent = records[i].userId;
            row.appendChild(cellUserId);

            let cellTitle = document.createElement("td");
            cellTitle.textContent = records[i].title;
            row.appendChild(cellTitle);

            let cellBody = document.createElement("td");
            cellBody.textContent = records[i].body;
            row.appendChild(cellBody);

            element.appendChild(row);
        };
    }
}
request.send();