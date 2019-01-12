var li = document.querySelectorAll("li");
li.forEach(function(element){
    console.log("hi");
    element.addEventListener("click",function(){
        this.classList.toggle("done");
    })
})
var span = document.querySelectorAll("span");
span.forEach(function(element){
    element.addEventListener("click",function(){
        this.style.display="none";
        this.parentNode.style.display="none";
    })
})