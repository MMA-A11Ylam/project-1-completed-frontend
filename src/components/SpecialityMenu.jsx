import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div
      className="flex  flex-col items-center gap-4 py-14 text-gray-800"
      id="speciality"
    >
      <h1 className="text-3xl font-meduim">Find By Specialty</h1>
      <p className="sm:w-1/2 text-center text-sm">
        Simply browse through our extensive list of tursted doctors, schedule
        your appointment hassel-free
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto scrollbar-hide">
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)} className="flex flex-col item-center text-xs cursor-pointer flex-shrink hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`} >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt={item.speciality} />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
