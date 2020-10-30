<?php

// $mahasiswa = [
//     [
//         "nama" => "Samodra",
//         "nim" => "1202170022",
//         "email" => "dimas@gamil.com"
//     ],
//     [
//         "nama" => "Samodra",
//         "nim" => "1202170022",
//         "email" => "dimas@gamil.com"
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=db_kemahasiswaan', 'root', '');

$db = $dbh->prepare('select * from mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;

?>