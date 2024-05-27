import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { Fragment, useState } from 'react';
import IconPencilPaper from '../../../components/Icon/IconPencilPaper';
import IconMail from '../../../components/Icon/IconMail';
import IconPhone from '../../../components/Icon/IconPhone';

const StudentProfile = () => {
    const [tabs, setTabs] = useState<string[]>([]);
    const toggleCode = (name: string) => {
        if (tabs.includes(name)) {
            setTabs((value) => value.filter((d) => d !== name));
        } else {
            setTabs([...tabs, name]);
        }
    };
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Profile'));
    // });
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    return (
        <div>
            {/* <ul className="flex space-x-2 rtl:space-x-reverse">
                {/* <li>
                    <Link to="#" className="text-primary hover:underline">
                        Users
                    </Link>
                </li> 
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Profile</span>
                </li>
            </ul> */}
            <div className="pt-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
                    <div className="panel ">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Profile</h5>
                            <Link to="/apps/studentDetails/StudentAdm" className="ltr:ml-auto rtl:mr-auto btn btn-primary p-2 rounded-full">
                                <IconPencilPaper />
                            </Link>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-row items-start">
                                <img src="/assets/images/profile-34.jpeg" alt="img" className="w-24 h-24 rounded-full object-cover mb-5" />
                                <div className="flex flex-col items-start justify-center pl-4 pt-2">
                                    <p className="font-semibold text-primary text-xl pb-2">Laurie Fox</p>
                                    <li className="flex items-center gap-2"> Admission No:&nbsp; 2140 </li>
                                    <li className="flex items-center gap-2 "> Roll No:&nbsp; 201</li>
                                </div>
                            </div>
                            <ul className="mt-5 flex flex-col max-w-[250px] m-auto space-y-4 font-semibold text-white-dark">
                                {/* <p className="font-semibold text-primary text-xl">Jimmy Turner</p> */}

                                <div className="flex flex-row justify-between">
                                    <li className="flex items-start "> Course&nbsp;:</li>
                                    <li className="flex flex-row "> B.Tech CSE</li>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <li className="flex items-start "> Semester&nbsp;:</li>
                                    <li className="flex flex-row "> Third</li>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <li className="flex items-start "> Bar Code&nbsp;:</li>
                                    <li className="flex flex-row "> -</li>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <li className="flex items-start ">QR Code&nbsp;:</li>
                                    <li className="flex flex-row "> -</li>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <li className="flex items-start "> Behaviour Score&nbsp;:</li>
                                    <li className="flex flex-row text-green-500 "> +20</li>
                                </div>

                                <li>
                                    <button className="flex items-center gap-2">
                                        <IconMail className="w-5 h-5 shrink-0" />
                                        <span className="text-primary truncate">jimmy@gmail.com</span>
                                    </button>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconPhone />
                                    <span className="whitespace-nowrap" dir="ltr">
                                        +91 (987) 564-3215
                                    </span>
                                </li>
                            </ul>
                            {/* <ul className="mt-7 flex items-center justify-center gap-2">
                                <li>
                                    <button className="btn btn-info flex items-center justify-center rounded-full w-10 h-10 p-0">
                                        <IconTwitter className="w-5 h-5" />
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-danger flex items-center justify-center rounded-full w-10 h-10 p-0">
                                        <IconDribbble />
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-dark flex items-center justify-center rounded-full w-10 h-10 p-0">
                                        <IconGithub />
                                    </button>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="panel lg:col-span-2 xl:col-span-3">
                        <div className="mb-5">
                            <Tab.Group>
                                <Tab.List className="mt-3 flex flex-wrap">
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={`${selected ? 'bg-primary text-white !outline-none' : ''}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}
                                            >
                                                Profile
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={`${selected ? 'bg-primary text-white !outline-none' : ''}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}
                                            >
                                                Fees
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={`${selected ? 'bg-primary text-white !outline-none' : ''}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}
                                            >
                                                Exam
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={`${selected ? 'bg-primary text-white !outline-none' : ''}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}
                                            >
                                                Attendance
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={`${selected ? 'bg-primary text-white !outline-none' : ''}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}
                                            >
                                                Document
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={`${selected ? 'bg-primary text-white !outline-none' : ''}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}
                                            >
                                                Student Behaviour
                                            </button>
                                        )}
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels>
                                    <Tab.Panel>
                                        <div className="active pt-5">
                                            <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                                            <p className="mb-4">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div>
                                            <div className="flex items-start pt-5">
                                                <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                                                    <img
                                                        src="/assets/images/profile-34.jpeg"
                                                        alt="img"
                                                        className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                                                    />
                                                </div>
                                                <div className="flex-auto">
                                                    <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                                                    <p className="text-white-dark">
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div className="pt-5">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel>Disabled</Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
