<?php

namespace App;

// import model.php
include '../models/model.php';

use Model\Table as ModelTable;

class Table
{
    public static function get()
    {
        echo "App.Table.get() \n";
    }
}

Table::get();
ModelTable::get();