<!-- Inheritance (Pewarisan) dalam OOP -->
<!-- 

    Inheritance adalah konsep OOP dimana sebuah class dapat menurunkan property dan method yang dimilikinya kepada class lain. Konsep inheritance dipakai untuk memanfaatkan fitur code reuse, yakni menghindari terjadinya duplikasi kode program.

 -->

 <?php

    // PEWARISAN PUBLIC
    /*  class hp {

        // set property 
        public $merk;
        public $pemilik;
        public $harga; 

        // set method 
        public function info_komputer()
        {
            return "Beli Komputer Baru";
        }
    }

    // pewarisannya 
    class casing extends hp {

        // set method lagi
        public function lihat_spec()
        {
            return "Merk: $this->merk, Pemilik: $this->pemilik, Harga: $this->harga";
        }

    }

    // set object pada kelass laptop 
    $hp_now = new casing();

    // isi propertynya
    $hp_now->pemilik = 'Riski';
    $hp_now->merk = 'Samsung';
    $hp_now->harga = '2 JUTA';

    // Tinggal Panggil methodnya
    echo $hp_now->info_komputer();
    echo "\n";
    echo $hp_now->lihat_spec(); */



    // PEWARISAN PROTECTED
    class linux {

        // set method protected
        protected function apaitu_linuk()
        {
            return "Linux adalah sistem";
        }
        
    }

    class debian extends linux
    {
        protected function apaitu_debian()
        {
            return "Debian Adalah Debian";
        }
    }

    class ubuntu extends debian{
        protected function apaitu_ubuntu()
        {
            return "ubuntu adalaj ubuntu";
        }

            public function lihat_Semua()
            {
                $a = $this->apaitu_linuk();
                $b = $this->apaitu_debian();
                $c = $this->apaitu_ubuntu();
                return "$a \n $b \n $c";
            }

        }
   

        // set objeck 
        $ubuntu_riski = new ubuntu();

        // panggil method 
        echo $ubuntu_riski->lihat_Semua();


 ?>