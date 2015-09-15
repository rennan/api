$(function() {

    var $menuItem = $('.pure-menu-item');
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf('/')+1);

    $menuItem.each(function() {
        if ($(this).find('a').attr('href') == currentUrl || $(this).find('a').attr('href') == '')
            $(this).addClass('pure-menu-selected');
     });
});