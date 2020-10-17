const getAllUser = require("./user_gateway.js");
const userGateway = require("./user_gateway.js");

const searchUser = async (user) => {
  return await userGateway.getAllUser();
};

module.exports = { searchUser };
