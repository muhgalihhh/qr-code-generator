/*
1. Disini menggunakan inquirer npm untuk membuat prompt atau pertanyaan kepada user
2. lalu menggunakan qr-image npm untuk mengubah inputan user berupa url menjadi qr code
3. Membuat sebuah file txt yang berisi url yang diinputkan oleh user menggunakan native fs node module
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Masukkan URL : ",
    },
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr.png"));
    fs.writeFile("url.txt", url, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("File berhasil dibuat");
    });
  })
  .catch((err) => {
    console.log(err);
  });
