/**
 *
 * @class Application_WidgetActionobj
 * 
 * Execute JS object or widget method on fire action
 * 
 
 <span class="x-lprjwdg-conditionobj" id="ConditionState##_id##">
                    <span class="x-lprjelm x-lprjvar-check">State == "Running"</span>
                    <span class="x-lprjelm x-lprjvar-then"></span>
                    <span class="x-lprjelm x-lprjvar-else"></span>
                </span>
 *
 * 
 * 
 */
var Application_WidgetConditionobj = Object.extend(Application_Widget, {
	
	sWidget: "conditionobj",
	oElement: null,
	oApplication: null,
	
	
	oActions : {},
	
	constructor: function(oElement, oApplication){
		
		this.oElement = oElement;
		this.oApplication = oApplication;
		
		if (this.oApplication.bDebug){
			this.oApplication.writeDebugMsg("Init Condition obj");
		}
	},
	
	startWidget: function(oCallback){
		
		if (this.oApplication.bDebug){
			this.oApplication.writeDebugMsg("Instantiate and place action hooks");
		}
		
		// Catch action
		this.oActions =  this.oApplication.oLibClass.Vars.getElementVar(this.oElement);
		
		oCallback();
	},
	
	
	fireAction: function(sWidgetSubAction){
		
		
		
		if (this.oApplication.bDebug){
			this.oApplication.writeDebugMsg("Fire condition object");
		}
		
		
		
	}
	
	
});
