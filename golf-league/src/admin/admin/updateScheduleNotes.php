<?php
include("requires.inc.php");
include('./../config/loadConfiguration.php');
include('./../validate-admin.php');
include('./../navigation.inc.php');
?>
<html>
<head>
    <title><?=$config["General"]["siteTitle"]["value"]?></title>
    <link href="/theme/style.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="./../js/selector.js"></script>
    <script type="text/javascript">
    function goBackToSchedule(date) {
        window.location = "/schedule.php";
    }

    var events = new Array();

    function fireEvents() {
        for (var i in events) {
            goBackToSchedule(events[i]);
        }
    }
    </script>
</head>
<body onload="fireEvents()">
<?php  
include_once("../analyticstracking.php");
?>
<div class="content">
<?php
    if (isset($_POST["oldDate"]) && isset($_POST["newDate"]) && isset($_POST["alreadyExists"]) && isset($_POST["side"]) && isset($_POST["course"]) && isset($_POST["detailsExist"]) && isset($_POST["matchId"])) {
        $oldDate = $_POST["oldDate"];
        $newDate = $_POST["newDate"];
        $updateDate = false;
        if ($oldDate != $newDate) {
            $updateDate = true;
        }
        ScheduleDAO::setNotesForDate($oldDate, $_POST["notes"], $_POST["alreadyExists"] == "true");
        if ($updateDate) {
            ScheduleDAO::moveScheduledDate($oldDate, $newDate);
        }

        // now set the course and the side
        $course = $_POST["course"];
        $side = $_POST["side"];
        $matchId = $_POST["matchId"];
        $detailsExist = $_POST["detailsExist"];
        ScheduleDAO::updateCourseScheduleMatch($newDate, $course, $side, $detailsExist, $matchId);
?>
        <script type="text/javascript">
            events.push('<?=$newDate?>');
        </script>
<?php
    } else {
?>
        <script>
<?php
        $notes = ScheduleDAO::getNotesForDate($_GET["date"]);
        $match = ScheduleDAO::getCourseScheduleMatch($_GET["matchId"]);
        $alreadyExists = "true";
        $seasonId = ScheduleDAO::getSeasonByDate($_GET["date"]);
        $courseIds = explode(",", ScheduleDAO::getCourseBySeason($seasonId));
        $courses = array();
        $sides = array();
        foreach($courseIds as $courseId) {
            $courses[$courseId] = CourseDAO::getCourseById($courseId);
        }
?>
        var sides = new Array();
<?php
        // get the sides for each of the courses
        foreach($courseIds as $courseId) {
?>
            sides['<?=$courseId?>'] = new Array();
<?php
            $sides[$courseId] = CourseDAO::getCourseSides($courseId);
            foreach($sides[$courseId] as $sideName) {
?>
                sides['<?=$courseId?>'].push('<?=$sideName?>');
<?php
            }
        }

        $singleCourse = (count($courses) == 1);

        if (null == $notes) {
            $notes = new ScheduleDate();
            $notes->date = $_GET["date"];
            $alreadyExists = "false";
        }
?>
        </script>
            <fieldset class="scheduleNotes">
                <form action="updateScheduleNotes.php" method="post" name="scheduleNotes" id="scheduleNotes" title="Schedule Notes Form">
                <p>
                    <label for="date" class="scheduleDate">Date:</label>
                    <span class="textbox">
                        <input type="hidden" name="alreadyExists" id="alreadyExists" value="<?=$alreadyExists?>"/>
                        <input type="hidden" id="oldDate" name="oldDate" value="<?=$notes->date?>"/>
                        <input type="hidden" id="detailsExist" name="detailsExist" value="<?=$match->detailsExist?>"/>
                        <input type="hidden" id="matchId" name="matchId" value="<?=$_GET["matchId"]?>"/>
                        <input name="newDate" id="newDate" type="text" size="20" value="<?=$notes->date?>"/>
                    </span>
                </p>
                <p>
                    <label for="course" class="scheduleCourse">Course:</label>
                    <span class="textbox">
<?php
                        // if the number of courses is 1, it is read only
                        if ($singleCourse) {
                            foreach($courses as $id => $course) {
?>
                                <?=$course->name?>
                                <input type="hidden" id="course" name="course" value="<?= $id ?>"/>
<?php
                            }
                        } else {
?>
                            <select id="course" name="course">
<?php
                            foreach($courses as $id => $course) {
?>
                                <!-- TODO preselect the course that was previously setup -->
                                <option value="<?=$id?>"><?=$course->name?></option>
<?php
                            }
?>
                            </select>
<?php
                        }
?>
                    </span>
                </p>
                <p>
                    <label for="side" class="scheduleSide">Side:</label>
                    <span class="textbox">
                        <!-- TODO add the side drop down for the course. If there is only one side then this should be readonly -->
                        <select name="side" id="side">
                            
                        </select>
                    </span>
                </p>
                <p>
                    <label for="notes" class="scheduleNotes">Notes:</label>
                    <span class="textbox">
                        <textarea rows="4" cols="40" name="notes" id="notes"><?=$notes->notes?></textarea>
                    </span>
                </p>
                
                <div id="alignRight">
                    <label for="submit">
                        <input name="publish" type="submit" value="Publish"/>
                    </label>
                </div>
                </form>
            </fieldset>
<?php
    }
?>

<form name="updateScheduleForm" method="POST">
    <input type="hidden" name="matchDate" value=""/>
</form>
</div>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
    $(function() {
<?php
        if (!$singleCourse) {
?>
        // hook up the sides drop down to the course that is selected
        $('#course').on('change', function() {
            // get the course id
            var courseId = $(this).val();
<?php
        } else {
?>
            var courseId = $('#course').val();
<?php
        }
?>
            // get the sides associated with the course
            var courseSides = sides[courseId];
            // check to see if there are any sides - if not, then let's add some defaults
            if (!(courseSides && courseSides.length > 0)) {
                courseSides = new Array();
                courseSides.push('front');
                courseSides.push('back');
            }
            // empty out the side select
            $('#side').empty();
            // add the sides
            $.each(courseSides, function(key, value) {
                $('#side').append($('<option></option>').attr('value', value).text(value));
            });
<?php
        if (!$singleCourse) {
?>
        });
<?php
        }
?>
    });
</script>

<?php
    include("./../utilities.inc.php"); 
?>
</body>
</html>
