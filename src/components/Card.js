import { useState } from 'react'
import Tests from '../components/Tests'
function Card({ company, email, firstName, lastName, pic, skill, avg, tests }) {
  const [showTests, setShowTests] = useState(false)

  const toggleTests = () => {
    showTests ? setShowTests(false) : setShowTests(true)
  }
  return (
    <div className='card-container'>
      <div>
        <img className='profile-img' src={pic} alt={lastName} />
      </div>
      <div className='student-info'>
        <h1 className='full-name'>{`${firstName} ${lastName}`}</h1>
        <button onClick={toggleTests}>+</button>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Skill: {skill}</p>
        <p>Average: {avg}%</p>

        <ul>{showTests ? <Tests test={tests} /> : null}</ul>
      </div>
    </div>
  )
}

export default Card
