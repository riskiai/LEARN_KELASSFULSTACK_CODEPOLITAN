<!-- Konstanta Class Dalam Pemograman Objek -->
<!-- 

    Konstanta class atau class constant adalah konstanta yang berada di dalam class. Selain memiliki property dan method,
    PHP juga memperbolehkan kita menggunakan konstanta (constant) di dalam class.
 -->

<?php

    // CONTOH KE 1 
    /* class laptop {
        // buat konstanta
        const DOLAR = '12000';
    }
    // Panggil Konstanta class
    echo "Harga Dollar saat ini = RP ." .laptop::DOLAR; */


    // CONTOH KE 2
    /* class laptop {
         
        // buat konstanta
        const DOLAR = '12000';

    }
    // buat variable dengan nama class
    $nama = 'Laptop';
    // Panggil konstanta class
    echo "Harga Dollar saat ini = RP. " .$nama::DOLAR; */



    // Mengakases Konstanta Class Dari dalam class itu sendiri
   /*  class Laptop {
        // buat konstanta
        const DOLLAR = 12000;
        // buat method 
        public function beli_laptop($harga){
            return "Beli komputer baru, Rp. " . ($harga * self::DOLLAR);
        }
    }
        // buat object dari class laptop(instansiasi)
        $laptop_baru = new Laptop();
        echo $laptop_baru->beli_laptop(400); */

    
    
    // Mengakses Konstanta Class Milik Parent Class
    class komputerr {
        //buat konstanta class komputer
        const DOLLAR = 11000;
    }

    // turunkan class komputer ke class laptop
    class laptops extends komputerr {
        // buat konstanta class laptop 
        const DOLLAR = 12000;

        //buat method konstanta class komputer 
        public function beli_komputer($harga){
            return "Beli komputer Baru, RP. " .$harga*parent::DOLLAR; 
        }

        // buat method dengan konstanta class laptop
        public function beli_laptop($harga){
            return "Beli Laptop Baru, Rp. ".$harga*self::DOLLAR;
        }
    }

    // buat objek dari class laptop 
    $laptop_baru = new laptops();

    echo $laptop_baru->beli_laptop(400);
    echo "\n";
    echo $laptop_baru->beli_komputer(400);



?>