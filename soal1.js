const perhitunganAkar = (x) => {
    if(x < 0){
        console.log("Tidak bisa input bilangan negatif");
    }else if(x % 2 != 0){
        console.log("Tidak bisa input bilangan ganjil");
    }else{
        console.log(Math.sqrt(x));
    }
}

perhitunganAkar(-1);
perhitunganAkar(3);
perhitunganAkar(8);