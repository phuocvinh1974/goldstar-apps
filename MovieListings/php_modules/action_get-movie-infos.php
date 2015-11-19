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
			'conn'=>false,
			'msg'=>['text'=>$e->getMessage(), 'color'=>'#FF0000']
		];

		exit ( json_encode ($res) );
	}

	echo 'this is id: '.$request->movieId.' of ';