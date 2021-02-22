const movieModel = require('./connection').movieModel
var movie = {}
//Insert a single data
movie.addMovie = async (movieObj) => {
    let insertedData = await movieModel.create(movieObj)
    if (insertedData) {
        return insertedData
    }
    else {
        let err = new Error("Data not inserted")
        err.status = 500
        throw err;
    }
}
//Retrieve all data
movie.find = async () => {
    let movieData = await movieModel.find()
    if (movieData) { return movieData }
    else {
        let err = new Error("No record found")
        err.status = 404
        throw err;
    }
}
//Retrieve data based on MovieId
movie.getMovie = async (movieId) => {
    let movieDetails = await movieModel.findOne({ movieId: movieId }, { _id: 0, movieName: 1, language: 1 })
    if (movieDetails) { return movieDetails }
    else {
        let err = new Error("No record found")
        err.status = 404
        throw err;
    }
}
//Insert multiple data
movie.multipleInsert = async (movieObj) => {
    let insertedData = await movieModel.insertMany(movieObj)
    if (insertedData.length > 0) {
        return insertedData
    }
    else {
        let err = new Error("Data not inserted")
        err.status = 500
        throw err;
    }
}
//Update details
movie.addShows = async (showObj) => {
    let updatedData = await movieModel.updateOne({ movieId: 2002 }, { $push: { showDetails: showObj } })
    if (updatedData.nModified > 0) {
        return updatedData
    }
    else {
        let err = new Error("Data not updated")
        err.status = 500
        throw err;
    }
}
//Delete details of a movie
movie.removeShow = async (movie) => {
    let deletedData = await movieModel.deleteOne({ movieName: movie })
    if (deletedData.deletedCount > 0) {
        return deletedData;
    }
    else {
        let err = new Error("Could not delete data")
        err.status = 500;
        throw err;
    }
}
module.exports = movie;
