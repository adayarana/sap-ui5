sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/ComponentSupport"], function(UIComponent) {
	"use strict";
	alert("Welcome to my To Do App!");
	return UIComponent.extend("sap.ui.demo.todo.Component", {
		metadata: {
			manifest: "json"
		}
	});
});
