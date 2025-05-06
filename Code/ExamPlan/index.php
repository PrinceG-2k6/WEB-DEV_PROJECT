<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam Seating Plan</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
    
    <form action="" method="post">
        <h1>Login</h1>
    
    <label for="email"><i class="fa-solid fa-envelope"></i> Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter Email" required>
    
    <label for="password"><i class="fa-solid fa-lock"></i> Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter Password" required minlength="6">
    
    <label for="terms">
        <input type="checkbox" id="terms" name="terms" required>
        I agree to the terms and conditions
    </label>
    
    <button type="submit" name='submit'>Submit</button>
    <div class="student">
        <a href="/Code/ExamPlan/student/index.php">I AM STUDENT</a>
    </div>
    </form>
    
    </div>
    
    <script src="script.js"></script>
</body>
</html>

<?php
session_start();
include 'db_config.php';

if(isset($_POST['submit']))
{
  $email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

try{
  if ($result->num_rows === 1) 
{
  $user = $result->fetch_assoc();
  if (($password==$user['password'])) 
  {
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['role'] = $user['role'];
    $_SESSION['name']=$user['name'];
    
    if ($user['role'] === 'admin') {
      header("Location: /Code/ExamPlan/admin/index.php");
    } else {
      header("Location: student_dashboard.php");
    }
    exit();
  } 
  else 
  {
    echo "<script>
        alert('Invalid Password');
        </script>";
  }
} else {
  echo "<script>
        alert('User Not Found');
        </script>";
}

}
catch(PDOException $e) {
  echo "<h4 align='center'>An error occurred: " . $e->getMessage() . "</h4>";
}
}
?>
