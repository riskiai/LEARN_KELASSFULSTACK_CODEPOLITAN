<?php

require __DIR__ . '/vendor/autoload.php';

use Faker\Factory;

$faker = Factory::create();

// Menampilkan data dari faker
echo $faker->name . "\n";
echo $faker->address;