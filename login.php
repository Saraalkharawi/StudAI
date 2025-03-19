<?php
include 'config.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM User WHERE email='$email'";
$result = $conn->query($sql);

$user = $result->fetch_assoc();
$hashedPassword = $user['Password'] ?? '';

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $hashedPassword)) {
        echo "Inloggning lyckades! <a href='studai.html'>Gå vidare</a>";
    } else {
        echo "Fel lösenord!<br>";
        echo "Inmatat lösenord: " . htmlspecialchars($password) . "<br>";
        echo "Hashat lösenord i databasen: " . $user . "<br>";    
    }
} else {
    echo "Användaren finns inte!";
}

$conn->close();
?>
