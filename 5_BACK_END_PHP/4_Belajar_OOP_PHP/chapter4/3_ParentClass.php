<!-- Merujuk Parent Class -->
<!-- 

    ClassName::$Property / ClassName::
    self::$Property / self::method()
    parent::$Property / parent::method()

    - Hanya Bekerja Di dalam class bukan instance 
    - self:: dan parent::menggantikan ClassName
    - Tidak Dibutuhkan dalam static properties
    - Berguna Pada saat memanggil static method yang telah 
      di-override

    // CONTOH Parent Class : 
    class programmer {
        public static function makeSystem() {
            echo "Start Coding";
        }
    }

    class AmateurProgrammer extends Programmer {
        public static function makeSystem() {
            echo "Read Documentation";
            parent::makeSystem();
            echo "Clean up mess";
        }
    }

    Programmer::makeSystem();
    // Start Coding

    AmateurProgrammer::makeSystem();
    // start coding
    // Read Documentation
    // Clean Up Mess

 -->


<?php

class Programmer 
{
    public static function makeSystem(){
        echo "Start Coding";
    }
}

class AmateurProgrammer extends Programmer
{
    public static function makeSystem()
    {
        echo "Read Documentation \n";
        parent::makeSystem() . "\n";
        echo "Clean up mess . \n";
    }
}

echo "Programmer: \n";
echo Programmer::makeSystem() . "\n";

echo "Ameteur Programmer: \n";
echo AmateurProgrammer::makeSystem() . "\n";



class Image
{
    public static $resizeStatus = true; 

    public static function geometry()
    {
        echo "760x300";
    }
}

class PhotoProfile extends Image 
{
    public static function geometry()
    {
        if(self::$resizeStatus) {
            echo "50x50";
        } else {
            parent::geometry();
        }
    }
}

echo Image::geometry() . "\n";
echo PhotoProfile::geometry()  . "\n";

Image::$resizeStatus = false;
echo PhotoProfile::geometry() . "\n";