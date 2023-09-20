<?php

/* Study Kasus Extend Override */
/* Dan Study Kasus Inheritance */
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

/* Study Kasus Extend Override */
class Customer extends User // Melempar ke class User
{
    var $city; 
    var $country;

    function location()
    {
        return $this->city . ', ' . $this->country; 
    }

    function fullName()
    {
        return $this->firstName . ' ' . $this->lastName . '(customer)';
    }
}

/* Overide nya! */
$u = new User;
$u->firstName = 'Riski';
$u->lastName = 'Ahmad Ilham';
// $u-> city = 'Cirebon'; 
// $u->country = 'Indonesia';

echo $u->fullName() . "\n"; 
// echo $u->location() . "\n";

/* Overide */
$c = new Customer;
$c->firstName = 'Customer';
$c->lastName = 'Doe';
$c-> city = 'Cirebon'; 
$c->country = 'Indonesia';

echo $c->fullName() . "\n"; 
echo $c->location() . "\n";

if (is_subclass_of($c, 'User')) {
    echo "Instance Customer merupakan subclass class user \n";
}

/* mengecek di mempunyai parent apa/ class nya siapa ? */
// pakai fungsi ini untuk mengecek ! 
$parents = class_parents($c);
echo implode(', ', $parents);