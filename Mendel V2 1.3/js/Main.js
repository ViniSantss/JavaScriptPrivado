WriteAlelos()//TODO: Cria os alelos
/* 
TODO: Variaveis Usadas
* X             //?Tamanho da Tabela na Vertical 
* Y             //?Tamanho da Tabela na Horizontal
* gametaI       //?Definição da Gameta do Pai
* gametaII      //?Definição da Gameta da Mãe
*tempObj        //? Array tempoaria que será retonada para o metodo que foi puxado, X=Tamanho
*base           //? Usado no Write.js
*str1 e str2    //! Temp
*Div            //! Inutil mas evite usar
*Obj            //! Puxa a Array
* Alelos1 e 2   //?Ordem dos Alelos
* AlelosCount1 e 2   //?Quantidas dos Alelos
* AlelosName1 e 2   //?Quantidas dos Alelos
*/


function ButtonClick(){// * Botão clicado
    Array2 = CreateArray()//TODO:Cria a Array
    WriteArray(Array2, "array")//TODO:Imprime ela na Tela
}



function caps(str1, str2, str3){
var first=str1;
var firstId=0;
var second=str2;
var secondId=0;
for(var i=0;i<eval('Alelos'+str3+'.length');i++){
    if(eval('Alelos'+str3+'[i]==first')){
        firstId=i
    }
    if(eval('Alelos'+str3+'[i]==second')){
        secondId=i
    }
}
    if(firstId<secondId){
        first=str2;
        second=str1;  
    }
    return(first+second)
}