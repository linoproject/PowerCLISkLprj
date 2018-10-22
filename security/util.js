const logger = require('../logger.js');

//DEFINE ERROR HANDLER
exports.handleError = function(err, res) {
    logger.error(err);
    res.status(500);
    res.send(err);
}

var createDefaultScript= function(){
    db_PowerCLILaunch_db = require('../db/PowerCLILaunch_db_schema.js');
    //db_PowerCLILaunch_db.ScriptExecution.
}
exports.createDefaultScript = createDefaultScript;
