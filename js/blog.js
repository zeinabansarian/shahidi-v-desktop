let filters = document.querySelectorAll(".filters ul li")
filters[0].classList.add("activeFilter")
filters.forEach(element => {
    element.addEventListener("click" , function(params) {
        $(".filters ul li").removeClass("activeFilter")
        element.classList.add("activeFilter")
    })
});



$(document).ready(function () {
    $(".filterBtn").click(function (e) {
        var url4 = $(this).attr("data-blog");
        $(".gridBlog").load(url4);
    });
});