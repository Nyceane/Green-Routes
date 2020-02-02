
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
                $('.card-title-carbon').text('181,800 grams CO2');
                $('.card-title-cost').text('$90');
                break;
            case '2':
                $('.card-title-carbon').text('4830 grams CO2');
                $('.card-title-cost').text('$18');
                break;
            default:
                console.log('other num');
                break;
        }
    }
}