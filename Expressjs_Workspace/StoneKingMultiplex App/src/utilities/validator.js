let validator = {};

validator.validateShowId = (showId) => {
    let pattern = /^\d{4}$/;
    if (!pattern.test(showId)) {
        let err = new Error("Enter a valid show id")
        err.status = 406
        throw err
    }
}