import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login } from '../../actions/auth';

// STYLES
import '../../styles/components/login/LoginScreen.css';

const LoginScreen = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validate = values => {
        const errors = {};
      
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }else if (values.email !== 'challenge@alkemy.org' && values.email !== 'gabriel@alkemy.org') {
            errors.email = 'Email Incorrect'
        }

        if(values.password !== "react"){
            errors.password = 'Password Incorrect'
        }

        return errors;
      };

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
          //alert(JSON.stringify(values, null, 2));
          const {email,password} = values;

          if(email === 'challenge@alkemy.org' && password === 'react'){

            axios({
                method: 'get',
                url: `http://challenge-react.alkemy.org/?email=${email}&password=${password}`
              })
                .then(res => {
                    const newUser = {
                        user: email,
                        token: res.data.token
                    }
                    localStorage.setItem('authAlkemy', JSON.stringify(newUser));
                    dispatch(login(newUser));
                    navigate('/');
                })

          }else if (email === 'gabriel@alkemy.org' && password === 'react'){
              
            const newUser = {
                user: email,
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE'
            }
            dispatch(login(newUser))

          }
          
        },
    });

    return (
        <div className="container-fluid background d-flex justify-content-center align-items-center">
                
                <div className="card cardForm">
                    <h1>Alkemy Challenge</h1>
                    <div className="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="InputEmail" className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control mb-2" 
                                    id="InputEmail" 
                                    aria-describedby="emailHelp" 
                                    autoComplete="off" 
                                    name="email" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.email} 
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="alert alert-danger" role="alert">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputPassword" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control mb-2" 
                                    id="InputPassword" 
                                    name="password" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.password} 
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="alert alert-danger" role="alert">{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>

    )
}

export default LoginScreen
