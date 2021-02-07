function notifyMe() {
    Notification.requestPermission();
    if (Notification.permission == "default") {
        console.log("Please give user permission");
    } else {
        new Notification("New Mail", { body: "You have one new mail" });
    }

}