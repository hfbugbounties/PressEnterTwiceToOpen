// a key map of allowed keys
var allowedKeys = {
  13: 'enter',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['enter'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/American_Eskimo_Dog.jpg/1280px-American_Eskimo_Dog.jpg')";

  var audio = new Audio('audio/pling.mp3');
  audio.play();
  
confirm("Welcome to our website, It seems we are out of coffee but stick around, we will be here all day. Red bull is the new meta.")
    window.location.href = "ms-photos:";
}

