function GetMilesInMeter(a){
    a = parseFloat(a);
    document.getElementById("meter").innerHTML = (a * 1609.34) + " Meter"
}