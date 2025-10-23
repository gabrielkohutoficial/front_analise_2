/*
arrays sao agrupadores de valores numeriscos,testuarios,boleanos,objetos,etc
eles sao ordenados a partir do indeve'0'
ex.: const time = [' pedro' , 22, 'julio' , 'ana'] 
   // indices          0       1     2        3 

*/
const vestuario = ['camiseta' , 'tenis nike' , 'calça jeans' , 'relogio' , 'chapeu' , 'celular']
vestuario[33] = ' bone'

for(let valor in vestuario) {
    console.log(valor)
}
// console.log(vestuario[1])
// console.log(vestuario[0])
// console.log(vestuario[2])
// console.log(vestuario[33])

