import react from 'react';
import MaskedInput from 'react-text-mask';

const PersonalDetails = () => {
    return (
        <>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="flex justify-between flex-wrap px-4">
                        <div className="mb-6 lg:w-1/2 w-full">
                            <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                                Personal Details
                            </div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="mt-8 px-4">
                        <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        First Name
                                    </label>
                                    <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter First Name" />
                                    <label htmlFor="lastName" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                        Last Name
                                    </label>
                                    <input id="lastName" type="text" name="lastName" className="form-input flex-1" placeholder="Enter Last Name" />
                                </div>

                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="collegeEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        College Email
                                    </label>
                                    <input id="collegeEmail" type="email" name="collegeEmail" className="form-input flex-1" placeholder="Enter College Email" />

                                    <label htmlFor="personalEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Personal Email
                                    </label>
                                    <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
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
                                    <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Alternate Phone Number
                                    </label>
                                    <MaskedInput
                                        id="phoneMask"
                                        type="text"
                                        placeholder="Enter another Phone Number"
                                        className="form-input flex-1"
                                        mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                    />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="dob" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Date of Birth
                                    </label>
                                    <input id="dob" type="date" name="dob" className="form-input flex-1" placeholder="Enter DOB" />
                                    <label className=' className="ltr:mr-2 rtl:ml-2 w-28  mb-0"'>Blood Group</label>
                                    <select className="form-select flex-1">
                                        <option>Select Blood Group</option>
                                        <option>
                                            A <span>+</span>
                                        </option>
                                        <option>
                                            B <span>+</span>
                                        </option>
                                        <option>
                                            AB <span>+</span>
                                        </option>
                                        <option>
                                            O<span>+</span>
                                        </option>
                                        <option>
                                            A <span>-</span>
                                        </option>
                                        <option>
                                            B <span>-</span>
                                        </option>
                                        <option>
                                            AB <span>-</span>
                                        </option>
                                        <option>
                                            O<span>-</span>
                                        </option>
                                    </select>
                                </div>

                                <div className="mt-4   flex gap-5  lg:flex-row flex-col">
                                    <label className=' className="ltr:mr-2 rtl:ml-2 w-28  mb-0"'>Gender</label>
                                    <select className="form-select flex-1">
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>

                                    <label htmlFor="religion" className=" ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Religion
                                    </label>
                                    <input id="religion" type="text" name="religion" className="form-input flex-1" placeholder="Enter Religion" />
                                </div>
                                <div className="mt-4   flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="category" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Category
                                    </label>
                                    <select className="form-select flex-1">
                                        <option>Select Category</option>
                                        <option>General</option>
                                        <option>OBC</option>
                                        <option>ST</option>
                                        <option>SC</option>
                                    </select>
                                    <label htmlFor="caste" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Caste
                                    </label>
                                    <input id="caste" type="text" name="caste" className="form-input flex-1" placeholder="Enter Caste" />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="admDate" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Admission Date
                                    </label>
                                    <input id="admDate" type="date" name="admDate" className="form-input flex-1" placeholder="" />
                                    <label htmlFor="admDate" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Roll Number
                                    </label>
                                    <input id="rollNo" type="text" name="rollNo" className="form-input flex-1" placeholder="Enter Roll Number" />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="status" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Marital Status
                                    </label>
                                    <select className="form-select flex-1">
                                        <option>Select Marital Status</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Widowed</option>
                                        <option>Separated</option>
                                        <option>No Specific</option>
                                    </select>
                                    <label htmlFor="Aadhar_Card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Aadhar Card Number
                                    </label>
                                    <input id="Aadhar_Card" type="text" name="Aadhar_Card" className="form-input flex-1" placeholder="Enter Aadhar No." />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="PAN_card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        PAN Card Number
                                    </label>
                                    <input id="PAN_card" type="text" name="PAN_card" className="form-input flex-1" placeholder="Enter PAN No." />
                                    <label htmlFor="certificate" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Residential Certificate
                                    </label>
                                    <input id="certificate" type="file" name="certificate" className="form-input flex-1" placeholder="Upload File" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6 " />
                    <div className="mt-8 px-4">
                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            <h2>Course Details</h2>
                        </label>
                        <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="Aadhar_Card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Stream Opted
                                    </label>
                                    <input id="Aadhar_Card" type="text" name="Aadhar_Card" className="form-input flex-1" placeholder="Enter Stream" />
                                    <label htmlFor="PAN_card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Course Opted
                                    </label>
                                    <input id="PAN_card" type="text" name="PAN_card" className="form-input flex-1" placeholder="Enter Course." />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="Driving_licence" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Specialization
                                    </label>
                                    <input id="Driving_licence" type="text" name="Driving_licence" className="form-input flex-1" placeholder="Enter Specialization" />
                                    <label htmlFor="Driving_licence" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Current Semester
                                    </label>
                                    <input id="Driving_licence" type="text" name="Driving_licence" className="form-input flex-1" placeholder="Enter Semester" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------Course Details Begin--------------------------------------------- */}
                    {/* </div> */}
                    {/*---------------------------------------------------Course Details End--------------------------------------------- */}
                    {/*---------------------------------------------------Other Info Begin--------------------------------------------- */}
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <label htmlFor="permanentAdd" className=" px-5 pb-4 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                        <h2> Other Details</h2>
                    </label>

                    <div className="mr-5 ml-8">
                        <div className="mb-5 flex grid-cols-3 gap-16 lg:flex-row flex-col">
                            <div>
                                <form className="pl-4 font-bold items-center space-y-5 flex flex-row ">
                                    Are you a Hostellite &nbsp;: &nbsp; &nbsp;
                                    <div>
                                        <label className=" pl-2 flex  cursor-pointer">
                                            <input type="radio" name="custom_radio2" className="form-radio" />
                                            <span className="text-white-dark">Yes</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="pl-4 -mt-4 flex  cursor-pointer">
                                            <input type="radio" name="custom_radio2" className="form-radio" />
                                            <span className="text-white-dark ">No</span>
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <form className="pl-4 font-bold items-center space-y-5 flex flex-row ">
                                Are you physically challenged ? &nbsp;: &nbsp; &nbsp;
                                <div>
                                    <label className="pl-2 flex items-center cursor-pointer">
                                        <input type="radio" name="custom_radio2" className="form-radio" />
                                        <span className="text-white-dark">Yes</span>
                                    </label>
                                </div>
                                <div>
                                    <label className=" pl-4 -mt-4  flex items-center cursor-pointer">
                                        <input type="radio" name="custom_radio2" className="form-radio" />
                                        <span className="text-white-dark ">No</span>
                                    </label>
                                </div>
                            </form>
                            <form className="pl-4items-center font-bold space-y-5 flex flex-row ">
                                Are you a foreign Student ? &nbsp;: &nbsp; &nbsp;
                                <div>
                                    <label className="  pl-2 flex items-center cursor-pointer">
                                        <input type="radio" name="custom_radio2" className="form-radio" />
                                        <span className="text-white-dark">Yes</span>
                                    </label>
                                </div>
                                <div>
                                    <label className=" pl-4 -mt-4 flex items-center cursor-pointer">
                                        <input type="radio" name="custom_radio2" className="form-radio" />
                                        <span className="text-white-dark">No</span>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/*------------------------------Upload Documents Begin------------------------------------------------ */}
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                   
                </div>
            </div>
        </>
    );
};

export default PersonalDetails;
