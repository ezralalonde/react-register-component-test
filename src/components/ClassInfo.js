import React from 'react'
import '../styles/ClassInfo.css'

const ClassInfo = ({
  day,
  level,
  team,
  time,
  number,
  cost,
  leads,
  follows,
  cap,
  location,
}) => (
  <div className={`${level} class-${number}`}>
    <div className="number">{number}</div>
    <p>
      <span>{level}</span> with <span>{team}</span>.
    </p>
    <p>
      <span>{day}</span> at <span>{time}</span> at <span>{location}</span>.
    </p>
    <p>
      <span>${cost}</span> <span>{leads+follows} / {cap}</span> <span>{leads - follows}</span>
    </p>
  </div>
)

ClassInfo.propTypes = {
  day: React.PropTypes.string.isRequired,
  level: React.PropTypes.string.isRequired,
  team: React.PropTypes.string.isRequired,
  time: React.PropTypes.string.isRequired,
  number: React.PropTypes.string.isRequired,
  cost: React.PropTypes.number.isRequired,
  leads: React.PropTypes.number.isRequired,
  follows: React.PropTypes.number.isRequired,
  cap: React.PropTypes.number.isRequired,
  location: React.PropTypes.string.isRequired,
}

export default ClassInfo