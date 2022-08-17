const Form = () => {

    return (
        <div className="form">
            <form className='form__content'>
{/* <form className='form__content' ref={formRef} onSubmit={handleSubmit}> */}
<label class="input">
    <input class="input__field input__size" name='user_name' type="text" placeholder=" " />
    <span class="input__placeholder">Name</span>
</label>
<label class="input">
    <input class="input__field input__size" name='mail' type="text" placeholder=" " />
    <span class="input__placeholder">Mail Adress</span>
</label>
<label class="input">
    <input class="input__field input__size" name='subject' type="text" placeholder=" " />
    <span class="input__placeholder">Subject</span>
</label>
<label class="input">
    <textarea class="input__field textarea__size" name='message' rows="5" type="text" placeholder=" " />
    <span class="input__placeholder">Message</span>
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