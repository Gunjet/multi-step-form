
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Card({ Next, formData, handleInputChange }) {
  const [firstNameError, setFirstNameError] = useState(""); 
  const [lastNameError, setLastNameError] = useState(""); 
  const [userNameError, setUserNameError] = useState(""); 
  const nameRegex = /^[A-Za-z]+$/;
  
  const handleFirstNameChange = (e) => {
    const value = e.target.value.trim();
    if (value === "") {
      setFirstNameError("First name cannot be empty.");
    } else if (!nameRegex.test(value)) {
      setFirstNameError("First name cannot contain special characters or numbers.");
    } else {
      setFirstNameError(" ");  
    }
    handleInputChange("firstName", value);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value.trim();
    if (value === "") {
      setLastNameError("Last name cannot be empty.");
    } else if (!nameRegex.test(value)) {
      setLastNameError("Last name cannot contain special characters or numbers.");
    } else {
      setLastNameError(" "); 
    }
    handleInputChange("lastName", value); 
  };

  const handleUserNameChange = (e) => {
    const value = e.target.value.trim();
    if (value === "") {
      setUserNameError("Username cannot be empty.");
    } else if (!nameRegex.test(value)) {
      setUserNameError("Username cannot contain special characters or numbers.");
    } else {
      setUserNameError(" "); 
    }
    handleInputChange("userName", value); 
  };
  const isButtonDisabled = !(firstNameError===" " && lastNameError===" " &userNameError===" ")

  return (
    <div className="w-[480px] h-[655px] bg-white rounded-md flex justify-center relative">
      <div className="w-[416px] h-[385px] flex-col justify-center mt-8">
        <div className="w-[416px] h-[129px]">
          <img src="/logo.png" className="w-[60px] h-[60px]" />
          <p className="text-[26px] font-semibold">Join Us! 😎</p>
          <p className="text-[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
        </div>
        <div className="w-[416px] my-[25px] flex flex-col gap-2">
  <div className={`relative w-[416px] min-h-[68px] ${firstNameError ? "pb-5" : ""}`}>
    <p className="font-semibold my-[2px]">First name *</p>
    <input
      value={formData.firstName}
      onChange={handleFirstNameChange}
      className="w-[416px] h-[44px] border-[1px] border-[#CBD5E1] rounded-md pl-2"
      placeholder="Enter your first name"
    />
    {firstNameError && (
      <p className="text-red-500 text-sm absolute top-[calc(90%_-_1px)] left-0">
        {firstNameError}
      </p>
    )}
  </div>

  <div className={`relative w-[416px] min-h-[68px] ${lastNameError ? "pb-5" : ""}`}>
    <p className="font-semibold my-[2px]">Last name *</p>
    <input
      value={formData.lastName}
      onChange={handleLastNameChange}
      className="w-[416px] h-[44px] border-[1px] border-[#CBD5E1] rounded-md pl-2"
      placeholder="Enter your last name"
    />
    {lastNameError && (
      <p className="text-red-500 text-sm absolute top-[calc(90%_-_1px)] left-0">
        {lastNameError}
      </p>
    )}
  </div>

  <div className={`relative w-[416px] min-h-[68px] ${userNameError ? "pb-5" : ""}`}>
    <p className="font-semibold my-[2px]">Username *</p>
    <input
      value={formData.userName}
      onChange={handleUserNameChange}
      className="w-[416px] h-[44px] border-[1px] border-[#CBD5E1] rounded-md pl-2"
      placeholder="Enter your username"
    />
    {userNameError && (
      <p className="text-red-500 text-sm absolute top-[calc(90%_-_1px)] left-0">
        {userNameError}
      </p>
    )}
  </div>
</div>

      </div>
      <button
        onClick={Next}
        className={`w-[416px] h-[44px] ${isButtonDisabled ? "bg-[#D6D8DB] text-[#A9ACAF]" : "bg-[#202124] text-white"} absolute rounded-md my-[580px] flex justify-center gap-2 items-center`}
        disabled={isButtonDisabled} 
      >
        Continue 1/3
        <IoIosArrowForward className="w-[18px] h-[18px]" />
      </button>
    </div>
  );
}
