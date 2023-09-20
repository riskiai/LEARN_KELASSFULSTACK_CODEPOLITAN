<!-- 

    Pengubah Visibilitas :
     
      - Public => Bisa Digunakan Dimana Saja
      - Protected => Hanya Bisa digunakan dalam Class dan 
        Subclass
      - Private => Hanya Bisa digunakan dalam classnya itu 
        sendiri

    Best Practice :
       - Selalu gunakan encapsulation / pengubah visibilitas
       - Pertimbangkan visibilitas saat ngoding
       - Gunakan Enkapsulasi Public hanya diperlukan
       - Kelompokan Properti atau method pada masing-masing 
         visibilitasnya

    Contoh konfigurasinya : 
    class Example {
        // Default Public saat menggunakan var
        public $a;
        protected $b;
        private $c;

        // Default Public Tanpa Didefinisi
        public function helloWorld() {}

        protected function helloFam() {}

        private function helloMe() {}
    }

 -->