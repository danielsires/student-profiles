import React from 'react'

function Card({
  city,
  company,
  email,
  firstName,
  grades,
  id,
  lastName,
  pic,
  skill,
}) {
  return (
    <div className='card-container'>
      <div>
        <img className='profile-img' src={pic} alt={lastName} />
      </div>
      <div className='student-info'>
        <h1 className='full-name'>{`${firstName} ${lastName}`}</h1>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Skill: {skill}</p>
        <p>Average: {grades}%</p>
      </div>
    </div>
  )
}

export default Card
