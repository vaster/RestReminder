/// <reference path="../commands/command.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () {
   
    var eventsList = new WinJS.Binding.List();

    // bind all events from storage files
    var bindAll = function () {
        Commands.readEventsFromLocalFolder().then(function (file) {
            Windows.Storage.FileIO.readTextAsync(file).then(function (text) {
                var allEvents = JSON.parse(text);
                eventsList.splice(0, eventsList.length);
                for (var i = 0; i < allEvents.length; i++) {
                    eventsList.push(allEvents[i]);
                }
            });
        });
    }
   
    WinJS.Namespace.define("ViewMoDels.Event", {
        bindAll: bindAll,
        eventsList: eventsList,
    });
})();