function ocultar(){
    document.getElementById('obj1').style.display = 'none';
    }

function mostrar(){
        document.getElementById('obj2').style.display = 'block';
        }


function clickLogin(){
    'use strict';
     window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
}

        
   