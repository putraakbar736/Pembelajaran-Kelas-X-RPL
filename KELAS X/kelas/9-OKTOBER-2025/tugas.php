<?php
$menu = ["Beranda", "Kontak", "Kegiatan", "Jadwal"];
$berita = "Assalammualaikum.Wr.Wb

Puji syukur kita panjatkan kehadirat Allah SWT atas rahmat, hidayah, dan karunia-Nya serta segala kebaikan yg telah diberikan sehingga saya di tempatkan di SMP Negeri 6 Sidoarjo sebagai Kepala Sekolah. 

SMP Negeri 6 Sidoarjo adalah salah satu Sekolah Penggerak di Kabupaten Sidoarjo, melalui Program Sekolah Penggerak SMPN 6 Sidoarjo medeklarasikan ROOTS DAY yang dihadiri oleh Kepala Dinas Pendidikan Kabupaten Sidoarjo, Bapak Dr Tirto Adi M.Pd.

Selain pendeklarasian 30 Agen perubahan anti perundungan di lingkungan sekolah, SMPN 6 Sidoarjo telah meresmikan peluncuran Perpustakaan berbasis digital bertajuk Jelajah Aksara.

“Peluncuran perpustakaan digital bersama Gramedia adalah salah satu wujud program Sekolah Penggerak untuk Digitalisasi sekolah melalui dana BOS Kinerja, dan bisa dinikmati siswa dan guru dimana saja, dan menjadi salah satu nilai tambah untuk SMPN 6 Sidoarjo”,

Terima kasih kami ucapkan kepada semua pihak yang telah mendukung kesuksesan di SMPN 6 Sidoarjo, semoga berkah dan sukses di selanjutnya. 

Wassalamualaikum Wr. Wb

 Kepala Sekolah";
$img = "images/smp6.jpg";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Sekolah SMPN 6 Sidoarjo</title>
    <link rel="stylesheet" href="bootstrap-5.3.8-dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-3">
        <div class="bg-dark p-2 rounded">
            <ul class="nav justify-content-center">
                <li class="nav-item"><a class="nav-link text-white" href="./pages/beranda.html"><?= $menu[0] ?></a></li>
                <li class="nav-item"><a class="nav-link text-white" href="./pages/kontak.html"><?= $menu[1] ?></a></li>
                <li class="nav-item"><a class="nav-link text-white" href="./pages/kegiatan.html"><?= $menu[2] ?></a></li>
                <li class="nav-item"><a class="nav-link text-white" href="./pages/jadwal.html"><?= $menu[3] ?></a></li>
            </ul>
        </div>
        <div class="mt-4">
                <img src="<?= $img ?>" alt="" class="img-fluid rounded shadow">
            <h2>SMP Negeri 6 Sidoarjo</h2>
            <p><?= $berita ?></p>
        </div>
    </div>
</body>
</html>