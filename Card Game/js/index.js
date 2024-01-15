let card_section = document.getElementById("card-section");
let score = document.getElementById("count")
let count = 0;
const codingLanguages = [
    { name: "JavaScript", image: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png" },
    { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png" },
    { name: "Java", image: "https://4a7efb2d53317100f611-1d7064c4f7b6de25658a4199efb34975.ssl.cf1.rackcdn.com/java-emergency-upgrade-installers-showcase_image-2-p-2057.jpg" },
    { name: "C++", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" },
    { name: "HTML/CSS", image: "https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" },
    { name: "Ruby", image: "https://miro.medium.com/v2/resize:fit:450/1*MtuURq-9Fe3MZM5IZqQgyw.png" }
];
const gamecard = codingLanguages.concat(codingLanguages);
let shuffleChild = Array.from(gamecard).sort(() => 0.5 - Math.random());

for (let i = 0; i < gamecard.length; i++) {
    let child_div = document.createElement("div");
    let front_div = document.createElement("div");
    front_div.classList.add("front-div");
    let back_div = document.createElement("div");
    back_div.classList.add("back-div");
    child_div.classList.add("match");
    child_div.dataset.name = shuffleChild[i].name;
    back_div.style.backgroundImage = `url(${shuffleChild[i].image})`;
    card_section.appendChild(child_div);
    child_div.appendChild(front_div);
    child_div.appendChild(back_div);
}
function showCongratulations() {
    let congratulationsSection = document.getElementById("congratulations");
    congratulationsSection.style.display = "block";
}

let card_match = () => {
    let card_selected = document.querySelectorAll(".card-selected");
    Array.from(card_selected).forEach((elm) => {

        elm.classList.add("card-match");
    });

    score.innerHTML = parseInt(score.innerHTML) + 1;
    if (document.querySelectorAll(".card-match").length === gamecard.length) {
        showCongratulations();
    }
};

let remove = () => {
    let card_selected = document.querySelectorAll(".card-selected");
    Array.from(card_selected).forEach((elm) => {
        elm.classList.remove("card-selected");
    });
};

let child_divs = document.querySelectorAll(".match");

child_divs.forEach((elm) => {
    elm.addEventListener('click', (e) => {
        let curcard = e.target;
        // if (curcard.id === "card-section") {
        //     return false;
        // }

        count++;
        if (count === 1 && !curcard.parentNode.classList.contains("card-match")) {
            first_card = curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add("card-selected");
        } else if (count === 2 && !curcard.parentNode.classList.contains("card-match")) {
            second_card = curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add("card-selected");

            if (first_card === second_card) {
                setTimeout(() => {
                    card_match();
                    remove();
                    count = 0;
                }, 1000);
            } else {
                setTimeout(() => {
                    remove();
                    count = 0;
                }, 1000);
            }
        }
    });
});