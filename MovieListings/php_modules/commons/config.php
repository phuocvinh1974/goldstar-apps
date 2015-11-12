<?php

class Config {

	static $dsn_mongo = 'mongodb://localhost:27017/';
	static $dsn_mongolab = 'mongodb://nguyenhuuhanhlam:password@ds043022.mongolab.com:43022/gsdb';

	public static function getDSN ($dsnType, $isOnline=false) {

		switch ($dsnType) {
			case 'mongo':
				return $isOnline ? self::$dsn_mongolab : self::$dsn_mongo;
				break;
		}
	}
}