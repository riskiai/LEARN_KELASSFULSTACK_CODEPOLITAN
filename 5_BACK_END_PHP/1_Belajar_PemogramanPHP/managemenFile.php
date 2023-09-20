<?php

    /* Membuat File Dan Membaca File */
    /*  
     $pesan = "Ini Hasil Membuat File Melalui PHP";
     file_put_contents("file.txt", $pesan);
     $isi_file = file_get_contents("file.txt");
     echo $isi_file; 
    */

    /* Menyimpan Dalam Format Serialize Dan Json */
    /* 
        $karyawan	=[
                ['nama'=>'Riski','alamat'=>'Bandung'],
                ['nama'=>'Refi','alamat'=>'Bandung'],
                ['nama'=>'Rifki','alamat'=>'Jakarta']
			];
        echo serialize($karyawan); 
    */
    
    // Contoh Lain 
    $anggota = [
        ['nama' => 'riski', 'gol_darah' => 'B'],
        ['nama' => 'debi', 'gol_darah' => 'O'],
        ['nama' => 'nizar', 'gol_darah' => 'B'],
        ['nama' => 'imam', 'gol_darah' => 'AB'],
    ];
    
    // $data = serialize($anggota);
    $data = json_encode($anggota);
    file_put_contents('data.txt', $data);
    
    $output = file_get_contents('data.txt');
    // $hasil = unserialize($output);
    $hasil = json_decode($output, true);
    print_r($hasil);
    
?>