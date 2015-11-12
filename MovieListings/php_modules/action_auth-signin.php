<?php

	require_once __DIR__ . '/commons/database-connection.php';

	$request = json_decode( file_get_contents ("php://input") );

	try
	{
		$db = new Database ();
		$mongo = $db->conn();
	}
	catch (Exception $e)
	{
		$res = [
			'granted'=>false,
			'msg'=>['text'=>$e->getMessage(), 'color'=>'#FF0000']
		];

		exit ( json_encode ($res) );
	}

	// TODO
	$doc = $mongo->goldstarDB->users->findOne([
			'username'=>$request->username,
			'password'=>$request->password
		]);

	if ($doc)
	{
		$res = [
			'granted'=>true,
			'username'=>$doc['username'],
			'profile'=>$doc['profile']
		];

		echo json_encode($res);
	}
	else
	{
		$res = [
			'granted'=>false,
			'msg'=>['text'=>'Invalid Username / Password.', 'color'=>'#E91E63']
		];
		echo json_encode($res);
	}	