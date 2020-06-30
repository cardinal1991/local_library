/* The definition will be very similar to the other models:

1.The model should have a String SchemaType called name to describe the genre.

2.This name should be required and have between 3 and 100 characters.

3.Declare a virtual for the genre's URL, named url.

4.Export the model. */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(  //1.
  {
     //2.
    name: {type: String, required: true, maxlength: 100}
  }
);

// 3. Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//4.Export model
module.exports = mongoose.model('Genre', GenreSchema);