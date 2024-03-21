import { useState } from "react";



const UserInput = () => {
  const [initial, setInitial] = useState(10000)
  const [annual, setAnnual] = useState(1200)
  const [expected, setExpected] = useState(6)
  const [duration, setDuration] = useState(10)


  function handleChange(field, event) {

    setData(data[field] = event.target.value)

  }
  return (
    <section id="user-input">

      <div className="input-group">
        <p>
          <label for="initial-investment">Inital Investment</label>
          <input type="number" value={initial} onChange={(e) => setInitial(e.target.value)} required />
        </p>
        <p>
          <label for="annual-investment">Annual Investment</label>
          <input type="number" value={annual} onChange={(e) => setAnnual(e.target.value)} required />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label for="Expected-Return">Expected Return</label>
          <input type="number" value={expected} onChange={(e) => setExpected(e.target.value)} required />
        </p>
        <p>
          <label for="Duration">Duration</label>
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </p>
      </div>

    </section>
  )
}

export default UserInput
