function calcTip(){
    var subtotal=document.getElementById('subtotal').value;
    var tip=document.getElementById('tip').value;
    var total=document.getElementById('total');

    var totalN=Number(subtotal)+((Number(subtotal)*Number(tip))/100);
    total.innerHTML=  '$'+totalN.toFixed(2).toString();
}