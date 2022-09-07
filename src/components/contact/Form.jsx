import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Form = () => {

    const { register, handleSubmit, formState: {errors} } = useForm({
        mode:'onTouched'
      });

    const form = useRef();

    const onSubmit = () => {

    
        emailjs.sendForm(
            'service_edy86tl', 
            'template_58l13fe', 
            form.current, 
            'user_VYFLIA1e26gsolGaLqzXP')
          .then((result) => {
              console.log(result.text);
            //   setDone(true)
              window.location.reload();
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="form">
<form 
className='form__content' 
ref={form} 
onSubmit={handleSubmit(onSubmit)}
>
<label className="input">
    <input 
    name='user_name' 
    type="text" 
    placeholder=" " 
    className={`input__field input__size ${errors.fullName && "input__error"}`}
    {...register("fullName", { 
      required: {
        value: true,
        message: 'Name is required',
      },
      minLength: {
        value: 3,
        message: 'Minimun allowed length is 3 character',
      },
      maxLength: {
        value: 25,
        message: 'Minimun allowed length is 25 character', 
      },
     })}
    />
    <span className="input__placeholder">Name</span>
    {errors.fullName && <span className='text'>{errors.fullName.message}</span>}
</label>

<label className="input">
    <input 
    name='mail' 
    type="text" 
    placeholder=" "
    className={`input__field input__size ${errors.email && "input__error"}`}
        {...register("email", { 
          required: {
            value: true,
            message: 'Email is required',
          },
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Please enter a valid email',
          }
         })}
    />
    <span className="input__placeholder">Mail Adress</span>
    {errors.email && <span className='text'>{errors.email.message}</span>}
</label>

<label className="input">
    <input 
    name='subject' type="text" 
    placeholder=" " 
    className={`input__field input__size ${errors.subject && "input__error"}`}
    {...register("subject", { 
      required: {
        value: true,
        message: 'Subject is required',
      },
      minLength: {
        value: 3,
        message: 'Minimun allowed length is 3 character',
      },
      maxLength: {
        value: 50,
        message: 'Minimun allowed length is 50 character', 
      },
     })}
    />
    <span className="input__placeholder">Subject</span>
    {errors.subject && <span className='text'>{errors.subject.message}</span>}
</label>

<label className="input">
    <textarea
    name='message' 
    rows="5" 
    type="text" 
    placeholder=" " 
    className={`input__field textarea__size ${errors.message && "input__error"}`}
            {...register("message", { 
              required: {
                value: true,
                message: 'Please, write un message',
              },
              minLength: {
                value: 3,
                message: 'Minimun allowed length is 3 character',
              },
              maxLength: {
                value: 250,
                message: 'Minimun allowed length is 250 character', 
              },
             })}
    />
    <span className="input__placeholder">Message</span>
    {errors.message && <span className='text'>{errors.message.message}</span>}
</label>
<button>Submit</button>
</form>
        </div>
    );
};

export default Form;