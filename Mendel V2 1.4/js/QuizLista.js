function editEspecie(){
    document.getElementById("Lista").style.display="block"
    document.getElementById("Options").style.display="block"
document.getElementById("editEspecie").style.display="none"
document.getElementById("editOptions").style.display="none"
document.getElementById("Options").innerHTML=""
document.getElementById("questao").innerHTML=""
document.getElementById("array").innerHTML=""
document.getElementById("Infors").innerHTML=""
document.getElementById("Table").style.display="none"
}

function Lista(Especie){
document.getElementById("Lista").style.display="none"
document.getElementById("editEspecie").style.display="block"
    
switch(Especie){
case "Coelhos1":
    img1=["CoelhoNegro.png","CC","Cc"]//Meio a Meio
    img2=["CoelhoBranco.png","cc"]
    AlelosName1=["c","C"]
    document.getElementById("questao").innerHTML = 'ºQuiz: Dois pares de coelhos tiveram uma ninhada, dito que "c" define a coloração de pelo branco, e C define a coloração negra, sendo branco uma caracteristica resseciva'

    WriteAlelos()
    WriteOptions()
break;
case "Carangueijos1":
    img1=["grande.png","GG","Gg"]//Meio a Meio
    img2=["pequeno.png","gg"]
    AlelosName1=["g","G"]
    WriteAlelos()
    WriteOptions()
    document.getElementById("questao").innerHTML='ºQuiz: Dois pares de caranguejo tiveram teram varios caranguejo bebês, dito que "g" define um caranguejo com uma garra pequena, e "G" define uma garra maior, sendo "g" uma caracteristica resseciva, indique a aparência de cada caranguejo'

document.getElementById("foto").innerHTML=`<img src="../img/Caranguejo/pequeno.png" draggable="true" ondragend="drop()" ondragstart="drag(this)" onclick="dragMobile(this)"><img  src="../img/Caranguejo/grande.png" draggable="true" ondragend="drop(this)" ondragstart="drag(this)" onclick="dragMobile(this)">`
break;
case "Ervilhas1":
    
    img1=["SemArmLis.png","llVv","llVV"]//Meio a Meio
    img2=["SemArmRug.png","LlVv","LLVv","LlVV","LLVV"]//Total Dominante
    img3=["SemVerLis.png","llvv"]//Total Ressecivo
    img4=["SemVerRug.png","Llvv","LLvv"]// Meio a meio
    AlelosName1=["l","L"]
    AlelosName2=["v","V"]
WriteAlelos()
    WriteOptions()
    document.getElementById("questao").innerHTML = 'ºQuiz: Dois pares de ervilhas fecundaram, dito que "l" define que ela é lisa, "L" define que é rugosa,"V" que ela é amarela e "v" que ela é verde, sendo v e l uma caracteristica resseciva'
document.getElementById("foto").innerHTML=`
<img src="../img/Sementes/SemArmLis.png" draggable="true" ondragend="drop()" ondragstart="drag(this)" onclick="dragMobile(this)">
<img src="../img/Sementes/SemArmRug.png" draggable="true" ondragend="drop()" ondragstart="drag(this)" onclick="dragMobile(this)">
<img src="../img/Sementes/SemVerLis.png" draggable="true" ondragend="drop()" ondragstart="drag(this)" onclick="dragMobile(this)">
<img src="../img/Sementes/SemVerRug.png" draggable="true" ondragend="drop()" ondragstart="drag(this)"onclick="dragMobile(this)">
`
break;
case "Arvores1":
    img1=["ArvBaiSem.png","bbFf","bbFF"]//Meio a Meio
    img2=["ArvAltSem.png","BbFf","BbFF","BBFf","BBFF"]//Total Dominante
    img3=["ArvBaiCom.png","bbff"]//Total Ressecivo
    img4=["ArvAltCom.png","Bbff","BBff"]// Meio a meio
    AlelosName1=["b","B"]
    AlelosName2=["f","F"]
WriteAlelos()
    WriteOptions()
    document.getElementById("questao").innerHTML='ºQuiz: Dois pares de árvores frutíferas fecundaram, dito que "b" define que ela é baixa, "B" define que é alta,"f" que ela possui frutos e "F" que ela é não possui frutos, sendo f e b uma caracteristica resseciva'

document.getElementById("foto").innerHTML=`
<img src="../img/Arvores/ArvBaiSem.png" draggable="true" ondragend="drop()" ondragstart="drag(this)" onclick="dragMobile(this)">
<img src="../img/Arvores/ArvAltCom.png" draggable="true" ondragend="drop()" ondragstart="drag(this)" onclick="dragMobile(this)">
<img src="../img/Arvores/ArvAltSem.png" draggable="true" ondragend="drop()" ondragstart="drag(this)" onclick="dragMobile(this)">
<img src="../img/Arvores/ArvBaiCom.png" draggable="true" ondragend="drop()" ondragstart="drag(this)"onclick="dragMobile(this)">
`
break;
case "Coelhos2":
    img1=["CoelhoCinzaCom.png","Aᶜamm","AᶜAᶜmm"]
    img2=["CoelhoBrancoSem.png","aaMm","aaMM"]
    img3=["CoelhoBrancoCom.png","aamm"]
    img4=["CoelhoCinzaSem.png","AᶜaMm","AᶜAᶜMm","AᶜaMM","AᶜAᶜMM"]
    img5=["CoelhoNegroCom.png","Aⁿamm","AⁿAᶜmm","AⁿAⁿmm"]
    img6=["CoelhoNegroSem.png","AⁿaMm","AⁿAᶜMm","AⁿAⁿMm","AⁿaMM","AⁿAᶜMM","AⁿAⁿMM"]
    AlelosCount1=3
    AlelosName1=["a","c","n"]
    AlelosName2=["m","M"]
WriteAlelos()
    WriteOptions()
    document.getElementById("questao").innerHTML='ºQuiz: Dois pares de coelhos tiveram uma ninhada, dito que "a" define a coloração de pelo albino, "Aᶜ" define a coloração chincila, "Aⁿ" define a coloração negra, "m" define um coelho com mancha e "M" sem mancha, sendo M > m, Aⁿ> Aᶜ > a, coloque os coelhos nos seus devidos lugares'

document.getElementById("foto").innerHTML=`
<img src="../img/Coelhos/CoelhoBrancoSem.png" draggable="true" ondragend="drop()" ondragstart="drag(this)" onclick="dragMobile(this)">
            <img src="../img/Coelhos/CoelhoCinzaSem.png" draggable="true" ondragend="drop()" ondragstart="drag(this)" onclick="dragMobile(this)">
            <img src="../img/Coelhos/CoelhoNegroSem.png" draggable="true" ondragend="drop()" ondragstart="drag(this)" onclick="dragMobile(this)">
            <img src="../img/Coelhos/CoelhoBrancoCom.png" draggable="true" ondragend="drop()" ondragstart="drag(this)"onclick="dragMobile(this)">  
    <img src="../img/Coelhos/CoelhoCinzaCom.png" draggable="true" ondragend="drop()" ondragstart="drag(this)"onclick="dragMobile(this)"> 
     <img src="../img/Coelhos/CoelhoNegroCom.png" draggable="true" ondragend="drop()" ondragstart="drag(this)"onclick="dragMobile(this)">
          `
break;



}

}

