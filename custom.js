/......toggle...../ 
const burger = document.getElementsByClassName('hamburger');
const navMenu = document.getElementsByClassName('navmenu'); 

// burger.addEventListener('click', () => {
//     navMenu.classList.toggle('show');
// });

/......menu tabs...../ 
const menuTabs = document.getElementsByClassName("menu-tabs");

menuTabs[0].addEventListener("click", function(e)
{
     if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active") )
     {
         const target = e.target.getAttribute("data-target");
         menuTabs[0].querySelector(".active").classList.remove("active");
         e.target.classList.add("active");
         const menuSelection = document.querySelector(".menu-selection");

         console.log(menuSelection);
         
         menuSelection.querySelector(".menu-tab-content.active").classList.remove("active");
         menuSelection.querySelector(target).classList.add("active");
     }
}, false);