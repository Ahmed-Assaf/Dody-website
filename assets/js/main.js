$(function(){
    $(".fa-search").click(function () {
        $(".form-control").toggleClass("show");
    });

    $('#owlCarouselIntro').owlCarousel({
        loop:true,
        autoplay: false,
        margin:10,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots:false,
        nav:false,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('#owlCarouselIntroContent').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        dots:false,
        nav:false,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('#owlCarouselShop').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='far fa-chevron-left'></i>","<i class='far fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    $('#owlCarouselOffers').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='far fa-chevron-left'></i>","<i class='far fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $('#owlCarouselBlog').owlCarousel({
        loop:true,
        autoplay: false,
        margin:10,
        nav:false,
        dots:true,
        checkVisible:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

    $('#owlCarouselGallery').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='far fa-chevron-left'></i>","<i class='far fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('#owlCarouselCollection').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:true,
        navText : ["<i class='far fa-chevron-left'></i>","<i class='far fa-chevron-right'></i>"],
        dots:true,
        checkVisible:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('#owlCarouselNecklaces').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:true,
        navText : ["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
        dots:true,
        dotsData: true,
        checkVisible:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    
    $('#owlCarouselRings').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:true,
        navText : ["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
        dots:true,
        dotsData: true,
        checkVisible:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('#owlCarouselEarrings').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:true,
        navText : ["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
        dots:true,
        dotsData: true,
        checkVisible:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('#owlCarouselBracelets').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:true,
        navText : ["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
        dots:true,
        dotsData: true,
        checkVisible:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('#owlCarouselPendants').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:true,
        navText : ["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
        dots:true,
        dotsData: true,
        checkVisible:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('#owlCarouseldetails').owlCarousel({
        loop:true,
        autoplay: false,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    

    $('#owlCarouselOurBlog').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ["<i class='far fa-chevron-left'></i>","<i class='far fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });

    $('#toggler').click(function(){
        if ($(window).width() <= 500){
            mobileSize();
        } else {
            openNav();
        }
    });


    $("#filter").click(function(){
        $("#filterBox").toggle(1000);
    });

});







/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("sideOverlay").style.display = "block";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sideOverlay").style.display = "none";
  }
  
  function mobileSize() {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("sideOverlay").style.display = "block";
  }

    

  