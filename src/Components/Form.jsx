import { useState } from "react";
import Button from './Button'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones✅
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validInfo, setValidInfo] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  
  const handleNameInput = (e) => {
    setName(e.target.value);
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const emailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
  const handleSubmit = (e) => {

    e.preventDefault();
    name.length > 5 && emailValidation(email) ? setValidInfo(true) : setValidInfo(false);
    setShowMessage(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Send us your questions and we will contact you</h2>
        <input type="text" placeholder="Name" onChange={handleNameInput}/>
        <input type="email" placeholder="Email" onChange={handleEmailInput}/>
        <textarea name="" id="" placeholder="Write your message here"></textarea>
        <Button type="submit">Send</Button>
        {showMessage && (validInfo ? <p>Mesaje sent</p> : <p>Por favor verifique su información nuevamente</p>)}
      </form>

      
    </div>
  );
};

export default Form;
