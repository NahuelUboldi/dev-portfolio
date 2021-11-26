import React from 'react'

function Navbar() {
 return (
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
     <div class="container-fluid">
       <a class="navbar-brand fw-bolder" href="#">{"<NahuelUboldi />"}</a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav ms-auto">
           <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="#">About</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Skills</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Resume</a>
           </li>
          <li class="nav-item">
             <a class="nav-link" href="#">Contact</a>
           </li>

         </ul>
       </div>
     </div>
   </nav>
 )
}

export default Navbar
