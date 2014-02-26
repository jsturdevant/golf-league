<?php

class CourseDAO {
	// 	select b.*, a.* from courses a inner join holes b on a.id = b.courseId where a.id = %s;
	const GET_COURSE_SQL = "select b.*, a.* from courses a inner join holes b on a.id = b.courseId where a.id = %s;";
	const GET_ALL_COURSES_SQL = "select * from courses";
	const GET_HOLES_SQL = "select * from holes where courseId = %s and side = '%s' order by number asc";
	const GET_TEES_SQL = "select * from tees where course = %s";
	const GET_TEE_BY_ID_SQL = "select * from tees where id = %s";
	const GET_COURSE_SIDES_SQL = "select * from course_sides where courseId = %s";
	
	public static function getCourseSides($courseId) {
		$data = DBUtils::escapeData(array($courseId));
		$query = vsprintf(self::GET_COURSE_SIDES_SQL, $data);
		$sides = array();
		$result = @mysql_query($query);
		if ($result) {
			$count = mysql_num_rows($result);
			for ($i = 0; $i < $count; $i++) {
				$row = mysql_fetch_assoc($result);
				$name = $row["name"];
				array_push($sides, $name);
			}
		} else {
			throw new Exception("DB : " . mysql_error());
		}
		
		return $sides;
	}
	
	public static function getCourseById($id) {
		$data = DBUtils::escapeData(array($id));
		$query = vsprintf(self::GET_COURSE_SQL, $data);
		$course = new Course();
		$result = mysql_query($query) or die("Unable to get the course with the specified id ($id)");
		if ($result) {
			$count = mysql_num_rows($result);
			for ($i = 0; $i < $count; $i++) {
			    $row = mysql_fetch_assoc($result);
		    	$course->id = $row["courseId"];
		    	$course->name = $row["name"]; 
				$hole = new Hole();
				$hole->number = $row["number"];
				$hole->par = $row["par"];
				$hole->mensHandicap = $row["mens_handicap"];
				$hole->womensHandicap = $row["womens_handicap"];
				$hole->side = $row["side"];
				array_push($course->holes, $hole);
			}
		}
		
		if (isset($course->id)) {
			array_push($course->tees, self::getTees($course->id));
		}
		return $course;
	}
	
	public static function getAllCourses() {
		$query = self::GET_ALL_COURSES_SQL;
		$courses = array();
		$result = @mysql_query($query);
		if ($result) {
			$count = mysql_num_rows($result);
			for ($i = 0; $i < $count; $i++) {
				$row = mysql_fetch_assoc($result);
				$course = new Course();
				$course->id = $row["id"];
				$course->name = $row["name"];
				array_push($courses, $course);
			}
		} else {
			throw new Exception("DB : " . mysql_error());
		}
		return $courses;
	}
	
	public static function getHolesPerSide($courseId, $side) {
		$data = DBUtils::escapeData(array($courseId, $side));
		$query = vsprintf(self::GET_HOLES_SQL, $data);
		$holes = array();
		$result = mysql_query($query) or die("Could not search for the holes for the course ($courseId) and side ($side)");
		$count = mysql_num_rows($result);
		for ($i = 0; $i < $count; $i++) {
			$row = mysql_fetch_assoc($result);
			$hole = new Hole();
			$hole->number = $row["number"];
			$hole->par = $row["par"];
			$hole->mensHandicap = $row["mens_handicap"];
			$hole->womensHandicap = $row["womens_handicap"];
			$hole->side = $row["side"];
			array_push($holes, $hole);
		}
		return $holes;
	}
	
	public static function getTees($courseId) {
		$data = DBUtils::escapeData(array($courseId));
		$query = vsprintf(self::GET_TEES_SQL, $data);
		$tees = array();
		if (null != $courseId) {
    		$result = @mysql_query($query);
	    	if ($result) {
		    	$count = mysql_num_rows($result);
			    for ($i = 0; $i < $count; $i++) {
				    $row = mysql_fetch_assoc($result);
    				$tee = new Tee();
	     			$tee->color = $row["color"];
		    		$tee->id = $row["id"];
			    	$tee->name = $row["name"];
				    $tee->rating = $row["rating"];
    				$tee->slope = $row["slope"];
	    			array_push($tees, $tee);
		    	}
		    } else {
			    throw new Exception("DB : " . mysql_error());
		    }
		}
		return $tees;
	}
	
	public static function getTeeById($teeId) {
		$data = DBUtils::escapeData(array($teeId));
		$query = vsprintf(self::GET_TEE_BY_ID_SQL, $data);
		$tee = new Tee();
		$result = @mysql_query($query);
		if ($result) {
			$row = mysql_fetch_assoc($result);
			$tee->color = $row["color"];
			$tee->id = $row["id"];
			$tee->name = $row["name"];
			$tee->rating = $row["rating"];
			$tee->slope = $row["slope"];
		} else {
			throw new Exception("DB : " . mysql_error());
		}
		return $tee;
	}
	
}

?>