<?php
include 'config.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM User WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        echo "Inloggning lyckades! <a href='studai.html'>Gå vidare</a>";
    } else {
        echo "Fel lösenord!";
    }
} else {
    echo "Användaren finns inte!";
}

$conn->close();
?>
