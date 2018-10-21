/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/PowerCLILaunch_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_PowerCLILaunch_db_schema = [];
const db_PowerCLILaunch_db = [];

/**
 * SCHEMA DB PowerCLILaunch_db
 */



 /**
  * Result
  */
db_PowerCLILaunch_db_schema.Result = new mongoose.Schema({
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
	ScriptExecution: {
		type: Schema.ObjectId,
		ref : "ScriptExecution"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * ScriptExecution
  */
db_PowerCLILaunch_db_schema.ScriptExecution = new mongoose.Schema({
	Filename: {
		type: 'String', 
		required : true
	},
	HasResults: {
		type: 'String'
	},
	ResultType: {
		type: 'String'
	},
	State: {
		type: 'String'
	},
	TimeEnd: {
		type: 'Date'
	},
	TimeStart: {
		type: 'Date'
	},
	TimeUpdate: {
		type: 'Date'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	ScriptExecution: {
		type: Schema.ObjectId,
		ref : "Result"
	},
	*/
});


 /**
  * User
  */
db_PowerCLILaunch_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./PowerCLILaunch_db_customSchema.js');
var PowerCLILaunch_db_model = require('./PowerCLILaunch_db_crud.js');

// Declare mongoose model

db_PowerCLILaunch_db.Result = PowerCLILaunch_db_model.connection.model('Result', db_PowerCLILaunch_db_schema.Result );
db_PowerCLILaunch_db.ScriptExecution = PowerCLILaunch_db_model.connection.model('ScriptExecution', db_PowerCLILaunch_db_schema.ScriptExecution );
db_PowerCLILaunch_db.User = PowerCLILaunch_db_model.connection.model('User', db_PowerCLILaunch_db_schema.User );

module.exports = db_PowerCLILaunch_db;

// Create ADMIN user if does not exist
createUser.createUser();
