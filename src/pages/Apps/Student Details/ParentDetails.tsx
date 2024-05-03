import React from "react";
import MaskedInput from 'react-text-mask';

const ParentDetails=()=>{
    return(
        <>
           <div className="flex xl:flex-row flex-col gap-2.5">
                                    <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                                        <div className="flex justify-between flex-wrap px-4">
                                            <div className="mb-6 lg:w-1/2 w-full">
                                                <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                                                    Parents' Details
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                                            <h2> Father's Information</h2>
                                        </label>
                                        <div className="mt-8 px-4">
                                            <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                                                <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                                    <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                        <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                            Father's First Name
                                                        </label>
                                                        <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter Father's Name" />
                                                        <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                            Father's Last Name
                                                        </label>
                                                        <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter Father's Name" />
                                                    </div>

                                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Personal Number
                                                        </label>
                                                        <MaskedInput
                                                            id="phoneMask"
                                                            type="text"
                                                            placeholder="Enter your Phone Number"
                                                            className="form-input flex-1"
                                                            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                        />

                                                        <label htmlFor="personalEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Personal Email
                                                        </label>
                                                        <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
                                                    </div>
                                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Occupation
                                                        </label>
                                                        <input id="personalEmail" type="text" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />

                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Organization
                                                        </label>
                                                        <input id="personalEmail" type="text" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
                                                    </div>
                                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Designation
                                                        </label>
                                                        <input id="personalEmail" type="text" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />

                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Annual Income
                                                        </label>
                                                        <input id="personalEmail" type="text" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
                                                    </div>

                                                    <div className="mt-4   flex gap-5  lg:flex-row flex-col">
                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Office Number
                                                        </label>
                                                        <MaskedInput
                                                            id="phoneMask"
                                                            type="text"
                                                            placeholder="Enter Phone Number"
                                                            className="form-input flex-1"
                                                            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                        />
                                                        <label htmlFor="collegeEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Office Email
                                                        </label>
                                                        <input id="personalEmail" type="text" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                                            <h2> Mother's Information</h2>
                                        </label>
                                        <div className="mt-8 px-4">
                                            <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                                                <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                                    <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                        <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                            Mother's First Name
                                                        </label>
                                                        <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter Father's Name" />
                                                        <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                            Mother's Last Name
                                                        </label>
                                                        <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter Father's Name" />
                                                    </div>

                                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Personal Number
                                                        </label>
                                                        <MaskedInput
                                                            id="phoneMask"
                                                            type="text"
                                                            placeholder="Enter your Phone Number"
                                                            className="form-input flex-1"
                                                            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                        />

                                                        <label htmlFor="personalEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Personal Email
                                                        </label>
                                                        <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
                                                    </div>
                                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Occupation
                                                        </label>
                                                        <input id="personalEmail" type="text" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />

                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Organization
                                                        </label>
                                                        <input id="personalEmail" type="text" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
                                                    </div>
                                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Designation
                                                        </label>
                                                        <input id="personalEmail" type="text" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />

                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Annual Income
                                                        </label>
                                                        <input id="personalEmail" type="text" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
                                                    </div>

                                                    <div className="mt-4   flex gap-5  lg:flex-row flex-col">
                                                        <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Office Number
                                                        </label>
                                                        <MaskedInput
                                                            id="phoneMask"
                                                            type="text"
                                                            placeholder="Enter Phone Number"
                                                            className="form-input flex-1"
                                                            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                        />
                                                        <label htmlFor="collegeEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Office Email
                                                        </label>
                                                        <input id="personalEmail" type="text" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                                            <div className="flex justify-between flex-wrap px-4">
                                                <div className=" mb-6 lg:w-1/2 w-full">
                                                    <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                                                        Guardian Details
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                                            <div className="mt-8 px-4">
                                                <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                                                    <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                            <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                                Full Name
                                                            </label>
                                                            <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter Full Name" />
                                                            <label htmlFor="lastName" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                                                E mail ID
                                                            </label>
                                                            <input id="lastName" type="text" name="lastName" className="form-input flex-1" placeholder="Enter Email ID" />
                                                        </div>

                                                        <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                                            <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                                Phone Number
                                                            </label>
                                                            <MaskedInput
                                                                id="phoneMask"
                                                                type="text"
                                                                placeholder="Enter your Phone Number"
                                                                className="form-input flex-1"
                                                                mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                            />

                                                            <label htmlFor="personalEmail" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                                Relation with Guardian
                                                            </label>
                                                            <input
                                                                id="personalEmail"
                                                                type="email"
                                                                name="personalEmail"
                                                                className="form-input flex-1"
                                                                placeholder="Example- Aunt, Uncle, Brother etc."
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ps-14 pe-10 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                    Guardian's Address
                                                </label>
                                                <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 h-20 " placeholder="Enter Guardian's Address" />
                                            </div>
                                        </div>
                                    </div>

                                
        </>
    );
    

};



export default ParentDetails;
