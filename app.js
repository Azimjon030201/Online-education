var links = document.querySelectorAll("a");
var sections = document.querySelectorAll("section");
window.onscroll = function(){
    var current = "home";
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        if(window.pageYOffset>=sectionTop-120){
            current = section.getAttribute("id");
        }
    })
    links.forEach((item)=>{
        item.classList.remove("active");
        if(item.href.includes(current)){
            item.classList.add("active");
        }
        else{
            item.classList.remove
        }
    })
}