const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      
        faq.classList.toggle("active");
    });
});
let mm=document.getElementById("menu")
let ba=document.getElementById("menubar")
let fot = document.getElementById("fot")
mm.addEventListener("click", function() {
if(ba.style.display==="none" || ba.style.display===""){
    mm.style.rotate="180deg"
    ba.style.display="flex"
    fot.style.width="90.2%"
    
    setTimeout(function(){
        ba.style.height="90%"
        ba.style.padding="10px"
        
    },300)
}
    else if(ba.style.display==="flex"){
        mm.style.rotate="0deg"
        ba.style.height="0%"
        ba.style.padding="0"
        fot.style.width="100%"
        setTimeout(function(){
            ba.style.display="none"
        },300)
    }
});
