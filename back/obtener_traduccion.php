<?php
include_once "cors.php";
include_once "funciones.php";
$traducciones = obtenerTraducciones();
echo json_encode($traducciones);  
