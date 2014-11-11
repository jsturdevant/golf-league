<?php
$currentFile = $_SERVER["PHP_SELF"];
$parts = Explode('/', $currentFile);
$thisPage = $parts[count($parts) - 1];
?>

    <div class="navigation">
        <?php
        if ($thisPage != "index.php") {
        ?>
        <a href="/index.php">
            <span class="nav-key">Home</span>
        </a>
        <?php
        }
        if ($thisPage != "schedule.php") {
        ?>
        <a href="/schedule.php">
            <span class="nav-key">Schedule</span>
        </a>
        <?php
        }
        if ($thisPage != "teams.php") {
        ?>
            <a href="/teams.php">
                <span class="nav-key">Teams</span>
            </a>
        <?php
        }
        if ($thisPage != "rules.php") {
        ?>
        <a href="/rules.html">
            <span class="nav-key">Rules</span>
        </a>
        <?php
        }
        if ($thisPage != "subs.php") {
        ?>
        <a href="/member/subs.php">
            <span class="nav-key">Subs</span>
        </a>
        <?php
        }
        if ($_SESSION["admin"] == 1) {
       	?>
            <a href="/admin/index.php">
                <span class="admin-nav-key">Admin Functions</span>
            </a>
        <?php
        }
        ?>
    </div>