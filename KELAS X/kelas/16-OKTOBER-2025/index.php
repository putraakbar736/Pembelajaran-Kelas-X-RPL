<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../16-OKTOBER-2025/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid bg-info">
    <a class="navbar-brand" href="./pages/profil.php">Profil</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="./pages/sejarah.php">Sejarah</a>
        <a class="nav-link" href="./pages/jurusan.php">Jurusan</a>
        <a class="nav-link" href="./pages/kegiatan.php">Kegiatan</a>
        <a class="nav-link disabled" href="./pages/kontak.php">Kontak</a>
      </div>
    </div>
  </div>
</nav>

        <section>
         <?php
            if (isset( $_GET["menu"])) {
            $isi = $_GET["menu"];

             if ($isi == "sejarah") {
                require_once "pages/sejarah.php";
             }
            
           
            if ($isi == "profil") {
                require_once "pages/profil.php";
            }
        

             if ($isi == "jurusan") {
               require_once "pages/jurusan.php";

             }
           
            if ($isi == "prestasi") {
            require_once "pages/prestasi.php";

              }
            
            if ($isi == "kegiatan") {
               require_once "pages/kegiatan.php";
               }

             if ($isi == "kontak") {
               require_once "pages/kontak.php";
               }   

            if (isset($_POST["tombol"])) {
                $nama = $_POST ["nama"];
                $pesan = $_POST ["pesan"];
                $email = $_POST ["email"];

                echo $nama;
                echo "<br>";
                echo $pesan;
                echo "<br>";
                echo $email;
            }
           
           }
        ?>
        </form>
        </section>

        <footer>
       <p>Web ini dibuat oleh Putra Akbar</p>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ad animi! Vero necessitatibus veniam quos commodi reiciendis aperiam eos! Sapiente temporibus veniam explicabo ipsam officia, omnis hic nemo vero perferendis quae eligendi pariatur? Corrupti aut nobis amet id eaque at, quis a odit accusantium cum ipsum consectetur quidem consequuntur repellat aliquam itaque sed voluptatem illo ipsam vitae in? Excepturi ex possimus, ipsa rem minima enim impedit voluptas eius vero, esse iure necessitatibus, explicabo consectetur recusandae? Veritatis fuga voluptatibus amet, distinctio libero quo veniam deleniti, earum vitae dolorem maxime officiis dolor eveniet. Sapiente vel exercitationem facere sequi. Quos natus earum fugiat?</p>
        </footer>
    </div>
</body>
</html>