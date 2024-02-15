const Input = ({
    label = '',
    name = '',
    type = '',
    placeholder = '',
    className = '',

    isRequried = 'true',
    value = '',
    autocomplete = "new-password",
    onChange = () => { },

}) => {
    return (
        <div className="relative z-0 w-[100%] ml-2 ">
            <input
                type={type}
                id={name}
                name={name}
                autoComplete={autocomplete}
                className={`${className}  text-sm peer block py-2.5 px-1 w-[100%]  text-gray-600 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464]  }`}
                placeholder={placeholder} required={isRequried} value={value} onChange={onChange}
            />
            <label
                htmlFor={name}
                className=" font-bold peer-focus:font-medium absolute text-xs  duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
                {label}
            </label>
        </div>
    );
}
export default Input;