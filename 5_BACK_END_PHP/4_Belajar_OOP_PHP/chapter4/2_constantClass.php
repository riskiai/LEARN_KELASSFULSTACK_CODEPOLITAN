<!-- 

    Constant Class

    - Digunakan untuk nilai class yang tidak bisa diubah
    - Menggunakan Keyword Const dan penamaan Capital
    - Dapat Menyimpan nilai expression
    - Support Visibility Modifier Sejak PHP 7.1
    - Perujukan Dengan ClassName::atau self::

 -->

 <!-- 

    Cara Kerjanya :
    class Time {
        public const DAY = 60 * 60 * 24;

        public function tomorrow() {
            return time() + self::DAY;
        }
    }
    
    echo Time::DAY; // 86400

    $clock = new Time;
    echo $clock->tomorrow();

  -->