var datetimeHelper = {
	dateMaskedInput: function (s) {
		var s = s.split('-');

		var d = s.map( function (v,i) {
			switch (i)
			{
				case 0:
					return parseInt(v) > 31 ? '01' : v;
				break;
				case 1:
					return parseInt(v) > 12 ? '01' : v;
				break;
				case 2:
					return v;
				break;
			}
		});

		return d.join('-');
	}
};

module.exports = datetimeHelper;