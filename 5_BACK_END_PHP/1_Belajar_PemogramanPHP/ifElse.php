<?php

    /* Mencoba Sebuah Kondisi Menggunakan IfElse */
    // $nama = "Farhan";
    // if($nama == "Riski") {
    //     echo "Selamat Datang Riski";
    // }

    /* IF BIASA */
    // $nilai = 21;
    /* if($nilai >= 50) {
        echo "Anda Lulus";
    }else {
        echo "Belum Lulus";
    } */

    /* IF ELSEIF */
    /* $nilai = 50;
    if($nilai >= 80 ) {
        echo "Anda Mendapatkan Nilai A";
    } else if($nilai >= 65) {
        echo "Anda Mendapatkan Nilai B";
    } else if ($nilai >=40) {
        echo "Anda Mendapatkan Nilai C";
    } else if ($nilai >= 30) {
        echo "Anda Mendapatkan Nilai D";
    } else {
        echo "Anda Belum Lulus";
    } */

    /* IF BERSARANG */
    /*   
    $nilai_psikotest = 90;
    $nilai_wawancara = 'A';
    $nilai_kesehatan = 'A';

    if ($nilai_psikotest >= 80) {
        echo "Selamat Anda Lulus Psikotest" . "\n";
        
        if ($nilai_wawancara == 'A') {
            echo "Selamat Anda Dinyatakan Lulus Test Wawancara" . "\n";
            
            if ($nilai_kesehatan == 'A') {
                echo "Selamat Anda Menjadi Karyawan Kami";
            } else {
                echo "Maaf Test Kesehatan Kamu Tidak Lolos";
            }
        } else {
            echo "Maaf Test Wawancara Kamu Tidak Lolos";
        }
    } else {
        echo "Maaf Test Psikotest Kamu Tidak Lolos";
    }
    */

    /* PENGECAKAN KONDISI GANDA */
    // $warna = 'Merah';
    // $ukuran = 'XL';
    // $biaya = 80000;
    // $biaya_tambahan = 15000;

    // Menggunakan Dan => && harus semua benar
    /* if($warna == 'Merah' && $ukuran == 'XL') {
        echo "Total Harganya :" . ($biaya+$biaya_tambahan);
    } else {
        echo "Total Harganya : " . $biaya;
    } */

    // Menggunakan OR => || Salah satu benar saja sudah jadi
    /* if($warna == 'Merah' || $ukuran == 'L') {
        echo "Total Harganya : " . ($biaya + $biaya_tambahan);
    }else {
        echo "Total Harganya : ". $biaya;
    } */

    /* TERNARY OPERATOR */
    $nilai = 80;
    echo ($nilai >= 70) ? "Anda Lulus" : "Anda Tidak LULUS";
    

?> 