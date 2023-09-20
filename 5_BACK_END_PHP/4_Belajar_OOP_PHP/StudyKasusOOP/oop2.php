<?php

    /* Enkapsulasi Objek (Public, Protected Dan Private) */
    // Public 
   /*  class laptop {
        // property public
        public $pemilik;

        // method public
        public function hidupkan_laptop() 
        {
            return "Hidupkan Laptop";
        }
    }

    // object dari class laptop
    $laptop_riski = new laptop();

    // set property
    $laptop_riski->pemilik = "Riski";
    // menampilkan set property
    echo $laptop_riski->pemilik;
    echo "\n";
    // menampilkan set method
    echo $laptop_riski->hidupkan_laptop();
    */


    // Protected 
    /* class laptop {
        // buat property
        protected $pemilik="riski";

        public function paksa_pemilik(){
            return $this->pemilik;
        }

        // method protected
        protected function hidupkan_laptop(){
            return "Hidup Laptop";
        }

        public function paksa_hidup(){
            return $this->hidupkan_laptop();
        }
    }

    // buat object dari class laptop (instansiasi)
    $laptop_riski = new laptop();

    // jalankan method paksa_pemilik()
    echo $laptop_riski->paksa_pemilik();
    echo "\n";

    // jalankan method paksa_hidup()
    echo $laptop_riski->paksa_hidup();
    */


    // Extends Protected
    /*  class komputer{
        // Property
        protected $jenis_processor = "Intel Gen 7";
    }
        // akses extends
        class laptop extends komputer{
            public function tampilkan_procesor(){
                return $this->jenis_processor;
            }
        }

    // objek baru
    $laptop_new = new laptop();
    // menampilkan methodnya
    echo $laptop_new->tampilkan_procesor(); */

    // private
    class komputer {

        // property dengan hak akses private
        private $jenis_processor = "Interl Core i7-4";

        public function tampilkan_procesor() {
            return $this->jenis_processor;
        }
    }

    $komputer_baru = new komputer();

    // menjalankan method dari calss komputer
    echo $komputer_baru->tampilkan_procesor();
   

?>