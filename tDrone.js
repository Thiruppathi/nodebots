var arDrone = require('ar-drone');
var tDrone = arDrone.createClient();

tDrone.createRepl();


/*
tDrone.takeoff();

tDrone
  .after(5000, function() {
    this.clockwise(0.5);
  })
  .after(3000, function() {
    this.animate('flipLeft', 15);
  })
  .after(1000, function() {
    this.stop();
    this.land();
  });
*/

/*
takeoff()

stop()


front(0.1)

stop()

back(0.1)

stop()

animate('flipLeft', 15)

animate('flipAhead', 15)
*/
