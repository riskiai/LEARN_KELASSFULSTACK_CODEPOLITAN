<!-- Perulangan -->

<?php
    /* FORR */
    // for($i = 1; $i < 20; $i++) {
    //     echo "$i. Selamat Datang! \n";
    // }

    /* FOR ARRAY */
    /* $warna = ['merah','kuning','hijau','oranye','ungu','oranye', 'merah', 'violet'];
    $jumlah_merah = 0;
         
    for($i = 0; $i < 7; $i++)
    {
        if($warna[$i] == 'kuning'){
            $jumlah_merah++;
        }
    }

    echo "Jumlah Warna Merah pada array sebanyak $jumlah_merah";
    */

    /* Do While Dan While */
   /* While */
    // $warna = ['merah', 'kuning', 'hijau', 'oranye', 'ungu', 'oranye', 'merah', 'violet'];
    // $jumlah_merah = 0;

    // $i = 0;
    // do while
    // do {

    // }while (<=10);
        
    // while
   /*  while ($i < 8) {
        if ($warna[$i] == 'merah') {
            $jumlah_merah++;
        }
        $i++;
    } */

   /*  echo "Jumlah elemen dengan warna merah: " . $jumlah_merah; */

   /* FOREACH */
   /* Percobaan Ke 1 */
   /*  
    $arr_warna	= ['merah','biru','kuning','hitam','hijau','biru','pink','biru','jingga'];
    foreach ($arr_warna as $value) 
    {
       echo "Warna saat ini adalah $value <br>";
    } 
   */

   /* Percobaan Ke 2 */
   // $key itu =>  keterangan nomor
   // $value itu => keterangan hasilnya
  $arr_warna = ["Merah", "Biru", "Jingga", "Kuning","Hijau", "Merah" ];
  $jumlah_warna = 0;
  foreach ($arr_warna as $key => $value) {
    # code...
    echo "Warna yang dipilih ke$key adalah $value \n";
    if ($value = "Merah") {
        # code...
        $jumlah_warna++;
    }
  }
    
   echo "Jumlah Warna Merahnya adalah $jumlah_warna";
?>