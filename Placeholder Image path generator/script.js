const select = document.querySelector("select")
const inputAll = document.querySelectorAll("input")
let myImg = document.querySelector("img")
let textArea = document.querySelector("textarea")
const createpath = () => {
    let urlPath = `https://via.placeholder.com/${select.value}/${inputAll[1].value.slice(1)}/${inputAll[2].value.slice(1)}?text=${inputAll[0].value}`
    myImg.src = urlPath;
    textArea.value = urlPath;
};
inputAll.forEach((elm) => {
    elm.addEventListener("change", () => {
        console.log(inputAll[1].value)
        createpath();
    })
})
select.addEventListener("change", () => {

    createpath();
})

