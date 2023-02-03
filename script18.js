//dict, json
let kullanici = {
    "ad": "Alperen",
    "soyad":"Kizilirmak",
    "yas":23,
    "adres":"Antalya Side"
}

let sonuc;

sonuc = kullanici.ad;
sonuc = kullanici.soyad;
sonuc = kullanici["yas"];
sonuc = kullanici.adres.sehir;
sonuc = kullanici.adres.ilce;
sonuc = kullanici.hobiler[0];

let kullanicilar = [
 kullaniciA,
 kullaniciB,

];
sonuc

console.log(sonuc);