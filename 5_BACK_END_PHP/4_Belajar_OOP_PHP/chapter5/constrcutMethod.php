<!-- 

    Magic Methods
    - _Construct()
    - _destruct()
    - _clone()
    - _get(), _set()

    // Contoh
    class Product {
        public $name;
        public $color;

        public function _construct() {
            // Harus Public
            Logger::log('Creating New Product);
            $this->color = "Blue";
        }
    }

    $shirt = new Product;
    echo $shirt->color; //blue


 -->


<?php

class Student 
{
    public static $instanceCount = 0;

    public function __construct()
    {
        self::$instanceCount++;
    }
}

class Elementary extends Student 
{
    public $total = 3;
}

class Junior extends Student 
{
    public $total = 2;
}

class Senior extends Student
{
    public $total = 4;
}

$elementary = new Elementary;
echo "Elementary: {$elementary->total} \n";

$junior = new Junior;
echo "Junior: {$elementary->total} \n";

$senior = new Senior;
echo "Senior: {$senior->total} \n";

echo "Instance Count: " . Student::$instanceCount;