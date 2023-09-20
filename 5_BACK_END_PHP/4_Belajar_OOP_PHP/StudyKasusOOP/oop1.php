
<!-- Cara Membuat Dan Mengakses Objek dalam PHP -->

<?php

// class
class laptop{
            
        // property
        public $pemilik;
        public $merek;
        public $ukuran_layar;
        
        // Method
        function hidupkan_laptop() {
            return "Hidupkan Laptop";
        }
        
        function matikan_laptop() {
            return "Matikan Laptop";
        }
    
}

// Object class
$laptop_riski = new laptop;

// set property
$laptop_riski->pemilik = 'Riski';
$laptop_riski->merek = 'ASUS';
$laptop_riski->ukuran_layar = '30CM';

// inisiasi property tersebut
echo $laptop_riski->pemilik;
echo "\n";
echo $laptop_riski->merek;
echo "\n";
echo $laptop_riski->ukuran_layar;
echo "\n";

// inisiasi method 
echo $laptop_riski->hidupkan_laptop();