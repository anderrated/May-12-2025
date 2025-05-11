// References to DOM Elements
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const book = document.querySelector("#book");
// references to individual papers
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

// event listener
prev.addEventListener("click", prevPage);
next.addEventListener("click", nextPage);

// Functions
let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prev.style.transform = "translateX(-230px)";
    next.style.transform = "translateX(230px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prev.style.transform = "translateX(0px)";
    next.style.transform = "translateX(0px)";
}

function nextPage() {
    if (currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook();
                break;
            default:
                throw new Error("Unknown State");
        }
        currentLocation++;
    }
}

function prevPage() {
    if (currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation--;
    }

}