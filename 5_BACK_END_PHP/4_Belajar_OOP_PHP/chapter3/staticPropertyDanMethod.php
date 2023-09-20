<!-- Static Property dan Method -->
<!-- 

    - Perilaku yang dimiliki class pada umumnya
    - Tidak Terikat Dengan instance tertentu
    - Bisa Dipanggil secara langsung tanpa instance
    - Menggunakan keyword "static"

 -->

<!-- 

    Contoh Pemanggilan Static Property dan method :
    class student {
        static $grades = ['SD', 'SMP', 'SMA'];

        static function motto() {
            return "Learn PHP OOP";
        }
    }

 -->

 <!-- 
    
    Static Property dan Method

    - Sintak Berbeda untuk memanggil property dan method
    - Student::$grades, Student::motto()
    - static tidak bisa menggunakan $this
    - Gunakan self; self::$grades, self::motto()
    - Bisa digabungkan dengan pengubah visibilitas / 
      encapsulation

 -->

 <!-- 

    Contoh Static Method : 
    class Student {
        public static $grades = ['SD', 'SMP', 'SMA'];
        private static $totalStudents = 0;

        public static function countStudents() {
            return self::$totalStudents;
        }
    }

    echo Student::$grades[1]; //SMP

    echo Student::$totalStudents; // error
    echo Student::$constsStudents(); // 0

  -->