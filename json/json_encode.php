<?php 

// $mahasiswa = [
// 	[
// 	"nama" => "Febri Nahrul",
// 	"umur" => 27,
// 	"email" => "febri@gmail.com"
// 	],
// 	[
// 	"nama" => "Januri",
// 	"umur" => 27,
// 	"email" => "febri@gmail.com"
// 	],
// ];
// 
$dbh = new PDO('mysql:host=localhost;dbname=civuejs','root', 'Nokia3315');

$db = $dbh->prepare('SELECT * FROM users');
$db->execute();

$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;

?>