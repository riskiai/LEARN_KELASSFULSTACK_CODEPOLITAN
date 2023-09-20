<!-- Contoh Pemograman Construct Argument -->
<!-- 

    class product {
        public $name;
        public $color;

        public function __construct($name, $color){
            $this->name = $name;
            $this->color = $color;
        }
    }

    $shirt = new Product('T-Shirt', 'Blue');
    echo $shirt->name; // T-shirt
    echo $shirt->color; // Blue 

 -->

 <!-- 

    class Product {
        public $name;
        public $color;
        public $price;

        public function __construct($args=[]){
            $this->name = $args['name'] ?? NULL;
            $this->color = $args['color'] ?? NULL;
            $this->price = $args['price'] ?? NULL; 
        }
    }

    $shirt =new Product(['name'=> 'T-shirt', 'color'=>'Blue', 'price'=>'299']);
    echo $shirt->name; // T-shirt

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

$senior = new Senior();
echo "Senior: {$senior->total} \n";
echo "Target: {$senior->target} \n";

echo "Instance Count: " . Student::$instanceCount;