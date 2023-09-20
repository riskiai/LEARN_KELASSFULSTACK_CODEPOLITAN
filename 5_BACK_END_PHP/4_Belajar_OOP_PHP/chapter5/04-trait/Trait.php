<?php

trait Log 
{
    protected function log($message)
    {
        echo "{$message} \n";
    }
}

class Table
{
    use Log;

    public function save()
    {
        $this->log("created log");
    }
}

// Memanggil Method Save di dalam function Table
(new Table()) ->save();
