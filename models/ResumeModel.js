const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResumeModelSchema = new Schema({
  objective: { type: String },
  fullname: { type: String },
  email: { type: String },
  phonenumber: { type: Number },
  address: { type: String },
  DOB: { type: String },
  college: { type: String },
  hsc: { type: String },
  sslc: { type: String },
  hobbies: { type: String },
});

const ResumeModel = mongoose.model("resume", ResumeModelSchema);

module.exports = ResumeModel;
