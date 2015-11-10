<?php

class Database {
	
	private $conn = true;

	function __construct ($engineType='mongodb') {

		switch ($engineType)
		{
			case 'mongodb':
				$this->conn = 'driver engine for mongo';
				return $conn;
			break;

			case 'mysql':
				$this->conn = 'driver engine for mysql';
				return $conn;
			break;
		}

	}

	function conn () {
		return $conn;
	}

	function __destruct () {
		//todo
		//
	}
}