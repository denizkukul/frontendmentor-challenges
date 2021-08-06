var items = document.querySelectorAll(".item");
var dropdownbtns = document.querySelectorAll(".dropdown");
var contents = document.querySelectorAll(".answer");
var lastItem, lastContent;

dropdownbtns.forEach(x => x.addEventListener("click", slide));

function slide(e) {
    let btn = e.currentTarget;
    let item = btn.parentElement;
    let content = item.querySelector(".answer");
    let h = content.scrollHeight;

    if (item.classList.contains("active")) {
        item.classList.remove("active");
        content.style.height = 0;
    }

    else {
        if (lastItem) {
            lastItem.classList.remove("active");
            lastContent.style.height = 0;
        }
        item.classList.add("active");
        content.style.display = "block";
        content.style.height = h + "px";
    }


    lastItem = item;
    lastContent = content;
}
