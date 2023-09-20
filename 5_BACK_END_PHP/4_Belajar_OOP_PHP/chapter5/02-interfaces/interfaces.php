<?php

interface TableInterface
{
    public function save(array $data);
}

/* Bisa Melakukan Juga Proses Extend  */
interface LogInterface
{
    public function log(string $message);
}


class Table implements TableInterface, LogInterface
{
    public function save(array $data)
    {
        return "Save Method from table class";
    }

    public function log(string $message)
    {
        return $message . "\n";
    }
}

echo (new Table)->log("Inteface From Log Interface");
echo (new Table) -> save([]);