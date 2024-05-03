// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import IconCode from '../../components/Icon/IconCode';
import IconHome from '../../../components/Icon/IconHome';
import IconUser from '../../../components/Icon/IconUser';
import IconThumbUp from '../../../components/Icon/IconThumbUp';

// import IconDownload from '..src/components/Icon/IconDownload';
import MaskedInput from 'react-text-mask';
import ParentDetails from './ParentDetails';
import PersonalDetails from './PersonalDetails';
import Documents from '../Documents/Documents';
import ContactDetails from './ContactDetails';

const StudentDetails = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Invoice Add'));
    // });

    // const [formdata, setFormData] = useState({
    //     Firstname: '',
    //     lastName: '',
    //     father_name: '',
    //     mother_name: '',
    //     collegeEmail: '',
    //     personalEmail: '',
    //     date_of_birth: '',
    //     phone_number: '',
    //     Gender: '',
    //     religion: '',
    //     admDate: '',
    //     admission_no: '',
    //     roll_no: '',
    //     category: '',
    //     domicile: '',
    //     caste: '',
    //     status: '',
    //     aadharNo: '',
    //     admission_data: '',

    //     important_details: {
    //         Aadhar_Card: '',
    //         PAN_card: '',
    //     },

    //     present_address: {
    //         Street_Address: '',
    //         Street_Address_Line_2: '',
    //         city: '',
    //         state: '',
    //         zipcode: '',
    //         country: '',
    //     },
    //     permanent_address: {
    //         Street_Address: '',
    //         Street_Address_Line_2: '',
    //         city: '',
    //         state: '',
    //         zipcode: '',
    //         country: '',
    //     },
    //     emergency_contact: {
    //         first_name: '',
    //         last_name: '',
    //         relationship: '',
    //         Street_Address: '',
    //         Street_Address_Line_2: '',
    //         city: '',
    //         state: '',
    //         zipcode: '',
    //         country: '',
    //         emergency_number: '',
    //         emergency_email: '',
    //     },
    //     bank_details: {
    //         account_number: '',
    //         bank_name: '',
    //         ifsc_code: '',
    //         iban_number: '',
    //         bank_country: '',
    //     },
    //     remarks: '',
    // });

    const [activeTab4, setActiveTab4] = useState<any>(1);

    return (
        <>
           
            <div className="mb-5">
                <div className="inline-block w-full">
                    <div className="relative z-[1]">
                        <div
                            className={`${activeTab4 === 1 ? 'w-[10%]' : activeTab4 === 2 ? 'w-[35%]' : activeTab4 === 3 ? 'w-[65%]' :activeTab4 === 4 ? 'w-[85%]' : ''}
                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}
                        ></div>
                        <ul className="mb-5 grid grid-cols-4">
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
                                <span className={`${activeTab4 === 3 ? 'text-primary ' : ''}text-center block mt-2`}>Address</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 4 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                    onClick={() => setActiveTab4(4)}
                                >
                                    <IconThumbUp className="w-5 h-5" />
                                </button>
                                <span className={`${activeTab4 === 4 ? 'text-primary ' : ''}text-center block mt-2`}>Documents</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {activeTab4 === 1 && <PersonalDetails />}

                        {activeTab4 === 2 && <ParentDetails />}
                        {activeTab4 === 3 && <ContactDetails />}


                        {activeTab4 === 4 && <Documents />}
                    </div>

                    <div className="flex justify-between">
                        <button type="button" className={`btn btn-primary ${activeTab4 === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab4(activeTab4 === 3 ? 2 : 1)}>
                            Back
                        </button>
                        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab4(activeTab4 === 1 ? 2 : 3)}>
                            {activeTab4 === 3 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentDetails;
