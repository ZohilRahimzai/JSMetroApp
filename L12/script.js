
let king = document.getElementById("h2");
let king2 = document.getElementById("h3");        

let count = 0;

function increment() {

    count = count + 1;
    king.innerText = count;

} 

function save() {

    let countstr = count + " - ";
    king2.textContent += countstr;
    king.textContent = 0;
    count = 0;






    console.log(count);  


}
save();







