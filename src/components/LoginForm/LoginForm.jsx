"use client";
import { useState } from 'react';
import { useFormik } from 'formik';
import TextField from '../TextField/TextField';
import OTPInput from '../OTPInput';
import { Button } from '../ui/button';

function LoginForm() {
    const [openOTP, setOpenOTP] = useState(false);
    const compName = process.env.NEXT_PUBLIC_APP_NAME;
    const loginForm = useFormik({
        initialValues: {
            mobileNo: '1234567890'
        },
        onSubmit: () => {
            setOpenOTP(true);
        },
        validate: (values) => {
            const errors = {};
            if (!/^\d{10}$/.test(values.mobileNo)) {
                errors.mobileNo = 'Mobile number must be 10 digits';
            }
            return errors;
        }
    });

    return (
        <>
            {openOTP ? (
                <div className="login_form_container">
                    <OTPInput />
                </div>
            ) : (
                <div className="login_form_container">
                    <h1 className="login_form_title text-3xl">{compName}</h1>
                    <h3 className="text-sm">Please enter your mobile number to login</h3>
                    <form onSubmit={loginForm.handleSubmit} className="login_form">
                        <TextField
                            id="mobileNo"
                            name="mobileNo"
                            value={loginForm.values.mobileNo}
                            icon="Smartphone"
                            type="number"
                            className="outline-none text-black my-3"
                            placeholder="Enter Phone number"
                            onChange={loginForm.handleChange}
                            onBlur={loginForm.handleBlur}
                            errorMessage={loginForm.touched.mobileNo && loginForm.errors.mobileNo}
                        />
                        <Button type="submit" className="w-full">
                            Send OTP
                        </Button>
                    </form>
                </div>
            )}
        </>
    );
}

export default LoginForm;
