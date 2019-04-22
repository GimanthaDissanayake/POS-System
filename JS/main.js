/*
//database reference
var itemsRef = firebase.database().ref().child("Items");

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
*/
window.alert("hello1");

     // Initialize Firebase
     var config = {
        apiKey: "AIzaSyCFgV_ID6n3BnIr4J1WhznAdB5iqjVm50Y",
        authDomain: "pos-system-778dd.firebaseapp.com",
        databaseURL: "https://pos-system-778dd.firebaseio.com",
        projectId: "pos-system-778dd",
        storageBucket: "pos-system-778dd.appspot.com",
        messagingSenderId: "826306046330"
    };
    firebase.initializeApp(config);


    