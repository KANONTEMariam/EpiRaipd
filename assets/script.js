/* _____________________________________

 Pre loader
 _____________________________________ */

$(function () {

  "use strict";

  $(window).on('load', function() {
    $('.loader').fadeOut('slow');
    $('.loader').remove('slow');
  });


  $( document ).ready(function() {
    
      $(".bg-top" ).parent().addClass('b-top');
    $(".bg-bottom" ).parent().addClass('b-bottom');
    $(".bg-center" ).parent().addClass('b-center');
    $(".bg-left" ).parent().addClass('b-left');
    $(".bg-right" ).parent().addClass('b-right');
    $(".bg_size_content").parent().addClass('b_size_content');
    $(".bg-img").parent().addClass('bg-size');
    $(".bg-img.blur-up" ).parent().addClass('blur-up lazyload');

    jQuery('.bg-img').each(function() {

        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();

        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'display' : 'block'
        });

        el.hide();
    });
    
     $('.slick_carousel-1').slick({});
    $('.slide-1').slick({
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive',
    arrows: true,
    dots: false,
    });
    
    
    $('.slide-2').slick({
      arrows : false,
      infinite: true,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.slide-3').slick({
      infinite: true,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.slide-4').slick({
      infinite: false,
      speed: 300,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.slide-5').slick({
      infinite: false,
      speed: 300,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.slide-6').slick({
      infinite: false,
      speed: 300,
      autoplay: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.slide-7').slick({
      infinite: true,
      autoplay: true,
      slidesToShow: 7,
      slidesToScroll: 7,
      responsive: [

        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }

      ]
    });

    $('.slide-8').slick({
      infinite: true,
      slidesToShow: 8,
      autoplay: true,
      slidesToScroll: 8,
      responsive: [

        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }

      ]
    });


    // product single thumbnail slider
    $('.thumb-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      fade: true,
      asNavFor: '.thumbs',
    });
    $('.thumbs').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.thumb-main',
      dots: false,
      arrows: false,
      autoplay: true,
      centerMode: true,
      focusOnSelect: true
    });
    // product single thumbnail slider end

    // Tab Js
    $(".default").css("display", "Block");

    $('.tab_product_slider').slick({
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    $(".tabs li a").click(function(event) {
      event.preventDefault();
      $('.tab_product_slider').slick('unslick');
      $('.slide-6').slick('unslick');
      $('.tab-pills .slide-1').slick('unslick');
      $(this).parent().parent().find("li").removeClass("current");
      $(this).parent().addClass("current");
      var currunt_href = $(this).attr("href");
      //alert(currunt_href);
      $('#' + currunt_href).show();
      $(this).parent().parent().parent().find(".tab-content").not('#' + currunt_href).css("display", "none");
      var slider_class = $(this).parent().parent().parent().find(".tab-content").children().attr("class").split(' ').pop();

      $(".tab_product_slider").slick({
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.slide-6').slick({
        infinite: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          {
            breakpoint: 1367,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 479,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      $('.tab-pills .slide-1').slick({});
    });

    $('ul.tabs li:first-child a').trigger( "click" );

    $(document).ready( function() {

      if ( $(window).width() < 1200) {
        $('.collapse').removeClass('show');
      }
    });

    $(window).resize(function() {
      if ($(window).width() < 1200) {
        $('.collapse').removeClass('show');
      }
    });

    $(function() {
      $('#main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8
      });
    });

    //toggle menu
    $(".toggle-nav").click(function(){
      //        $(".sm-blue").toggle();
      $('.sm-blue').css("right","0px");
    });
    $(".menu-mobile-back").click(function(){
      //        $(".sm-blue").toggle();
      $('.sm-blue').css("right","-300px");
    });

    //    tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });


    // Quntity js
    var quantitiy=0;
    $('.quantity-right-plus').click(function(e){

      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt($('#quantity').val());

      // If is not undefined

      $('#quantity').val(quantity + 1);


      // Increment

    });

    $('.quantity-left-minus').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt($('#quantity').val());

      // If is not undefined

      // Increment
      if(quantity>0){
        $('#quantity').val(quantity - 1);
      }
    });

    $('.show_more').click(function(e){

      if( $(this).hasClass('less') ){    
        $(this).text('Show More').removeClass('less');
        $(this).parent('.footer_accordian').removeClass('active');
      }else{
        $(this).text('Show Less').addClass('less'); 
        $(this).parent('.footer_accordian').addClass('active');
      }

      $(this).parents('.container').next('.mid_footer').slideToggle();

    });   
    if ($(window).width() < 768) {
      $('.show_more').parents('.container').addClass('p-3');
    }

    /* ================ customer templates Js ===================== */

    $('#RecoverPassword').on('click', function(evt) {
      console.log('click');
      evt.preventDefault();
      toggleRecoverPasswordForm();$('#RecoverPasswordForm').toggleClass();
    });

    $('#HideRecoverPasswordLink').on('click', function(evt) {
      console.log('click');
      evt.preventDefault();
      toggleRecoverPasswordForm();
    });

    function toggleRecoverPasswordForm() {
      $('#RecoverPasswordForm').toggleClass('hide');
      $('#CustomerLoginForm').toggleClass('hide');
    }

    var hash = window.location.hash;
    // Allow deep linking to recover password form
    if (hash === '#recover') {
      toggleRecoverPasswordForm();
    }

    var $formState = $('.reset-password-success');
    // check if reset password form was successfully submited.
    if (!$formState.length) {
      return;
    }
    // show success message
    $('#ResetSuccess').removeClass('hide');


  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $("#back-top").fadeIn()
    } else {
      $("#back-top").fadeOut()
    }
  });

});

