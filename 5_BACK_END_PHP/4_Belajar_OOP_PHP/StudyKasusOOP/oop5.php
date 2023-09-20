<!-- Pengertian Constructor Dan Destructor -->
<!-- 
    Constructor adalah method khusus yang akan dijalankan secara otomatis pada saat sebuah objek dibuat (instansiasi), yakni ketika perintah “new” dijalankan.
 -->

 <!-- 
    Destructor adalah method khusus yang dijalankan secara otomatis pada saat sebuah objek dihapus. Di dalam PHP, seluruh objek sebanarnya sudah otomatis dihapus ketika halaman PHP selesai diproses. Tetapi kita juga dapat menghapus objek secara manual
  -->

  <!-- 

    Unset Untuk Menghancur Object

   -->

<?php
    /* 
    class laptop {

        // set property private 
        private $pemilik = 'Riski';
        private $merk = "ASUS";

        // set Method construc
        public function __construct()
        {
            echo "Ini Adalah Method Constructor";
        }

        // set method biasa untuk memanggil property
        public function hidupkan_laptop()
        {
            return "ini laptopnya punya $this->pemilik dan ini merknya $this->merk";
        }

        // set method destruct
        public function __destruct()
        {
            echo "Ini adalah method Destructor";
        }

    }

    // panggil object nya 
    $laptop_baru = new laptop();

    // set methodnya
    echo "\n";
    echo $laptop_baru->hidupkan_laptop();
    echo "\n";
    */

    
    // Contoh Lain
   /*  class komputer {
        private $pemilik;
        private $merk;
        private $harga; 

        // constructor sebagai pembuat nilai awal
        public function __construct($pemilik, $merk, $harga)
        {
            $this->pemilik = $pemilik;
            $this->merk = $merk;
            $this->harga = $harga;
        }

        public function hidupkan_komputer()
        {
            return "Hidupkan komputernya $this->pemilik yang merknya $this->merk dan harganya $this->harga";
        }
    }

    // set object baru dikasih argument
    // bisa membikin beberapa object lagi
    $laptop_riski = new Komputer("Riski", "ASUS", "2 JT");
    echo $laptop_riski->hidupkan_komputer();
    echo "\n";

    $laptop_debi = new Komputer("Debi", "ACER", "2 JT");
    echo $laptop_debi->hidupkan_komputer();
    */


    /* Contoh Lain yang lebih expert */
    /* 

        Dengan Memanggil manual perintah parent::__construct() dan parent::__destruct(), kita bisa menjalankan seluruh constructor dan destructor dari parent class.

    */

    class wc {
        public function __construct(){
            echo "Constructor dari class komputer \n";
        }

        public function __destruct() {
            echo "Destructor dari class komputer \n";
        }
    }

    // turunkan class komputer ke laptop
    class dapur extends wc {
        public function __construct()
        {
            parent::__construct();
            echo "Constructor dari class laptop \n";
        }

        public function __destruct()
        {
            parent::__destruct();
            echo "Destructor dari class laptop \n";
        }
    }

    // turunkan class laptop ke chromebook
    class rumah extends dapur {
        public function __construct(){
            parent::__construct();
            echo "Constructor dari class chromebook \n";
        }

        public function __destruct(){
            parent::__destruct();
            echo "Destruct dari class chromebook \n";
        }
    }
    // object
    $perabotan = new rumah();

    echo "Belajar OOP PHP \n";
?>