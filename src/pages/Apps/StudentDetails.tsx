// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import IconCode from '../../components/Icon/IconCode';
import IconHome from '../../components/Icon/IconHome';
import IconUser from '../../components/Icon/IconUser';
import IconThumbUp from '../../components/Icon/IconThumbUp';

// import IconDownload from '..src/components/Icon/IconDownload';
import MaskedInput from 'react-text-mask';

const StudentDetails = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Invoice Add'));
    // });

    const [formdata, setFormData] = useState({
        Firstname: '',
        lastName: '',
        father_name: '',
        mother_name: '',
        collegeEmail: '',
        personalEmail: '',
        date_of_birth: '',
        phone_number: '',
        Gender: '',
        religion: '',
        admDate: '',
        admission_no: '',
        roll_no: '',
        category: '',
        domicile: '',
        caste: '',
        status: '',
        aadharNo: '',
        admission_data: '',

        important_details: {
            Aadhar_Card: '',
            PAN_card: '',
        },

        present_address: {
            Street_Address: '',
            Street_Address_Line_2: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
        },
        permanent_address: {
            Street_Address: '',
            Street_Address_Line_2: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
        },
        emergency_contact: {
            first_name: '',
            last_name: '',
            relationship: '',
            Street_Address: '',
            Street_Address_Line_2: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
            emergency_number: '',
            emergency_email: '',
        },
        bank_details: {
            account_number: '',
            bank_name: '',
            ifsc_code: '',
            iban_number: '',
            bank_country: '',
        },
        remarks: '',
    });

    const [activeTab4, setActiveTab4] = useState<any>(1);

    return (
        <>
            {/*---------------------------------------------form widard begin---------------------------------------------------------- */}

            <div className="mb-5">
                <div className="inline-block w-full">
                    <div className="relative z-[1]">
                        <div
                            className={`${activeTab4 === 1 ? 'w-[15%]' : activeTab4 === 2 ? 'w-[48%]' : activeTab4 === 3 ? 'w-[81%]' : ''}
                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}
                        ></div>
                        <ul className="mb-5 grid grid-cols-3">
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 1 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                    onClick={() => setActiveTab4(1)}
                                >
                                    <IconHome />
                                </button>
                                <span className={`${activeTab4 === 1 ? 'text-primary ' : ''}text-center block mt-2`}>Personal Details</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 2 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                    onClick={() => setActiveTab4(2)}
                                >
                                    <IconUser className="w-5 h-5" />
                                </button>
                                <span className={`${activeTab4 === 2 ? 'text-primary ' : ''}text-center block mt-2`}>Parent Details</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 3 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                    onClick={() => setActiveTab4(3)}
                                >
                                    <IconThumbUp className="w-5 h-5" />
                                </button>
                                <span className={`${activeTab4 === 3 ? 'text-primary ' : ''}text-center block mt-2`}>Guardian Details</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-5">
                            {
                                activeTab4 === 1 && (
                                    /*----------------------Personal Details-------------------------------------------*/
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
                                                        <div className="mt-8 flex  gap-5 lg:flex-row flex-col">
                                                            <label htmlFor="dob" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                                Date of Birth
                                                            </label>
                                                            <input id="gender" type="date" name="gender" className="form-input flex-1" placeholder="Enter Gender" />
                                                            <label className=' className="ltr:mr-2 rtl:ml-2 w-28  mb-0"'>Gender</label>
                                                            <select className="form-select flex-1">
                                                                <option>Select Gender</option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                                <option>Others</option>
                                                            </select>

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
                                                            <label htmlFor="religion" className=" ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                                Religion
                                                            </label>
                                                            <input id="religion" type="text" name="religion" className="form-input flex-1" placeholder="Enter Religion" />
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*---------------------------------------------------Imp Details Begin--------------------------------------------- */}
                                            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                            <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                                                <h2> Important Details</h2>
                                            </label>

                                            <div className="mr-5 ml-8">
                                                <div className="mt-4 flex lg:flex-row flex-col gap-5 ">
                                                    <div className="px-5 flex w-1/3">
                                                        <label htmlFor="Aadhar_Card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Aadhar Card Number
                                                        </label>
                                                        <input id="Aadhar_Card" type="text" name="Aadhar_Card" className="form-input flex-1" placeholder="Enter Aadhar No." />
                                                    </div>
                                                    <div className="px-5 flex w-1/3">
                                                        <label htmlFor="PAN_card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            PAN Card Number
                                                        </label>
                                                        <input id="PAN_card" type="text" name="PAN_card" className="form-input flex-1" placeholder="Enter PAN No." />
                                                    </div>
                                                    <div className="px-5 flex w-1/3">
                                                        <label htmlFor="Driving_licence" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Domicile
                                                        </label>
                                                        <input id="Driving_licence" type="text" name="Driving_licence" className="form-input flex-1" placeholder="Enter Domicile" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/*---------------------------------------------------Imp Details End--------------------------------------------- */}
                                            {/*---------------------------------------------------Course Details Begin--------------------------------------------- */}
                                            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                            <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                                                <h2>Course Details</h2>
                                            </label>
                                            <div className="mr-5 ml-8">
                                                <div className="mt-4 flex lg:flex-row flex-col">
                                                    <div className="px-5 flex ">
                                                        <label htmlFor="Aadhar_Card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Stream Opted
                                                        </label>
                                                        <input id="Aadhar_Card" type="text" name="Aadhar_Card" className="form-input flex-1" placeholder="Enter Stream" />
                                                    </div>
                                                    <div className="px-5 flex ">
                                                        <label htmlFor="PAN_card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Course Opted
                                                        </label>
                                                        <input id="PAN_card" type="text" name="PAN_card" className="form-input flex-1" placeholder="Enter Course." />
                                                    </div>
                                                    <div className="px-5 flex ">
                                                        <label htmlFor="Driving_licence" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Specialization
                                                        </label>
                                                        <input id="Driving_licence" type="text" name="Driving_licence" className="form-input flex-1" placeholder="Enter Specialization" />
                                                    </div>
                                                    <div className="px-5 flex ">
                                                        <label htmlFor="Driving_licence" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                            Current Semester
                                                        </label>
                                                        <input id="Driving_licence" type="text" name="Driving_licence" className="form-input flex-1" placeholder="Enter Semester" />
                                                    </div>
                                                </div>
                                            </div>
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
                                            <label htmlFor="permanentAdd" className=" px-5 pb-4 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                                                <h2> Upload Photo and Signature</h2>
                                            </label>
                                            <div className="mr-5 ml-8">
                                                <div className="flex justify-evenly mt-3 mb-3 lg:flex-row flex-col gap-4">
                                                    <div>
                                                        <label>Upload Your Photo</label>
                                                        <input type="file" accept="image/png, image/jpeg, .pdf" className="form-input " />
                                                    </div>
                                                    <div>
                                                        <label>Upload Your Signature</label>
                                                        <input type="file" accept="image/png, image/jpeg, .pdf" className="form-input" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/*------------------------------Upload Documents End------------------------------------------------ */}
                                        </div>
                                    </div>
                                )
                                /*---------------------------------------------------Other Info End--------------------------------------------- */
                            }
                        </p>

                        <p className="mb-5">
                            {activeTab4 === 2 && (
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
                                       

                                        {/*----------------------------Parents Details End------------------------------------ */}
                                    </div>
                                </div>
                            )}
                        </p>

                        <p className="mb-5">
                            {activeTab4 === 3 && (
                                <>
                                    <div className="flex xl:flex-row flex-col gap-2.5">
                                        <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                                            <div className="flex justify-between flex-wrap px-4">
                                                <div className="mb-6 lg:w-1/2 w-full">
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
                            )}
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <button type="button" className={`btn btn-primary ${activeTab4 === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab4(activeTab4 === 3 ? 2 : 1)}>
                            Back
                        </button>
                        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab4(activeTab4 === 1 ? 2 : 3)}>
                            {activeTab4 === 3 ? 'Finish' : 'Next'}
                        </button>
                    </div>

                    {/*-------------------------------------------------form wizard End---------------------------------------------------- */}

                    {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="mt-8 px-4">
                        <label htmlFor="notes">Remarks</label>
                        <textarea id="notes" name="notes" className="form-textarea min-h-[130px]" placeholder="Notes...."></textarea>
                    </div> */}
                    {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="flex justify-evenly lg:flex-row flex-col sm:grid-cols-2 grid-cols-1 gap-4 ">
                    {/* <button type="button" className="btn btn-success gap-2">
                        <IconSave className="ltr:mr-2 rtl:ml-2 shrink-0" />
                        Save
                    </button> */}

                    {/* <button className="btn btn-primary gap-2">
                        <IconEye className="ltr:mr-2 rtl:ml-2 shrink-0" />
                        Preview
                    </button> */}
                    {/* <button type="button" className="btn btn-secondary  gap-2">
                        <IconDownload className="ltr:mr-2 rtl:ml-2 shrink-0" />
                        Download
                    </button> 
                </div> 
                </div> */}
                </div>
            </div>
        </>
    );
};

export default StudentDetails;
