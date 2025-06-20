

$(document).ready(function () {
 $('.mobile-nav-toggle').on('click', function () {
      $('body').toggleClass('mobile-nav-active');
  
      if ($(this).hasClass('bi-list')) {
        $(this).removeClass('bi-list').addClass('bi-x');
      } else {
        $(this).removeClass('bi-x').addClass('bi-list');
      }
    });
    $('nav#navmenu ul>li> a').on('click', function () {
        if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle').addClass('bi-list').removeClass('bi-x');
        }
      });
  });

