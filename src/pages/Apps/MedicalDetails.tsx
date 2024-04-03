import { useEffect, useState } from 'react';
import MaskedInput from 'react-text-mask';

const MedicalDetails = () => {
    const [hasAilment, setHasAilment] = useState(false);
    const [ailmentDescription, setAilmentDescription] = useState('');

    const handleAilmentChange = (event) => {
        setHasAilment(event.target.value === 'yes');
    };

    const handleDescriptionChange = (event) => {
        setAilmentDescription(event.target.value);
    };
    return (
        <>
            {/*---------------------------------------Medical Details Begin--------------------------------------------- */}
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="flex justify-between flex-wrap px-4">
                        <div className="mb-6 lg:w-1/2 w-full">
                            <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                                Medical Details
                            </div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="mt-8 px-4">
                        <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="dob" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Date of Birth
                                    </label>
                                    <input id="dob" type="date" name="dob" className="form-input flex-1" placeholder="Enter Date of Birth" />
                                    <label className=' className="ltr:mr-2 rtl:ml-2 w-28  mb-0'>Blood Group</label>
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

                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <form className="pl-4 items-center justify-items-center space-y-5 flex flex-row ">
                                        <label className="text-bold -ml-4 ">Ailment if any &nbsp;? &nbsp; &nbsp;</label>
                                        <div>
                                            <label className=" pl-2 flex  cursor-pointer">
                                                <input type="radio" value="yes" className="form-radio" checked={hasAilment} onChange={handleAilmentChange} />
                                                <span className="text-white-dark">Yes</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="pl-4 flex  cursor-pointer">
                                                <input type="radio" value="no" className="form-radio" checked={!hasAilment} onChange={handleAilmentChange} />
                                                <span className="text-white-dark ">No</span>
                                            </label>
                                        </div>

                                        {hasAilment && (
                                            <div>
                                                <label className="pl-4">
                                                    <br />
                                                    <input
                                                        className="pl-4 w-80 form-input flex-col flex-1 -mt-4"
                                                        type="text"
                                                        placeholder="Describe your Ailment"
                                                        value={ailmentDescription}
                                                        onChange={handleDescriptionChange}
                                                    />
                                                </label>
                                            </div>
                                        )}
                                    </form>
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

                    {/*---------------------------------------------------Other Info Begin--------------------------------------------- */}
                    <div className="mr-5 ">
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <label htmlFor="permanentAdd" className=" px-5 pb-4 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            <h2> Other Details</h2>
                        </label>

                        <div className="mb-5 flex grid-cols-3 gap-16 lg:flex-row flex-col">
                            <div>
                                <form className="pl-4 items-center space-y-5 flex flex-row ">
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
                            <form className="pl-4 items-center space-y-5 flex flex-row ">
                                Are you physically challenged ? &nbsp;: &nbsp; &nbsp;
                                <div>
                                    <label className="pl-2 flex items-center cursor-pointer">
                                        <input type="radio" name="custom_radio2" className="form-radio" />
                                        <span className="text-white-dark">Yes</span>
                                    </label>
                                </div>
                                <div>
                                    <label className=" pl-4 -mt-4 flex items-center cursor-pointer">
                                        <input type="radio" name="custom_radio2" className="form-radio" />
                                        <span className="text-white-dark ">No</span>
                                    </label>
                                </div>
                            </form>
                            <form className="pl-4items-center space-y-5 flex flex-row ">
                                Are you a foreign Student ? &nbsp;: &nbsp; &nbsp;
                                <div>
                                    <label className="  pl-2 flex items-center cursor-pointer">
                                        <input type="radio" name="custom_radio2" className="form-radio" defaultChecked />
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
                </div>
            </div>
            {/*-----------------------------------------Medical Details End----------------------------------------------*/}
            {/*---------------------------------------------------Emergency Contact Begin--------------------------------------------- */}

            <div className="mr-5">
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            Emergency Contact
                        </label>

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
                                            Relation with the Person
                                        </label>
                                        <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Example- Mother, Father, Brother etc." />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ps-14 pe-10 flex gap-5  lg:flex-row flex-col">
                            <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                Person's Address
                            </label>
                            <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 h-20 " placeholder="Enter Person's Address" />
                        </div>
                    </div>
                    {/*---------------------------------------------------Emergency Contact End--------------------------------------------- */}
        </>
    );
};

export default MedicalDetails;
