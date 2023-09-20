<!-- OBJECT CLASS --> 
 <?php

class student
{
    /* Property Class OOP */
    var $firstName; 
    var $lastName;

    var $country = 'None';
    
    // Menambahkan MethodClass
    function sayHello()
    {
        return 'Hello, World';
    }
    function fullName()
    {
        return $this->firstName . ' ' . $this->lastName;
    }
}

/* INSTANCE OBJECT */
// TAMBAHKAN Opsi Kembali : 
$student1 =  new Student;

// DEKLARASI FUNGSI CLASS
$student1->firstName = 'Hakim';
$student1->lastName = 'Sembilan';

// PEMANGGILAN PROPERTY CLASS
echo $student1->firstName . "\n";
echo $student1->lastName . "\n";

// PEMANGGILAN METHOD CLASS
echo $student1->sayHello() . "\n";
echo $student1->fullName() . "\n";

// MENAMBAHKAN PROPERTI
// $class_methods = get_class_methods('Student');
// echo "Method Milik Student \n";
// echo "<pre>";
    // print_r($class_methods);
// echo "</pre>";

// MENAMBAHKAN PROPERTI LAGI
/* 
    if (method_exists('Student', 'sayHello')) {
        echo "Method sayHello tersedia";
    } else {
        echo "Method sayHello tidak tersedia";
    } 
*/

?>

