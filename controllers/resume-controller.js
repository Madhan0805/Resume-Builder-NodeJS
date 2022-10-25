const { response } = require("express");
const ResumeModel = require("../models/ResumeModel");

const ResumeController = {
  createNewResume: async (request, response) => {
    let data = request.body;
    try {
      {
        let newUser = new ResumeModel({
          objective: data.objective,
          fullname: data.fullname,
          email: data.email,
          phonenumber: data.phonenumber,
          address: data.address,
          DOB: data.DOB,
          college: data.college,
          hsc: data.hsc,
          sslc: data.sslc,
          hobbies: data.hobbies,
        });
        let result = await newUser.save();
        if (result === null) {
          response.status(200).send({
            status: true,
            message: "unable to add user",
          });
        } else {
          response.status(200).send({
            status: true,
            message: "Resume details added successfully",
          });
        }
      }
    } catch (error) {
      response.status(500).send({
        status: false,
        error,
      });
    }
  },
  userGetCreatedResume: async (request, response) => {
    let result = await ResumeModel.find();
    let sendData = {
      status: true,
      resumeDetails: result,
    };
    response.send(sendData);
  },
  userCreatedResume: async (request, response) => {
    let data = request.body;
    try {
      let result = await ResumeModel.findById(data.id);

      if (result) {
        response.status(200).send({
          status: true,
          result,
        });
      } else {
        response.status(200).send({
          status: false,

          message: "user not found",
        });
      }
    } catch (error) {
      response.status(500).send({
        status: false,

        error,
      });
    }
  },
};

module.exports = ResumeController;
