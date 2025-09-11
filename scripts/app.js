let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts/101')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Erro");
            }
        })
        .then(function (json) {
            let post = Post.FromRaw(json);
            div = post.renderFrom(div);
        })
});