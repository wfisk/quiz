Reference Link - https://github.com/jquery/jquery-migrate/blob/master/warnings.md

plugins/eonasdan/bootstrap-datetimepicker-4.17.47/src/js/bootstrap-datetimepicker.js : 949
 	From :
		input.blur();
	To :
		input.trigger("blur");