/* ================ Address page ================ */

window.theme = theme || {};

theme.customerTemplates = (function() {

  /**
   *
   *  Show/hide customer address forms
   *
   */
  function customerAddressForm() {
    var $newAddressForm = $('#AddressNewForm');

    if (!$newAddressForm.length) {
      return;
    }

    // Initialize observers on address selectors, defined in shopify_common.js
    if (Shopify) {
      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector(
        'AddressCountryNew',
        'AddressProvinceNew',
        {
          hideElement: 'AddressProvinceContainerNew'
        }
      );
    }

    // Initialize each edit form's country/province selector
    $('.address-country-option').each(function() {
      var formId = $(this).data('form-id');
      var countrySelector = 'AddressCountry_' + formId;
      var provinceSelector = 'AddressProvince_' + formId;
      var containerSelector = 'AddressProvinceContainer_' + formId;

      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
        hideElement: containerSelector
      });
    });

    // Toggle new/edit address forms
    $('.address-new-toggle').on('click', function() {
      $newAddressForm.toggleClass('hide');
    });

    $('.address-edit-toggle').on('click', function() {
      var formId = $(this).data('form-id');
      $('#EditAddress_' + formId).toggleClass('hide');
    });

    $('.address-delete').on('click', function() {
      var $el = $(this);
      var formId = $el.data('form-id');
      var confirmMessage = $el.data('confirm-message');

      // eslint-disable-next-line no-alert
      if (
        confirm(
          confirmMessage || 'Are you sure you wish to delete this address?'
        )
      ) {
        Shopify.postLink('/account/addresses/' + formId, {
          parameters: { _method: 'delete' }
        });
      }
    });
  }


  return {
    init: function() {
      customerAddressForm();
    }
  };
})();

theme.init = function() {
  theme.customerTemplates.init();
};

$(theme.init);

$(window).load(function() {
  if ($(window).width() > 1200 && $(window).width() < 1650) {
    var max = -1;

    $('.pro_mix_equal').each(function() {
      var minHeight = $(this).innerHeight();
      max = minHeight > max ? minHeight : max;

    });  
    $('.pro_mix_equal').css('min-height',max);
  }
});

$(window).scroll(function() {

  
});

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
selected.addEventListener("click", () => {

    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {

    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

const pop = document.getElementById('popup-1');

function togglePopup() {
   pop.classList.toggle('active');
}


var survey_options = document.getElementById("survey_options");
var add_more_fields = document.getElementById("add_more_fields");
var remove_fields = document.getElementById("remove_fields");

add_more_fields.onclick = function() {

    var newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'survey_options[]');
    newField.setAttribute('class', 'survey_options');
    newField.setAttribute('size', '50');
    newField.setAttribute('placeholder', 'Another fields');
    alert(newField);
    survey_options.appendChild(newField);


}

remove_fields.onclick = function() {
    var input_tags = survey_options.getElementsByTagName('input');
    if (input_tags.length > 2) {
        survey_options.removeChild(input_tags[input_tags.length - 1]);
    }
}




function togglePopupservice() {
    document.getElementById("popupservice-1").classList.toggle("active");
}


