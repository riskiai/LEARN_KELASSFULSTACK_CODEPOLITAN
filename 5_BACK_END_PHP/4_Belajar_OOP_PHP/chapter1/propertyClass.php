<!-- 

    PROPERTY dalam Class
    - Variable yang menyimpan suatu nilai
    - Biasa disebut juga: attributes, class variables, instance variables
    - Didefinisikan dengan keyword 'var' dan dilanjutkan dengan $nama_variable
    -Bisa diisi nilai secara langsung

 -->


 <?php

class student
{
    /* Property Class OOP */
    var $name; 
    var $country = 'None';
}

/* INSTANCE OBJECT */
// TAMBAHKAN Opsi Kembali : 
$student1 =  new Student;
$student2 = new Student;

// DEKLARASI FUNGSI CLASS
$student1->name = 'Hakim';
$student2->name = 'Luna'; 

echo $student1->name . "\n";
echo $student2->name . "\n";

// MENAMBAHKAN PROPERTI
$class_vars = get_class_vars('Student');
echo "Properti Milik Student";
echo "<pre>";
    print_r($class_vars);
echo "</pre>";

// MENAMBAHKAN PROPERTI LAGI
if (property_exists('Student', 'name')) {
    echo "Properti name tersedia";
} else {
    echo "Properti name tidak tersedia";
}

?>

