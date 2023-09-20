<?php

    /* INSERT DATA */
    include('connection.php');
    
    /* Mendefinisikan Terlebih dahulu Methodnya */
    $nama = $_POST['nama'];
    $alamat = $_POST['alamat'];
    $umur = $_POST['umur'];
    $jenis_kelamin = $_POST['jenis_kelamin'];

    /* Menyimpan datanya ke database */
    $insert = mysqli_query($connect, "INSERT INTO karyawan SET nama='$nama', alamat='$alamat', umur='$umur', jenis_kelamin='$jenis_kelamin'");    

    // KONDISI
    if ($insert)
        header('Location: list.php');
    else 
        echo 'Input Data gagal';   
?>