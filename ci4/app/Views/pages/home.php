<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ALBANIA</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
</head>
<body>
  <div class="cursor"></div>
  <div class="wrapper">
    <div class="img-area">
      <div class="inner-area">
        <img src="images/nikko.jpg" alt="roman">
      </div>
    </div>
    <div class="name">Roman Nikko Albania</div>
    <div class="about">BSCS - SS Student</div>
    <div class="social-icons">
      <a href="https://www.facebook.com/NikkoAlbania/" class="fb"><i class="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com/nikkooops" class="twitter"><i class="fab fa-twitter"></i></a>
      <a href="https://github.com/nikkoops" class="github"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/roman-nikko-albania-77b1a0289/" class="linkedin"><i class="fab fa-linkedin"></i></a>
    </div>
    <button id="dark-mode-toggle">Toggle Dark Mode</button>  
  </div>
    <form class="wrapper" action="mailto:youremail@example.com" method="post" enctype="text/plain">
      <fieldset>
        <legend class="contact-header">Inquire Now!</legend>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Name" required>
    
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" required>
    
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" placeholder="Enter Message" required></textarea>
    
        <button type="submit">Submit</button>
      </fieldset>
    </form>
    <script src="cursor.js"></script>
    <script src="image.js"></script>
    <script src="icon.js"></script>
    <script src="about.js"></script>
</body>
</html> 
