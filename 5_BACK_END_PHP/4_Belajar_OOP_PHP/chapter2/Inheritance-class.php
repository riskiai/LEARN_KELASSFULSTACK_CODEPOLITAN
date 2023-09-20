<?php

/* Study Kasus Inheritance */
class User 
{
    // Terdapat Deklarasi Methods
    var $firstName;
    var $lastName;
    var $userName;

    // Terdapat Method Fullname
    function fullName()
    {
        return $this->firstName . ' ' . $this->lastName;
    }
}

class Customer extends User // Melempar ke class User
{

}

$c = new Customer;
$c->firstName = 'Customer';
$c->lastName = 'Doe';

echo $c->fullName() . "\n"; 

if (is_subclass_of($c, 'User')) {
    echo "Instance Customer merupakan subclass class user \n";
}

/* mengecek di mempunyai parent apa/ class nya siapa ? */
// pakai fungsi ini untuk mengecek ! 
$parents = class_parents($c);
echo implode(', ', $parents);