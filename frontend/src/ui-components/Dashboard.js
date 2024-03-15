import React, { useState, useEffect } from "react";
import { Col, Row, Select, DatePicker } from "antd";
// import { Icon } from "@ant-design/icons";
import Breadcrumb from "./BreadCrumbs";
import graph1 from "./../assests/img/graph1.png";
import graph2 from "./../assests/img/graph2.png";
import pie2 from "./../assests/img/pie2.png";
import { DollarCircleFilled } from "@ant-design/icons";
const { Option } = Select;

export default function Dashboard(props) {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [states, setStates] = useState([]);
  const data = [
    { label: "Label 1", value: 10 },
    { label: "Label 2", value: 20 },
    { label: "Label 3", value: 30 },
    { label: "Label 4", value: 40 },
  ];

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/orders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.body.states);
        setStates(data.body.states);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleStateChange = (value) => {
    setSelectedState(value);
  };

  const handleDate1Change = (date, dateString) => {
    setSelectedDate1(dateString);
  };

  const handleDate2Change = (date, dateString) => {
    setSelectedDate2(dateString);
  };

  const handleSubmit = () => {
    console.log("Selected State:", selectedState);
    console.log("Selected Date 1:", selectedDate1);
    console.log("Selected Date 2:", selectedDate2);
  };

  return (
    <>
      <div className="container">
        <Row className="title-row">
          <Col xs={10} sm={10} md={10} lg={10} xl={10}>
            <Breadcrumb location={props.location} />
          </Col>
        </Row>
        <Row className="statistics-card">
          <Col span={24}>
            <div className="card" style={{ backgroundColor: "#f0f2f5" }}>
              {/* <div className="card-body"> */}
              <div>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <div>
                      <label>state</label>
                      <Select
                        style={{ width: "100%" }}
                        onChange={handleStateChange}
                        value="Select State"
                      >
                        {states.map((state) => {
                          return <Option value="">{state}</Option>;
                        })}
                      </Select>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div>
                      <label>From Date</label>
                      <DatePicker
                        style={{ width: "100%" }}
                        onChange={handleDate1Change}
                        value={selectedDate1}
                      />
                    </div>
                  </Col>
                  <Col span={8}>
                    <div>
                      <label>To Date</label>
                      <DatePicker
                        style={{ width: "100%" }}
                        onChange={handleDate2Change}
                        value={selectedDate2}
                      />
                    </div>
                  </Col>
                </Row>
                <Row gutter={16} style={{ margin: "1% 0% 1% 0%" }}>
                  <Col className="gutter-row" span={6}>
                    <div
                      style={{
                        padding: "12%",
                        "justify-content": "center",
                        background: "aliceblue",
                      }}
                    >
                      Total Sales
                      <br />
                      $50000
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div
                      style={{
                        padding: "12%",
                        "justify-content": "center",
                        background: "aliceblue",
                      }}
                    >
                      Quanity SOld
                      <br />
                      468
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div
                      style={{
                        padding: "12%",
                        "justify-content": "center",
                        background: "aliceblue",
                      }}
                    >
                      Discount
                      <br />
                      55.6%
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div
                      style={{
                        padding: "12%",
                        "justify-content": "center",
                        background: "aliceblue",
                      }}
                    >
                      Profit
                      <br />
                      $50000
                    </div>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <img
                      src={graph1}
                      alt="Image"
                      height={"350"}
                      width={"500"}
                    />
                  </Col>
                  <Col span={12}>
                    {" "}
                    <img
                      src={graph1}
                      alt="Image"
                      height={"350"}
                      width={"500"}
                    />
                  </Col>
                </Row>

                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <div>
                      {" "}
                      <img
                        src={pie2}
                        alt="Image"
                        height={"350"}
                        width={"500"}
                      />
                    </div>
                  </Col>
                  <Col span={8}>
                    <div>
                      {" "}
                      <img
                        src={graph1}
                        alt="Image"
                        height={"350"}
                        width={"500"}
                      />
                    </div>
                  </Col>
                  <Col span={8}>
                    <div>
                      <img
                        src={pie2}
                        alt="Image"
                        height={"350"}
                        width={"500"}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              {/* </div> */}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
