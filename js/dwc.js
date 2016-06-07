$(document).ready(function () {
  var ITEM_DELAY = 20,
      $toggle = $('#style-toggle');

  $toggle.click(function (ev) {
    ev.preventDefault();
    ev.stopPropagation();

    $toggle.toggleClass('fa-list').toggleClass('fa-th-large');

   // $('.item').toggleClass('active');

    $('.item').each(function (index, value) {
      var $item = $(this);

      setTimeout(function () {
        $item.toggleClass('active');
      }, ITEM_DELAY * index);
    });
  });
});