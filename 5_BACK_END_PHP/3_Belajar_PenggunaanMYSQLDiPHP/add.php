<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menambahkan Form Data</title>
</head>
<body>
    
    <form action="insert.php" method="POST">
        <label for="">Nama</label><br>
        <input type="text" name="nama">
        <br><br>
        
        <label for="">Alamat</label><br>
        <textarea name="alamat" cols="30" rows="10"></textarea>
        <br><br>

        <label for="Umur">Umur</label><br>
        <input type="text" name="umur">
        <br><br>

        <label for="">Jenis Kelamin</label><br>
        <select name="jenis_kelamin">
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
        </select>

        <button type="submit">Tambah</button>
    </form>

</body>
</html>