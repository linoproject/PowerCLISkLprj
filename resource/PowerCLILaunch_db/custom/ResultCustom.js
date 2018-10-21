
const app = require('../../../app.js');
const db_PowerCLILaunch_db = require('../../../db/PowerCLILaunch_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Result
 * 
	{
		ExecTime: {
			type: 'Date'
		},
		Name: {
			type: 'String'
		},
		Value: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		ScriptExecution: {
			type: Schema.ObjectId,
			ref : "Result"
		},
		
	}
 * 
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


