<br />
<div align="center">
  <h1 align="center">Module 7: Third-Party API's Daily Planner App</h3>
</div>

![](./screenshot/scheduleWebApp.gif)

### App Link
<a href="https://rpjsazon.github.io/Third-Party-APIs-DailyPlannerApp/"><strong>Third-Party-APIs-DailyPlannerApp</strong></a>

Acceptance Criteria:
* Display the current day at the top of the calendar when a user opens the planner.

  ``` 
  var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  $("#currentDay").html(todayDate);
  ```
* Present timeblocks for standard business hours when the user scrolls down.
  ``` 
    <!-- md 1 for time name, md 10 for description and md-1 button -->
    <div id="time8" class="row time-block">
      <div class="col-md-1 hour">
        8AM
      </div>
      <textarea id="sortable" class="col-md-10 description"></textarea>
      <button class="saveBtn col-md-1">
        <!-- Since fontawesome is installed. I insert save icon -->
        <i class="fa-solid fa-floppy-disk"></i>
        <!-- Delete Icon 
        <i id="deleteIcon" class="fa-solid fa-trash"></i>
        -->
      </button>
    </div>
  ```
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
  ``` 
    if (timeBlock < currentTime){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
      // If Div class time-block is equal than currentTime (moment) then it is present.
      // removes color of past and future.
      else if (timeBlock === currentTime){
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past"); 
      }
      else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
  ```
* Allow a user to enter an event when they click a timeblock.
* Save the event in local storage when the save button is clicked in that timeblock.
  ``` 
  $("#time8 .description").val(localStorage.getItem("time8"));
  ...
  ```
* Persist events between refreshes of a page.



### Built With

This section should list any major frameworks/libraries used.

* Moment.js [https://momentjs.com/](https://momentjs.com/)
* jQuery [https://jquery.com/](https://jquery.com/)
* Bootstrap [https://getbootstrap.com/](https://getbootstrap.com/)
* JavaScript