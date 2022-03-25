function GetFeetInCentimeter(a){
    a = parseFloat(a);
    var a = a.toFixed(2);
    document.getElementById("centimeter").innerHTML = (a * 30.48) + " centimeter";
}


