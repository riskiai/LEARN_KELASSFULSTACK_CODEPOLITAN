<!-- Pengertian Polimorfisme Dalam Pemrograman Objek PHP -->

<!-- 

    Di dalam pemrograman objek, polimorfisme adalah konsep dimana terdapat banyak class yang memiliki signature method yang sama.

 -->

 <?php

    // CONTOH ABSTRACT DI POLIMORSHIM
    /* abstract class komputer {
        // buat abstact method
        abstract public function booting_os();
    }

    class laptop extends komputer {
        public function booting_os(){
            return "Proses Botting Sistem Operasi Laptop";
        }
    }

    class pc extends komputer {
        public function booting_os(){
            return "Proses Booting sistem operasi PC";
        }
    }

    class chromebook extends komputer {
        public function booting_os()
        {
            return "Proses Booting Sistem Operasi Chromebook";
        }
    }

    // buat object dari class diatas
    $laptop_baru = new laptop();
    $pc_baru = new pc();
    $chromebook_baru = new chromebook();

    // buat fungsi untuk memprosess objek
    function booting_os_komputer($objek_komputer){
        return $objek_komputer->booting_os();
    }

    // jalankan fungsi
    echo booting_os_komputer($laptop_baru);
    echo "\n";
    echo booting_os_komputer($pc_baru);
    echo "\n";
    echo booting_os_komputer($chromebook_baru); */


    // CONTOH PENGGUNAAN ABSTRACT CLASS DAN INTERFACE DALAM POLIMORFISME
    abstract class komputer {
        // buat abstract method
        abstract public function booting_os();
    }

    interface mouse {
        public function double_klik();
    }

    // implementasi turunan class abctract dan class interface
    class laptop extends komputer implements mouse {
        public function booting_os()
        {
            return "Proses Booting Sistem Operasi Laptop";
        }
        public function double_klik()
        {
            return "Double Klik Mouse Laptop";
        }
    }

    class pc extends komputer implements mouse {
        public function booting_os(){
            return "Proses Booting Di PC";
        }
        public function double_klik()
        {
            return "Double Klik Mouse PC";
        }
    }


    // Buat object dari class diatas
    $laptop_baru = new laptop();
    $pc_baru = new pc();

    // buat fungsi untuk memperoses objek
    function booting_os_komputer($objek_komputer){
        return $objek_komputer->booting_os();
    }

    function double_klik_komputer($objek_komputer){
        return $objek_komputer->double_klik();
    }

    // jalanlan fungsi
    echo booting_os_komputer($laptop_baru);
    echo "\n";
    echo double_klik_komputer($laptop_baru);
    echo "\n";

    echo booting_os_komputer($pc_baru);
    echo "\n";
    echo double_klik_komputer($pc_baru);
 ?>