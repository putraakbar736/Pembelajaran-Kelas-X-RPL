belajar php

<h1>Saya Belajar PHP</h1>

<?php

$nama = "King Putra Akbar";
$umur = 15;
$kelas = 10;
$hobi = "Sepakbola";
$cita_cita = "Sukses";
$enter = "<br>";

echo $nama;
echo $enter;

echo $umur;
echo $enter;

echo $kelas;
echo $enter;

echo $hobi;
echo $enter;

echo $cita_cita;
echo $enter;


// echo "<h1>Saya Belajar PHP</h1>";
// echo "Nama Saya Putra";
// echo "<br>";
// echo "15 Tahun";
// echo "<br>";
// echo "Hobi Saya SepakBola";
// echo "<br>";
// echo "Sukses";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Putra</title>
</head>
<body>
    <div>
        <h1>Identitas</h1>
        <table>
            <tbody>
                <tr>
                    <td>Nama</td>
                    <td><?= $nama?></td>
                </tr>
                <tr>
                    <td>Umur</td>
                    <td><?= $umur?></td>
                </tr>
                <tr>
                    <td>Kelas</td>
                    <td><?= $kelas?></td>
                </tr>
                <tr>
                    <td>Hobi</td>
                    <td><?= $hobi?></td>
                </tr>
                <tr>
                    <td>Cita-Cita</td>
                    <td><?= $cita_cita?></td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>