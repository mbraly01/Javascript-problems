async function getStock(stock) {
    response = await fetch(`https://cloud.iexapis.com/stable/stock/${stock}/quote?token=pk_208076e4d5044b66a8fca1b401621a7a`)
    data = await response.json()

    price.innerHTML += "<p class='inline'> " + data['iexRealtimePrice'] + " </p>"
}
button.addEventListener("click", (e)=> {
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    getStock(input1);
    getStock(input2);

});