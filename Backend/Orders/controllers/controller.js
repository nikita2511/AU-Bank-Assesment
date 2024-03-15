const fs = require("fs");
const path = require("path");
const { statusCodes, responsHeader } = require("../../constants");
let response = {
  headers: responsHeader,
  body: {},
};
module.exports.getStates = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../../sales.json");
    console.log(filePath);
    const jsonData = await fs.promises.readFile(filePath, "utf-8");
    const orders = JSON.parse(jsonData);
    const uniqueStates = new Set(orders.map((order) => order.State));
    const statesArray = Array.from(uniqueStates);
    console.log(statesArray);
    response.body = {
      states: statesArray,
    };
    res.status(statusCodes.SUCCESS).send(response);
  } catch (error) {
    response.body = {
      message: "Error reading data or retrieving states",
      sttaus: statusCodes.SERVER_ERROR,
    };
    res.status(statusCodes.SERVER_ERROR).send(response);
  }
};
module.exports.getStateMinMaxDates = async (req, res) => {
  try {
    console.log("inside getStateMinMax");
    const dataPath = path.join(__dirname, "../../sales.json");
    const jsonData = await fs.promises.readFile(dataPath, "utf-8");
    const orders = JSON.parse(jsonData);
    // console.log(orders);
    const selectedState = req.query.state;
    console.log(selectedState);
    const stateOrders = orders.filter((order) => order.State === selectedState);
    // console.log("stateOrders", stateOrders);
    if (stateOrders.length === 0) {
      console.log("inside stateorders");
      response.body = {
        message: "No orders found for state",
        status: statusCodes.NOT_FOUND,
      };
      res.status(statusCodes.NOT_FOUND).send(response);
    }

    const dates = stateOrders.map((item) => new Date(item["Order Date"]));
    const minDate = new Date(Math.min(...dates)).toISOString().split("T")[0];
    const maxDate = new Date(Math.max(...dates)).toISOString().split("T")[0];

    response.body = {
      dates: { minDate, maxDate },
    };
    res.status(statusCodes.SUCCESS).send(response);
  } catch (error) {
    response.body = {
      message: "Error reading the dates",
      sttaus: statusCodes.SERVER_ERROR,
    };
    res.status(statusCodes.SERVER_ERROR).send(response);
  }
};
