<?php

abstract class Database
{
    abstract public function connection();
    public function disconnect()
    {
        // Impelementasi 
    }
}

/* Lakukan Proses Inhertance Dengan Parent Class */
class Model extends Database
{
    public function connection()
    {

    }
}

/* Instant Objects */
// $db = new Database(); => Tidak Bisa Dibuat Instant Objectnya
$model = new Model();
