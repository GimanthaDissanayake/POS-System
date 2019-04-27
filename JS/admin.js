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

//load item data
itemsRef.on("child_added",snap=>{
    var itemCode = snap.child("itemCode").val();

    $('#itemCode').append("<option>"+itemCode+"</option>");
    $('#remitemCode').append("<option>"+itemCode+"</option>");
});

//Add to stock codes
function loadDataToAdd(){
    var x = document.getElementById('itemCode').value;

    if(x=='selectID'){
        document.getElementById('addToForm').reset();
    }else{
        itemsRef.orderByChild("itemCode").equalTo(x).on("child_added", function(data) {
            var newItemName = data.val().itemName;
            
            document.getElementById('itemName').value=newItemName;
         });
    }   
}

//remove items code
function loadDataToRemove(){
    var x = document.getElementById('remitemCode').value;

    if(x=='selectID'){
        document.getElementById('remItemForm').reset();
    }else{
        itemsRef.orderByChild("itemCode").equalTo(x).on("child_added", function(data) {
            var newItemName = data.val().itemName;
            
            document.getElementById('remitemName').value=newItemName;
         });
    }   
}