//database reference
var itemsRef = firebase.database().ref().child("Items");

//View Stock
itemsRef.on("child_added",snap=>{
    var itemCode = snap.child("itemCode").val();
    var itemName = snap.child("itemName").val();
    var itemPrice = snap.child("itemPrice").val();
    var quantity = snap.child("quantity").val();

    //load table
    $('#viewStockTbl').append("<tr><td>"+itemCode+"</td><td>"+itemName+"</td><td>"+itemPrice+"</td><td>"+quantity+"</td></tr>");
});