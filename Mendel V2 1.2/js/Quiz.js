function WriteArray(Obj, Div){
    console.log(Obj)
var base="";
    for(let i in Obj){
        base+='<div class="row">'
        for(var j=0;j<Obj[i].length;j++){
if (i==0 || j==0){base+='<div class="cell">'+Obj[i][j]+' <span class="tooltiptext">'+(1+parseInt(i))+"x"+(1+parseInt(j))+'</span></div>'
}else{
    base+='<div class="cell" id="nullcell'+i+'j'+j+'"  ondragover="drophover(this)" onclick="dropMobile(this)"><span class="tooltiptext">'+(1+parseInt(i))+"x"+(1+parseInt(j))+'</span></div>'
}
        }
        base+='</div>'
}
document.getElementById(Div).innerHTML=base
}

EmptyCell = null;
ImgCell = null;

function drophover(Cell) {
  EmptyCell=Cell
  }
  function drag(Img) {
    if(ImgCell !=null ){
    ImgCell.style.border="none"
    }
    ImgCell=Img
    Img.style.border="solid 2px #555555"
    console.log(ImgCell)
  }
  function dropMobile(Cell){
    drophover(Cell)
    drop()
  }
  function drop() {
    console.log(ImgCell,EmptyCell)
    if(ImgCell !=null){
    ImgCell.style.border="none"
    if(EmptyCell !=null){
    EmptyCell.innerHTML='<img src='+ImgCell.src+'>'
    EmptyCell = null;
    ImgCell = null;
  }
  }
 
  }
  
img1 = ["CoelhoBranco.png","cc"]
img2 = ["CoelhoNegro.png","Cc","CC"]
img3 = ["?","?"]
img4 = ["?","?"]
  function test(){
    for(let i in Array2){
      for(let j in Array2[i]){
        if(i>0 && j>0){
let TempSrc = document.getElementById('nullcell'+i+'j'+j).firstChild.src
if(typeof TempSrc != "undefined"){
let TempImg = TempSrc.replace(/^.*[\\\/]/, '')
for(let k=1;k<=5;k++){
  console.log(TempImg, img1[0])
  if(k==5){
    document.getElementById('nullcell'+i+'j'+j).style.backgroundColor="#FF0055"// ! Falso
  }else if(eval('img'+k+'.includes(Array2[i][j]) && TempImg==img'+k+'[0]')){
    document.getElementById('nullcell'+i+'j'+j).style.backgroundColor="#00FF55"// * Verdadeiro
    break;
  }
}
}else{
  document.getElementById('nullcell'+i+'j'+j).style.backgroundColor="#FF0055"// ! Falso
}


          
        }
      }
    }
  }
