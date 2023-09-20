<?php

    /* Break */
    /* $arr_warna	= ['merah','biru','kuning','hitam','hijau','biru','pink','biru','jingga'];
    echo "Saya mencari warna hitam\n";
    foreach ($arr_warna as $key=> $value) 
    {
            echo "Warna pada elemen array ke-$key adalah $value \n";
            if($value=='biru')
        {
            echo "Nah Warna Hitam sudah ditemukan! Dia berada pada indeks ke-$key";
            break;
        }
    }  */

    // CONTINUE
   /*  $arr_warna = ['Merah', 'Biru', 'Kuning', 'Hitam', 'Hijau', 'Biru', 'Pink', 'Biru', 'Jingga'];
    foreach ($arr_warna as $key => $value) {
        # code...
        if ($value== 'Hitam') {
            # code...
            continue;
        }
        echo "Warna Pada Elemen Pada Array ke-$key adalah $value \n";
    } */


    /* Menampilkan Data Ke Table */
    // Array Multimedimensi
    $siswa = [
        ['nama' => 'riski', 'kelas' => '2A', 'goldarah' => 'B'],
        ['nama' => 'debi', 'kelas' => '2A', 'goldarah' => 'AB'],
        ['nama' => 'ijang', 'kelas' => '2B', 'goldarah' => 'B'],
        ['nama' => 'singgih', 'kelas' => '2C', 'goldarah' => 'A'],
        ['nama' => 'hani', 'kelas' => '2D', 'goldarah' => 'O'],
    ]
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menampilkan Data Ke Table</title>
</head>
<body>
    
        <table border="1">
            <tr>
                <th>Nama</th>
                <th>Kelas</th>
                <th>Gol. Darah</th>
            </tr>
            <!-- Dengan Perulangan Foreach -->
            <?php foreach ($siswa as $key => $value) { ?>
                # code...
                <tr>
                    <td><?php echo $value['nama']; ?></td>
                    <td><?php echo $value['kelas']; ?></td>
                    <td><?php echo $value['goldarah']; ?></td>
                </tr>
            <?php } ?>

           <!-- Menuliskan Secara Manual -->
           <!--  
            <tr>
                <td><?php echo $siswa[0]['nama']; ?></td>
                <td><?php echo $siswa[0]['kelas']; ?></td>
                <td><?php echo $siswa[0]['goldarah']; ?></td>
            </tr> 
            -->
            
        </table>

</body>
</html>