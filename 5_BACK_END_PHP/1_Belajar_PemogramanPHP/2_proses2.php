<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Isian Form Data</title>
</head>
<body>

    <!-- Untuk Menerima Data dari method POST -->
   <h1>Selamat Datang : <?php echo $_POST["nama"]?></h1>
   <h2>Alamat Kamu : <?php echo $_POST["alamat"] ?></h2>
   <p>Komentar Kamu : <?php echo $_POST["komentar"] ?></p>

</body>
</html>