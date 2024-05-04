document.getElementById("nav").outerHTML=
`

  
    


  <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
  <img src="../css/icon.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
  Mendel Legacy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menus:</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Leis de Mendel</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gerador de Quadro de Punnett
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="2x2.html">2x2</a></li>
              <li><a class="dropdown-item" href="index.html">4x4</a></li>
              
            </ul>
          </li>


          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Quiz de Quadro de Punnett
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="Quiz2x2.html">2x2</a></li>
              <li><a class="dropdown-item" href="Quiz4x4.html">4x4</a></li>
              
            </ul>
          </li>

        </ul>
       
      </div>
    </div>
  </div>
</nav>

`
