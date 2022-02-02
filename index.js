const hexColors = [
    0,1,2,3,4,5,6,7,8,9,0, 
    "A","B","C","D","E","F"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
    let hexId = "#";
    for (let i = 0; i<6; i++) {
        hexId+=hexColors[getRandomArray()];
    }
    color.textContent = hexId;
    document.body.style.backgroundColor = hexId;
    document.body.style.color = "white";
});
function getRandomArray() {
    return Math.floor(Math.random() * hexColors.length)
}