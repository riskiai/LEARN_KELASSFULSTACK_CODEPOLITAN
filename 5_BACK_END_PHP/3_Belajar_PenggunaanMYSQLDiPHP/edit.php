<?php

    /* UPDATE DATA */
    // Menginclude kan datanya dulu
    include('connection.php');

    // Mengambil data berdasarkan record id
    $id = $_GET['id'];  
    $query = mysqli_query($connect, "SELECT * FROM karyawan WHERE id='$id' LIMIT 1");
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menambahkan Form Data</title>
</head>
<body>
    
    <!-- MENAMPILKAN DATANYA Dengan VALUE -->
    <!-- BIKIN FORM JUGA UNTUK MENGHANDLE UPDATENYA -->
    <form action="update.php" method="POST">
        
    <input type="hidden" name="id" value="<?php echo $result[0]['id'] ?>">

        <label for="">Nama</label><br>
        <input type="text" name="nama" value="<?php echo $result[0]['nama'] ?>">
        <br><br>
        
        <label for="">Alamat</label><br>
        <textarea name="alamat" cols="30" rows="10" ><?php echo $result[0]['alamat'] ?></textarea>
        <br><br>

        <label for="Umur">Umur</label><br>
        <input type="text" name="umur" value="<?php echo $result[0]['umur'] ?>">
        <br><br>

        <label for="">Jenis Kelamin</label><br>
        <select name="jenis_kelamin">
            <option value="Pria" <?php echo ($result[0]['jenis_kelamin'] == 'Pria') ? 'selected' : ''; ?>>Pria</option>
            <option value="Wanita" <?php echo ($result[0]['jenis_kelamin'] == 'Wanita') ? 'selected' : ''; ?>>Wanita</option>
        </select>

        <button type="submit">Tambah</button>
    </form>

</body>
</html>