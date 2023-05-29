$( document ).ready(function() {
    Init()
});
function Init()
{
    $(document).on("click",".btnAddProduct",AgregarProductoCarrito)
    $(document).on("click",".btnDeleteProduct",deleteProduct)
    $(document).on("click",".btnDetailProduct",DetalleProducto)
    $(document).on("change","#cbxCategory",CargarCategoria)
}


function AgregarProductoCarrito(){
    const productId = $(this).data("id")
    const auxiliar = $(this).data("usr")
   
    
    $.ajax({
    method: "POST",
    url: `/cart/${auxiliar}/`+productId,
    data: {},
    success: function (result) {
        location. reload()
    },
    dataType: "json"
    });  
}


/* ******************** No mover ******************** */ 

function deleteProduct(){
    const Productoid = $(this).data("id")
   
  
    $.ajax({
    method: "DELETE",
    url: "/product/"+Productoid,
    success: function (result) {
  
       location. reload()
    },
    dataType: "json"
    });  
}



function DetalleProducto(){
    const Productoid = $(this).data("productoid")
     
    $.ajax({
    method: "GET",
    url: "/product/"+Productoid,
    data: {},
    success: function (result) {
        //console.log(result);
    },
    dataType: "json"
    });  
}

function CargarCategoria(){
    window.location.href = "Product/categoria/"+$(this).val()
}

function redireccionar(pagina) {
    location.href = pagina;
  }

  function CargaProductos(){
    window.location.href = "Product/"
}