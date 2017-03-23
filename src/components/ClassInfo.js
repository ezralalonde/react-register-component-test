// @flow
import React from 'react'
import '../styles/ClassInfo.css'
import type {ClassInfoComponentProps} from '../types'

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
}: ClassInfoComponentProps) => (
  <div className={`${level} class-${number}`}>
    <div className="number">{number}</div>
    <p>
      <span>{level}</span> with <span>{team}</span>.
    </p>
    <p>
      <span>{day}</span> at <span>{time}</span> at <span>{location}</span>.
    </p>
    <p>
      <span>${cost}</span> <span>L:{leads}</span> <span>F:{follows}</span> <span>{leads+follows} / {cap}</span> <span>{leads - follows}</span>
    </p>
  </div>
)

export default ClassInfo