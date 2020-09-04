fetch( `http://workshops-server.herokuapp.com/workshops` )
 .then(function( response ) {
 return response.json();
 })
 .then(function( workshops ) {
 console.log( workshops );
 workshops.forEach(function(elt) {

    console.log(elt.imageUrl);
  document.querySelector("#allhere").innerHTML += `

    <div class="card">
                    <div id="imagediv"><img id="imageid" src="${elt.imageUrl}" alt="Not av"/></div>
                    <p id="heading">${elt.name} </p> <hr>
                    <p id="location"> ${elt.location.city} ${elt.location.state} <span id="modes">${elt.modes.online?'Online     ':''} ${elt.modes.inPerson?'     In-Person ':''} </span></p>
                    <div id="description"> ${elt.description} </div>
                    
               
                </>

    </div>`
});



 })
 .catch(function( error ) {
     console.log('error');
 console.log( error.message );
 });

 