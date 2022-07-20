(() =>{
    const sobreMi = document.querySelector(".sobremi"),
    tabsContainer = document.querySelector(".acerca-tabs");

     tabsContainer.addEventListener("click", (event) =>{
      if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
        const target = event.target.getAttribute("data-target");
        tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
        event.target.classList.add("active", "outer-shadow");
        sobreMi.querySelector(".tab-content.active").classList.remove("active");
        sobreMi.querySelector(target).classList.add("active");
      }
    })

})();

                                  /* Popup */
(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"), porfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    cerrarBtn = popup.querySelector(".pp-cerrar"),
    detallesProyectoContainer = popup.querySelector(".pp-detalles"),
    detallesProyectoBtn = popup.querySelector(".pp-detalles-proyecto-btn");
    let itemIndex, slideIndex, screenshots;

    filterContainer.addEventListener("click", (event)=>{
      if(event.target.classList.contains("filter-item") &&
       !event.target.classList.contains("active")){
       filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
       
      }
    })

    
})();
