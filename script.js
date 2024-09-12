var mo=document.querySelector("#mouse")
var mou=document.querySelector("#mouseblur")
document.addEventListener("mousemove",function(dets){
    mo.style.top=dets.y+"px"
    mo.style.left=dets.x+"px"
    
    mou.style.top=dets.y-140+"px"
    mou.style.left=dets.x-140+"px"
    
})

gsap.to("#nav",{
    backgroundColor:"black",
    height:"110px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"bottom -10%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        scrub:1,
    }
})