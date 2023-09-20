<?php


class student
{

}

/* INSTANCE OBJECT */
// TAMBAHKAN Opsi Kembali : 
$student =  new Student;
$student = new Student;

$classes =  get_declared_classes();

echo "Classes: " . implode(', ', $classes). "<br />";

$classNames = ['Product', 'Student', 'student'];

foreach ($classNames as $className) {
    if (class_exists($className)) {
        echo "{$className} class ada. <br/ >";
    } else {
        echo "{$className} class tidak ada. <br/ >";
    }
}