var header = document.querySelector('#Header');
var headerText = document.querySelectorAll('.HeaderTitle');

window.addEventListener("scroll", function(){
    if(!this.scrollY)
    {
        header.style.backgroundColor = "transparent";
        for(var i = 0; i<headerText.length; i++)
            headerText[i].style.color = "white";
    } 
    else 
    {
        header.style.backgroundColor = "white";
        for(var i = 0; i<headerText.length; i++)
            headerText[i].style.color = "#181823";
    }
  });