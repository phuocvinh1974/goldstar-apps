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

	// TODO

	$nextMovieId = $mongo->goldstarDB->__counters->findAndModify(
 	['_id'=>'movieId'],
 	['$inc'=>['seq'=>1]],
 	null,
 	['new'=>true]);

	$mongo->goldstarDB->movies->insert([
		'_id'=>$nextMovieId['seq'],
		'shortTitle'=>$request->shortTitle
	]);

	echo json_encode(['success'=>true]);