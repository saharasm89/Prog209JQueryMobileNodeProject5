var storeData = [];


document.addEventListener("DOMContentLoaded", function(){
    var workoutList = document.getElementById("workoutList");
    displayWorkoutList(workoutList);

    document.getElementById("AddWorkout-button").addEventListener("click", function(){
        let dayTextbox = document.getElementById("day");
        let categoryTextbox = document.getElementById("category");

        let workout = {
            Catagory: categoryTextbox.value, 
            Days: dayTextbox.value
        };

        $.post("/addWorkout", workout, function(result){
            console.log(result);
            window.location.href = "#workoutplan";
            window.location.reload();
        });

    });

    document.getElementById("deleteWorkout-button").addEventListener("click", function(){
        let dayTextbox = document.getElementById("deleteDay");
        let categoryTextbox = document.getElementById("deleteCategory");

        $.ajax({
            type: "DELETE",
            url:"/deleteWorkout" +  "?category=" + categoryTextbox.value +"&day=" + dayTextbox.value,
            success: function(result){
                console.log(result);
                window.location.href = "#workoutplan";
                window.location.reload();
            },
            error: function(){
                console.log("Did Not Delete");
                alert("Did Not Delete");
            }
            // "/deleteWorkout/Category=chest/Day=Monday"
        });
    });

});



function displayWorkoutList(workoutList){
    $.get("/getAllWorkouts", function(data,status){
        console.table(data);
        storeData = data;
        console.table(storeData);
        storeData.forEach(function(workout){
            var listItem = document.createElement("li");
            console.table(workout);
            listItem.innerHTML = workout.Catagory + " " + workout.Days; 
            console.log(listItem.innerHTML);

            workoutList.appendChild(listItem);
        })
    })
}