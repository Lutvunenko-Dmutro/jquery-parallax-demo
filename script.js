$(document).ready(function() {
    
    function setSectionHeight() {
        var windowHeight = $(window).innerHeight();
        $('.parallax-section').css('height', windowHeight + 'px');
    }
    
    setSectionHeight();
    
    $(window).resize(function() {
        setSectionHeight();
    });
    
    $(window).scroll(function() {
        
        var scrollTop = $(window).scrollTop();
        $('.parallax-section').each(function() {
            
            var elemTop = $(this).offset().top;
            var relativeTop = elemTop - scrollTop;
            
            var speed = parseFloat($(this).data('speed'));
            
            var newYPosition = -(relativeTop * speed);
            
            var $bg = $(this).find('.parallax-bg');
            
            $bg.css('transform', 'translateY(' + newYPosition + 'px)');
        });
    });
});