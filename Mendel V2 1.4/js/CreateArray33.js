function CreateArray(){// * Cria e posiciona todos os dados na array Bi dimensional
    document.getElementById("Options").style.display="none"
//document.getElementById("editAlelos").style.display="none"
document.getElementById("editOptions").style.display="block"
document.getElementById("Table").style.display="block"

    var X =3;//?Tamanho da Tabela na Vertical 
    var Y =3;//?Tamanho da Tabela na Horizontal
    var gametaI = new Array(X-1)//?Definição da Gameta do Pai
    var gametaII = new Array(X-1)//?Definição da Gameta da Mãe
    for (var i=0;i<gametaI.length;i++){
        gametaI[i] = new Array(2)//?Faz 2 SubArray para os 2 alelos
        gametaII[i] = new Array(2)//?Mesma coisa
    }
    
            gametaI[0][0]=document.getElementById("gene1").value//!Tempoario: Posiciona os alelos na posição dejesada
            gametaII[0][0]=document.getElementById("gene5").value

            gametaI[1][0]=document.getElementById("gene2").value
            gametaII[1][0]=document.getElementById("gene6").value
        
        
    
    
        var tempObj =  new Array(X)//? Array tempoaria que será retonada para o metodo que foi puxado, X=Tamanho
    for(var i=0;i<X;i++){
        tempObj[i] = new Array(Y)//? Criação de Sub array 
        for(j=0;j<Y;j++){
            tempObj[0][0]="/"//! Primeira coluna tera nada
            if(j==0 && i>=1){
                tempObj[i][j]=gametaI[i-1][0]//! Gametas dos Pais, Horizontal
                }
                if(i==0 && j>=1){
                tempObj[i][j]=gametaII[j-1][0]//! Gameta da mãe, Vertical
                }
                if(i>=1 && j>=1){
            tempObj[i][j]= caps(gametaI[i-1][0],gametaII[j-1][0],1)//! Populações
    
            }
        } 
    }
    return(tempObj)// * por fim retorna a array
    }
    