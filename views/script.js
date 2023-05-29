fetch("/api/productos-test").then(async(data) => {
    const response = await data.json();
    
        socket.emit('client:product', response)
});



    function redireccionar(pagina) {
        location.href = pagina;
    } 

    function volver() {
        console.log('volver');
        redireccionar('/register')
    }
