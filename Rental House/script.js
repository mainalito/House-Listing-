const leftContainer = document.querySelector(".left-col");

fetch('http://localhost:9090/')
    .then(response => response.json())
    .then(data =>fetchHouses(data));

function fetchHouses(data){
    if (data.message === 'Successfully retrieved data!' && data.status === 200){
        //data is an array, loop over each
        data.data.forEach(room => {
            //create an element div
            const houseEl = document.createElement("div");
           
            //give the element a class
            houseEl.classList.add('house');
            
            //add the created div class="house" to the leftContainer
            leftContainer.append(houseEl)
            
            //check if roomNumbers is not empty
            if(room.roomNumber.length !==0){

 

                    houseEl.innerHTML = `
                   
                       <div class="house-img">
                       <img
                           src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                           alt=""
                           srcset=""
                       />
                       </div>
                       <div class="house-info">
                               <h3>${room.roomType}</h3>
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-solid fa-star-half-stroke"></i>
                               <i class="fa-regular fa-star"></i>
                           <div class="house-price">
                               <p>Room Number: ${room.roomNumber}</p>
                               <h4>Ksh ${room.price} <span> / month</span></h4>
                               <p> ${room.status === true ? 'Not Available <i class="fa-solid fa-door-closed"></i>' : 'Available <i class="fa-solid fa-door-open"></i>'}
                               
                           </div>
                       </div>
                 `;
                

             
            }

            
        });
    }
}