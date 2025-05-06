<?php
session_start();
session_unset();
session_destroy();
header("Location: /Code/ExamPlan/index.php");
exit();
?>
