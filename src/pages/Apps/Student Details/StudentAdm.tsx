import { useEffect, useState } from 'react';
import IconUser from '../../../components/Icon/IconUser';
import IconUsers from '../../../components/Icon/IconUsers';
import IconMapPin from '../../../components/Icon/IconMapPin';
import IconFile from '../../../components/Icon/IconFile';
import ParentDetails from './ParentDetails';
import PersonalDetails from './PersonalDetails';
import Documents from '../Documents/Documents';
import ContactDetails from './ContactDetails';

const StudentAdm = () => {
    const [activeTab4, setActiveTab4] = useState<any>(1);

    return (
        <>
            <div className="panel mb-4 flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="ltr:mr-3 text-primary  text-xl flex justify-between flex-wrap font-bold rtl:ml-3">Student Admission</div>
            </div>
            <div className="mb-5">
                <div className="panel w-full px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="inline-block w-full mb-6">
                        <div className="relative z-[1]">
                            <div
                                className={`${activeTab4 === 1 ? 'w-[9%]' : activeTab4 === 2 ? 'w-[35%]' : activeTab4 === 3 ? 'w-[65%]' : activeTab4 === 4 ? 'w-[85%]' : ''}
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
                                        <IconUser />
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
                                        <IconUsers className="w-5 h-5" />
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
                                        <IconMapPin className="w-5 h-5" />
                                    </button>
                                    <span className={`${activeTab4 === 3 ? 'text-primary ' : ''}text-center block mt-2`}>Contact Details</span>
                                </li>
                                <li className="mx-auto">
                                    <button
                                        type="button"
                                        className={`${activeTab4 === 4 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                        onClick={() => setActiveTab4(4)}
                                    >
                                        <IconFile className="w-5 h-5" />
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

                        <div className="px-8 py-6 flex justify-between">
                            <button type="button" className={`btn btn-primary ${activeTab4 === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab4(activeTab4 - 1)}>
                                Back
                            </button>
                            <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab4(activeTab4 + 1)}>
                                {activeTab4 === 4 ? 'Finish' : 'Next'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentAdm;
