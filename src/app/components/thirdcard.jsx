// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { useState } from "react";

// export function ThirdCard({ Next, Back }) {
//   const [image, setImage] = useState(null);
//   const [imageError, setImageError] = useState("");
//   const [date, setDate] = useState("");
//   const [dateError, setDateError] = useState("");

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) {
//       setImageError("Image cannot be blank.");
//       setImage(null);
//     } else {
//       setImageError("");
//       setImage(file);
//     }
//   };

//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     if (!selectedDate) {
//       setDateError("Please select a date.");
//     } else {
//       setDateError("");
//     }
//     setDate(selectedDate);
//   };

//   const isButtonDisabled = imageError !== "" || !image || dateError !== "" || !date;

//   return (
//     <div className="w-[480px] h-[655px] bg-white rounded-md flex justify-center relative">
//       <div className="w-[416px] h-[465px] flex-col justify-center mt-8">
//         <div className="w-[416px] h-[129px]">
//           <img src="/logo.png" className="w-[60px] h-[60px]" />
//           <p className="text-[26px] font-semibold">Join Us! 😎</p>
//           <p className="text-[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
//         </div>
//         <div className="w-[416px] h-[288px] my-[25px]">
//           <div className="w-[416px] h-[68px]">
//             <p className="font-semibold my-[2px]">Date of birth *</p>
//             <input
//               type="date"
//               value={date}
//               onChange={handleDateChange}
//               className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
//             />
//             {dateError && <p className="text-red-500 text-sm mt-1">{dateError}</p>}
//           </div>

//           <div className="w-[416px] h-[180px] my-[8px]">
//             <p className="font-semibold my-[2px]">Profile image *</p>
//             <div className="w-[416px] h-[180px] rounded-md bg-[#F7F7F7] flex flex-col gap-2 items-center justify-center border-[1px] border-[#CBD5E1]">
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageChange}
//                 id="imageInput"
//               />
//               <label htmlFor="imageInput" className="cursor-pointer">
//                 <img src="/uploadicon.png" className="w-[28px] h-[28px]" />
//                 <p className="text-[14px]">Add image</p>
//               </label>
//               {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-[416px] h-[44px] absolute my-[580px] justify-between flex">
//         <button
//           onClick={Back}
//           className="w-[128px] h-[44px] rounded-md text-black border-[1px] border-[#CBD5E1] flex justify-center gap-2 items-center"
//         >
//           <IoIosArrowBack className="w-[18px] h-[18px]" />
//           Back
//         </button>

//         <button
//           onClick={Next}
//           className={`w-[280px] h-[44px] ${isButtonDisabled ? "bg-[#D6D8DB] text-[#A9ACAF]" : "bg-[#202124] text-white"} rounded-md flex justify-center gap-2 items-center`}
//           disabled={isButtonDisabled}
//         >
//           Continue 3/3
//           <IoIosArrowForward className="w-[18px] h-[18px]" />
//         </button>
//       </div>
//     </div>
//   );
// }


import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

export function ThirdCard({ Next, Back }) {
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImageError("Image cannot be blank.");
      setImage(null);
    } else {
      setImageError("");
      setImage(URL.createObjectURL(file)); // Create URL for the selected image
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (!selectedDate) {
      setDateError("Please select a date.");
    } else {
      setDateError("");
    }
    setDate(selectedDate);
  };

  const isButtonDisabled = imageError !== "" || !image || dateError !== "" || !date;

  return (
    <div className="w-[480px] h-[655px] bg-white rounded-md flex justify-center relative">
      <div className="w-[416px] h-[465px] flex-col justify-center mt-8">
        <div className="w-[416px] h-[129px]">
          <img src="/logo.png" className="w-[60px] h-[60px]" />
          <p className="text-[26px] font-semibold">Join Us! 😎</p>
          <p className="text-[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
        </div>
        <div className="w-[416px] h-[288px] my-[25px]">
          <div className="w-[416px] h-[68px]">
            <p className="font-semibold my-[2px]">Date of birth *</p>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
            />
            {dateError && <p className="text-red-500 text-sm mt-1">{dateError}</p>}
          </div>

          <div className="w-[416px] h-[180px] my-[8px]">
            <p className="font-semibold my-[2px]">Profile image *</p>
            <div className="w-[416px] h-[180px] rounded-md bg-[#F7F7F7] flex flex-col gap-2 items-center justify-center border-[1px] border-[#CBD5E1]">
              {/* Conditionally render the file input and label */}
              {!image ? (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                    id="imageInput"
                  />
                  <label htmlFor="imageInput" className="cursor-pointer">
                    <img src="/uploadicon.png" className="w-[28px] h-[28px]" />
                    <p className="text-[14px]">Add image</p>
                  </label>
                </>
              ) : (
                <img
                  src={image}
                  alt="Selected"
                  className="w-[100%] h-[100%] object-cover rounded-md"
                />
              )}

              {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[416px] h-[44px] absolute my-[580px] justify-between flex">
        <button
          onClick={Back}
          className="w-[128px] h-[44px] rounded-md text-black border-[1px] border-[#CBD5E1] flex justify-center gap-2 items-center"
        >
          <IoIosArrowBack className="w-[18px] h-[18px]" />
          Back
        </button>

        <button
          onClick={Next}
          className={`w-[280px] h-[44px] ${isButtonDisabled ? "bg-[#D6D8DB] text-[#A9ACAF]" : "bg-[#202124] text-white"} rounded-md flex justify-center gap-2 items-center`}
          disabled={isButtonDisabled}
        >
          Continue 3/3
          <IoIosArrowForward className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
}
