// var nama = 'we';

// console.log(nama);
// alert(nama);

var namaInput = prompt('masukan nama elo');
alert(`selamat datang ${namaInput}, apa mau mu disini?`)

for (let i = 0; i < 3; i++) { //diberikan 3 kali percobaan
let password = prompt("Masukan password anda:");

if (password == "wildangantengbanget1385") {
    alert("welkam di kelas informatika");
    window.location.href = "huhu.html";
    break; //keluar dari loop jika benar
} else {
    alert("password salah, coba lagi");
}
}
document.write(`<h1>Gagal masuk, silahkan muat ulang halaman!<h1/>`)