// Menampilkan pesan selamat datang
window.onload = function () {
  alert("Selamat datang di web sederhana saya!");
};

// Validasi form
document.getElementById("Form").addEventListener("submit", function (event) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let telpon = document.getElementById("telpon").value;

  if (name === "" || email === "" || telpon === "") {
    alert("Semua kolom harus diisi!");
    event.preventDefault();
  } else if (!/^[0-9]{10,13}$/.test(telpon)) {
    alert("Nomor telepon harus terdiri dari 10-13 angka.");
    event.preventDefault();
  } else {
    alert("Form berhasil dikirim!");
  }
});

// Animasi hover pada menu navigasi
document.querySelectorAll("nav ul li a").forEach(function (item) {
  item.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
  });

  item.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
});
