import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='uil uil-award about__icon' ></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 years and counting hands on experience</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">6 + Projects</span>
        </div>

        <div className="about__box">
        <i class='uil uil-support about__icon' ></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Everytime</span>
        </div>
    </div>
  )
}

export default Info