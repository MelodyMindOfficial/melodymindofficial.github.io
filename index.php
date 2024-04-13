<!doctype html>
<html lang="ru">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="logo.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://kit.fontawesome.com/1132cc6261.js" crossorigin="anonymous"></script>
  <title>MelodyMind</title>
  <script type="text/javascript">
    if (localStorage.getItem('language') == 'en') {
      document.documentElement.lang = 'en'
    } else {
      document.documentElement.lang = 'ru'
    }

    try {
      const message = document.getElementById('message').value
      localStorage.setItem('message', message)
    } catch (error) {

    }
    (function(l) {
      if (l.search[1] === '/') {
        var decoded = l.search.slice(1).split('&').map(function(s) {
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
</head>

<body>
  <?php
  session_start();
  if ($_SESSION['user'])
    header('Location: http://cg30388.tw1.ru/profile');
  if ($_SESSION['message']) {
    echo '<input type="hidden" value="' . $_SESSION['message'] . '" id="message" >';
    unset($_SESSION['message']);
  }
  ?>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>