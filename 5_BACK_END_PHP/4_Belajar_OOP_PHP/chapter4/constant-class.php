<?php

    class Time
    {
        public const DAY_IN_SEC = 60 * 60 * 24;

        public function tomorrow()
        {
            return time() + self::DAY_IN_SEC;
        }
    }

    // Pemanggilan Constact Variable Tersebut :
    echo Time::DAY_IN_SEC . "\n";

    $clock = new TIme; // Method Time
    echo $clock->tomorrow();

?>