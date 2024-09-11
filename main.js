

const hello = document.getElementById("hello")
hello.style.backgroundColor = "pink"
hello.style.color = "white"

let helloJs = document.getElementById("helloJS")
helloJs.style.fontWeight = "bold"

let helloJsClass = document.getElementsByClassName("helloJS")
console.log(helloJsClass)

let image = document.getElementById("image")
image.src = "https://images.pexels.com/photos/1203777/pexels-photo-1203777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
image.width = 100
image.height = 100

let list = document.querySelector(".list")
// let creatli = document.createElement("li")
list.style.fontStyle  = "oblique"
list.style.border = "2px solid "

list.style.display = "flex"
list.style.justifyContent = "space-around"

// list.style.flex = "flex-grow flex-shrink"

for (let i = 0; i < 3 ; i++){
    let creatli = document.createElement("li")
    creatli.innerText = "Hello i'm in" + i;

    // creatli.style.border  = "2px solid"
    list.appendChild(creatli)
}




let table = document.getElementById("table");


for(let i = 1 ; i<= 3 ; i++){
    let cell = document.createElement("TD")
    cell.innerText = "Hasna"
table.appendChild(cell)

for(x= 1 ; x<3 ; x++){
    let cell2 = document.createElement("TR")
    cell2.innerText = "Ahmed"
    cell.appendChild(cell2)
}
}











