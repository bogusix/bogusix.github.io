<?php
    session_start();

    if(isset($_SESSION['zalogowany']) && $_SESSION['zalogowany'] == true){
        
        header('Location: Registered.php');
        exit();
        
    }



?>

<!DOCTYPE HTML>
<html>
    <head>
        <script type = "text/javascript" src = "valueCheck.js" ></script>
        <meta charset="utf-8"/>
        <title>Rejestracja | Projekt_X</title>
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <link rel="stylesheet" type="text/css" href="../css/registration.css">
    </head>
    
    <body>
        <main>
            <h1>Projekt_X | Rejestracja</h1>
            <form action="confirm_reg.php" method="POST" onSubmit="return valuesCheck()">

                <input id="email" type="text" name="email" placeholder="e-mail"/><br/>
                <input id="login" type="text" name="user" placeholder="login"/><br/>
                <input id="password" type="password" name="password" placeholder="hasło"/><br/>
                <input id="secondPassword" type="password" name="confirmPassword" placeholder="powtórz hasło"/><br/>

                <input class="przycisk" type="submit" value="Prześlij"/><br/>
                <a href="login.php">Strona logowania</a>

            <?php

                # W TRAKCIE BUDOWY
                # require_once 'loginGoogle.php'

            ?>

                <p id="komunikat"></p>
            </form>
        </main>
            <?php

                 if(isset($_SESSION['error']))echo $_SESSION['error'];

            ?>
        <footer>DBCompany&copy;, 2019</footer>
    </body>
    
</html>