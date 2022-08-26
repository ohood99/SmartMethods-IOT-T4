<?php

$data = $_GET["d"];
//echo $data;



$servername = "localhost";
$username = "root";
$password = "";
$dbname = "task4";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO control5 (id , directions5)
VALUES ( '' , '$data')";

if ($conn->query($sql) === TRUE) {
  echo "successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>