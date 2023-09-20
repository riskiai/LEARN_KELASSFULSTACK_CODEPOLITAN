<!-- MEMBUAT FUNGSI -->
<?php

    $nama1  = ucwords('riski ahmad ilham');
    $nama  = strtoupper('debi nabilah sholihah');

    function pesan() 
    {
        echo "<h1>Hai Riski</h1>";
    }
    pesan();
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fungsi PHP</title>
</head>
<body>
    
    <!-- Huruf Pertama Jadi Kapital Semua -->
    <h1>
        Sealamat Datang, <?php echo $nama1; ?>
    </h1>

    <!-- Huruf Jadi Kapital Semua -->
    <h1>Selamat Datang, <?php echo $nama ?></h1>

</body> 
</html>