<?php
	$request = json_decode( file_get_contents ("php://input") );
	
	//TODO

	require_once 'commons/database-connection.php';

	$db = new Database ();

	$mongo = $db->conn();

	//

	echo json_encode(['granted'=>false,'msg'=>'Username or Password incorrect.','color'=>'#000']);
	