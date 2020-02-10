sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("northwindSAPUI5_RoutingandNavigation.controller.V_CustomerDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf northwindSAPUI5_RoutingandNavigation.view.V_InvoiceDetail
		 */
		onInit: function() {

			// Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Validate/Match the Router Details sent from source using oRouter.navTo("Router_Detail", {SelectedItem: selectOrder});
			oRouter.getRoute("RouteCusDetail").attachMatched(this._onRouteFound, this);

		},

		// Custom Method to bind the elements using the Event Arguments
		_onRouteFound: function(oEvt) {

			var oArgument = oEvt.getParameter("arguments");

			var oView = this.getView();

			oView.bindElement({
				path: "/Customers('" + oArgument.SelectedItem + "')"
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf northwindSAPUI5_RoutingandNavigation.view.V_InvoiceDetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf northwindSAPUI5_RoutingandNavigation.view.V_InvoiceDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf northwindSAPUI5_RoutingandNavigation.view.V_InvoiceDetail
		 */
		//	onExit: function() {
		//
		//	}

	});

});