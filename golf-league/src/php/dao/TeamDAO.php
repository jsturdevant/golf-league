<?php
/*
 * Please add the following as required elements when including this file
 *     - config.inc.php
 *     - dao/PlayerDAO.php
 *     - dao/ScheduleDAO.php
 *     - model/Team.php
 *     - model/Player.php
 */

/**
 * This class is used to retrieve all of the information relating to
 * teams. This will include the players on the team.
 *
 * @author Jon Sturdevant
 */
class TeamDAO {

    const LOOKUP_TEAMS_SQL = "select * from teams where season = %s order by name asc";
    const LOOKUP_TEAM_BY_PLAYER_ID_SQL = "select * from teams where (players like '%s' or players like '%s') and season = %s";
    const LOOKUP_TEAM_BY_TEAM_ID_SQL = "select * from teams where id = %s";
    const ADD_TEAM_SQL = "insert into teams (name, players, season) values ('%s', '%s', %s)";
    const DELETE_TEAM_SQL = "delete from teams where id = %s";
    const GET_SEASON_SQL = "select id, startDate, endDate from seasons where startDate < CURDATE() and endDate > CURDATE()";
    const GET_NEXT_SEASON_SQL = "select id, startDate, endDate from seasons where startDate > CURDATE() order by endDate asc limit 0, 1";
    const CURRENT = -1;

    public static function getAllTeams($session = self::CURRENT) {
        if ($session == self::CURRENT) {
        	$seasonId = ScheduleDAO::getCurrentSeason();
        } else {
        	$seasonId = $session;
        }
        $teams = array();
        $query = sprintf(self::LOOKUP_TEAMS_SQL, $seasonId);
        $db = DBUtils::getInstance();

        $result = $db->query($query) or die("No teams have been defined");
        // create team objects from the results and store it in a list to be returned
        while ($row = $db->getRow($result)) {
            $team = new Team();
            // id
            $team->id = $row["id"];
            $team->name = $row["name"];
            /*
             * Using array_filter so that in the situation where there are no players
            * the array won't be of size 1, it will be size 0.
            */
            $team->players = array_filter(explode(",", $row["players"]));
            array_push($teams, $team);
        }

        foreach($teams as $team) {
            // need to get the actual players for the team
            $newplayers = array();
            foreach($team->players as $player) {
                $newplayer = PlayerDAO::getPlayer($player);
                array_push($newplayers, $newplayer);
            }
            $team->players = $newplayers;
        }

        return $teams;
    }

    public static function getTeamById($teamId) {
        $query = sprintf(self::LOOKUP_TEAM_BY_TEAM_ID_SQL, $teamId);
        $db = DBUtils::getInstance();
        $result = $db->query($query) or die("No teams have been defined for id = $teamId");

        // create team objects from the results
        $team = new Team();
        if ($result) {
        	$row = $db->getRow($result);
            // id
            $team->id = $row["id"];
            $team->name = $row["name"];
            /*
             * Using array_filter so that in the situation where there are no players
             * the array won't be of size 1, it will be size 0.
             */
            $team->players = array_filter(explode(",", $row["players"]));

            // need to get the actual players for the team
            $newplayers = array();
            foreach($team->players as $player) {
                $newplayer = PlayerDAO::getPlayer($player);
                array_push($newplayers, $newplayer);
            }
            $team->players = $newplayers;
        }

        return $team;
    }
    
    public static function getTeamIdByPlayerId($playerId, $season = self::CURRENT) {
    	if ($season == self::CURRENT) {
    		$seasonId = ScheduleDAO::getCurrentSeason();
    	} else {
    		$seasonId = $season;
    	}
    	
    	if ($seasonId == "" || $seasonId == null) {
    		$seasonId = -1;
    	}
    	
    	$query = sprintf(self::LOOKUP_TEAM_BY_PLAYER_ID_SQL, "%,".$playerId, $playerId.",%", $seasonId);
        $db = DBUtils::getInstance();
    	
    	$result = $db->query($query);
    	$teamId = -1;
    	if ($result) {
    		$row = $db->getRow($result);
    		$teamId = $row["id"];
    	} else {
    		throw new Exception("DB : " . $db->getError());
    	}
    	
    	return $teamId;
    }

    public static function addTeamByPlayer($name, $players, $nextSeason = false) {
        $playerIdsArray = array();
        foreach ($players as $player) {
            array_push($playerIdsArray, $player->id);
        }
        $playerIds = implode(",", $playerIdsArray);
        return self::addTeamByIds($name, $playerIds, $nextSeason);
    }

    /**
     * Creates a team with the specified name with the specified players. If the nextSeason flag is
     * set then this will setup the team for the very next season that is setup.
     * 
     * This code makes the assumption that either the current season or the next season will always
     * be available in the database. If the season is not available then an exception will be thrown.
     * 
     * @param String $name The name of the team
     * @param String $playerIds A comma delimited list of player IDs
     * @param boolean $nextSeason (optional) flag to indicate if the team should be setup for next season.
     * @throws Exception if the season can not be determined or if there is an error getting to the database.
     */
    public static function addTeamByIds($name, $playerIds, $nextSeason = false) {
    	$seasonId = 0;
    	$query = self::GET_SEASON_SQL;
    	if ($nextSeason) {
    		$query = self::GET_NEXT_SEASON_SQL;
    	}
        $db = DBUtils::getInstance();
    	$result = $db->query($query);
    	if ($result) {
    		$row = $db->getRow($result);
    		$seasonId = $row["id"];
    	} else {
    		throw new Exception("DB : Could not determine the season that the team should belong to - " . $db->getError());
    	}
    	
        $data = array($name, $playerIds, $seasonId);
        $data = $db->escapeData($data);
        
        $query = vsprintf(self::ADD_TEAM_SQL, $data);

        $result = $db->query($query);

        $teamId = "";

        if ($result) {
            $teamId = $db->getLastInsertId();
        } else {
            throw new Exception("DB : " . $db->getError());
        }

        return $teamId;
    }
    
    public static function deleteTeam($id) {
        $db = DBUtils::getInstance();
        $data = $db->escapeData(array($id));
        $query = vsprintf(self::DELETE_TEAM_SQL, $data);
        $result = $db->query($query);
        
        $returnValue = false;
        if ($result) {
            $returnValue = true;
        } else {
            throw new Exception("DB : " . $db->getError());
        }
        
        return $returnValue;
    }
    
    /**
     * Get the partner for the player with the given id.
     * 
     * @param $playerId The id of the player to get the partner for.
     * @param $matchDate The date of the match.
     * @return The Player object of the partner. If the season isn't using team
     * format, then the result will be null.
     */
    public static function getParterOfPlayer($playerId, $matchDate) {
        $partner = null;
        // first we need to determine the team structure
        $teamStructure = ScheduleDAO::getSeasonTeamStructureByDate($matchDate);
        if ($teamStructure == "TWO_PERSON") {
            $teamId = self::getTeamIdByPlayerId($playerId);
            $team = self::getTeamById($teamId);
            $players = $team->players;
            foreach($players as $player) {
                if ($player->id != $playerId) {
                    $partner = $player;
                    break;
                }
            }
        }
        return $partner;
    }
}

?>
