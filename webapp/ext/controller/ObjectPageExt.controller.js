var id;
sap.ui.controller("fioriapi.ext.controller.ObjectPageExt", {

    onInit: function (){
        this.extensionAPI.attachPageDataLoaded(function(oEvent){
            sap.m.MessageToast.show("Current Category ID is " + oEvent.context.getProperty("CategoryID") + ": " +oEvent.context.getProperty("CategoryName"));
            id = oEvent.context.getProperty("CategoryID");
        });
        
    },

    onActivateAction : function() {
        this.getOwnerComponent().getModel().setProperty("/Categories(" + id + ")/StatusID", 2);
        this.getOwnerComponent().getModel().submitChanges();
        this.getOwnerComponent().getModel().refresh();
    },

    onDeleteAction : function() { 
        sap.m.MessageToast.show("Hello World");
    },

    onActivationRandom: function (oEvent) {
		this.getOwnerComponent().getModel().callFunction("/onRandom",{
			method: "GET",
			success: function() {
				this.getView();
				var iStatusActive = 2;

				var iPreviousStatus = this.getOwnerComponent().getModel().getProperty("/Categories(" + id + ")/StatusID");

				if(iPreviousStatus ==2){
					sap.m.MessageToast.show("Status is already in Active state");	
				}else {
					this.getOwnerComponent().getModel().setProperty("/Categories(" + id + ")/StatusID", iStatusActive);
					this.getOwnerComponent().getModel().submitChanges();
					this.getOwnerComponent().getModel().refresh();
				}
			}.bind(this),
			error: function() {
				sap.m.MessageToast.show("Error status!!!");
			}
		});                   
	}
});
