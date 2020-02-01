
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
                $('.card-title-carbon').text('Gas');
                $('.card-title-cost').text('EV');
                break;
            case '2':
                $('.card-title-carbon').text('Gas!!!');
                $('.card-title-cost').text('EV!!!');
                break;
            default:
                console.log('other num');
                break;
        }
    }
}