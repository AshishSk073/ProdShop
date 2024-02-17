import React from 'react'
import Icon from '../Icon';
import { Input } from '../ui/input';

const TextField = React.forwardRef(({ type, placeholder, errorMessage, value, className, onChange, icon, iconSize = 20, ...rest }, ref) => {
    return (
        <div className='flex flex-col justify-center items-start'>
            <div className={`textfield_input_container ${icon ? 'p-2' : 'p-0'}  ${className}`}>
                {icon ?
                    (
                        <Icon name={icon} size={iconSize} color="#00000070" className="textfield_icon" />
                    )
                    : null}
                <Input ref={ref} {...rest} type={type} placeholder={placeholder} value={value} className={`textfield_input`} onChange={onChange} />
            </div>
            {
                errorMessage ? <span className="text-red-600 mb-3 text-sm">{errorMessage}</span> : null
            }
        </div>
    )
});

export default TextField