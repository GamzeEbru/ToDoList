let inputDOM = document.querySelector("#task");
let submitDOM = document.querySelector("#liveToastBtn");
let listDom = document.querySelector("#list");

submitDOM.addEventListener("click", addElement);



function addElement() {
    if (inputDOM.value) {
        let li = document.createElement("li");
        li.innerHTML = inputDOM.value;
        listDom.append(li);
        $(".success").toast("show")
    }
    else {
        $(".error").toast("show");
    }
}


var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
