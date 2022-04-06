import React,{useState} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import './Register_form.css'
import M from 'materialize-css'
const Register_form =()=>{
    const history=useHistory()
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[userName,setuserName]=useState("")
    const[phone,setPhone]=useState("")
    
    const PostData =()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           return  M.toast({html:"invalid email",classes:"#c62828 red darken-3"})
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                userName,
                password ,
                email,
                phone,
              
            })
        }).then(res=>res.json())
        .then(data=>{
            
            if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
          }
            else{
                M.toast({html:data.message,classes:"#00c853 green accent-4"})
                history.push('/login')
            }
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })

    }


  return (
    <section className='body'>
    <div className='container'>
        <div className='title'>Registration</div>
        <form action='#'>
            <div className='user-details'>
                <div className='input-box'>
                    <span className='details'>Full name</span>
                    <input type="text" placeholder='Enter your name' required 
                    value={name}
                onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='input-box'>
                    <span className='details'>Username</span>
                    <input type="text" placeholder='Enter your username' required
                    value={userName}
                    onChange={(e)=>setuserName(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <span className='details'>Email</span>
                    <input type="text" placeholder='Enter your email' required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <span className='details'>Phone Number</span>
                    <input type="text" placeholder='Enter your number' required
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <span className='details'>Password</span>
                    <input type="text" placeholder='Enter your password' required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <span className='details'>Confirm Password</span>
                    <input type="text" placeholder='Confirm your password' required/>
                </div>
                <div className='button_subscribe'>
                <input type="submit" value="Register" onClick={()=>PostData()} />
                </div>
            </div>
        </form>
        <Link to="/login">Have you an account ?</Link>
    </div>
    </section>
  )
}

export default Register_form