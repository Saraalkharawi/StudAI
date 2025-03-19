<?php
include 'config.php';

$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO User (email, password) VALUES ('$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Registreringen lyckades! <a href='login.html'>Gå till inloggning</a>";
} else {
    echo "Fel: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
