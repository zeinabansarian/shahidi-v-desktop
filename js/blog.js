let filters = document.querySelectorAll(".filters ul li")
filters[0].classList.add("activeFilter")
filters.forEach(element => {
    element.addEventListener("click" , function(params) {
        $(".filters ul li").removeClass("activeFilter")
        element.classList.add("activeFilter")
    })
});