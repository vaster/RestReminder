(function () {
    "use strict";

    WinJS.UI.Pages.define("/js/view/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        init: function (element, options) {
            var Notifications = Windows.UI.Notifications;
            var toast;
            var seconds = 60;
            for (var i = 0; i < 10; i++) {

                CreateNotification(Notifications, toast, seconds + (i * 60));
            }
        },

        ready: function (element, options) {
            // TODO: Initialize the page here.
        }
    });

    function CreateNotification(Notifications, toast, seconds) {
        
        var currentTime = new Date();

        var dueTime = new Date(currentTime.getTime() + seconds * 1000);
        var noti = document.getElementById("noti");
        var textField = document.createElement("div");
        textField.innerText = "Time: " + dueTime;
        noti.appendChild(textField);
        var idNumber = Math.floor(Math.random() * 100000000);  // Generates a unique ID number for the notification.

        // Set up the notification text.
        var toastXml = Notifications.ToastNotificationManager.getTemplateContent(Notifications.ToastTemplateType.toastText02);
        var strings = toastXml.getElementsByTagName("text");
        strings[0].appendChild(toastXml.createTextNode("This is a scheduled toast notification"));
        strings[1].appendChild(toastXml.createTextNode("Received: " + dueTime.toLocaleTimeString()));

        // Create the toast notification object.
        toast = new Notifications.ScheduledToastNotification(toastXml, dueTime);
        toast.id = "Toast" + idNumber;
        // Add to the schedule.
        Notifications.ToastNotificationManager.createToastNotifier().addToSchedule(toast);
    };
})();
