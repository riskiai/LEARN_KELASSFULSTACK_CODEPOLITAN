<!-- Cara Membuat Argumen Dalam Method Class -->
<?php

    class laptop {
        // property untuk class laptop
        private $pemilik= "Anto";
        private $merk = "Acer";

        // method dalam argument
        public function hidupkan_laptop1($pemilik, $merk){
            return "tolong dong laptop nya $pemilik apa merknya, ohh merknya $merk";
        }

        // method biasa
        public function hidupkan_laptop2()
        {
            return "Tolong dong laptopnya $this->pemilik apa merknya, ohh merknya $this->merk";
        }
    }

    // set object baru
    $laptop_baru = new laptop();

    // print method arguments
    echo $laptop_baru->hidupkan_laptop1("riski", "ASUS");
    echo "\n";
    // print method biasa
    echo $laptop_baru->hidupkan_laptop2();

?>