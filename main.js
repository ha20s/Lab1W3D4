

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
list.style.flex = 2

// list.style.flex = "flex-grow flex-shrink"

for (let i = 0; i < 3 ; i++){
    let creatli = document.createElement("li")
    creatli.innerText = "Hello i'm in" + i;
    list.appendChild(creatli)
}



// let table = document.createElement("table");
// table.setAttribute("id", "myTable");

// let cell = document.createElement("cell")

// table.appendChild(cell)








