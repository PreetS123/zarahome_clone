            function navbar(){


                return `
                <div id="container_nav">
    <div id="zara-home">
      <div class="flex">
      <i class="fa fa-bars"></i>
        <!-- zara home button -->
        <button class="button " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling">
          
          <span id="zara_home_text">Z A R A  &nbsp;&nbsp; H O M E</span>
         <!-- <img id="logo" src="https://www.zarahome.com/static/itxwebstandard/images/logo.svg" alt=""> -->
        </button>
      </div>

      <div id="search-box">
        <label for="">SEARCH</label>
        <a href="search.html"><input type="search"></a>
      </div>
      <div id="right">
        <div>
          <i class="fa fa-user"></i><a href="login.html" id="cart_div"> LOGIN</a>
         </div>
         
        <div id="cart_logo_img" class="material-icons"> <a href="cart.html" id="shopping_bag">shopping_bag</a>
       </div>
         
      </div>
    </div>
  
              <!-- sidebar -->

    <div  class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
      id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div class="offcanvas-header">
        <img id="logo"
          src="https://www.zarahome.com/static/itxwebstandard/images/logo.svg" alt="">
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

       
        <div> <a href="">NEW IP </a></div>
        <div> <a href="">BEDROOM </a></div>
        <div> <a href="">CLOTHING & FOOTWEAR </a></div>
        <div> <a href="">LIVING ROOM </a></div>
        <div> <a href="">DINING </a></div>
        <div> <a href="">BATHROOM </a></div>
        <div> <a href="">KIDS </a></div>
        <div> <a href="">STORIES </a></div>

    </div>

     </div>
                
                `;
            }
            export default navbar