var time = 0;
var execute = 0;

function startPause() {
  if (execute == 0) {
    execute = 1;
    ajout();
    document.getElementById("StartPause").innerHTML = "Pause";
  } else {
    execute = 0;
    document.getElementById("StartPause").innerHTML = "Start";
  }
}

function reinitialiser() {
  /*pour remettre à 0 le compteur (ordre)*/
  time = 0;
  document.getElementById("output").innerHTML = "00:00:00";
}

function ajout() {
  if (execute == 1) {
    /* The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.*/
    setTimeout(function() {
      var mins = Math.floor(time/10/60);
      var secs = Math.floor(time/10 % 60);
      var dixieme= time % 10;
      time++;

      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      document.getElementById("output").innerHTML = mins + ":" + secs + ":" + "0" + dixieme;
      ajout();
    }, 100);
  }
}
