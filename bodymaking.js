window.addEventListener('resize', function() {
    EZR();
});
      
function EZR() {
var newHeight = document.getElementById('BMText').offsetHeight;
document.getElementById('Murmillo').style.height = newHeight + 'px';
      }

function EZ() {
const button = document.querySelector('button');
    const element = document.body;
   if (element.style.fontFamily != 'Arial'){element.style.fontFamily = 'Arial';}
   else
    {element.style.fontFamily = 'Courier';}
}
