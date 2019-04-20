//database reference
var itemsRef = firebase.database().ref().child("contactForm");

document.getElementById('displayForm').addEventListener('submit', submitForm);

//get data from form
function submitForm(e){
    e.preventDefault();

    var itemId = document.getElementById('itemId').value;
    var itemCode = document.getElementById('itemCode').value;
    var itemName = document.getElementById('itemName').value;
    var itemPrice = document.getElementById('itemPrice').value;
    var quantity = document.getElementById('quantity').value;

    saveForm(itemId,itemCode,itemName,itemPrice,quantity);

//reset form after submit
    document.getElementById('displayForm').reset();
}
//write data to firebase
function saveForm(itemId,itemCode,itemName,itemPrice,quantity){
    var newItemsRef = itemsRef.push();
    newItemsRef.set({
        itemId: itemId,
        itemCode: itemCode,
        itemName: itemName,
        itemPrice: itemPrice,
        quantity: quantity
      
    })
}

//read data from firebase
itemsRef.on("child_added",snap=>{
    var itemId = snap.child("itemId").val();
    var itemCode = snap.child("itemCode").val();
    var itemName = snap.child("itemName").val();
    var itemPrice = snap.child("itemPrice").val();
    var quantity = snap.child("quantity").val();

    //loaod table
    $('#table_bdy').append("<tr><td>"+itemId+"</td><td>"+itemCode+"</td><td>"+itemName+"</td><td>"+itemPrice+"</td><td>"+quantity+"</td></tr>");

});