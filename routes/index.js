var express = require('express');
var router = express.Router();



function Workout(catagory, days){
  this.Catagory = catagory;
  this.Days = days;
}
var workouts = [
  new Workout("Chest","Monday"),
  new Workout("legs", "Tuesday"),
  new Workout("shoulders", "Wednesday"),
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/getAllWorkouts", function(req, res, next){
  res.json(workouts);
} );

router.post("/addWorkout", function(req, res, next){
  let newWorkout = req.body;
  workouts.push(newWorkout);
  res.json(newWorkout);
})
module.exports = router;
