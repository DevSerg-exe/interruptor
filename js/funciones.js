var interruptor = document.querySelector(".interruptor");
//var encendido = false;

interruptor.addEventListener("click", () => {
    interruptor.classList.toggle("encendido")
    /*
    if(interruptor.classList.contains("encendido")){
        //apagar
        /*
        interruptor.className = "interruptor";
        encendido = false;
        */ 
        // la linea comentada abajo del todo hace lo mismo que esta linea y la siguiente, solo cambia la redacción
        /*
        interruptor.classList.remove("encendido")
    */
    /*
    }else{
        //encender   
        /*interruptor.className = "interruptor encendido";
        encendido = true;*/ // la linea comentada abajo del todo hace lo mismo que esta linea y la anterior, solo cambia la redacción
        /*interruptor.classList.add("encendido");
    }
    */
    //encendido = !encendido
    
   /*
   interruptor.className = `interruptor ${!encendido ? "encendido" : ""}`;
   encendido = !encendido;
   */
});