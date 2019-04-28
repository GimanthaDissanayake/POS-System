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

//validate add to stock
var addItemForm = document.querySelector("#addToForm");

    addItemForm.addEventListener('submit',function(event){
        if(addItemForm.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
            addItemForm.classList.add('was-validated');
        }
        else{
            event.preventDefault();
            var iCode=document.getElementById('itemCode').value;
            var iName=document.getElementById('itemName').value;
            var iQty=document.getElementById('itemQty').value;
            addItem(iCode,iName,iQty);
            document.getElementById('addToForm').reset();
        }
    })

//add to stock
function addItem(iCode,iName,iQty){
    itemRef = itemsRef.orderByChild('itemCode').equalTo(iCode);
    itemRef.on('child_added',function(data){
        var qty=parseInt(data.val().quantity)+parseInt(iQty);
        firebase.database().ref("Items/" + data.key).update({ quantity: qty });
    })   
}    

//validate add new item form
var newItemForm = document.querySelector("#addNewForm");

    newItemForm.addEventListener('submit',function(event){
        if(newItemForm.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
            newItemForm.classList.add('was-validated');
        }
        else{
            event.preventDefault();
            var iCode=document.getElementById('newItemCode').value;
            var iName=document.getElementById('newItemName').value;
            var iQty=document.getElementById('newItemQty').value;
            var iPrice=document.getElementById('newItemPrice').value;
            saveNewItem(iCode,iName,iQty,iPrice);
            document.getElementById('addNewForm').reset();
        }
    })

//add new item    
function saveNewItem(iCode,iName,iQty,iPrice){
    var newItemRef = itemsRef.push();
    newItemRef.set({
        itemCode: iCode,
        itemName: iName,
        itemPrice: iPrice,
        quantity: iQty
    })            
} 

//remove items code
function loadDataToRemove(){
    var x = document.getElementById('remitemCode').value;

    if(x=='selectID'){
        document.getElementById('remItemForm').reset();
    }else{
        itemsRef.orderByChild("itemCode").equalTo(x).on("child_added", function(data) {
            var remItemName = data.val().itemName;
            
            document.getElementById('remitemName').value=remItemName;
         });
    }   
}

//validate remove item
var remForm = document.querySelector("#remItemForm");

    remForm.addEventListener('submit',function(event){
        if(remForm.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
            remForm.classList.add('was-validated');
        }
        else{
            event.preventDefault();
            var iCode=document.getElementById('remitemCode').value;
            var iName=document.getElementById('remitemName').value;
            removeItem(iCode,iName);
            document.getElementById('remItemForm').reset();
        }
    })

//remove item
function removeItem(iCode,iName){
    itemRef = itemsRef.orderByChild('itemCode').equalTo(iCode);
    itemRef.on('child_added',function(data){
        firebase.database().ref("Items/" + data.key).remove();
    })   
}  