<!-- 

    METHOD Dalam Class 
    - Fungsi yang bekerja dalam object
    - Non-OOP: "functions"; OOP: "methods"
    - Didefinisikan Seperti fungsi biasa didalam class


 -->

 
 <?php

class student
{
    /* Property Class OOP */
    var $name; 
    var $country = 'None';
    
    // Menambahkan MethodClass
    function sayHello()
    {
        return 'Hello, World';
    }
}

/* INSTANCE OBJECT */
// TAMBAHKAN Opsi Kembali : 
$student1 =  new Student;
$student2 = new Student;

// DEKLARASI FUNGSI CLASS
$student1->name = 'Hakim';
$student2->name = 'Luna'; 

// PEMANGGILAN PROPERTY CLASS
echo $student1->name . "\n";
echo $student2->name . "\n";

// PEMANGGILAN METHOD CLASS
echo $student1->sayHello() . "\n";
echo $student2->sayHello() . "\n";

// MENAMBAHKAN PROPERTI
$class_methods = get_class_methods('Student');
echo "Method Milik Student \n";
// echo "<pre>";
    print_r($class_methods);
// echo "</pre>";

// MENAMBAHKAN PROPERTI LAGI
if (method_exists('Student', 'sayHello')) {
    echo "Method sayHello tersedia";
} else {
    echo "Method sayHello tidak tersedia";
}

?>

