import react from 'react';
import MaskedInput from 'react-text-mask';

const PersonalDetails = () => {
    return (
        <>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className=" px-0 flex-1 ">
                    {/* <div className="flex justify-between flex-wrap px-4">
                        <div className="px-4 mb-6 lg:w-1/2 w-full">
                            <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                                Personal Details
                            </div>
                        </div>
                    </div> */}
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
                                    <MaskedInput
                                        id="Aadhar_Card"
                                        type="text"
                                        placeholder="Enter Aadhar Number"
                                        className="form-input flex-1"
                                        mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                    />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="PAN_card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        PAN Card Number
                                    </label>
                                    <MaskedInput
                                        id="PAN_Card"
                                        type="text"
                                        placeholder="Enter PAN Number"
                                        className="form-input flex-1  "
                                        mask={[/[A-Z]/, /[A-Z]/, /[A-Z]/, /[A-Z]/, /[A-Z]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[A-Z]/]}
                                    />
                                    <label htmlFor="certificate" className="ltr:mr-2 w-28  mb-0">
                                        Residential Certificate
                                    </label>
                                    <input
                                        id="certificate"
                                        type="file"
                                        name="certificate"
                                        className=" flex-1 form-input file:py-2.5 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                                        placeholder="Upload File"
                                    />
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

                    {/*---------------------------------------------------Transport Details Begin--------------------------------------------- */}

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6 " />
                    <div className="mt-8 px-4">
                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            <h2>Transport Details</h2>
                        </label>
                        <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="Aadhar_Card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Route List
                                    </label>
                                    <select className="form-select flex-1">
                                        <option value="Select Room">Select Route</option>

                                        <option>Rajiv Chowk</option>
                                        <option>Barakhamba</option>
                                        <option>Mandi House</option>
                                        <option>Supreme Court (Pragati Maidan)</option>
                                        <option>Indraprastha</option>
                                        <option>Yamuna Bank</option>
                                        <option>Akshardham</option>
                                        <option>Mayur Vihar Phase-1</option>
                                        <option>Mayur Vihar Extention</option>
                                        <option>New Ashok Nagar</option>
                                        <option>Noida Sector 15</option>
                                        <option>Noida Sector 16</option>
                                        <option>Noida Sector 18</option>
                                        <option>Botanical Garden</option>
                                        <option>Golf Course</option>
                                        <option>Noida City Center</option>
                                        <option>Noida Sector 34</option>
                                        <option>Noida Sector 52</option>
                                        <option>Noida Sector 61</option>
                                        <option>Noida Sector 59</option>
                                        <option>Noida Sector 62</option>
                                        <option>Noida Electronic City</option>
                                    </select>
                                    <label htmlFor="PAN_card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Pickup Point
                                    </label>
                                    <input id="PAN_card" type="text" name="PAN_card" className="form-input flex-1" placeholder="Enter PickUp Point" />
                                </div>
                                <div className="mt-4 flex w-1/2 gap-5 lg:flex-row flex-col">
                                    <label htmlFor="Driving_licence" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Fee Semester
                                    </label>
                                    <select className="form-select flex-1">
                                        <option value="Select Semester">Select Fee Semester</option>
                                        <option value="I">I</option>
                                        <option value="II">II</option>
                                        <option value="III">III</option>
                                        <option value="IV">IV</option>
                                        <option value="V">V</option>
                                        <option value="VI">VI</option>
                                        <option value="VII">VII</option>
                                        <option value="VIII">VIII</option>
                                        <option value="IX">IX</option>
                                        <option value="X">X</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*------------------------------------Hostel Details--------------------------------------------- */}
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6 " />
                    <div className="mt-8 px-4">
                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            <h2>Hostel Details</h2>
                        </label>
                        <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="Aadhar_Card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Hostel List
                                    </label>
                                    <select className="form-select flex-1">
                                        <option value="Select Hostel">Select Hostel</option>

                                        <option>Boys Hostel A</option>
                                        <option>Boys Hostel B</option>
                                        <option>Boys Hostel C</option>
                                        <option>Girls Hostel A</option>
                                        <option>Girls Hostel B</option>
                                    </select>
                                    <label htmlFor="Driving_licence" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Room Number
                                    </label>
                                    <select className="form-select flex-1">
                                        <option value="Select Room">Select Room</option>
                                        <option value="I">1</option>
                                        <option value="II">2</option>
                                        <option value="III">3</option>
                                        <option value="IV">4</option>
                                        <option value="V">5</option>
                                        <option value="VI">6</option>
                                        <option value="VII">7</option>
                                        <option value="VIII">8</option>
                                        <option value="IX">9</option>
                                        <option value="X">10</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ------------------Hostel Details End----------------------------------------------- */}
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="mt-8 px-4">
                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            <h2>Other Details</h2>
                        </label>
                    </div>
                    <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                        <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                            <div className="mt-4 flex  grid grid-cols-2">
                                <form className="pl-4 font-bold items-center space-y-5 flex lg:flex-row flex-col">
                                    <label className="flex items-center cursor-pointer">
                                        Are you physically challenged &nbsp;:
                                        <div className="ml-4 flex items-center">
                                            <input type="radio" id="yes" name="custom_radio2" className="form-radio" />
                                            <label htmlFor="yes" className="ml-2 text-white-dark">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="ml-4 flex items-center">
                                            <input type="radio" id="no" name="custom_radio2" className="form-radio" />
                                            <label htmlFor="no" className="ml-2 text-white-dark">
                                                No
                                            </label>
                                        </div>
                                    </label>
                                </form>

                                <form className="pl-4 font-bold items-center space-y-5 flex lg:flex-row flex-col">
                                    <label className="flex items-center cursor-pointer">
                                        Are you a foreign student &nbsp;:
                                        <div className="ml-4 flex items-center">
                                            <input type="radio" id="yes" name="custom_radio2" className="form-radio" />
                                            <label htmlFor="yes" className="ml-2 text-white-dark">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="ml-4 flex items-center">
                                            <input type="radio" id="no" name="custom_radio2" className="form-radio" />
                                            <label htmlFor="no" className="ml-2 text-white-dark">
                                                No
                                            </label>
                                        </div>
                                    </label>
                                </form>

                                {/* <form className="pl-4 font-bold items-center space-y-5 flex lg:flex-row flex-col">
                                    <label className="flex items-center cursor-pointer">
                                        Are you physically challenged?:
                                        <div className="lg:ml-4 space-x-4 flex flex-col lg:flex-row">
                                            <div>
                                                <input type="radio" name="custom_radio2" className="form-radio" />
                                                <span className="text-white-dark">Yes</span>
                                            </div>
                                            <div>
                                                <input type="radio" name="custom_radio2" className="form-radio" />
                                                <span className="text-white-dark">No</span>
                                            </div>
                                        </div>
                                    </label>
                                </form> */}
                                {/* 
                                <form className="pl-4 items-center font-bold space-y-5 flex flex-row lg:flex-row flex-col ">
                                    Are you a foreign Student ? &nbsp;: &nbsp; &nbsp;
                                    <div>
                                        <label className="  pl-2 flex items-center cursor-pointer">
                                            <input type="radio" name="custom_radio2" className="form-radio" />
                                            <span className="text-white-dark">Yes</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className=" pl-4 -mt-4.5 flex items-center cursor-pointer">
                                            <input type="radio" name="custom_radio2" className="form-radio" />
                                            <span className="text-white-dark">No</span>
                                        </label>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>

                    {/*------------------------------Upload Documents Begin------------------------------------------------ */}
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="mt-8 px-4">
                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            <h2>Upload Files</h2>
                        </label>
                        {/* <div className=" pl-5 flex justify-between lg:flex-row flex-col"> */}
                        {/* <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6"> */}
                        <div className="flex px-4">
                            <div className=" mt-4 gap-5 lg:flex-row flex-col" style={{ width: '50%', padding: '0 10px' }}>
                                <label htmlFor="photo" className="mb-3 ltr:mr-2 rtl:ml-2  mb-0">
                                    Upload Photo &nbsp;
                                </label>
                                <input
                                    id="photo"
                                    type="file"
                                    name="photo"
                                    style={{ height: 'fitContent' }}
                                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                                    placeholder=""
                                />
                                <span className="flex-col" style={{ color: 'red' }}>
                                    {' '}
                                    (Max size 20kb-50kb)
                                </span>
                            </div>

                            <div className="mt-4 gap-5 lg:flex-row flex-col" style={{ width: '50%', padding: '0 10px' }}>
                                <label htmlFor="signature" className="mb-3 ltr:mr-2 rtl:ml-2  mb-0">
                                    Upload Signature &nbsp;
                                </label>
                                <input
                                    id="signature"
                                    type="file"
                                    name="signature"
                                    className=" form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                                    placeholder=""
                                />
                                <span className="flex-col " style={{ color: 'red' }}>
                                    (Max size 20Mb)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalDetails;
