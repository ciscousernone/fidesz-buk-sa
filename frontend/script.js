{
function orangetoblue() {
  let id = null;
  const elem = document.getElementById("COLOR");   
  let color1 = 255;
  let color2 = 81;
  let color3 = 0;
  let stage = 0;
  clearInterval(id);
  id = setInterval(frame,0.5);
  function frame() {
    if (color3 == 256) {
//      clearInterval(id);
color1 = 255;
color2 = 81;
color3 = 0;
   } else {
//        color1=color1+0.5;
//        color2=color2+1;
//        color3=color3+0.5;

//        elem[0].style.color = "rgb(" + color1+ ","+ color2+ ","+ color3+")";
const test = elem.style.color = "rgb(" + color1+ ","+ color2+ ","+ color3+")";
test;
            if (stage ==0) {
            if(color2 == 255){
              if(color1 ==0){
                if (color3 == 255){
                  stage = 1
                }else{color3=color3+1;}
              }else {color1=color1-1;}
            } else {color2=color2+1;}
          } else {
            if (color2 == 162){
              
            } else{color2=color2-1;}
          }
            
          }  
    }
}
orangetoblue()
}
