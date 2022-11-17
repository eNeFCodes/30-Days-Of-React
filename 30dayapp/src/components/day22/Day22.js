import { useEffect, useState } from 'react';
import './Day22.css';
const validator = require('validator');

const Day22 = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [formDataError, setFormDataError] = useState({
        email: false,
        password: false
    });
    const [canProceed, setCanProceed] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(`form:`, formData);
    }

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const validateAction = (e) => {
        const { name, value } = e.target;
        let hasError = false;
        if (name === 'email') {
            hasError = !validator.isEmail(value);
        } else {
            hasError = !(value.length > 3);
        }

        setFormDataError({
            ...formDataError,
            [name]: hasError
        });
    }

    useEffect(() => {
        let canProceed = true;
        for (const key in formDataError) {
            if (formDataError[key]) {
                canProceed = false;
                console.log(`key: ${key}`, formDataError[key])
                break;
            }
        }

        for (const key in formData) {
            if (formData[key].length === 0) {
                canProceed = false;
                break;
            }
        }

        setCanProceed(canProceed);
    }, [formDataError]); 

    return (
        <div className="day22-main">
            <form className='day22-form' onSubmit={onSubmit}>
                <label className='day22-label' htmlFor='email'>Email: </label>
                <input
                    className='day22-input'
                    type='text'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={onChange}
                    onBlur={validateAction}
                    placeholder='Email'
                />
                {formDataError.email && <span className='day22-label-error'>Invalid email format</span>}
                <br />
                <label className='day22-label' htmlFor='password'>Password: </label>
                <input
                    className='day22-input'
                    type='text'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={onChange}
                    onBlur={validateAction}
                    placeholder='Password'
                />
                {formDataError.password && <span className='day22-label-error'>Wrong password</span>}
                <div className='day22-control'>
                    <button className='day22-button' disabled={!canProceed}>Submit</button>
                </div>
            </form>
        </div>
    )
};
export default Day22;