<!-- 

    Mengenal Class Inheritance : 

    - Class Baru yang memanfaatkan property atau method dari 
      class yang sudah ada
    - Merapihkan Kode
    - Mencegah Pengulangan Kode
    - Menyederhanakan Pemeliharaan
    - Menghindari Ketidakkonsistenan Dan Bugs

    Pewarisan Class Inheritance :
    
    - Kemampuan suatu class akan dibagikan dengan subclassnya
    - Memberikan kemampuan baru di parent class akan 
      mempengaruhi subclass
    - Subclass dapat mengubah ulang (override) kemampuan 
      parent class
    - Subclass dapat memperluas fungsinya ketimbang parent 
      class

    Konsepnya :
    Parent Memiliki Subclassnya

 -->

 <!-- 

    Mendifiniskan Subclass :
    class Parent {

    }

    class Subclass extends Parent {

    }

    Lebih Jelasnya : 
    class Document {
        var $file_name;

        function downloadPath() {
            return '/donwload/' . $this->file_name;
        }
    }

    class Brochure extends Document {

    }

    class Invoice extends Document {

    }

    class Instruction extends Document {
        
    }

  -->



