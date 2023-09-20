<!-- Cara Mengakses Property Dan Method Parent Class -->
<!-- 

    Scope Resolution Operator ditulis dengan tanda dua kali titik dua (double colon), yakni “::”. Untuk mengakses property dan method dari class induk

 -->

 <?php

    /* class bola {

        // set method 
        public function lihat_spec(){
            return "Merk : Adidas, Jenis: Bola Futsal, Harga: 2 JUTA, Asal : Indramayu"; 
        }
    }

    // extends 
    class sepakbola extends bola {
        public function lihat_spec() {
            return "Merk : Puma, Jenis: Bola Basket, Harga: 3 JUTA, Asal: Indramayu";
        }

        public function lihat_Spec_lengkap() {
            return parent::lihat_spec();
        }
    }

    // set object 
    $bola_riski = new sepakbola();

    // panggil methoddari lihat spec di bola
    echo $bola_riski->lihat_spec();
    echo "\n";

    // panggil method dari lihat spec lengkap di class sepakbola
    echo $bola_riski->lihat_Spec_lengkap(); */

    

 ?>