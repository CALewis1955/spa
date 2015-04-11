/*
*	spa.fake.js
*	Fake module
*/

/* jslint 	browser : true, continue : true,
   devel : true, indent : 2, maxerr : 50,
   newcap : true, nomen : true, plusplus : true,
   regexp : true, sloppy : true, vars : false,
   white : true
*/

/*global $, spa */

spa.fake = (function () { 
	'use strict';
	//---------BEGIN MODULE SCOPE VARIABLES--------------------//
	var getPeopleList;
	//---------END MODULE SCOPE VARIABLES---------------------//

	//---------BEGIN PUBLIC METHODS---------------------------//
	getPeopleList = function() {
		return [
			{ name : 'Betty', id : 'id_01',
				css_map : { top: 20, left: 20,
					'background-color': 'rgb(128, 128, 128)'
				}
			},
			{ name : 'Mike', id : 'id_02',
				css_map : { top: 60, left: 20,
					'background-color': 'rgb(128, 256, 128)'
				}
			},
			{ name : 'Pebbles', id : 'id_03',
				css_map : { top: 100, left: 20,
					'background-color': 'rgb(128, 192, 192)'
				}
			},
			{ name : 'Wilma', id : 'id_04',
				css_map : { top: 140, left: 20,
					'background-color': 'rgb(192, 128, 128)'
				}
			}
		];
	};

	return { getPeopleList : getPeopleList };
} ());
