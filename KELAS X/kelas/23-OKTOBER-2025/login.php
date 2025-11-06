<h1>Login</h1>

<form action="">
    <input type="email" name="email" placeholder="email"><br>
    <input type="password" name="password" placeholder="password"><br>
    <input type="submit" value="login" name="login">
</form>

<?php
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email == "pakbar7153@gmail.com" && $password == "putra234") {
        $_SESSION['email'] = $email;
 header ("Location: index.php");
    } else {
    echo "Email atau Password Salah";
}
    }
?>