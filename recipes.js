const mainDiv = document.getElementById('recipes')
function fechData() {
    fetch('https://dummyjson.com/recipes')
        .then(function (res) { return res.json() })
        .then(function (data) { displayData(data.recipes) });
}
fechData();

function displayData(data) {
    data.forEach(function (r) {
        const receipe = document.createElement('div')
        receipe.classList.add('recepie')
        const image = document.createElement('img')
        image.src = r.image;
        image.alt = r.name;
        const title = document.createElement('h3')
        title.textContent = r.name;
        const p1 = document.createElement('p')
        p1.textContent = "INFREDIENTS -:" + " " + r.ingredients
        // const p = document.createElement('p')
        // p.textContent = "INSTRUCTION -:" + " " + r.instructions
        const btn = document.createElement('button')
        btn.textContent = "Add to card" + "🛒"
        btn.addEventListener('click', incr)
        const btn2 = document.createElement("button")
        btn2.textContent = "Instruction"
        btn2.style.margin = "10px"
        btn2.addEventListener('click', () => {
            const doc = document.getElementById("popup-container");
            doc.classList.add("popup-container");
            const receipeElm = document.getElementById("recipe-title");
            receipeElm.innerHTML = r.name;
            const instructionElm = document.getElementById("ins-content");
            instructionElm.innerHTML = r.instructions;
        });
        receipe.append(image, title, btn, btn2, p1)
        mainDiv.appendChild(receipe)
    })
};
const count = document.getElementById('count')
let c = 0
function incr() {
    count.textContent = ++c;
};

const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", ()=>{
    const doc = document.getElementById("popup-container");
    doc.classList.remove("popup-container");
})

// function openModel(){
//     const p = document.createElement('p')
//     p.textContent = instructions
//   }
