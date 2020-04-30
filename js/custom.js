
$(document).ready(function () {

    // search Bar Toggler 
    var submitIcon = $('.searchbutton');

    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function (e) {
        e.preventDefault();
        $(this).children().toggleClass('class="fas fa-times');
        if (isOpen == false) {
            searchBox.addClass('open-searchbox');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('open-searchbox');
            inputBox.focusout();
            isOpen = false;

        }
    });
    function buttonUp() {
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        if (inputVal !== 0) {
            $('.searchbox-icon').css('display', 'none');
        } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display', 'block');
        }
    }
    // Product Page Image Carousel 
    $('.tumbnil a').click(function (e) {
        e.preventDefault();
        $('.imgBox img').attr("src", $(this).attr("href"));
    });

});
