import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { setPageTitle } from '../../../store/themeConfigSlice';
// import IconX from '../../components/Icon/IconX';
import IconPlus from '../../../components/Icon/IconPlus';
import IconSave from '../../../components/Icon/IconSave';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import sortBy from 'lodash/sortBy';
// import Dropdown from '../../components/Dropdown';
// import IconCaretDown from '../../components/Icon/IconCaretDown';

const rowData = [
    {
        id: 1,
        firstName: 'Caroline',
        lastName: 'Jensen',
        email: 'carolinejensen@zidant.com',
        dob: '2004-05-28',
        course: 'DSA',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        phone: '+1 (821) 447-3782',
        isActive: true,
        age: 39,
        marks: 90,
        grade: 8,
    },
    {
        id: 2,
        firstName: 'Celeste',
        lastName: 'Grant',
        email: 'celestegrant@polarax.com',
        dob: '1989-11-19',
        course: 'DSA',

        address: {
            street: '639 Kimball Street',
            city: 'Bascom',
            zipcode: 8907,
            geo: {
                lat: 65.954483,
                lng: 98.906478,
            },
        },
        phone: '+1 (838) 515-3408',
        isActive: false,
        age: 32,
        marks: 85,
        grade: 8.3,
    },
    {
        id: 3,
        firstName: 'Tillman',
        lastName: 'Forbes',
        email: 'tillmanforbes@manglo.com',
        dob: '2016-09-05',
        course: 'DSA',

        address: {
            street: '240 Vandalia Avenue',
            city: 'Thynedale',
            zipcode: 8994,
            geo: {
                lat: -34.949388,
                lng: -82.958111,
            },
        },
        phone: '+1 (969) 496-2892',
        isActive: false,
        age: 26,
        marks: 76,
        grade: 7.1,
    },
    {
        id: 4,
        firstName: 'Daisy',
        lastName: 'Whitley',
        email: 'daisywhitley@applideck.com',
        dob: '1987-03-23',
        course: 'DSA',

        address: {
            street: '350 Pleasant Place',
            city: 'Idledale',
            zipcode: 9369,
            geo: {
                lat: -54.458809,
                lng: -127.476556,
            },
        },
        phone: '+1 (861) 564-2877',
        isActive: true,
        age: 21,
        marks: 93,
        grade: 9,
    },
    {
        id: 5,
        firstName: 'Weber',
        lastName: 'Bowman',
        email: 'weberbowman@volax.com',
        dob: '1987-03-23',
        course: 'DSA',
        address: {
            street: '154 Conway Street',
            city: 'Broadlands',
            zipcode: 8131,
            geo: {
                lat: 54.501351,
                lng: -167.47138,
            },
        },
        phone: '+1 (962) 466-3483',
        isActive: false,
        age: 26,
        marks: 42,
        grade: 4.1,
    },
    {
        id: 6,
        firstName: 'Buckley',
        lastName: 'Townsend',
        email: 'buckleytownsend@orbaxter.com',
        dob: '2011-05-29',
        course: 'DSA',
        address: {
            street: '131 Guernsey Street',
            city: 'Vallonia',
            zipcode: 6779,
            geo: {
                lat: -2.681655,
                lng: 3.528942,
            },
        },
        phone: '+1 (884) 595-2643',
        isActive: true,
        age: 40,
        marks: 37,
        grade: 3.6,
    },
    {
        id: 7,
        firstName: 'Latoya',
        lastName: 'Bradshaw',
        email: 'latoyabradshaw@opportech.com',
        dob: '2010-11-23',
        course: 'DSA',
        address: {
            street: '668 Lenox Road',
            city: 'Lowgap',
            zipcode: 992,
            geo: {
                lat: 36.026423,
                lng: 130.412198,
            },
        },
        phone: '+1 (906) 474-3155',
        isActive: true,
        age: 24,
        marks: 54,
        grade: 5.2,
    },
    {
        id: 8,
        firstName: 'Kate',
        lastName: 'Lindsay',
        email: 'katelindsay@gorganic.com',
        dob: '1987-07-02',
        course: 'DSA',
        address: {
            street: '773 Harrison Avenue',
            city: 'Carlton',
            zipcode: 5909,
            geo: {
                lat: 42.464724,
                lng: -12.948403,
            },
        },
        phone: '+1 (930) 546-2952',
        isActive: true,
        age: 24,
        marks: 46,
        grade: 4.3,
    },
    {
        id: 9,
        firstName: 'Marva',
        lastName: 'Sandoval',
        email: 'marvasandoval@avit.com',
        dob: '2010-11-02',
        course: 'DSA',
        address: {
            street: '200 Malta Street',
            city: 'Tuskahoma',
            zipcode: 1292,
            geo: {
                lat: -52.206169,
                lng: 74.19452,
            },
        },
        phone: '+1 (927) 566-3600',
        isActive: false,
        age: 28,
        marks: 88,
        grade: 8.6,
    },
    {
        id: 10,
        firstName: 'Decker',
        lastName: 'Russell',
        email: 'deckerrussell@quilch.com',
        dob: '1994-04-21',
        course: 'DSA',
        address: {
            street: '708 Bath Avenue',
            city: 'Coultervillle',
            zipcode: 1268,
            geo: {
                lat: -41.550295,
                lng: -146.598075,
            },
        },
        phone: '+1 (846) 535-3283',
        isActive: false,
        age: 27,
        marks: 88,
        grade: 8.6,
    },
    {
        id: 11,
        firstName: 'Odom',
        lastName: 'Mills',
        email: 'odommills@memora.com',
        dob: '2010-01-24',
        course: 'DSA',
        address: {
            street: '907 Blake Avenue',
            city: 'Churchill',
            zipcode: 4400,
            geo: {
                lat: -56.061694,
                lng: -130.238523,
            },
        },
        phone: '+1 (995) 525-3402',
        isActive: true,
        age: 34,
        marks: 72,
        grade: 6.99,
    },
    {
        id: 12,
        firstName: 'Sellers',
        lastName: 'Walters',
        email: 'sellerswalters@zorromop.com',
        dob: '1975-11-12',
        course: 'DSA',
        address: {
            street: '978 Oakland Place',
            city: 'Gloucester',
            zipcode: 3802,
            geo: {
                lat: 11.732587,
                lng: 96.118099,
            },
        },
        phone: '+1 (830) 430-3157',
        isActive: true,
        age: 28,
        marks: 74,
        grade: 7.1,
    },
    {
        id: 13,
        firstName: 'Wendi',
        lastName: 'Powers',
        email: 'wendipowers@orboid.com',
        dob: '1979-06-02',
        course: 'DSA',
        address: {
            street: '376 Greenpoint Avenue',
            city: 'Elliott',
            zipcode: 9149,
            geo: {
                lat: -78.159578,
                lng: -9.835103,
            },
        },
        phone: '+1 (863) 457-2088',
        isActive: true,
        age: 31,
        marks: 77,
        grade: 7.5,
    },
    {
        id: 14,
        firstName: 'Sophie',
        lastName: 'Horn',
        email: 'sophiehorn@snorus.com',
        dob: '2018-09-20',
        course: 'DSA',
        address: {
            street: '343 Doughty Street',
            city: 'Homestead',
            zipcode: 330,
            geo: {
                lat: 65.484087,
                lng: 137.413998,
            },
        },
        phone: '+1 (885) 418-3948',
        isActive: true,
        age: 22,
        marks: 79,
        grade: 7.7,
    },
    {
        id: 15,
        firstName: 'Levine',
        lastName: 'Rodriquez',
        email: 'levinerodriquez@xth.com',
        dob: '1973-02-08',
        course: 'DSA',
        address: {
            street: '643 Allen Avenue',
            city: 'Weedville',
            zipcode: 8931,
            geo: {
                lat: -63.185586,
                lng: 117.327808,
            },
        },
        phone: '+1 (999) 565-3239',
        isActive: true,
        age: 27,
        marks: 54,
        grade: 5.2,
    },
    {
        id: 16,
        firstName: 'Little',
        lastName: 'Hatfield',
        email: 'littlehatfield@comtract.com',
        dob: '2012-01-03',
        course: 'DSA',
        address: {
            street: '194 Anthony Street',
            city: 'Williston',
            zipcode: 7456,
            geo: {
                lat: 47.480837,
                lng: 6.085909,
            },
        },
        phone: '+1 (812) 488-3011',
        isActive: false,
        age: 33,
        marks: 89,
        grade: 8.7,
    },
    {
        id: 17,
        firstName: 'Larson',
        lastName: 'Kelly',
        email: 'larsonkelly@zidant.com',
        dob: '2010-06-14',
        course: 'DSA',
        address: {
            street: '978 Indiana Place',
            city: 'Innsbrook',
            zipcode: 639,
            geo: {
                lat: -71.766732,
                lng: 150.854345,
            },
        },
        phone: '+1 (892) 484-2162',
        isActive: true,
        age: 20,
        marks: 85,
        grade: 8.3,
    },
    {
        id: 18,
        firstName: 'Kendra',
        lastName: 'Molina',
        email: 'kendramolina@sureplex.com',
        dob: '2002-07-19',
        course: 'DSA',
        address: {
            street: '567 Charles Place',
            city: 'Kimmell',
            zipcode: 1966,
            geo: {
                lat: 50.765816,
                lng: -117.106499,
            },
        },
        phone: '+1 (920) 528-3330',
        isActive: false,
        age: 31,
        marks: 81,
        grade: 7.9,
    },
    {
        id: 19,
        firstName: 'Ebony',
        lastName: 'Livingston',
        email: 'ebonylivingston@danja.com',
        dob: '1994-10-18',
        course: 'DSA',
        address: {
            street: '284 Cass Place',
            city: 'Navarre',
            zipcode: 948,
            geo: {
                lat: 65.271256,
                lng: -83.064729,
            },
        },
        phone: '+1 (970) 591-3039',
        isActive: false,
        age: 33,
        marks: 84,
        grade: 8.2,
    },
    {
        id: 20,
        firstName: 'Kaufman',
        lastName: 'Rush',
        email: 'kaufmanrush@euron.com',
        dob: '2011-07-10',
        course: 'DSA',
        address: {
            street: '408 Kingsland Avenue',
            city: 'Beaulieu',
            zipcode: 7911,
            geo: {
                lat: 41.513153,
                lng: 54.821641,
            },
        },
        phone: '+1 (924) 463-2934',
        isActive: false,
        age: 39,
        marks: 26,
    },
    {
        id: 21,
        firstName: 'Frank',
        lastName: 'Hays',
        email: 'frankhays@illumity.com',
        dob: '2005-06-15',
        course: 'DSA',
        address: {
            street: '973 Caton Place',
            city: 'Dargan',
            zipcode: 4104,
            geo: {
                lat: 63.314988,
                lng: -138.771323,
            },
        },
        phone: '+1 (930) 577-2670',
        isActive: false,
        age: 31,
        marks: 68,
    },
    {
        id: 22,
        firstName: 'Carmella',
        lastName: 'Mccarty',
        email: 'carmellamccarty@sybixtex.com',
        dob: '1980-03-06',
        course: 'DSA',
        address: {
            street: '919 Judge Street',
            city: 'Canby',
            zipcode: 8283,
            geo: {
                lat: 9.198597,
                lng: -138.809971,
            },
        },
        phone: '+1 (876) 456-3218',
        isActive: true,
        age: 21,
        marks: 59,
    },
    {
        id: 23,
        firstName: 'Massey',
        lastName: 'Owen',
        email: 'masseyowen@zedalis.com',
        dob: '2012-03-01',
        course: 'DSA',
        address: {
            street: '108 Seaview Avenue',
            city: 'Slovan',
            zipcode: 3599,
            geo: {
                lat: -74.648318,
                lng: 99.620699,
            },
        },
        phone: '+1 (917) 567-3786',
        isActive: false,
        age: 40,
        marks: 50,
    },
    {
        id: 24,
        firstName: 'Lottie',
        lastName: 'Lowery',
        email: 'lottielowery@dyno.com',
        dob: '1982-10-10',
        course: 'DSA',
        address: {
            street: '557 Meserole Avenue',
            city: 'Fowlerville',
            zipcode: 4991,
            geo: {
                lat: 54.811546,
                lng: -20.996515,
            },
        },
        phone: '+1 (912) 539-3498',
        isActive: true,
        age: 36,
        marks: 86,
    },
    {
        id: 25,
        firstName: 'Addie',
        lastName: 'Luna',
        email: 'addieluna@multiflex.com',
        dob: '1988-05-01',
        course: 'DSA',
        address: {
            street: '688 Bulwer Place',
            city: 'Harmon',
            zipcode: 7664,
            geo: {
                lat: -12.762766,
                lng: -39.924497,
            },
        },
        phone: '+1 (962) 537-2981',
        isActive: true,
        age: 32,
        marks: 89,
    },
];

