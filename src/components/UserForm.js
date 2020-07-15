import React from 'react';
import useInput from '../hooks/useInput';


function UserForm() {
  // Destructure the array returned from the custom hook
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = e => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

	return (
		<>
      <form onSubmit={submitHandler}>
				<div>
					<label>First Name</label>
					<input
            type="text"
            {...bindFirstName}
					/>
          {/*
          <input 
            type='text'
            value={firstName}
            onChange={() => setFirstName(e.target.value)}
          */}
				</div>
				<div>
					<label>Last Name</label>
					<input
            type="text"
            {...bindLastName}
					/>
        </div>
        <button>Submit</button>
			</form>
		</>
	)
}

export default UserForm
