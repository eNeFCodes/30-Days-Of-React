import { useState } from 'react';
import './Validation.css';

const validator = require('validator');

const Day12 = () => {
    const [fieldValues, setFieldValues] = useState(() => ({
        email: '',
        password: ''
    }));
    const [fieldErrors, setFieldErrors] = useState(() => ({
        email: true,
        password: true
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFieldValues({ ...fieldValues, [name]: value });
    }

    const handleValidation = (e) => {
        const { name, value } = e.target;
        let isValid = true;

        if (name === 'password') {
            isValid = value.length > 5;
        } else {
            isValid = validator.isEmail(value);
        }

        setFieldErrors({ ...fieldErrors, [name]: isValid });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Submit ${fieldValues.email} -- ${fieldValues.password}`);
    }

    return (
        <div className='day12-main'>
            <form onSubmit={handleSubmit}>
                <label className={fieldErrors.email ? 'day12-label' : 'day12-label-error'} htmlFor='email'>Email (using validatorjs):</label><br />
                <input
                    type='email'
                    id='email'
                    name='email'
                    className={fieldErrors.email ? 'day12-input' : 'day12-input-error'}
                    value={fieldValues.email}
                    onChange={handleChange}
                    onBlur={handleValidation}
                />

                <br /><br />
                <label className={fieldErrors.password ? 'day12-label' : 'day12-label-error'} htmlFor='email'>Password (using local validation):</label><br />
                <input
                    type='password'
                    id='password'
                    name='password'
                    className={fieldErrors.password ? 'day12-input' : 'day12-input-error'}
                    value={fieldValues.password}
                    onChange={handleChange}
                    onBlur={handleValidation}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};
export default Day12;