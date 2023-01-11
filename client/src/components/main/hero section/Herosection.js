import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import H1tag from "../../typography/H1tag";
import Ptag from "../../typography/Ptag";
import { LocalUrl } from "../../../helper";
import { setSearchAirportFields } from "../../../Redux/slices/UserData";
import { useSelector, useDispatch } from "react-redux";
import { Link,useHistory} from "react-router-dom";
function Herosection() {
  const fields = useSelector((state) => state.user.searchAirportFelds);
  const dispatch = useDispatch();
  let history=useHistory()
  const [airports, setAirports] = useState([]);
  const handleChange = (key, value) => {
    dispatch(setSearchAirportFields({ key, value }));
  };

  const getAllAirports = async () => {
    fetch(`${LocalUrl}/getAirports`, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r?.airports);
        r?.airports?.map((item, index) => {
          setAirports((prev) => [...prev, item]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkAvailability = async (e) => {
    e.preventDefault();

    console.log(fields);
    if (
      !fields.selectedAirport ||
      !fields.dropOffDate ||
      !fields.dropOffTime ||
      !fields.pickupDate ||
      !fields.pickupTime
    ) {
      alert("Fill all fiels");
    } else {
      // window.location.href = `/searchparkingspaces`;
      history.push('/searchparkingspaces')
    }
  };

  useEffect(() => {
    getAllAirports();
  }, []);
  return (
    <>
      <section className="image-with-text hero-section ">
        <div className="sec-box">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-box">
                <H1tag
                  title={
                    <Fragment>
                      Welcome to
                      <br />
                      <span className="heading-style">RapidPakingDeals</span>
                    </Fragment>
                  }
                />
                <Ptag
                  para={
                    <Fragment>
                      Your one stop solution for trips , tours. Join{" "}
                      <a href="#">RapidParkingDeals</a>, UK's biggest car
                      parking service.
                    </Fragment>
                  }
                />
                <div className="hero-bg">
                  <img src={require("../../../images/bg.png")} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="image-box">
                <div className="booking-form">
                  <form>
                    <div className="form-group">
                      <span className="form-label">Select Airport</span>
                      <select
                        className="form-control"
                        value={fields.selectedAirport}
                        onChange={(e) => {
                          handleChange("selectedAirport", e.target.value);
                        }}
                      >
                        <option>Select Airport</option>
                        {airports.map((item, index) => {
                          return <option key={index}>{item}</option>;
                        })}
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Drop Off Date</span>
                          <input
                            className="form-control"
                            type="date"
                            value={fields.dropOffDate}
                            required
                            onChange={(val) => {
                              handleChange("dropOffDate", val.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Time</span>
                          <input
                            className="form-control"
                            type="time"
                            value={fields.dropOffTime}
                            required
                            onChange={(val) => {
                              handleChange("dropOffTime", val.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Pick Up Date</span>
                          <input
                            className="form-control"
                            type="date"
                            value={fields.pickupDate}
                            required
                            onChange={(val) => {
                              handleChange("pickupDate", val.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Time</span>
                          <input
                            className="form-control"
                            type="time"
                            value={fields.pickupTime}
                            required
                            onChange={(val) => {
                              handleChange("pickupTime", val.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-btn">
                      <button
                        className="submit-btn"
                        onClick={checkAvailability}
                      >
                        Check availability
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
