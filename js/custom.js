
$(document).ready(function() {
    setUpSlider();
});


function setUpSlider() {
    const slider = document.getElementById("myRange");
    const output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        switch (output.innerHTML) {
            case '1':
                $('.card-title-carbon').text('6060 grams CO2');
                $('.card-title-cost').text('$3');
                break;
            case '2':
                $('.card-title-carbon').text('161 grams CO2');
                $('.card-title-cost').text('$0.6');
                break;
            default:
                console.log('other num');
                break;
        }
    }
}