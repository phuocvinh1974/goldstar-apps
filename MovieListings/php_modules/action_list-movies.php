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
			'shortTitle'=>$item['shortTitle'],
			'IntTitle'=>isset($item['IntTitle']) ? $item['IntTitle'] : null,
			'Title'=>isset($item['Title']) ? $item['Title'] : null,
			'mediaFormat'=>isset($item['mediaFormat']) ? $item['mediaFormat'] : null,
			'ReleaseDate'=>isset($item['ReleaseDate']) ? date('d-m-Y', $item['ReleaseDate']->sec) : null
		];
	}

	echo json_encode( $movies );