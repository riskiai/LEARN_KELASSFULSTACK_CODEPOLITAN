<!-- 

    Return Type : 
    public function getUser(): UserInterface {
        return $this->userObj;
    }

    PHP 7 return Type Declaration
    - class / interface 
    - self
    - callable
    - array 
    - bool
    - float 
    - int
    - string

    Tujuan Return Type Declaration
    Menyamakan Jenis Data Antara function type dan return type 

 -->

 <!-- 

    Child Methods
    class Table {
        public function save(array $data) {return true;}
    }
    class Mysql extends Table{
        public function save(bool $data) {return true;}
    }

    echo (new Mysql(true))-> save (true);
    // Warning: Declaration of Mysql::save(bool $data) should be
    compatible with Table::save(array $data)

    Contoh lain 
    class Table{
        public function save($data)
        {return true;}
    }
    class Mysql extends Table{
        public function save($data): bool {return true;}
    }

    echo (new Mysql([]))->save(true);

  -->

  <!-- 
    Kesimupulan dari Type Declaration

    - Sangat Membantu Mengurangi Kejadian Bug dan mempurmudah membuat project bersama
   -->