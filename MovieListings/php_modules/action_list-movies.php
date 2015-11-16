<?php
	require_once __DIR__ . '/commons/database-connection.php';

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

	$docs = $mongo->goldstarDB->movies->find();

	$movies = [];

	foreach ($docs as $item) {
		$movies[] = [
			'_id'=>$item['_id'],
			'shortTitle'=>$item['shortTitle']
		];
	}

	echo json_encode( $movies );