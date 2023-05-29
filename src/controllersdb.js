import mongoose from 'mongoose';
let connectedDB = false;

function connectDB(url, cb) {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
      if(!err) {
        connectedDB = true;
      }
      if(cb != null) {
        cb(err);
      }
  });
}

export default connectDB
