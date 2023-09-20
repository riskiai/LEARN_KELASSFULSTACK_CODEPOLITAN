<!-- Form Data -->
<!-- Mengambil Query String GET -->
<?php

    /* QUERY STRING GET */
    // $nama = "Riski Ahmad Ilham";
    // $nama = $_GET['nama'];
    // $alamat = $_GET['alamat'];
    // var_dump($_GET);

    /* QUERY STRING POSTS */

?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form Data</title>
</head>
<body>

    <!-- Query String POST -->
    <!-- Pengunaan Method Post Pada Form -->
   <form action="2_proses2.php" method="POST">
        Nama   &nbsp;&nbsp;: <input type="text" name="nama"><br>
        <br>Alamat : <input type="text" name="alamat"><br>
        <br>
        Komentar : <br><textarea name="komentar" cols="30" rows="10"></textarea> <br>
        <input type="submit" value="submit">
   </form>


    <!-- Query String GET -->
    <!-- <h1>Selamat Datang, <?php echo $nama; ?></h1> -->
    <!-- <p>Anda Tinggal Di <?php echo $alamat; ?></p> -->
    <!-- <p>Selamat Belajar Pemogramaan Dasar PHP</p> -->

    <!-- 
    <form>
        <input type="text" name="nama">
        <input type="text" name="alamat">
        <input type="submit">
    </form> 
     -->

   <!-- Form Method Post -->
   <!--  
    <form action="" method="post">
	    Nama: <input type="text" name="nama">
	    Alamat: <input type="text" name="alamat"><br><br>
	    <input type="submit" value="submit">
    </form>
     -->

     <!-- Form Data Method GET -->
   <!-- 
     <form action="proses.php" method="GET">
        Nama : <input type="text" name="nama">
        Alamat : <input type="text" name="alamat"> <br><br>
        <input type="submit" value="submit">  
     </form>
    -->

    <!-- Form Data Text Area -->
    <!-- 
    <form action="" method="POST">
        Alamat: <textarea name="alamat" cols="200" rows="8"></textarea>
        <br><br>
        <input type="submit" value="submit">
    </form> 
    -->

    <!-- Form Data Password -->
   <!--  <form action="" method="POST">
        Password: <input type="password" name="password">
        <input type="submit" value="submit">
    </form> -->

    <!-- Form Data Date -->
    <!-- 
    <form action="" method="POST">
        Tanggal Beli: <input type="date" name="tanggal">
        <input type="submit" value="submit">
    </form> 
    -->

    <!-- Form Button Alert -->
   <!--  
    <form action="" method="post">
	    <input type="button" value="Pencet Button" onclick="alert('Hello Gaes!!')"> 
    -->

    <!-- Checkbox -->
   <!--  
    <form action="" method="POST">
        <input type="checkbox" name="PHP" value="PHP">PHP <br>
        <input type="checkbox" name="HTML" value="HTML" checked> HTML<br>
    </form> 
    -->

    <!-- Option -->
    <!-- 
    <form action="" method="POST">
        <select name="programstudi" id="">
            <option value="SI">Sistem Informasi</option>
            <option value="TI">Teknik Informatika</option>
            <option value="MI">Manajemen Informatika</option>
        </select>
    </form> 
    -->

    <!-- Radio -->
    <!-- 
    <form action="" method="POST">
        <input type="radio" name="program_studi" value="SI"> Sistem Informasi <br>
        <input type="radio" name="program_studi" value="TI">Teknik Informatika <br>
    </form> 
    -->

    <!-- File -->
    <!-- 
    <form action="" method="POST">
        Pilih File: <input type="file" name="Dokumen">
    </form> 
    -->

    
  </body>
</html>