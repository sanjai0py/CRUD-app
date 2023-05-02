import mongoose from "mongoose";

// Exporting default values can be changed as
// import dic from 'users.js'

// whereas Exporting non default values can be changed as
// import {dic as users} from "users.js"

const usersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter this Field"],
    },
    userName: {
      type: String,
      required: [true, "Please Enter this Field"],
    },
    profilePicture: String,
  },

//   this stores the data with date of creation and updation date
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", usersSchema);

export default Users;
