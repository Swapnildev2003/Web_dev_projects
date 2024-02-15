import Input from '../../components/input/index';
import Button from '../../components/button/index';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Form = ({
    isSignPage = false,
}) => {
    const [data, setData] = useState({
        ...(!isSignPage && {
            fullName: " "
        }),
        email: "",
        password: "",
    });
    useEffect(() => {
        console.log(data);
    }, [data]);
    const navigate = useNavigate();
    return (
        <div className='bg-light h-screen flex items-center justify-center'>
            <div className="bg-white  w-[400px] h-[500px] shadow-lg rounded-lg flex flex-col justify-center items-center">
                <div className="text-4xl font-extrabold ">{isSignPage ? 'Welcome Back' : 'Welcome'}</div>
                <div className="text-xl font-light mb-11">{isSignPage ? 'Sign in to get explored' : 'Sign up to get started'}</div>
                <form className='w-full flex flex-col items-center px-10' onSubmit={() => { console.log("submited") }}>

                    {!isSignPage && <Input label='Enter Your Full Name' id="fullName" name='Fullname' type='text' className='mb-6' value={data.fullName} onChange={(e) => { setData({ ...data, fullName: e.target.value }) }} />}
                    <Input label='Email adress' name='email' className='mb-6' value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                    <Input label='Password' type='password' name='password' className='mb-6' value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                    <Button label={isSignPage ? 'Sign in' : 'Sign up'} className='mt-5 mb-2' type='submit' />

                    <div>{isSignPage ? "Din't Have an account? " : 'Already have an account? '}<span className='text-primary cursor-pointer underline' onClick={() => { navigate(`/users/${isSignPage ? `sign_up` : `sign_in`}`) }}>{isSignPage ? 'Sign up' : 'Sign in'}</span></div>
                </form>
            </div>
        </div>
    )
}

export default Form;