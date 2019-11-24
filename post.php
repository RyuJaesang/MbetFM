<?php
    include './dbconnection.php';
    $connect=dbconn();

    $genre_1=$_POST['genre_1'];
    $genre_2=$_POST['genre_2'];
    $genre_3=$_POST['genre_3'];

    $query="INSERT into music(genre_1, genre_2, genre_3) values('$genre_1','$genre_2','$genre_3')";
    mysql_query("set names utf8", $connect);
    mysql_query($query, $connect);
 ?>

 <script>
 windows.alert('DB로 전송 완료 !');
 location.href='./main.php'
 </script>
