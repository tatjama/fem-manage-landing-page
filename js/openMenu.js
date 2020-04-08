function openMenu(){    
        document.querySelector('.nav-hamburger').style.display = 'none';
        document.querySelector('.nav-close').style.display = 'initial';
        document.querySelector('.nav-menu').style.display = 'initial';
        document.querySelector('.section-one-svg').style.visibility = 'hidden';
        document.querySelector('.nav-bg-menu').style.display = 'initial';      
}
function closeMenu(){
        document.querySelector('.nav-hamburger').style.display = "initial";
        document.querySelector('.nav-close').style.display = 'none';
        document.querySelector('.nav-bg-menu').style.display = 'none';
        document.querySelector('.nav-menu').style.display = 'none';
        document.querySelector('.section-one-svg').style.visibility = 'visible';
      }