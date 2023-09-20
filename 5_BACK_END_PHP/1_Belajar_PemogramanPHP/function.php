<!-- Membuat Fungsi Sendiri -->
<?php

    /* Parameter Referensi */

    // Contoh Lain & didalam fungsi variable akan kepanggill
    function kalilipat(&$angka) {
        $angka = $angka * 2; 
    }
    $x = 5;
    echo $x . "\n"; 
    kalilipat($x);
    echo $x . "\n"; 
    kalilipat($x);
    echo $x . "\n"; 


    // Variable Di dalam function tidak di anggap
    /* 
    function gantiNama($nama) {
        $nama = "Referensi";
    }

    $nama = "Riski";
    gantiNama($nama);
    echo $nama; 
    */

    // Karena Ada Tamabahan Referensi & didalam function variablenya
    /* 
    function gantiNama(&$nama) {
        $nama = "Nama Baru";
    }

    $nama = "Riski";
    gantiNama($nama);
    echo $nama; 
    */


    /* Function */
    /* 
        function tulisPesan($nama)
        {
            echo "Hallo $nama, apa kabarmu hari ini ? semoga sehat dan bahagia \n";
        }
        tulisPesan("Riski");
        tulisPesan("Debi");
        tulisPesan("Mimi"); 
    */


    /* Function Skup Variable */
    /* 
    function cetakPesan($nama = null) {
        // global $nama; // Karema varibale tersbut sudah gloobal dan bisa dipanggil
        
        if(empty($nama))
            echo "Selamat Datang!";
        else 
            echo "Selamat Datang, $nama";
    }

    $nama = "Riski Ahmad Ilham"; 
    cetakPesan($nama); 
    */
    
   /* 
    $nama= "Riski";
    function tulisPesan()
    {
        global $nama;
        echo "Hallo $nama, apa kabarmu Hari ini? Semoga kabarmu sehat dan bahagia selalu \n";
    }
    tulisPesan($nama); 
    */


    /* Function Mengembalikan Hasil Proses Fungsi */
    /* 
        function cetakPesan($nama = null) {
            // global $nama; => Tidak Dianjurkan

            if (empty($nama)) {
                # code...
                echo "Selamat Datang!";  
            } else 
            echo "Selamat Datang, $nama";
        }

        $nama = "Riski Ahmad Ilham";
        cetakPesan($nama); 
    */

    // Contoh Lain
   /* 
    $alas = 10;
    $tinggi = 5;
    function luas_segitiga($alas, $tinggi)
    {
        $luas = $alas * $tinggi /2;
        return $luas;
    }

    echo "Luas Segitiga Adalah " . luas_segitiga($alas, $tinggi). "\n";
    */

?>