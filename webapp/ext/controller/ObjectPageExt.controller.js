sap.ui.controller("fioriapi.ext.controller.ObjectPageExt", {
    onInit: function (){
        this.extensionAPI.attachPageDataLoaded(function(oEvent){
            sap.m.MessageToast.show("Current Category ID is " + oEvent.context.getProperty("CategoryID") + ": " +oEvent.context.getProperty("CategoryName"));
        });
    }
});
