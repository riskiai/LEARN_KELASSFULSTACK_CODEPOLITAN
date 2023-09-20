<!-- Contoh Destruct Method -->
<!-- 

    Contohnya :
    class Product {
        public static $instanteCount = 0;

        public function __counstruct(){
            self::$instanteCount++;
        }

        public function __desctruct() {
            self::$instanteCount--;
        }
    }

    Destruct Method
    - Bekerja Saat Referensi Terahir dari instance object  
      dihapus
    - Menggunakan Method Unset()
    - Script Berakhir

    CONTOH Program Sintax Lainnya :
    class Product {
        public static $instanteCount = 0;

        public function __construct() {
            self::$instanteCount++;
        }

        public function __desctruct(){
            self::$instanteCount--;
        }
    }

    $shirt = new Product();
    echo Product::$instanteCount; // 1

    unset($shirt);
    echo Product::$instanteCount; // 0

 -->

 
<?php

class Student 
{
    public static $instanceCount = 0;

    public $total;
    public $target;

    /* Cara agar Lebih Aman Di Magic Construct [] */
    public function __construct($args = [])
    {
        self::$instanceCount++;
        $this->total = $args['total'] ?? $this->total;
        $this->target = $args['target'] ?? $this->target;
    }

    public function __destruct()
    {
        // echo "Good Bye!";
        // Tetep Sama Datanya
        self::$instanceCount--;
    }
}

class Elementary extends Student 
{
    public $total = 3;
    public $target = 2;
}

class Junior extends Student 
{
    public $total = 2;
    public $target = 1;
}

class Senior extends Student
{
    public $total = 4;
    public $target = 3;
}

$elementary = new Elementary(['total' => 2, 'target' => 1]);
echo "Elementary: {$elementary->total} \n";
echo "Target: {$elementary->target} \n";

$junior = new Junior(['total' => 4, 'target' => 2]);
echo "Junior: {$junior->total} \n";
echo "Target: {$junior->target} \n";

unset($elementary);

$senior = new Senior();
echo "Senior: {$senior->total} \n";
echo "Target: {$senior->target} \n";

echo "Instance Count: " . Student::$instanceCount;