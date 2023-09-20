<!-- Materi Switch -->
<?php

    $nilai= "B";
    switch($nilai)
    {
        case "A":
            echo "Nilai Anda Sangat Memuaskan";
            break;
        case "B":
            echo "Nilai Anda Memuaskan";
            break;
        case "C":
            echo "Nilai Anda Cukup";
            break;
        case "D":
            echo "Nilai Anda Kurang";
            break;
        case "E":
            echo "Anda Tidak Lulus";
            break;
        default: 
            echo "Nilai Tidak Terdaftar";
            break;
    }

?>