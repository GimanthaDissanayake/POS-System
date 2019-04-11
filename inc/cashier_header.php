
<!DOCTYPE html>
<html>
<head>
	<title>cashier</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" type="text/css">
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js">
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
  <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>-->
  <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>-->

  <link rel="stylesheet" type="text/css" href="../style/main.css">
</head>
<body>

	<header>
		
		<div class="container-fluid">
			<div class="row cashier_header">
				<div class="col-md-1">
					<div>
						<img class="float-left rounded" src="../img/logo.png">
					</div>
				</div>
				<div class="col-md-5">
					<p class="cashier_topic">Cashier Panel</p>
				</div>
				<div class="col-md-3">
					<p class="cashier_header_time float-right" ><?php
						echo date("Y/m/d"). " ";
						echo date("l");
						?>	
					</p>
				</div>
				
				<div class="col-md-3">
					<div class="icon-bar">
  						<a class="active" href="#"><i class="fa fa-home"></i></a> 
  						<a href="#"><i class="fa fa-search"></i></a> 
  						<a href="#"><i class="fa fa-envelope"></i></a> 
  						<a href="#"><i class="fa fa-globe"></i></a>
  						<a href="#"><i class="fa fa-sign-out"></i></a> 
					</div>
				</div>
			</div>
		</div>


	</header>

	<aside>
		<div class="sidenav">
 		<a href="#about">Transections</a><hr>
  		<a href="#services">Premium Customers</a><hr>
	</div>
	</aside>

	<section class="main">
		<h3 class="transections">Transections</h3>
		<div class="comtainer-fluid">
			<div class="row">
				<div class="col-md-6">
					<form>
						
					</form>
				</div>

				<div class="col-md-6">
					<table>
						
					</table>
				</div>
			</div>
		</div>
	</section>
	

</body>
</html>