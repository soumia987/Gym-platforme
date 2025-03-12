const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  Phone: {
    type: String,
    required: false
  },
  Password: {
    type: String,
    required: true,
  },
  ConfirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return v === this.Password; // ConfirmPassword must match Password
      },
      message: 'Password and Confirm Password do not match'
    }
  },
  Role: {
    type: String,
    enum: ["member", "trainer"],
    default: "member"
  }
});

//  hash password before saving
UserSchema.pre("save", async function(next) {
  if (this.isModified("Password")) {
    // Hash password
    this.Password = await bcrypt.hash(this.Password, 10);
  }
  next();
});


module.exports = mongoose.model("User", UserSchema);
