import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-book-reader qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* SSC  */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC (score : 78.2%)</h3>
                <span className="qualification__subtitle">
                  Macro Vision Academy
                  <p>
                    <i className="uil uil-map">
                      <a
                        href="https://shorturl.at/6Y7M8"
                        target="_blank"
                        className="qualification_location"
                      >
                        Burhanpur(M.P)
                      </a>
                    </i>
                  </p>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2019 - 04/2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* hsc  */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> HSC (score: 83.2%)</h3>
                <span className="qualification__subtitle">
                  Macro Vison Academy
                  <p>
                    <i className="uil uil-map">
                      <a
                        href="https://shorturl.at/6Y7M8"
                        target="_blank"
                        className="qualification_location"
                      >
                        Burhanpur(M.P)
                      </a>
                    </i>
                  </p>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2020 - 04/2021
                </div>
              </div>
            </div>

            {/* B.Tech  */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  VIT Bhopal University
                  <p>
                    <i className="uil uil-map">
                      <a
                        href="https://shorturl.at/5zUfE"
                        target="_blank"
                        className="qualification_location"
                      >
                        Bhopal(M.P)
                      </a>
                    </i>
                  </p>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Android Development
                </h3>
                <span className="qualification__subtitle">
                  @SmartInternz
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 09/2023 - 02/2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Javascript
                </h3>
                <span className="qualification__subtitle">
                  Certification By : UDEMY
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 10/2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  ReactJS
                </h3>
                <span className="qualification__subtitle">
                  Certification By: UDEMY
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 01/2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MERN Stack Development</h3>
                <span className="qualification__subtitle">
                  Certification By UDEMY
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 03/2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
