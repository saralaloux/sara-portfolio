const Form = () => {

    return (
        <div className="form">
            <form className='form__content'>
{/* <form className='form__content' ref={formRef} onSubmit={handleSubmit}> */}
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
{/* <button onClick={done && refreshPage}>Submit</button> */}
{/* {done && "Thanks for you interest and see you later!"} */}
{/* {refreshPage && done} */}
</form>
        </div>
    );
};

export default Form;