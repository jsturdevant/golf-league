<?php
// pull the configuration out of the database.
$config = null;
if (!array_key_exists("config", $_SESSION)) {
	$config = ConfigDAO::getConfiguration();
	$_SESSION["config"] = $config;
} else {
	$config = $_SESSION["config"];
}

function getConfigValue($category, $variable) {
	$returnVar = "";
	global $config;
	$config = $_SESSION["config"];
	if (isset($config) && isset($config[$category]) && isset($config[$category][$variable])) {
	    $returnVar = $config[$category][$variable]["value"];
	}
	return $returnVar;
}
?>
