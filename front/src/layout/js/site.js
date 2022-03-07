// <--- Animación menú --->

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}
var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

(function() {
      [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
        var menuItems = menu.querySelectorAll('.menu__link'),
          setCurrent = function(ev) {
            ev.preventDefault();

            var item = ev.target.parentNode; // li

            // return if already current
            if (classie.has(item, 'menu__item--current')) {
              return false;
            }
            // remove current
            classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
            // set current
            classie.add(item, 'menu__item--current');
          };

        [].slice.call(menuItems).forEach(function(el) {
          el.addEventListener('click', setCurrent);
        });
      });

   
})(window);
 //<!-- Agregar .active a menú -->
$(".nav-item").on("click", function(e){
  $("li.nav-item").removeClass("active");
  $(this).addClass("active");
});


  //<!-- Cambio de color menú -->
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
});

// <!-- Cerrar toggle on click -->
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


//<!-- Smooth Scroll -->
  document.addEventListener('DOMContentLoaded', () => {
  const scroller = new SweetScroll({
    easing: 'linear', 
  });
}, false);

//<!-- Panel Collapse -->
     $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

  function readUrl(input) {
  
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let imgData = e.target.result;
      let imgName = input.files[0].name;
      input.setAttribute("data-title", imgName);
      console.log(e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }

}
