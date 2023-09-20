<!-- 

    Contoh Strict Type Declaration
    public function sum(int $a, int $b){
        return $a + $b;
    };

    sum(1.5, 2.5); 
 -->

 <!-- 

    Pemanggilan Strict Type Declaration
    // funtion.php
    declare(strict_types=1);
    public function sum(int $a, int $b) {return $a + $b};

    //caller.php
    require function.php;
    sum(1.5, 2.5);

  -->