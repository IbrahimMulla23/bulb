$(document).ready(function() {
    
    let isLightOn = false;

    
    function toggleLight() {
        if (isLightOn) {
           
            $('#lightBulb').attr('src', 'bulb1.png');
            isLightOn = false;
        } else {
            
            $('#lightBulb').attr('src', 'bulb2.png');
            isLightOn = true;
        }
    }

    
    $('.light-bulb-container').click(function() {
        toggleLight();
    });
});