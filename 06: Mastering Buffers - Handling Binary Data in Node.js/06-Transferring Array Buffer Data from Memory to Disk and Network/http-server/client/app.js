fetch("http://localhost:3000")
.then(res => res.text())
.then(data => {
    document.querySelector("h1").innerText = data
    console.log(data);
})

// fetch("http://localhost:3000")
// .then(res => res.arrayBuffer())
// .then(data => {
//     data = new TextDecoder().decode(data)
//     document.querySelector("h1").innerText = data
//     console.log(data);
// })