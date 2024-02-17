import { useRef, useState } from "react";
import { useFormik } from "formik";
import { Input } from "../ui/input";
import Icon from "../Icon";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function OTPInput() {
    const otpLen = 4;
    const otpref = useRef();
    const initialValues = {
        otp: Array(otpLen).fill("")
    };

    const { push } = useRouter();

    const otpForm = useFormik({
        initialValues,
        onSubmit: () => {
            push('/home')
        },
        validate: (values) => {
            const errors = {};
            if (values.otp.join('').length === otpLen && values.otp.join('') !== '1234') {
                errors.otp = 'Incorrect OTP';
            }
            if (values.otp.join('').length < 4) {
                errors.otp = 'Invalid OTP';
            }
            return errors;
        },
    });

    const handleValChange = (e, index) => {
        const { value, key } = e.target;

        if (key === "Backspace" && index > 0) {
            otpForm.setFieldValue(`otp[${index - 1}]`, "");
            otpref.current.children[index - 1].focus();
        } else if (/^\d*$/.test(value) && value.length <= 1) {
            otpForm.setFieldValue(`otp[${index}]`, value);

            if (value !== "") {
                if (index < otpLen - 1) {
                    otpref.current.children[index + 1].focus();
                }
            } else {
                if (index > 0) {
                    otpref.current.children[index - 1].focus();
                }
            }
        }
    };

    const handlePaste = (e) => {
        const pastedData = e.clipboardData.getData("text/plain").slice(0, otpLen);
        const pastedValues = pastedData.split("");

        pastedValues.forEach((value, index) => {
            if (/^\d*$/.test(value) && index < otpLen) {
                otpForm.setFieldValue(`otp[${index}]`, value);
            }
        });

        otpref.current.children[otpLen - 1].focus();
    };

    const handleKeyPress = (e, index) => {
        if (e.key === "ArrowLeft" && index > 0) {
            otpref.current.children[index - 1].focus();
        } else if (e.key === "ArrowRight" && index < otpLen - 1) {
            otpref.current.children[index + 1].focus();
        }
    };

    return (
        <form onSubmit={otpForm.handleSubmit}>
            <div className="otp_modal">
                <div className="rounded-full bg-violet-600 mb-3 p-3">
                    <Icon name="ShieldCheck" size="50" className="text-white" />
                </div>
                <p className="mb-3 text-center font-semibold text-sm">Please enter the One-Time Password to verify your account (otp: 1234)</p>

                <div className="otp_input_container" ref={otpref} onPaste={handlePaste}>
                    {Array(otpLen).fill().map((_, index) => (
                        <Input
                            key={`otp-${index}`}
                            type="text"
                            name={`otp_${index}`}
                            className="otp_input"
                            value={otpForm.values.otp[index]}
                            onChange={(e) => handleValChange(e, index)}
                            onKeyDown={(e) => handleKeyPress(e, index)}
                            autoFocus={index === 0}
                            maxLength="1"
                            onBlur={otpForm.handleBlur}
                        />
                    ))}
                </div>
                {otpForm.errors.otp && <div className="text-red-500">{otpForm.errors.otp}</div>}
                <Button type="submit" className="otp_form_submit">
                    Submit
                </Button>
            </div>
        </form>
    );
}

export default OTPInput;
