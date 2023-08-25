document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const navigation = document.querySelector(".lg:flex");

    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("hidden");
    });
});
