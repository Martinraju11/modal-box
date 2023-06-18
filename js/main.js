var icon = document.getElementById("icon");
var para = document.getElementById("para");
var btn = document.getElementById("btn");
var modal = document.getElementById("modal");

modal.addEventListener("click", function () {
    para.style.display = "block";

    btn.addEventListener("click", function () {
        para.style.display = "none";

    })

    icon.addEventListener("click", function () {
        para.style.display = "none";

    })

})