const Attendance = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Modals'));
    // });
    // const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];

    // const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // const [codeArr, setCodeArr] = useState<string[]>([]);
    // const toggleCode = (name: string) => {
    //     if (codeArr.includes(name)) {
    //         setCodeArr((value) => value.filter((d) => d !== name));
    //     } else {
    //         setCodeArr([...codeArr, name]);
    //     }
    // };
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Column Chooser Table'));
    // });
    // const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // show/hide
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    const [isListVisible, setIsListVisible] = useState(false);
    const handleSearchCriteria = () => {
        setIsListVisible(!isListVisible);
    };

    const [formData,setFormData]=useState({
        course:'',
        semester:'',
        section:'',
        attendance_date:''
    })


        const handleOnChange =(e)=>{
                const {name,value} = e.target;
                setFormData({
                    ...formData,
                    [name]:value,
                })

        }

    // const [hideCols, setHideCols] = useState<any>(['age', 'dob', 'isActive']);
            const handleSearch =()=>{
                
            }
   

 
    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return rowData.filter((item) => {
                return (
                    item.id.toString().includes(search.toLowerCase()) ||
                    item.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    item.marks.toString().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.age.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.dob.toLowerCase().includes(search.toLowerCase()) ||
                    item.phone.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);

    // const [modal5, setModal5] = useState(false);

    return (
        <>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-4 flex-1 pt-6  rtl:xl:ml-6">
                    <div className="flex justify-between flex-wrap px-4">
                        <div className="lg:w-1/2 w-full">
                            <div className="text-lg font-bold text-primary m-0">Select Criteria</div>
                        </div>
                    </div>
                    {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                    <div className="px-4">
                        <div className="  flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6 pt-3">
                                <div className="mt-8 flex items-center gap-4 lg:flex-row flex-col">
                                    <label htmlFor="course" className=" rtl:ml-2 w-28  mb-0">
                                        Course
                                    </label>
                                    <input id="course" type="text" name="course" value={formData.course} className="form-input flex-1" onChange={handleOnChange} placeholder="Ex. B.Tech CSE, ME, LLB etc." />
                                    <label htmlFor='semester' className=' rtl:ml-2 w-28  mb-0'>Semester</label>
                                    <select id='semester' name='semester' value={formData.semester} onChange={handleOnChange} className="-ml-3 form-select flex-1">
                                        <option>Select Semester</option>
                                        <option>I</option>
                                        <option>II</option>
                                        <option>III</option>
                                        <option>IV</option>
                                        <option>V</option>
                                        <option>VI</option>
                                        <option>VII</option>
                                        <option>VIII</option>
                                        <option>IX</option>
                                        <option>X</option>
                                    </select>
                                </div>
                                <div className="mt-8 flex items-center gap-4 lg:flex-row flex-col">
                                    <label htmlFor='section' className='rtl:ml-2 w-28  mb-0'>Section</label>
                                    <select id='section' name='section' value={formData.section} onChange={handleOnChange} className="form-select flex-1">
                                        <option>Select...</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                    </select>
                                    <label htmlFor='attendance_date' className='rtl:ml-2 w-28  mb-0'>Attendance Date</label>
                                    <input id="attendance_date" name='attendance_date' value={formData.attendance_date} type="Date" onChange={handleOnChange} className="form-input flex-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --------------------------------Add Attendance Button Begin-------------------------- */}

                    {/* <div className=" bg-blue-800 px-6 py-6 ml-200">*/}

                    <div className="flex float-end px-8">
                        <button type="button" onClick={handleSearchCriteria} className="btn btn-primary ">
                            {/* <IconPlus className="mr-2 -ml-3"></IconPlus> */}
                            Search
                        </button>
                    </div>

                    {/* --------------------------------Add Attendance Button End-------------------------- */}
                </div>
            </div>
            {isListVisible && (
                <div className="panel mt-3 px-8">
                    {/* <div className="flex md:items-center md:flex-row flex-col mb-5 ">
                    <h5 className="font-semibold text-lg dark:text-white-light">Attendance List</h5>
                </div> */}
                    <div className="flex items-center justify-between space-x-15">
                        <div className="flex  after:float-start w-1/5 mb-4">
                            <input type="text" className="form-input" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className="flex items-center mb-4 px-4">
                            <button type="button" className="btn btn-primary ">
                                <IconSave className="mr-2 -ml-3"></IconSave>
                                Save
                            </button>
                        </div>
                    </div>
                    <div className=" mt-4 mb-6 gap-4 font-bold space-y-5 flex lg:flex-row flex-col ">
                        Mark all students attendance as:
                        <div>
                            <label className="flex  cursor-pointer">
                                <input type="radio" name="custom_radio2" className="form-radio" />
                                <span className="">Present</span>
                            </label>
                        </div>
                        <div>
                            <label className=" -mt-4 flex  cursor-pointer">
                                <input type="radio" name="custom_radio2" className="form-radio" />
                                <span className=" ">Absent</span>
                            </label>
                        </div>
                        <div>
                            <label className=" -mt-4 flex  cursor-pointer">
                                <input type="radio" name="custom_radio2" className="form-radio" />
                                <span className=" ">Late</span>
                            </label>
                        </div>
                        <div>
                            <label className=" -mt-4 flex  cursor-pointer">
                                <input type="radio" name="custom_radio2" className="form-radio" />
                                <span className=" ">Holiday</span>
                            </label>
                        </div>
                        <div>
                            <label className="-mt-4 flex  cursor-pointer">
                                <input type="radio" name="custom_radio2" className="form-radio" />
                                <span className=" ">Half Day</span>
                            </label>
                        </div>
                    </div>
                    <div className="datatables">
                        <DataTable
                            className="whitespace-nowrap table-hover"
                            records={recordsData}
                            columns={[
                                {
                                    accessor: 'id',
                                    title: 'Reg. No.',
                                    sortable: true,
                                    // hidden: hideCols.includes('id')
                                },
                                {
                                    accessor: 'firstName',
                                    title: 'Student Name',
                                    sortable: true,
                                    // hidden: hideCols.includes('firstName'),
                                },
                                {
                                    accessor: 'lastName',
                                    title: 'Branch',
                                    sortable: true,
                                    //hidden: hideCols.includes('lastName'),
                                },
                                {
                                    accessor: 'email',
                                    title: 'Stream',
                                    sortable: true,
                                    // hidden: hideCols.includes('email')
                                },
                                {
                                    accessor: 'course',
                                    title: 'Apply Date',
                                    sortable: true,
                                    //hidden: hideCols.includes('course')
                                },
                                {
                                    accessor: 'marks',
                                    title: 'From',
                                    sortable: true,
                                    //  hidden: hideCols.includes('marks'),
                                },
                                {
                                    accessor: 'address.street',
                                    title: 'To',
                                    sortable: true,
                                    //  hidden: hideCols.includes('address.street'),
                                },
                                {
                                    accessor: 'age',
                                    title: 'Status',
                                    sortable: true,
                                    //   hidden: hideCols.includes('age'),
                                },
                                {
                                    accessor: 'dob',
                                    title: 'Approved By',
                                    sortable: true,
                                    //   hidden: hideCols.includes('dob'),
                                    render: ({ dob }) => <div>{dob}</div>,
                                },
                                {
                                    accessor: 'isActive',
                                    title: 'Action',
                                    sortable: true,
                                    //   hidden: hideCols.includes('isActive'),
                                    render: ({ isActive }) => <div className={`${isActive ? 'text-success' : 'text-danger'} capitalize`}>{isActive.toString()}</div>,
                                },
                            ]}
                            highlightOnHover
                            totalRecords={initialRecords.length}
                            recordsPerPage={pageSize}
                            page={page}
                            onPageChange={(p) => setPage(p)}
                            recordsPerPageOptions={PAGE_SIZES}
                            onRecordsPerPageChange={setPageSize}
                            sortStatus={sortStatus}
                            onSortStatusChange={setSortStatus}
                            minHeight={200}
                            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Attendance;
