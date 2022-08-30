import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();


        const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_edy86tl', 
            'template_58l13fe', 
            form.current, 
            'user_VYFLIA1e26gsolGaLqzXP')
          .then((result) => {
              console.log(result.text);
              setDone(true)
              window.location.reload();
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="form">
<form className='form__content' ref={form} onSubmit={sendEmail}>
<label className="input">
    <input className="input__field input__size" name='user_name' type="text" placeholder=" " />
    <span className="input__placeholder">Name</span>
</label>
<label className="input">
    <input className="input__field input__size" name='mail' type="text" placeholder=" " />
    <span className="input__placeholder">Mail Adress</span>
</label>
<label className="input">
    <input className="input__field input__size" name='subject' type="text" placeholder=" " />
    <span className="input__placeholder">Subject</span>
</label>
<label className="input">
    <textarea className="input__field textarea__size" name='message' rows="5" type="text" placeholder=" " />
    <span className="input__placeholder">Message</span>
</label>
<button>Submit</button>
{/* <button onClick={done && refreshPage}>Submit</button>  */}
{/* {done && "Thanks for you interest and see you later!"} */}

</form>
        </div>
    );
};

export default Form;