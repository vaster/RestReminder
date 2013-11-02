/// <reference path="../../commands/command.js" />
(function () {
    "use strict";

    WinJS.UI.Pages.define("/js/view/events/events.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function (element, options) {
            ViewMoDels.Event.bindAll();
        },

        ready: function (element, options) {
            Commands.initAppBarrEventsCommands();
            Commands.initNewEventCreateBtn(); 
        }
    });
})();
