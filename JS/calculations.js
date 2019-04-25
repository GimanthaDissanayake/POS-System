var itemsRef = firebase.database().ref().child("Items");
var totPrice=0;
document.getElementById('transForm').addEventListener('submit', addItem);
document.getElementById('billCalculate').addEventListener('submit', generateBill);

itemsRef.on("child_added",snap=>{
    var itemCode = snap.child("itemCode").val();
    var itemName = snap.child("itemName").val();
    var itemPrice = snap.child("itemPrice").val();
    var quantity = snap.child("quantity").val();

    $('#itemCode').append("<option>"+itemCode+"</option>");
});

function loadData(){
    var x = document.getElementById('itemCode').value;

    if(x=='selectID'){
        document.getElementById('transForm').reset();
    }else{
        itemsRef.orderByChild("itemCode").equalTo(x).on("child_added", function(data) {
            var newItemName = data.val().itemName;
            var newItemPrice = data.val().itemPrice;
            var newQuantity = data.val().quantity;
            
            document.getElementById('itemName').value=newItemName;
            document.getElementById('itemPrice').value=newItemPrice;
            document.getElementById('quantity').value=newQuantity;
         });
    }   
}

function addItem(e){
    e.preventDefault();

    var nItemCode = document.getElementById('itemCode').value;
    var nItemName = document.getElementById('itemName').value;
    var nItemPrice = document.getElementById('itemPrice').value;
    var newQuantity = document.getElementById('newQuantity').value;

    if(nItemCode == 'selectID' || newQuantity == ""){
        document.getElementById("addItem").disabled = true;
    }else{
        document.getElementById("addItem").disabled = false;

        $('#table_bdy').append("<tr><td>"+nItemCode+"</td><td>"+nItemName+"</td><td>"+nItemPrice+"</td><td>"+newQuantity+"</td></tr>");

    var newItemPrice = parseInt(nItemPrice);
    var trueValue = newQuantity * newItemPrice;

    totPrice = totPrice + trueValue;
    document.getElementById('totalBill').value=totPrice;

    document.getElementById('transForm').reset();
    }
}

function generateBill(e){
    e.preventDefault();

    var newTotal = document.getElementById('totalBill').value;
    var cash = document.getElementById('cash').value;
    var balance = cash - newTotal;
    
    document.getElementById('balance').value= balance;
}



