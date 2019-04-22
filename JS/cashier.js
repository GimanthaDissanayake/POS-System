window.alert("hello2");

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