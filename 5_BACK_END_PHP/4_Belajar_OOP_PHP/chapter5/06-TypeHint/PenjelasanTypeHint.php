<!-- 

    Type Declaration 
    - Petunjuk Bagi Programmer Dan PHP Runtime 
    
    public function execute(Table $db)
    Mismatch => Error

    // Perlu G sih Menggunakan Type Declaration ?
    - Setiap Software tidak dirancang untuk melahap semua tipe data
    - Menghindari error atau kesalahan program karena berbeda tipe data

 -->

 <!-- 

    Type Declarations
    public function foo(
        \App\Database $db,
        array $options = [],
        $bar = 0) {

        };
    )    

    PHP is Dynamic Bebas menggunakan tipe data apapun
    Mengatasi Bugs pada banyak class

    Type Declarations Options 
    - class/interface
    - self/same class
    - callable
    - array
    - bool
    - float
    - int
    - string

-->