import React from 'react'
import './Login.css'
import{Link} from 'react-router-dom'

function Login() {
    return (
        <section className='login'>
            <div className='container_login'>
                <div className='title'>Login</div>
                <form action='#'>
                    <div className='user-info'>

                        <div className='input-box'>
                        <span className='details'>Email</span>

                            <input type="text" placeholder='Enter your Email' required />
                        </div>
                        <div className='input-box'>
                        <span className='details'>Password</span>

                            <input type="password" placeholder='Enter your password' required />
                        </div>
                        <div className='button_login'>
                            <input type="submit" value="Login" />
                        </div>
                    </div>
                </form>
                <h5>
                <Link to="/Register">Dont have an account ?</Link>
              </h5>

            </div>

        </section>
    )
}

export default Login