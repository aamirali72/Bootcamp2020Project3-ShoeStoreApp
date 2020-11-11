import React from 'react'
import History from './history'

function About() {

  const myFunc = () => {
    console.log("myFunc")
    History.push('/Users')
  }
  return (
    <div>
      About PAGE
      <button onClick={myFunc}>
        function
      </button>

    </div>
  )
}
export default About