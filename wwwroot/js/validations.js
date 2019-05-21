$(document).ready(function (){
    $('.only-letter').on('keypress', function (e) {
     tecla = (document.all) ? e.keyCode : e.which;
          if (tecla === 8) {
              return true;
          }
          
          patron = /[ A-Za-z\s]/;
          tecla_final = String.fromCharCode(tecla);
          return patron.test(tecla_final);
      });
      
    $('.only-number').on('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
      });  


      $(document).on('change', '#criterio', function (event) {
        var criterio = $("#criterio option:selected").val();
        
        console.log(criterio);

        var search = document.getElementById("buscardor"),
            info = document.getElementsByClassName(criterio),
            forEach = Array.prototype.forEach;

        search.addEventListener("keyup", function (e) {
            var choice = this.value;

            forEach.call(info, function (f) {
                if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
                    f.parentNode.style.display = "none";
                else
                    f.parentNode.style.display = "block";
            });
        }, false);
    }); 
});