import React,{useState} from 'react'

const Form = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dob, setDob] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const handleForm = () => {
        setIsVisible(true);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleFormData = (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const selectedDate = new Date(dob);

        if(phoneNumber.length !== 10 ){
            alert('**Invalid phone number. Please enter a 10-digit phone number.');
        } else if (selectedDate > currentDate) {
            alert('Invalid phone number. Please enter a 10-digit phone number.**');
        } else {
            setPhoneNumber('');
            setDob('');
            setEmail('');
            setUserName('');
        }


    };
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleDobChange = (e) => {
        setDob(e.target.value);
    };


    const formStyle = {
        zIndex: "2",
        border: '2px solid black',
        width: '40rem',
        height: '20rem',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    };
    
    const containerStyle = {
        position: 'relatives',
    };
    
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '1',
        display: isVisible ? 'block' : 'none',
    }

    

  return (
    <div style={containerStyle} className=''>
        <h1>User Details Modal</h1>
        <button onClick={handleForm}>Open Form</button>
        <div style={overlayStyle} onClick={handleClose}></div>
            <div className='modal' >
            {isVisible && (
                <div className='modal-content'>
                    <form style={formStyle} onSubmit={handleFormData}>
                        <h1>Fill Details</h1>
                        <label>UserName:</label>
                        <br />
                        <input type='text' value={userName} id='username' onChange={(e) => setUserName(e.target.value)} required/>
                        <br />
                        <label>Email Address:</label>
                        <br />
                        <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br />
                        <label>Phone Number:</label>
                        <br />
                        <input type='number' value={phoneNumber} onChange={handlePhoneNumberChange} id='phone' required />
                        <br />
                        <label>Date of Birth:</label>
                        <br />
                        <input type='date' value={dob} onChange={handleDobChange} id='dob' required/>
                        <br />
                        <button type='submit' className='submit-button'>Submit</button>
                    </form> 
                    </div>)}
            </div>
    </div>
  )
}

export default Form