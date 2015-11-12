<?php

require_once __DIR__ . '/config.php';

class Database {
	
	private $conn = null;

	function __construct ($engineType='mongo') {

		switch ($engineType)
		{
			case 'mongo':
				try
				{
					$this->conn =  new MongoClient( Config::getDSN( $engineType ) );
				}
				catch (Exception $e)
				{
					throw new Exception( $e->getMessage() );
				}
			break;

			case 'mysql':
				$this->conn = 'driver engine for mysql';
			break;
		}

	}

	function conn () {
		return $this->conn;
	}

	function __destruct () {
		//todo
		//
	}
}