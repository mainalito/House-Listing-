let selected ='';
const container = document.querySelector(".container");
//create room object
const form = document.forms['form'];
form.onsubmit = function(e){
    e.preventDefault();
    //fetching values from form
    let roomType = document.form.roomType.value;
    let roomNumber = document.form.roomNumber.value;
    let price = document.form.price.value;
    //radio button
    let room = document.getElementsByName('room');
    for( i=0;i<room.length;i++){
        if(room[i].checked){
            selected = room[i].value;
        }
    }
    const data = {
        roomNumber: roomNumber,
        roomType: roomType,
        price: price,
        status: selected
    }
    
    fetch('http://localhost:9090/room',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if(data.status == 201 && data.message == "Successfully added data"){

            const result = document.getElementById("result");

            result.innerHTML= `<div class="alert alert-success" role="alert">
            Successfully added room number ${data.data.roomNumber}
       </div>`
          setTimeout(()=>{
            result.style.display="none";
        }, 5000)
            
          
        }
        else{
            result.innerHTML= ` <div class="alert alert-danger" role="alert">
            F added room number ${data.data.roomNumber}
       </div>`;
       setTimeout(5000)
        }
    })
    .catch(e=> console.log("error",e))
 
}

