<?php
    
    session_start();

    if(isset($_SESSION['zalogowany']) && $_SESSION['zalogowany'] == true){
        
        header('Location: Registered.php');
        //header('Location: ../GlownaStrona/index.html');
        exit();
    }
?>

<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Projekt_X | Logowanie</title>
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <link rel="stylesheet" type="text/css" href="../css/login.css">
        <script src="https://kit.fontawesome.com/dea4286c5d.js" crossorigin="anonymous"></script>
    </head>
    
    <body>
        <main>
            <h1>Projekt_X | Logowanie</h1>
            <form action="confirm_log.php" method="POST">
            <input id="input" type="text"  name="input" placeholder="login"/><br/>
            <input id="pass" type="password" name="pass"  placeholder="hasło"/><br/>
                     
            <input id="subm" type="submit" value="Zaloguj się"/><br/>
            <a href="registration.php">Nie masz konta? Zarejestruj się!</a>

                <?php
                    // TODO zaimplementować logowanie google
                    // require_once 'loginGoogle.php'

                ?>

                <?php

                    if(isset($_SESSION['loginError']))echo $_SESSION['loginError'];

                ?>

            </form>
        </main>
        <div class="additional"></div>
        <footer>
            <p>DBCompany&copy;, 2019</p>
        </footer>

    </body>
    
</html>