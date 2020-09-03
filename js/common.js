/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && $(window).width() <= 767) {
  //alert('Touch Screen');
} else {

}

(function($) {
  'use strict'


  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div')
    scrollDiv.className = 'scrollbar-measure'
    document.body.appendChild(scrollDiv)

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv)
    return scrollbarWidth
  }

  /* ==================================================
  # Smooth Scroll
  ===================================================*/
  function scrollToAnchor() {
    $('.js-scroll-to').on('click', function(event) {
      let $anchor = $(this)
      let headerH = '0'
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px'
          },
          1000
        )
      event.preventDefault()
    })
  }

  function slider() {
    $('.slider-list').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      infinite: true
    })
  }

  function slider_about_list() {
    $('.slider-about-list').slick({
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 400000000000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
          }
        }
      ]
    })
  }

  function product_top() {
    $('.product-top').slick({
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }

  function product_featured() {
    $('.product-featured').slick({
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            dots: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            dots: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }

  function reviews() {
    $('.review-slider-list').slick({
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }

  function project() {
    $('.project-list').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true
    })
  }

  function lazyload() {
    var lazyloadImages = document.querySelectorAll('img.lazy')
    var lazyloadThrottleTimeout

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout)
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset
        lazyloadImages.forEach(function(img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src
            img.classList.remove('lazy')
          }
        })
        if (lazyloadImages.length == 0) {
          document.removeEventListener('scroll', lazyload)
          window.removeEventListener('resize', lazyload)
          window.removeEventListener('orientationChange', lazyload)
        }
      }, 20)
    }


    document.addEventListener('scroll', lazyload)
    window.addEventListener('resize', lazyload)
    window.addEventListener('orientationChange', lazyload)
  }

  function toggleAside() {
    $('.js-toggleAside').on('click', function() {
      $('body').toggleClass('active-toggleAside')
    })
  }

  function closetoggleAside() {
    $('.js-close-toggleAside').on('click', function() {
      $('body').removeClass('active-toggleAside')
    })
  }

  function scrollToAnchor() {
    $(window).scroll(function(){
      var sticky = $('body'),
        scroll = $(window).scrollTop();
      console.log(scroll);

      if (scroll >= 79) sticky.addClass('body-fixed');
      else sticky.removeClass('body-fixed');
    });

  }

  function init() {
    scrollToAnchor()
    getBarwidth()
    slider()
    slider_about_list()
    product_top()
    product_featured()
    reviews()
    project()
    lazyload()
    closetoggleAside()
    toggleAside()
    scrollToAnchor()
  }

  $(document).ready(function() {
    init()
  }) // end document ready function

  $(window).on('scroll', function() {
  })

  // if ($('.x-toTop').length) {
  //   let scrollTrigger = 100, // px
  //     backToTop = function () {
  //       let scrollTop = $(window).scrollTop();
  //       if (scrollTop > scrollTrigger) {
  //         $('.x-toTop').addClass('active');
  //       } else {
  //         $('.x-toTop').removeClass('active');
  //       }
  //     };
  //   backToTop();
  //   $(window).on('scroll', function () {
  //     backToTop();
  //   });
  // }

})(jQuery) // End jQuery
