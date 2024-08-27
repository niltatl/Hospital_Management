import React from "react";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Muhibur Rahman{" "}
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          delectus, dolorum rerum placeat accusantium quos similique veniam
          porro natus aliquam saepe doloremque. Itaque eveniet ipsa expedita
          esse ducimus beatae nam!
        </p>
      </div>


    <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>

      <ul className="pt-4 md:p-5">
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
          <div>
            <span>23 June, 200</span>
          </div>
        </li>
      </ul>
      </div>  

    </div>
  );
};

export default DoctorAbout;
