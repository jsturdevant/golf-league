<?php
include("./requires.inc.php");
include("./config/loadConfiguration.php");
include('./header.inc.php');
?>

<?php
include('./navigation.inc.php');
?>

    <div class="content">
    	<div class="teams">
<?php
            $teams = TeamDAO::getAllTeams();
            if (count($teams) > 0) {
?>
    	    <table class="teams">
    	        <tr>
    	            <th>Team</th>
    	            <th colspan="2">Players</th>
    	        </tr>
<?php
                foreach ($teams as $team) {
?>
                <tr>
                    <td><?=$team->name?></td>
<?php
                    foreach ($team->players as $player) {
?>
                    <td><?=$player->lastName?>, <?=$player->firstName?></td>
<?php
                    }
?>
                </tr>
<?php
                }
?>
    	    </table>
<?php
            } else {
?>
            <div class="no-teams">There are no teams defined.</div>
<?php
            }
?>
    	</div>
</div>
<?php
include('./utilities.inc.php');
?>
<?php
include('./footer.inc.php');
?>