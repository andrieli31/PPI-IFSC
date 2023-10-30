<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Pagina <h1> 
<?php
$minhavar = " mundo perdido";
echo "hello $minhavar";
echo 'hello $minhavar';
echo 'hello \$minhavar'. " <br>";


$minhavar = 2;
echo "$minhavar".gettype($minhavar). "<br>";


$minhavar = 2.0;
echo "$minhavar".gettype($minhavar). "<br>";


class Pessoa {
    public $nome;
    public function __construct(){

    }


    public function alteranome($n){
        $this->nome=$n;

    }
    public function get_nome(){
        return $this->nome;
    }
    public function size_nome(){
       return strlen ($this-> nome);
  
    }
}

$p1 = new Pessoa();
$p1-> alteranome("emily");
echo $p1->get_nome();


echo $p1->get_nome().$p1->size_nome();


//ARRAY EM PHP
//===================
    $pessoas = array($p1, $p2, $p3);
    foreach($pessoas as $pessoa){
        echo "Nome: ".$pessoa->get_nome()."<br>";
    }
?>    

</body>
</html>