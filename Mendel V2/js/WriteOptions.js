function WriteOptions(){
document.getElementById("Alelos").style.display="none"
document.getElementById("editAlelos").style.display="block"

    CalcNames()
    
var base="";

base+='<div class="row">'
    for(var i=1;i<=8;i++){
        if(i==1){base+='<p>Pai:</p>'}
        if(i==5){base+='<p>Mãe:</p>'}
        base+='<div class="col-3" id="Option'+i+'"><select id="gene'+i+'" class="form-select" aria-label="Default select example">'
        if((i<=2)||(i>=5 && i<=6) ){
            for(var j=0;j<AlelosCount1;j++){
                base+='<option>'+Alelos1[j]+'</option>'
            }
}else{
    for(var j=0;j<AlelosCount2;j++){
        base+='<option>'+Alelos2[j]+'</option>'
    }

}        
base+='</select></div>'
}
base+='</div><br><div class="d-grid gap-2 col-5 mx-auto"><button class="btn btn-primary" type="button" onclick="ButtonClick()">Pronto</button></div>   '

document.getElementById("Options").innerHTML=base

}
function EditAlelos(){
    document.getElementById("Alelos").style.display="block"
    document.getElementById("Options").style.display="block"
document.getElementById("editAlelos").style.display="none"
document.getElementById("editOptions").style.display="none"
document.getElementById("Options").innerHTML=""
document.getElementById("array").innerHTML=""
document.getElementById("Infors").innerHTML=""
    
}
function EditOptions(){
    document.getElementById("Options").style.display="block"
document.getElementById("editAlelos").style.display="block"
document.getElementById("editOptions").style.display="none"
document.getElementById("array").innerHTML=""
document.getElementById("Infors").innerHTML=""
    
}
