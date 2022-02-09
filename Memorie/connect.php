<?php 
try{
    $db = new PDO('mysql:host=localhost;dbname=memory', 'root');
} catch(Exeption $e){
    echo 'Erreur :'. $e->getMessage();
}