import { useState, useEffect } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [studentData, setStudentData] = useState([])

  const [search, setNewSearch] = useState('')
  // const [showTests, setShowTests] = useState(false)

  const calcAvg = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i])
    }
    return sum / arr.length
  }

  // const toggleTests = () => {
  //   console.log('toggled')
  //   showTests ? setShowTests(false) : setShowTests(true)
  // }

  const handleSearch = (e) => {
    setNewSearch(e.target.value)
  }

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.hatchways.io/assessment/students'
      )
      const data = await response.json()
      setStudentData(data.students)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <input
        type='text'
        placeholder='Search by name'
        onChange={handleSearch}
        value={search}
      />
      {studentData
        .filter(
          (studentObj) =>
            studentObj.firstName
              .toLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            studentObj.lastName
              .toLowerCase()
              .includes(search.toLocaleLowerCase())
        )
        .map((studentObj) => {
          const tests = studentObj.grades
          console.log(tests)

          return (
            <Card
              firstName={studentObj.firstName}
              lastName={studentObj.lastName}
              pic={studentObj.pic}
              email={studentObj.email}
              company={studentObj.company}
              skill={studentObj.skill}
              avg={calcAvg(studentObj.grades)}
              key={studentObj.id}
              tests={tests}
            ></Card>
          )
        })}
    </>
  )
}

export default App
