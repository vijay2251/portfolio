/*lightbox*/
const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns=filterContainer.children,
    totalFilterBtn=filterBtns.length;
    portfolioItems=document.querySelectorAll(".portfolio-item"),
    //console.log(portfolioItems)
    totalPortfolioItem=portfolioItems.length;
    console.log(totalPortfolioItem)

    for(let i=0; i<totalFilterBtn; i++){
        filterBtns[i].addEventListener("click",function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            //console.log(filterValue)
            for(let k=0;k<totalPortfolioItem;k++)
            {
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
                else{
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                }

                if(filterValue === "Web-Development"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
        })
    }

/*lightbox*/


/*lightbox portfolio*/

const lightbox=document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxClose=lightbox.querySelector(".lightbox-close"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");

    let itemIndex=0;
    for(let i=0;i<totalPortfolioItem;i++){
        //console.log(portfolioItems[i]);
        portfolioItems[i].addEventListener("click",function(){
            //console.log(i);
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
    }

    function nextItem()
    {
        if(itemIndex === totalPortfolioItem-1)
        {
            itemIndex=0;
        }
        else{
            itemIndex++;
        }
        changeItem();
    }

    function prevItem()
    {
        if(itemIndex === 0)
        {
            itemIndex=totalPortfolioItem-1;
        }
        else{
            itemIndex--;
        }
        changeItem();
    }

    function  toggleLightbox(){
        lightbox.classList.toggle("open")
    }

    function changeItem(){
        imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        //console.log(imgSrc)
        lightboxImg.src=imgSrc;

        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= itemIndex + "of" + totalPortfolioItem;
    }

//close lightbox

lightbox.addEventListener("click",function(event){
    //console.log(event.target)

    if(event.target === lightboxClose || event.target === lightbox)
    {
        toggleLightbox();
    }
})

/*lightbox  portfolio*/

var cursor = document.querySelector(".cursor");
var cursor2 =  document.querySelector(".cursor2");

document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px; ";
})

//Aside Navbar

const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList=navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;

for(let i=0; i<totalNavList;i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click",function(){
        
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("back-section");
        }
               
        for(let j=0;j<totalNavList;j++){
            if (navList[j].querySelector("a").classList.contains("active")) 
            {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");

        showSection(this);

        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element){
    for(let i=0;i<totalSection;i++)
    {
        allSection[i].classList.remove("active");
    }
    //console.log(element)

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");

    
}

//btn toggler

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for(let i=0;i<totalSection;i++)
    {
        allSection[i].classList.toggle("open");
    }
}