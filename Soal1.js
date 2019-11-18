const lelang =(a)=>{
    var hargaawal = 10000
    for(i=1;i<=a;i++){
        if(i%4===0){
            var hargaNaikB=(hargaawal*10)/100
            hargaawal+=Math.ceil(hargaNaikB)
        }        
        else {
            var hargaNaikA=(hargaawal*20)/100
            hargaawal+=Math.ceil(hargaNaikA)
        }
        if(hargaawal>30000000){
            return `Menit ke ${a} barang terjual`
        }        
    }
    return `Menit ke ${a} hasilnya adalaha Rp.  ${hargaawal.toLocaleString()}`
}
console.log(lelang(49))