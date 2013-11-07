<?php
include('./requires.inc.php');
include('./config/loadConfiguration.php');
include('./header.inc.php');
include('./validate-admin.php');
?>

<?php 
include('./navigation.inc.php');
?>

<script type="text/javascript">
    function createPlayer() {
        var fullTimeValue = document.getElementById("fullTimeCheckbox").checked;
        if (fullTimeValue == true) {
            document.getElementById("fullTime").value = "1";
        } else {
            document.getElementById("fullTime").value = "0";
        }
        document.forms.playerForm.submit();
    }
</script>
<div class="content">
	<form action="createplayer.php" method="post" name="playerForm" id="playerForm" title="Player Creation Form" dir="ltr" lang="en">
		<fieldset class="addPostFields">
			<p>
				<label for="firstName" class="playerTitle">First Name:</label> 
				<span class="textbox">
				    <input name="firstName" type="text" size="78" maxlength="50" />
				</span>
			</p>
			<p>
				<label for="lastName" class="playerTitle">Last Name:</label> 
				<span class="textbox">
				    <input name="lastName" type="text" size="78" maxlength="50" />
				</span>
			</p>
			<p>
				<label for="email" class="playerTitle">Email Address:</label> 
				<span class="textbox">
				    <input name="email" type="text" size="78" maxlength="50" />
				</span>
			</p>
			<p>
				<label for="phoneNumber" class="playerTitle">Phone Number:</label> 
				<span class="textbox">
				    <input name="phoneNumber" type="text" size="78" maxlength="20" />
				</span>
			</p>
			<p>
				<label for="fullTime" class="playerTitle">Full Time:</label> 
				<span class="textbox">
				    <input name="fullTimeCheckbox" type="checkbox" id="fullTimeCheckbox"/>
				    <input name="fullTime" type="hidden" id="fullTime" value="0"/>
				</span>
			</p>
			
			<div id="alignRight">
				<label for="submit">
				    <input name="createPlayerButton" type="button" value="Create Player" onclick="createPlayer()" />
				</label>
			</div>
		</fieldset>
	</form>
</div>

<?php
include("./utilities.inc.php"); 
?>
<?php
include('./footer.inc.php');
?>