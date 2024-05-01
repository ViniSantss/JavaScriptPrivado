function WriteArray(Obj, Div){
    console.log(Obj)
var base="";
    for(let i in Obj){
        base+='<div class="row">'
        for(var j=0;j<Obj[i].length;j++){
base+='<div class="cell">'+Obj[i][j]+' <span class="tooltiptext">'+(1+i)+"x"+(1+j)+'</span></div>'
        }
        base+='</div>'
}
document.getElementById(Div).innerHTML=base
var NewObjj = [];
var ArraySize = 0;
const counts = {};
for(let k in Obj){
    for(let l in Obj[k]){
    if(k>0 && l>0){
        ArraySize+=1
    NewObjj[((parseInt(l)+parseInt(k)*(Obj.length-1))-(Obj.length-1)-1)] = Obj[k][l]
    }
}
}

NewObjj.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
for(let Resultados in counts){
    console.log(Resultados)
    document.getElementById("Infors").innerHTML+=Resultados+": "+counts[Resultados]+"/"+ArraySize+" "+(counts[Resultados]/ArraySize*100)+"%<br>"
}
}
