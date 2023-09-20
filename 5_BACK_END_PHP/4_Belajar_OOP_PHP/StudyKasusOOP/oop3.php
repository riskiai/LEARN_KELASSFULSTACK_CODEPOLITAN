
<!-- Pengertian Dan Fungsi Variable $this dalam OOP -->

<!-- 

    Untuk memahaminya, kita harus ingat bahwa class hanyalah sebuah “blue print” atau kerangka. Seluruh property dan method nantinya akan diakses dari dalam objek, bukan dari dalam class. Pada saat proses instansiasi class, seluruh property dan method akan “dicopy” ke dalam objek.

 -->

 <?php

    // Contoh Penggunaan $this
   /*  class laptop {
        // Set Property
        public $pemilik = 'Riski';
        // Set Method Dengan This
        public function nyalakan()
        {
            return "Nyalakan Laptop $this->pemilik";
        }

    }
    // buat objek dari class laptop
    $laptop_riski = new laptop();
    // inisiasi methodnya
    echo $laptop_riski->nyalakan();
    echo "\n";
 
    // ganti isi nilai propertynya
    $laptop_riski->pemilik= 'Debi';
    echo $laptop_riski->nyalakan(); */


    // Penggunaan Pseuodo-Variable $this dalam Object OOP
    class komputer {

        // buat property
        public $merk;
        public $pemilik;
        public $harga;
        public $kualitas;

        // set method nya 
        public function info_komputer()
        {
            return "ini komputer nya $this->pemilik dan harganya adalah $this->harga kemudian merk nya juga $this->merk dan kualitasnya jangan ditanya ya masih $this->kualitas";
        }
    }

    // buat object
    $komputer_new = new komputer;

    // set property untuk dikasih nilai;
    $komputer_new->merk = "ASUS";
    $komputer_new->pemilik = "Riski";
    $komputer_new->harga = "2 JT";
    $komputer_new->kualitas = "Bagus";

    // print methodnya
    echo $komputer_new->info_komputer();

 ?>