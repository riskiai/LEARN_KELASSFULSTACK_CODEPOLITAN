<!-- 

    Closure 
    - $func = function() {echo "Closure defined"; };
    - echo $func(); // closure defined

    Closure Scope
    $var = "closure";
    $func = function() {echo "{$var} defined";};
    echo $func(); // Notice: undefined variable: var

    Bagaimana cara passing Variable dalam closure ? 

    Closure Parameters
    $var = "Closure"; 
    $func = function($string){echo "{$string} defined";};
    echo $func($var); // closure defined

 -->