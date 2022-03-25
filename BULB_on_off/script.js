function bulb_on(){
    document.getElementById("Bulb1").src = './bulb_images/bulb-on.png';
    document.getElementById("Demo").innerHTML = 'Bulb is ON';
    // document.getElementById("Para").innerHTML = 'A small Project by Vaibhav sharma.... :)';
}

function bulb_off(){
    document.getElementById("Bulb1").src = './bulb_images/bulb-off.png';
    document.getElementById("Demo").innerHTML = 'Bulb is Off';
    // document.getElementById("Para").innerHTML = 'A small Project by Vaibhav sharma.... :(';
}