<?php

$mysqli = new mysqli("localhost","u477979231_ben","Admin2023","u477979231_bentejas");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}else{
    echo "Connected to DB";
    echo "<br>";
}

$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$message = $_POST["message"];
$date = $_POST["date"];

$sql = "INSERT INTO contacts (firstName, lastName, email, message, date) VALUES ('$firstName', '$lastName', '$email', '$message', '$date')";

$verify = mysqli_query($mysqli, $sql);

if($verify){
    echo "<br>Query has been completed successfully.";
    header("Location: submissionSuccess.html");
}else{
    echo "<br>Query has failed to complete.";
    header("Location: submissionFailure.html");
}

?>