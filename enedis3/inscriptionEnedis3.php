<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>FORMULAIRE</title>
    <link rel="stylesheet" href="" />
  </head>
  <body>

<h2>CONTACT</h2>

  <form action="traitementEnedis3.php" method="post" >

    <p>
        <label for='nom'>NOM :</label>
        <input type="text" name="nom" id="nom" />
    </p>
      <br />
  <br />
      <p>
          <label for='prenom'>PRENOM :</label>
          <input type="text" name="prenom" id="prenom" />
      </p>
        <br />

      <br />
    <p>
        <label for="mail">EMAIL :</label>
        <input type="email" name="mail" id="mail" tabindex="30" placeholder="...........@........... .fr ou .com" />
    </p>
      <br />

      <input type="submit" name="button" value="submit">

</form>

</body>
</html>
