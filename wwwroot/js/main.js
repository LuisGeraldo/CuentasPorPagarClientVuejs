var url = 'http://prjcuentasxcobrar20190311015225.azurewebsites.net/api/Estado';


Vue.component('Navbar', {
    props:{
        
    },
    template: `
   <header>
        <nav class="nav-extended nav-app">
            <div class="nav-wrapper container">
                <a href="#" class="brand-logo">Softeam</a>
                        
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="../ConceptoPago/ConceptoPago.html">Documentos</a></li>
                    <li><a href="{{ cuentasporcobrarlink }}">Cuentas</a></li>
                    <li><a href="{{ monedaslink }}">Monedas</a></li>
                    <li><a onclick="Logout()">Cerrar Sesion</a></li>
                </ul>  
            </div>
            <div class="progress" style="background: rgba(5, 5, 5, 0.2)">
                <div class="indeterminate  light-blue darken-4"></div>
            </div>
            <div class="nav-content">
                <span class="nav-title"></span>
                    <a data-target="slide-out" class="sidenav-trigger blue darken-2 btn-floating btn-large halfway-fab waves-effect waves-light" style="display: block;">
                        <i class="material-icons">menu</i>
                    </a>
            </div>
        </nav>
        
        <ul id="slide-out" class="sidenav">
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src="../../../wwwroot/img/fondo.jpg">
                    </div>
        
                    <a href="#user"><img class="circle" src="../../../wwwroot/img/accounting.svg"></a>
                    <a href="#name"><span class="white-text name">Bienvenido</span></a>
                    <a href="#email"><span class="white-text email">{{localStorage.getItem("user")}}</span></a>
                </div>
            </li>
                            
            <li><a href="#!"><i class="material-icons">more</i>Softeam</a></li>
            <li><div class="divider"></div></li>
            <li><a class="subheader">Mantenimientos</a></li>
            <li><a class="waves-effect" href="../Home/Index.html">Home</a></li>
            <li><a class="waves-effect" href="../DocumentosPorPagar/DocumentosPorPagar.html">Documentos por pagar</a></li>
            <li><a class="waves-effect" href="../Proveedor/Proveedor.html">Proveedores</a></li>
            <li><a class="waves-effect" href="../Estado/index.html">Estados</a></li>
            <li><a class="waves-effect" href="../ConceptoPago/ConceptoPago.html">Concepto de pago</a></li>
            <li><a class="waves-effect" href="../TipoPersona/TipoPersona.html">Tipo de persona</a></li>
        </ul>
      
   </header>`
  });

function Logout(){
    if(localStorage.getItem("token") != null){
        localStorage.removeItem("token");
        window.location="../../Access/Login.html";
    }else{
        window.location="../../Access/Login.html";
    }
}