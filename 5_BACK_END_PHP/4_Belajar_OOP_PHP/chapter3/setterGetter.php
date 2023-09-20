<!-- Menggunakan Setter Dan Getter -->
<!-- 

    - Menetapkan Visibiltas property menjadi Private
    - Buat Method untuk mengisi nilai private property
    - Buat Method Untuk Memanggil Nilai private property

 -->

 <!-- 

     Contoh Pemanggilan Setter Dan Gettern yang kurang baik : 
     class Product {
        private $name;

        public function setName($value) {
            $this->name = $value;
        }

        public function getName() {
            return $this->name;
        }
     }

     $p = new Product,
     $p->setName("PHP");
     echo $p->getName(); // PHP

  -->

  <!-- 

     contoh pemanfaatan setter dan getter yang baik :
     class product {
        private $price;

        public function setPrice($value) {
            $noFormat = preg_replace('/Rp/', '', $value);
            $float = floatval($noFormat);
            if ($float <= 0) {
                //show error
                return;
            }
            $this->price = $float;
        }

        public function getPrice() {
            return 'Rp' . number_format($this->price, 2);
        }
     }

   -->

  <!-- 

     Fungsi Setter Dan Getter
     - Memungkinkan mengakses private property
     - Berguna untuk mengatur kewenangan akses
     - Berguna Untuk membuat property red-only atau write-only
     - Berguna untuk membuat nilai pada pre-processing
     - Hindari Membuat method "naive setter" dan "naive getter"

   -->

