function GetInchesInCentimeter(a){
    a = parseFloat(a);
    document.getElementById("centimeter").innerHTML = (a * 2.54) + " Centimeter";
}