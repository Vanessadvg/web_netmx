<?php

function obtenerConexion()
{
    $password = "1234567";
    $user = "root";
    $dbName = "netmx_idiomas";
    $database = new PDO('mysql:host=db;dbname=' . $dbName, $user, $password);
    $database->query("set names utf8;");
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    return $database;
}
function obtenerTraducciones()
{
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT id,texto_es FROM traducciones");
    return $sentencia->fetchAll();
}


?>