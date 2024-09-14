import { useState } from "react";
import Button from './Button'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones✅
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  
  const handleNameInput = (e) => {
    setName(e.target.value);
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const nameValidation = () => {
    return name.length > 5
  }

  const emailValidation = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setValidName(nameValidation());
    setValidEmail(emailValidation());
    validName && validEmail ? setShowMessages(false) : setShowMessages(true)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Send us your questions and we will contact you</h2>
        <input type="text" placeholder="Name" onChange={handleNameInput}/>
        {showMessages && !validName ? (<p className="formError">The name requires at least 6 characters</p>) : null}
        <input type="email" placeholder="Email" onChange={handleEmailInput}/>
        {showMessages && !validEmail ? (<p className="formError">Please enter a valid email</p>) : null}
        <textarea name="" id="" placeholder="Write your message here"></textarea>
        <Button type="submit">Send</Button>
        {(validName && validEmail) ? (<p>Mesaje sent</p>): null}
        
        
      </form>

      
    </div>
  );
};

export default Form;
