
Alelos1 = ["b","B"]
AlelosCount1 = 2;//!Redundante
AlelosName1=["Baixo","Alto"]
Alelos2 = ["c","C"]
AlelosCount2 = 2;//!Redundante
AlelosName2=["Curto","Longo"]
WriteAlelos()
function CalcNames(){
    for(var k=1;k<=2;k++){
        for(var j=0;j<eval('AlelosCount'+k);j++){
            //console.log(AlelosName1,AlelosName2)
            //console.log(eval('Alelos'+k+'['+j+']'))//=
            //console.log(eval('document.getElementById("Alelo'+j+'G'+k+'").Value'))
            //console.log('Alelo'+j+'G'+k)
            if(document.getElementById("Alelo"+j+"G"+k).value !=""){
            var TempValue = document.getElementById("Alelo"+j+"G"+k).value[0]
            }else{
                TempValue = "U"
            }
            var TempValue2 = document.getElementById("Alelo"+j+"G"+k).value
            eval('AlelosName'+k+'['+j+']="'+TempValue2+'"')
            if(j==0){
                TempValue = TempValue.toLowerCase()
                eval('Alelos'+k+'['+j+']="'+TempValue+'"')
                }else if(eval('AlelosCount'+k)<=2){
                    eval('Alelos'+k+'['+j+']=Alelos'+k+'['+0+'].toUpperCase()')
                }else{

                    
                    eval('Alelos'+k+'['+j+']=Alelos'+k+'['+0+'].toUpperCase()+microLetter(TempValue.toUpperCase())')
                }
        }
    }
}

function WriteAlelos(){
    var base="";
    for(var j=1;j<=2;j++){
    base+='<div id="Alelos'+j+'">';
        switch(j){
            case 1: base+='Gameta1:<br>';break;
            case 2: base+='Gamate2:<br>';
        }
        base+='<div class="row">'
        
 for(var i=0;i<eval('AlelosCount'+j);i++){
if(mobileCheck()==true){//!Substituir
base+='<div class="col-12">'
}else{
base+='<div class="col-3">'
    
}
base+='<div class="input-group flex-nowrap">'
base+=    '<span class="input-group-text" id="addon-wrapping">'
switch(i){
    case 0: base+='Alelo Recessivo ::';break;
    case 1: base+='Alelo Dominante 1:';break;
    default: base+='Alelo Dominante '+(i)+':';break;
}
base+=    '</span><input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" id="Alelo'+i+'G'+j+'" onchange="CalcNames()" value="'+eval('AlelosName'+j+'[i]')+'"></div></div>'




}
base+='<div class="col-4"><button type="button" onclick="AddAlelo('+j+',(+1))" class="btn btn-outline-success">+Alelos</button>'

if(eval('AlelosCount'+j)>2){
    base+='<button type="button" onclick="AddAlelo('+j+',(-1))" class="btn btn-outline-danger">-Alelos</button>'
}
base+='</div></div></div><br>'
}
base+='<div class="d-grid gap-2 col-3 mx-auto"><button class="btn btn-primary" type="button" onclick="WriteOptions()">Pronto</button></div></div>   '
document.getElementById("Alelos").innerHTML=base

}
function AddAlelo(int1,int2){
    eval("AlelosCount"+int1+'+='+int2)
    if(int2>0){
    eval("AlelosName"+int1+'['+'AlelosCount'+(int1)+'-1]='+'""')
    }
    WriteAlelos()

}
function mobileCheck() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };