<?php

class Student
{
    public $name;

    public function __construct()
    {
        $this->name = 'Student';
    }

    public function sayHello()
    {
        return "Hi, " . $this->name;
    }
}

?>