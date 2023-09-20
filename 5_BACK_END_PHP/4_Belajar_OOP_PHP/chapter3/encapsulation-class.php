<?php

/* Study Kasus Inheritance */

class User 
{
    // Terdapat Deklarasi Methods
    public $firstName;
    public $lastName;
    public $userName;

    // Visibilast Protected
    protected $regID = 1001;
    private $level = 'User';

    // Terdapat Method Fullname
    public function fullName()
    {
        return $this->firstName . ' ' . $this->lastName;
    }

    protected function sayProtected()
    {
        return "Hello, Protected";
    }

    // Hanya Bisa Digunakan Di Class Itu Sendiri
    private function sayPrivate()
    {
        return "Hello, Private";
    }

    public function sayMe()
    {
        return $this->sayPrivate();
    }
}

class Customer extends User // Melempar ke class User
{

    public function sayParent() 
    {
        /* Memanggil Method class di dalam kelas protected */
        return $this->sayProtected();
    }

}

/* Membuat instance object dari User */
/* Class User */
$u = new User;
$u->firstName = 'User';
$u->lastName = 'Class';

echo $u->fullName() . "\n";
echo $u->sayMe() . "\n";

/* Tidak Bisa Dipanggil Langsung */
// echo $u->regID . "\n";
// echo $u->level . "\n";

// echo $u->sayProtected() . "\n";
// echo $u->sayPrivate() . "\n";

/* Class Customer */
$c = new Customer;
$c->firstName = 'Customer';
$c->lastName = 'Doe';

echo $c->fullName() . "\n"; 
echo $c->sayParent() . "\n"; 
