<!-- Tipe Data Di PHP -->


<!-- 

    String
    Interger
    Float
    Boolean
    Array
    Object
    Null
    Resource

 -->

 <?php

    /* Integer */
    /*
    $a = 10;
    $b = 15;
    $c = $a + $b;
    
    echo $c; 
    */
?>

<?php
    
    /* Float */
    echo "FLOAT";
    echo "\n";
    /*  
        $d = 1.5;
        $e = 2.5;
        $r = $d * $e; 
    */

    /* 
    $k = 13;
    $i = 7;
    $d = $k / $i; 
    */
    // echo round($d,1);

    /* Increment */
    // $bil = 10;
    // $bil ++;
    // $bil ++;
    // echo $bil;

    /* Decrement */
   /*  $bil = 20;
    $bil --;
    $bil --;
    $bil --;
    echo $bil */

    /* Pemanggilan Fungsi Biasa */
    $bill = 10;
    $bill = $bill + 10;
    echo $bill;

?>

<?php

    /* Tipe Data String */
    $pesan  = "Selamat Datang";
    $nama2 = "Riski";
    $detail = $pesan . " ". $nama2;
    echo $detail;
    echo "\n";


?>

<?php

    // BOLEAN
    echo "Bollean";
    echo "\n";

    // $a = true;
    // var_dump ($a);

    // STATEMENT BOLEAN
    // != Tidak SAMA DENGAN
    // == SAMA 
    // > LEBIH DARI
    // < KURANG DARI
    // &&
    // || OR
    // ?? Bilak Tidak Ada Variable Tidak Error


    // $a = 10;
    // $b = 5;
    // $c = $a < $b;
    // $c = $a !== $b;

    // var_dump($c)

    $a = true;
    $b = false; 
    $c = $a or $b;
    var_dump($c)

?>

<?php

    // ARRAY
    echo "Array";
    echo "\n";
    // $a = "sapi, ayam, kambing";
    $a = array("sapi", "kambing", "kerbau");
    $a[] = "Kucing"; // Menambahkan Array Baru
    // $a[10] = "Kuncang";
    // echo $a[2];
    echo $a[0] = "Kimak";
    echo $a[11] ?? '';
    var_dump($a);

    $b = ["riski", "debi", "angga"];
    // print_r($b); // Melihat berapa arraynya
    // var_dump($b); // melihat seluruh indexnya
    echo "\n";

?>

<?php

    /* Array Asosiatif */
    echo "Array Asosiatif";
    echo "\n";

    // $a = ["Sapi", "Kuda", "Kudanil"];
    // $t [10] = "Sapi";
    // $t [20] = "Ayam";
    // $t [30] = "Kambing"; 

    // var_dump($t);

    // CONTOH LAIN
    /*  
    $datadiri["nama"] = "Riski Ahmad Ilham";
    $datadiri["goldarah"] = "Plat B";
    $datadiri["alamat"] = "Bandung"; 
    */
    
    $datadiri = [
        "nama" => "Riski Ahmad Ilham",
        "goldarah" => "B",
        "alamat" => "Bandung"
    ];
    
    // var_dump($datadiri);
    echo "Nama: " . $datadiri["nama"] . "\n";
    echo "Gol Darah: " . $datadiri["goldarah"]. "\n";
    echo "Alamat: " . $datadiri["alamat"];

?>

<?php

    /* Array Multidimensi */
    echo "\n";
    echo "Array Multidimensi";
    echo "\n";

    // $a = [250,true,["Riski", "Debi", "Angga"]];
    // var_dump($a);
    // echo $a[2][0]; // Memangil aray didalam array

    // CONTOH LAIN
     
    $herbivora = ["kambing", "sapi", "kerbau"];
    $karnivora = ["harimau", "singa", "serigala"];
    $omnivora = ["ayam", "monyet", "babi"]; 
   
    
    // PEMANGGILANNYA
    // echo $herbivora[0];
    // echo $karnivora[1];

    $binatang = [$herbivora, $karnivora, $omnivora];
    echo  "Jenis Omnivora : " . $binatang[2][1];

    /* 
    $binatang = ["herbivora"=> $herbivora, "karnivora" => $karnivora, "omnivora" => $omnivora];
    echo $binatang["herbivora"][2];   
    */

    /* CONTOH LAIN PENERAPAN DI BROWSER */
   /*  $mahasiswa = array(
        array("Marimar",20,"Wanita"),
        array("Siti",25,"Wanita"),
        array("Riski",21,"Riski"),
    );

    for($baris = 0; $baris < 3; $baris++) {
        echo "<p><b>Baris No: $baris</b></p>";
        echo "<ul>";
        for ($kolom = 0; $kolom < 3; $kolom++){
            echo "<li>".$mahasiswa[$baris][$kolom]."</li>";
        }
        echo "</ul>";
    }
    */

    /* Contoh Lain */
   /*  $hewan = array(
        array("Kambing",3,"Rumput"),
        array("Kucing",4,"Daging"),
        array("Babi",5,"Tomat")
    );

    for($baris = 0; $baris < 3; $baris++){
        echo "<p><b>Hewan No: $baris</b></p>";
        echo "<ul>";
        for ($kolom = 0; $kolom < 3; $kolom++) {
            echo "<li>".$hewan[$baris][$kolom]."</li>";
        }
        echo "</ul>";
    } */
?>

<?php

    /* Tipe Data Null */
    echo "\n";
    echo "Tipe Data Null";
    echo "\n";
    
    $pesan1 = null;
    $datadiri = [
        'nama' => 'Riski',
        'goldarah' => null,
        'alamat' => 'Indramayu'
    ];

    // echo $datadiri['nama'];
    // echo $datadiri['alamat'];
    // echo $pesan1; 
    echo $datadiri['status'] ?? null; // Ketika Datanya Tidak Ada gunakan ??
?>
