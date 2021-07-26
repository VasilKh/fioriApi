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
    }
});
