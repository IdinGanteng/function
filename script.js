function volumekubus(sa,sb){
    var volumeA
    var volumeB 
    var total
    
    volumeA =sa*sa*sa
    volumeB =sb*sb*sb
    total=volumeA + volumeB 
    return total
}
console.log(volumekubus(30,4))


let tampilnama=(nama) => {return 'halo, ${nama}'}
console.log('riski maulidin')


var nama='riski'
var username='@donquixote'

function cetakURL(name) {
    var instagramURL='http://instagram.com/'
    return instagramURL+username
}
console.log(cetakURL('@anj'))