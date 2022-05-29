// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;
  //console.log(dataYangAkanDilooping)
  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  dataFullName = [];
  dataYangAkanDilooping.map((data) => {
    dataFullName.push(data.namaDepan + " " + data.namaBelakang)
  })
 console.log("ini data all",dataFullName)
  let hasilLooping = dataFullName;

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  var dataJumlahPria = 0
  dataYangAkanDilooping.map((data) => {
   if(data.jenisKelamin === "M") {
     dataJumlahPria++;
   }
  })
  let jumlahPria = dataJumlahPria;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  var dataJumlahWanita = 0
  dataYangAkanDilooping.map((data) => {
    if(data.jenisKelamin === "F") {
      dataJumlahWanita++;
    }
  })
  let jumlahWanita = dataJumlahWanita;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  var message;
  if(jumlahPria > jumlahWanita) {
    message = "Jumlah Pria lebih banyak dari Wanita"
  } else if (jumlahPria < jumlahWanita) {
    message = "Jumlah Wanita lebih banyak dari Pria"
  } else {
    message = "Jumlah Pria dan Wanita berimbang"
  }
  let komentar = message;

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
