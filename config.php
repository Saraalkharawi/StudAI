<?php
$servername = "localhost";
$username = "saralk23"; 
$password = "st3DWhoakQj9orQ"; 
$database = "saralk23"; 

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
