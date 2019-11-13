import React, {useState} from "react";

const Form = props => {
    const [card, setCard] = useState({name:'', email:'', role:''})

    const handleChanges = e => {
        setCard({...card, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewCard(card);
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input onChange={handleChanges}
            value={card.name}
            id='name'
            type='text'
            name='name' />

            <label htmlFor='email'>Email</label>
            <input onChange={handleChanges}
            id='email'
            type='text'
            name='email'
            value={card.email} />
            
            <label htmlFor='role'>Role</label>
            <input onChange={handleChanges}
            id='role'
            type='text'
            name='role'
            value={card.role} />
            
            <button type='submit'>Submit</button>
        </form>
    )
} //Form End

export default Form;
