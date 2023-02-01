


const inputfield = document.getElementById("name")
const button = document.getElementById("sbmt")
console.log("hello")





button.addEventListener("click",ret);

function ret() {
    url = `http://localhost:3000/${inputfield.value}`;
console.log(url);
    fetch(url,{method:'GET'})
    
    .then((res) => res.json())
    .then((data) => { let output = ` <img src=${data.imageurl}>
    <div id="text">
    <b >${data.bname}</b>
    <hr>
    <h4 >${data.aname}</h4>`


    document.getElementById("output").innerHTML=output;
    
}).catch((err) => console.log(err))
}