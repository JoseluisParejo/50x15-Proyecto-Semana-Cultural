<?php

$arrQuestions = array(
0 => array("id" => "0",
           "title" => "Cual es el dia internacional de los derechos humanos?",
           "answers" => array(
             0=>"10 de Diciembre",
             1=>"14 de Febrero",
             2=>"8 de Agosto",
             3=>"31 de Junio"
           ),
           "correct_answer" => "10 de Diciembre"
    ),
  1 => array("id" => "1",
             "title" => "Que se define como derecho a la informacion?",
             "answers" => array(
               0=>"el derecho de una persona de buscar y recibir información en poder
               del gobierno u administraciones públicas",
               1=>"el derecho de una persona de ser informada por el estado",
               2=>"el derecho de una persona a estudiar y formarse",
               3=>"el derecho de una persona a tener internet"
             ),
             "correct_answer" => "el derecho de una persona de buscar y recibir información en poder
             del gobierno u administraciones públicas"
      ),
  2 => array("id" => "2",
             "title" => "Cuantos derechos humanos existen?",
             "answers" => array(
               0=>"30",
               1=>"10",
               2=>"35",
               3=>"40"
             ),
             "correct_answer" => "30"
      )

);

  echo json_encode($arrQuestions);
?>
