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
?>