<!-- 

    Pewarisan Static Property Dan Method
    
    - Static Property dan method bisa diwariskan
    - Pengubah visibilitas / encapsulation berlaku
    - Static property yang diwariskan bersifat shared variables
    - Perubahan nilai pada parent class mempengaruhi subclass
    - Perubahan Nilai pada subclass mempengaruhi parent class

 -->

 <!-- 

    Cara Kerja Dari pewarisan static : 
    
    class Student {
        public static $grades = ['SD', 'SMP', 'SMA'];
    }

    class PartTimeStudent extends Student {

    }

    echo PartTimeStudent::$grades[0] // SD
    PartTimeStudent::$grades[] = 'Alumni';

    echo implode(', ', Student::$grades);
    // SD, SMP, SMA, Alumni

  -->


  <?php

    /* Implementasi Static Method */
    
    class Student 
    {
        public static $grades = ['SD', 'SMP', 'SMA'];
        private static $totalStudents = 0;

        public static function motto()
        {
            return 'Learn PHP OOP';
        }

        public static function count()
        {
            return self::$totalStudents;
        }

        public static function addStudent()
        {
            return self::$totalStudents++;
        }
    }

    /* Output dari Static-Class */
    echo Student::$grades[2] . "\n";
    echo Student::motto() . "\n";

   // Private Methods Tidak Bisa Dipanggil di luar function
   // echo Student::$totalStudents;

   echo Student::count() . "\n";
   Student::addStudent();
   echo Student::count() . "\n";

   // PEWARISAN
   class PartTimeStudent extends Student {
    
   }

   echo PartTimeStudent::$grades[1] . "\n";
   echo PartTimeStudent::motto() . "\n";

   // Menambahkan Subclass 
   // Dan Menampilkannya Memakai Parent Class
   PartTimeStudent::$grades[] = 'Alumni';
   echo implode(', ', Student::$grades);

   Student::addStudent();
   Student::addStudent();
   PartTimeStudent::addStudent(); 

   // Memanggil class nya
   echo Student::count() . "\n";
   echo PartTimeStudent::count() . "\n";
?>