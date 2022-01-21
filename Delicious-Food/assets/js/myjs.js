
$(document).ready(function(){

    /*   animation   */
    AOS.init();

    /*      Toggle Heart Icon        */
    $(".heart-icon").click(function(){
        $(this).children("i").toggleClass("heart-icon-active");
    });


    /*      Accordian Plus Minus Manipulation        */
    $(".collapse.show").each(function () {
        $(this)
          .prev(".card-header")
          .find(".fa")
          .addClass("fa-plus")
          .removeClass("fa-minus");
      });
    
      // Toggle plus minus icon on show hide of collapse element
      $(".collapse")
        .on("show.bs.collapse", function () {
          $(this)
            .prev(".card-header")
            .find(".fa")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        })
        .on("hide.bs.collapse", function () {
          $(this)
            .prev(".card-header")
            .find(".fa")
            .removeClass("fa-plus")
            .addClass("fa-minus");
        });
});




$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        471:{
            items:2
        },
        1000:{
            items:3
        }
    }
});