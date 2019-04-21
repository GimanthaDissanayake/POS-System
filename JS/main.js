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

//validate transaction form
var transactionForm = document.querySelector("#transForm");

transactionForm.addEventListener('submit',function(event){
        if(transactionForm.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        transactionForm.classList.add('was-validated');
    })

//validate customer form
var customerForm = document.querySelector("#cusForm");

    customerForm.addEventListener('submit',function(event){
        if(customerForm.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
            customerForm.classList.add('was-validated');
        }
        else{
            event.preventDefault();
            var fName=document.getElementById('fName').value;
            var lName=document.getElementById('lName').value;
            var gender=document.getElementById('gender').value;
            var email=document.getElementById('email').value;
            var address=document.getElementById('address').value;
            var tp=document.getElementById('telephone').value;
            saveCustomer(fName,lName,gender,email,address,tp);
            document.getElementById('cusForm').reset();
        }
    })

function saveCustomer(fName,lName,gender,email,address,tp){
    var cusRef = firebase.database().ref().child("Customer");
    var newCusRef = cusRef.push();
    newCusRef.set({
        firstName: fName,
        lastName: lName,
        gender: gender,
        email: email,
        address: address,
        telephone: tp
    })            
}  


    