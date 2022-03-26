// ================square===================

function Square(a){
    a = parseFloat(a);
    if(a == "0"){
    document.getElementById("meter").innerHTML = "̿̿ ̿̿ ̿'̿'̵͇̿̿з=༼ ▀̿̿Ĺ̯̿̿▀̿ ̿ ༽=ε/̵͇̿̿/’̿’̿ ̿ ̿̿[} ̿ ̿ ̿ ̿" + "<BR>" + "YE KYA KAR RHA HAI BHAI TU?";
    }else{
    document.getElementById("meter").innerHTML = "THE SQUARE OF " + a + " = " + (a * a);
    }
}

// ===============cube=======================

function cube(a){
    a = parseFloat(a);
    if(a == "0"){
    document.getElementById("meter").innerHTML = "̿̿ ̿̿ ̿'̿'̵͇̿̿з=༼ ▀̿̿Ĺ̯̿̿▀̿ ̿ ༽=ε/̵͇̿̿/’̿’̿ ̿ ̿̿[} ̿ ̿ ̿ ̿" + "<BR>" + "YE KYA KAR RHA HAI BHAI TU?";
    }else{
    document.getElementById("meter").innerHTML = "THE CUBE OF " + a + " = " + (a * a *a);
    }
}
