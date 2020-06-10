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
});

router.delete("/deleteWorkout", function(req, res){
  let categoryValue = req.query.category;
  let dayValue = req.query.day;
  let workoutDeleted = false;
  // numbers = [1, 8, 6, 5];  [ 1 ]  7.value()
  // print(  numbers[i].value()  )
  // numbers[1] = 8

  // workout.Catagory   workout.Days
  
  for (let i = 0; i < workouts.length; i++){
    if( workouts[i].Catagory === categoryValue && workouts[i].Days === dayValue){
      workouts.splice(i, 1);
      workoutDeleted = true;
      break;
    }
  }

  if(!workoutDeleted){
    console.log(workoutDeleted);
    console.log("did not delete");
    return res.status(500).send("Did not delete item");
  }
  
  else{
    console.log("Item was successfully deleted");
    res.send("The Item Was Successfully deleted");

  }
});


module.exports = router;
