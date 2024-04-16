import { useEffect, useState } from 'react';
import MaskedInput from 'react-text-mask';
import IconHome from '../../components/Icon/IconHome';
import IconUser from '../../components/Icon/IconUser';
import IconThumbUp from '../../components/Icon/IconThumbUp';

const MedicalDetails = () => {
    const [hasAilment, setHasAilment] = useState(false);
    const [ailmentDescription, setAilmentDescription] = useState('');
    const [activeTab4, setActiveTab4] = useState<any>(1);

    const handleAilmentChange = (e) => {
        setHasAilment(e.target.value === 'yes');
    };

    const handleDescriptionChange = (e) => {
        setAilmentDescription(e.target.value);
    };

    return (
        <>
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
                            <span className={`${activeTab4 === 1 ? 'text-primary ' : ''}text-center block mt-2`}>Medical Details</span>
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
                            <span className={`${activeTab4 === 2 ? 'text-primary ' : ''}text-center block mt-2`}>Emergency Contact</span>
                        </li>
                        {/* <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 3 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                    onClick={() => setActiveTab4(3)}
                                >
                                    <IconThumbUp className="w-5 h-5" />
                                </button>
                                <span className={`${activeTab4 === 3 ? 'text-primary ' : ''}text-center block mt-2`}>Guardian Details</span>
                            </li> */}
                    </ul>
                </div>

                <div className="mb-5">
                    {activeTab4 === 1 && (
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
                                <div className="mt-8 px-8">
                                    <div className=" flex justify-between lg:flex-row flex-col">
                                        <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="dob" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Date of Birth
                                                </label>
                                                <input id="dob" type="date" name="dob" className="form-input flex-1" placeholder="Enter Date of Birth" />
                                                <label className=' className="ltr:mr-2 rtl:ml-2 w-28  mb-0'>Blood Group</label>
                                                <select className="form-select flex-1">
                                                    <option>Select Blood Group</option>
                                                    <option>A +</option>
                                                    <option>B +</option>
                                                    <option>AB +</option>
                                                    <option>O +</option>
                                                    <option>A -</option>
                                                    <option>B -</option>
                                                    <option>AB -</option>
                                                    <option>O -</option>
                                                </select>
                                            </div>

                                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                                <label htmlFor="dob" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Identification Mark
                                                </label>
                                                <input id="dob" type="text" name="dob" className="form-input flex-1" placeholder="Example- a mole on cheek etc." />
                                                <label htmlFor="dob" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Family History{' '}
                                                </label>
                                                <input id="dob" type="text" name="dob" className="form-input flex-1" placeholder="Example- grandmother had diabetes etc." />
                                            </div>

                                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                                <form className="pl-4 items-center justify-items-center  flex flex-row ">
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
                                                <form className="pl-4 items-center justify-items-center flex flex-row ">
                                                    <label className="text-bold -ml-4 ">
                                                        Pre existing medical, social or emotional conditions you would like us to be aware of &nbsp;? &nbsp; &nbsp;
                                                    </label>
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
                                                                    className=" w-80 form-input flex-col flex-1 -mt-4"
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
                                        </div>
                                    </div>
                                </div>

                                {/*---------------------------------------------------Other Info Begin--------------------------------------------- */}
                                {/* <div>
                                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                    {/* <label htmlFor="permanentAdd" className=" px-5 pb-4 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                                        Other Details{' '}
                                    </label>
                                    <div className="mt-4 px-8">
                                        <div className="mb-5 flex grid-cols-3 gap-16 lg:flex-row flex-col">
                                            <div>
                                                <form className="pl-4 items-center flex flex-row ">
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
                                </div> */}
                            </div>
                        </div>
                    )}
                </div>

                <p className="mb-5">
                    {activeTab4 === 2 && (
                        <div className="flex xl:flex-row flex-col gap-2.5">
                            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                                <div className="flex justify-between flex-wrap px-4">
                                    <div className="mb-6 lg:w-1/2 w-full">
                                        <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                                            Emergency Contact
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                <div className="mt-8 px-4">
                                    <div className="">
                                        <div className="">
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
                                                            Relation with the Student
                                                        </label>
                                                        <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Example- Mother, Father, Brother etc." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" mt-2 flex ml-12 mr-4 gap-5 lg:flex-row flex-col">
                                            <label htmlFor="notes" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                Person's Address
                                            </label>
                                            <textarea id="notes" name="notes" className="form-textarea min-h-[130px]" placeholder="Address..."></textarea>

                                            {/* <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                Person's Address
                                            </label>
                                            <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 h-10 " placeholder="Enter Person's Address" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </p>

                <div className="flex justify-between">
                    <button type="button" className={`btn btn-primary ${activeTab4 === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab4(activeTab4 === 2 ? 2 : 1)}>
                        Back
                    </button>
                    <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab4(activeTab4 === 1 ? 2 : 2)}>
                        {activeTab4 === 2 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default MedicalDetails;
