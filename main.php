<html>
<head>
<title>DB connection TEST</title>
</head>
<body>
  <?
      include("./dbconnection.php");
      $connect=dbconn();
  ?>
  <form action='./post.php' name='review_table' method='post'>
<br>
<br>
<CENTER>DB로 전송할 값 입력받기</b></div><br>
<form action="" method="post">
<label>장르1 : </label><input type="text" name="genre_1" class="box"/><br>
<label>장르2 : </label><input type="text" name="genre_2" class="box"/></br>
<label>장르3 : </label><input type="text" name="genre_3" class="box"/>

<center><input type="submit" value="전송"/><br />

</form>
</body>

</html>
