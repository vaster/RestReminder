/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
/// <reference path="../model/event.js" />
(function () {
    var initAppBarGlobalCommands = function () {
        var eventsButton = document.getElementById("navigate-onClick-to-events");
        eventsButton.addEventListener("click", function () {
            WinJS.Navigation.navigate("/js/view/events/events.html");
        });
    }

    var initAppBarrEventsCommands = function () {
        var eventsButton = document.getElementById("call-form-for-event");
        eventsButton.addEventListener("click", function () {
            var eventCreationFormHolder = document.getElementById("event-form-creation-form").winControl;
            eventCreationFormHolder.show(eventCreationFormHolder, "right", "center");
        });
    }

    var initNewEventCreateBtn = function () {
        var createEventBtn = document.getElementById("create-event-btn");
        createEventBtn.addEventListener("click", function () {
            var eventDTO = Models.Event.eventDTO;

            var title = document.getElementById("new-event-title").value;
            var description = document.getElementById("new-event-description").innerHTML;

            eventDTO.title = title;
            eventDTO.description = description;
            var localFolder = Windows.Storage.ApplicationData.current.localFolder;

            localFolder.createFileAsync("events", Windows.Storage.CreationCollisionOption.openIfExists).then(function (file) {
                var content = JSON.stringify(eventDTO);
                Windows.Storage.FileIO.readTextAsync(file).then(function (oldContent) {
                    oldContent = oldContent.replace("[", "");
                    oldContent = oldContent.replace("]", "");
                    content = content + ',' + oldContent;

                    Windows.Storage.FileIO.writeTextAsync(file, "[" + content + "]");
                });
            });
        });
    }

    var readEventsFromLocalFolder = function () {

        var localFolder = Windows.Storage.ApplicationData.current.localFolder;
        return localFolder.createFileAsync("events", Windows.Storage.CreationCollisionOption.openIfExists);
    }

    WinJS.Namespace.define("Commands", {
        initAppBarCommands: initAppBarGlobalCommands,
        initAppBarrEventsCommands: initAppBarrEventsCommands,
        initNewEventCreateBtn: initNewEventCreateBtn,
        readEventsFromLocalFolder: readEventsFromLocalFolder,
    });
})();