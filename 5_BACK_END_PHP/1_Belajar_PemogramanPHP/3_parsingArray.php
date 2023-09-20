<!-- Parsing Array -->
<?php
    if(!empty($_POST['prosess']))
    {
        print_r($_POST);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pengiriman Array Dengan Metode GET Dan POST</title>
</head>
<body>

    <form action="" method="POST">
        Nama : <input type="text" name="nama">
        <br><br>
        Alamat : <textarea name="alamat"  cols="30" rows="10"></textarea>
        <br><br>
        Program Studi :
        <select name="program_studi" id="">
            <option value="SI">Sistem Informasi</option>
            <option value="TI">Teknik Informatika</option>
            <option value="MI">Manajemen Informatika</option>
        </select>
        <br><br>
        <input type="submit" name="prosess" value="submit">
    </form>
    
</body>
</html>