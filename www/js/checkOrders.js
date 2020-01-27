function addOrder() {
    var orderValue = document.getElementById("txtOrder").value;
    var order = new Order(orderValue);
    console.log(order);

    converter = new JsonConverter();
    converter.convertToJson(order);

    fillTable();
}

function fillTable() {

}