$(".navegacion").on("click", ()=>{
   $(".nav__menu__desplegable").toggle("slow")})



   const URLGET = "https://jsonplaceholder.typicode.com/posts"
   //Agregamos un botón con jQuery
   $("#prueba").prepend('<button id="btn1">Conoce las opinion de nuestro clientes</button>');
   //Escuchamos el evento click del botón agregado
   $("#btn1").click(() => { 
       $.get(URLGET, function (respuesta, estado) {
             if(estado === "success"){
               let misDatos = respuesta;
               for (const dato of misDatos) {
                 $("#btn1").prepend(`<div>
                                      <h3>${dato.title}</h3>
                                      <p> ${dato.body}</p>
                                     </div>`);
               }  
             }
       });
   });
   
   
   