let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        let post = new Post(json.userId, json.id, json.title, json.body);
        console.log(post);
        // div.innerText = json.body;
        // div.innerText = Json.stringfy(json, null, 0);
    })
});