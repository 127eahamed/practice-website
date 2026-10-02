function changeTitle() {
    document.title = document.getElementById("title-input").value;
}

function loadDataFrom(storage) {
    let value = window[storage]?.getItem("count") ?? 0;
    const button = document.getElementById(`${storage.toLowerCase()}-button`);
    button.innerText = value;
    button.addEventListener("click", () => {
        value++;
        window[storage]?.setItem("count", value);
        button.innerText = value;
    });
}
function loadData() {
    loadDataFrom("localStorage");
    loadDataFrom("sessionStorage");
}
