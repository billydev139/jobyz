import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Icons from "../assets/icons";


const InputField = ({
  className,
  cols,
  type,
  name,
  placeholder,
  id,
  label,
  firstIcon,
  onChange,
  backgroundcolor,
  paddingY,
  value,
  disabled,
  showHideIcon = false,
  paddingRight,
  borderShape,
  placeholderColor
}) => {
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility state
  };

  return (
    <div>
      <div className="flex flex-col ">
        {label && (
          <>
            <div className="flex items-center justify-between">
              <label
                htmlFor={id}
                className="flex justify-start items-center gap-2 text-black mb-2 text-[14px] font-medium"
              >
                {firstIcon}
                {label}
              </label>
              {showHideIcon &&
                type === "password" && ( // Only show the hide/show icon if the input type is password
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <Icons.BiSolidShow />
                    ) : (
                      <Icons.BiSolidHide />
                    )}
                    <span className="font-quicksand text-[13px] font-normal text-textPrimary">
                      {showPassword ? "Hide" : "Show"}
                    </span>
                  </div>
                )}
            </div>
          </>
        )}

        {type === "textarea" ? (
          <textarea
          cols={cols? cols :""}
            className={` ${
              paddingRight ? `pr-${paddingRight}` : "pr-0"
            } rounded-lg  border-[1px] border-black ${
              type === "textarea" ? "h-[85px] placeholder:top-[-50px]" : ""
            } ${paddingY ? `py-${paddingY}` : "py-[10px]"} px-2  outline-none ${
              backgroundcolor ? `bg-${backgroundcolor}` : "bg-white"
            } placeholder:text-[14px]`}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
          />
        ) : (
          <input
            type={showPassword ? "text" : type} // Conditionally set input type
            name={name}
            id={id}
            value={value}
            className={`${className} ${
              paddingRight ? `pr-${paddingRight}` : "pr-0"
            } ${borderShape? borderShape:"rounded-lg"}  border-[1px] border-black ${
              type === "textarea" ? "h-[85px] placeholder:top-[-50px]" : ""
            } ${paddingY ? `${paddingY}` : "py-[10px]"} px-2  outline-none ${
              backgroundcolor ? `bg-${backgroundcolor}` : "bg-white"
            } placeholder:text-[14px] placeholder:${placeholderColor?placeholderColor:"text-black"}`}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
};

InputField.propTypes = {
  backgroundcolor: PropTypes.any,
  borderBottom: PropTypes.any,
  checked: PropTypes.any,
  className: PropTypes.any,
  disabled: PropTypes.any,
  firstIcon: PropTypes.any,
  id: PropTypes.any,
  label: PropTypes.any,
  cols: PropTypes.any,
  labelstyle: PropTypes.any,
  name: PropTypes.any,
  onChange: PropTypes.any,
  paddingRight: PropTypes.any,
  paddingY: PropTypes.any,
  placeholder: PropTypes.any,
  showHideIcon: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.any,
  borderShape: PropTypes.any,
  placeholderColor: PropTypes.any,
};

export default InputField;
