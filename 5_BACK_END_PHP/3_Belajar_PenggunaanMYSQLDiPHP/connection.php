<?php

    $connect = mysqli_connect('localhost', 'root', '', 'mysql_latihanke3');

    if (!$connect) 
        # code...
        exit('Gagal Koneksi database ..');
    

    /* if ($connect) {
        # code...
        echo "Berhasil";
    }else {
        echo "Gagal";
    } */


?>