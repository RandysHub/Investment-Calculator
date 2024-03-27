


const UserInput = ({ onChangeInput, userInput }) => {





  return (
    <section id="user-input">

      <div className="input-group">
        <p>
          <label for="initial-investment">Inital Investment</label>
          <input type="number" value={userInput.initialInvestment} onChange={(event) => onChangeInput('initialInvestment', event.target.value)} required />
        </p>
        <p>
          <label for="annual-investment">Annual Investment</label>
          <input type="number" value={userInput.annualInvestement} onChange={(event) => onChangeInput('annualInvestement', event.target.value)} required />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label for="Expected-Return">Expected Return</label>
          <input type="number" value={userInput.expectedReturn} onChange={(event) => onChangeInput('expectedReturn', event.target.value)} required />
        </p>
        <p>
          <label for="Duration">Duration</label>
          <input type="number" value={userInput.duration} onChange={(event) => onChangeInput('duration', event.target.value)} required />
        </p>
      </div>

    </section>
  )
}

export default UserInput
