document.getElementById("nav").outerHTML=
`<nav class="navbar navbar-expand-lg  navbar-dark bg-dark"  style="visibility: hidden;">
<div class="container-fluid">
<a class="navbar-brand" href="#">
 <img src="../css/icon.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
   Mendel Legacy</a>
   </nav>
<nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
   <img src="../css/icon.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
     Mendel Legacy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="home.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="leiMendel.html">Leis de Mendel</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Gerador de Quadro de Punnett
      </a>
      <ul class="dropdown-menu dropdown-menu-dark">
        <li><a class="dropdown-item" href="2x2.html">2x2</a></li>
        <li><a class="dropdown-item" href="4x4.html">4x4</a></li>
        
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
</nav>


`
document.getElementById("footer").outerHTML=
`
<div class="container">
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
      <div class="col mb-3">
        <a class="navbar-brand" href="#">
            <img src="../css/icon.jpg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
            </a>
        <p class="text-muted">© 2024</p>
      </div>
  
      <div class="col mb-3">
  
      </div>
  
      <div class="col mb-3">
        <h5>Textos informativos</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="home.html" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="leiMendel.html" class="nav-link p-0 text-muted">Leis de Mendel</a></li>
        </ul>
      </div>
  
      <div class="col mb-3">
        <h5>Tabelas</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="2x2.html" class="nav-link p-0 text-muted">Quadro de Punnett 2x2</a></li>
          <li class="nav-item mb-2"><a href="4x4.html" class="nav-link p-0 text-muted">Quadro de Punnett 4x4</a></li>
        </ul>
      </div>
  
      <div class="col mb-3">
        <h5>Quiz</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="Quiz2x2.html" class="nav-link p-0 text-muted">Quadro de Punnett 2x2</a></li>
          <li class="nav-item mb-2"><a href="Quiz4x4.html" class="nav-link p-0 text-muted">Quadro de Punnett 4x4</a></li>
        </ul>
      </div>
    </footer>
  </div>

`



// `

  
    


//   <nav class="navbar navbar-dark bg-dark">
//   <div class="container-fluid">
//   <a class="navbar-brand" href="#">
//   <img src="../css/icon.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
//   Mendel Legacy</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
//       <div class="offcanvas-header">
//         <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menus:</h5>
//         <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <div class="offcanvas-body">
//         <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
//           <li class="nav-item">
//             <a class="nav-link active" aria-current="page" href="home.html">Home</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">Leis de Mendel</a>
//           </li>
//           <li class="nav-item dropdown">
//             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Gerador de Quadro de Punnett
//             </a>
//             <ul class="dropdown-menu dropdown-menu-dark">
//               <li><a class="dropdown-item" href="2x2.html">2x2</a></li>
//               <li><a class="dropdown-item" href="4x4.html">4x4</a></li>
              
//             </ul>
//           </li>


//           <li class="nav-item dropdown">
//             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Quiz de Quadro de Punnett
//             </a>
//             <ul class="dropdown-menu dropdown-menu-dark">
//               <li><a class="dropdown-item" href="Quiz2x2.html">2x2</a></li>
//               <li><a class="dropdown-item" href="Quiz4x4.html">4x4</a></li>
              
//             </ul>
//           </li>

//         </ul>
       
//       </div>
//     </div>
//   </div>
// </nav>

// `
