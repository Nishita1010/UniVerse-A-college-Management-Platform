import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconTrashLines from '../../../components/Icon/IconTrashLines';
import IconPlus from '../../../components/Icon/IconPlus';
import IconEdit from '../../../components/Icon/IconEdit';
import IconEye from '../../../components/Icon/IconEye';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const StudentList = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Student List'));
    // });

    const criteria = () =>{
        
    }

    const validationSchema = Yup.object().shape({
        courses: Yup.string().required('Please select the course'),
        section: Yup.string().required('Please select the section'),
        attendanceDate: Yup.string().required('Please choose a date'),
        semester: Yup.string().required('Please select the semester'),
    });

    const handleSubmit = (values, actions) => {
        console.log('Form values:', values);

        Swal.fire({
            icon: 'success',
            title: 'Form submitted successfully',
            timer: 3000,
            showConfirmButton: false,
        });

        actions.resetForm();
    };

    const [data, setData] = useState({
        courses: '',
        section: '',
        attendanceDate: '',
        semester: '',
    });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        console.log(value, 'value');
        setData({
            ...data,
            [name]: value,
        });
    };

    // const handleOnChange = (e) => {
    //     const {value, name } = e.target ;
    //     setData({
    //         ...data, [name]:value
    //     })

    //     console.log(value, "value")
    // }

    const [items, setItems] = useState([
        {
            id: 1,
            admno: '235689',
            rollno: '081451',
            name: 'Laurie Fox',
            email: 'lauriefox@company.com',
            courses: 'B.Tech',
            section: 'A',
            attendanceDate: '02.05.24',
            semester: 'II',
            date: '15 Dec 2020',
            amount: '2275.45',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 2,
            admno: '235687',
            rollno: '081452',
            name: 'Alexander Gray',
            email: 'alexGray3188@gmail.com',
            courses: 'LLB',
            section: 'A',
            attendanceDate: '02.05.24',
            semester: 'II',
            date: '20 Dec 2020',
            amount: '1044.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 3,
            admno: '205689',
            rollno: '081681',
            name: 'James Taylor',
            email: 'jamestaylor468@gmail.com',
            courses: 'M.Tech',
            section: 'A',
            semester: 'II',
            attendanceDate: '02.05.24',
            date: '27 Dec 2020',
            amount: '20.00',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 4,
            admno: '237689',
            rollno: '082693',
            name: 'Grace Roberts',
            email: 'graceRoberts@company.com',
            courses: 'MBA',
            section: 'A',
            attendanceDate: '02.05.24',
            semester: 'II',
            date: '31 Dec 2020',
            amount: '344.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 5,
            admno: '2365439',
            rollno: '084743',
            name: 'Donna Rogers',
            email: 'donnaRogers@hotmail.com',
            courses: 'BBA',
            section: 'A',
            attendanceDate: '02.05.24',
            semester: 'II',
            date: '03 Jan 2021',
            amount: '405.15',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 6,
            admno: '2356789',
            rollno: '086643',
            name: 'Amy Diaz',
            email: 'amy968@gmail.com',
            courses: 'B.Tech',
            section: 'A',
            attendanceDate: '02.05.24',
            semester: 'II',
            date: '14 Jan 2020',
            amount: '100.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 7,
            admno: '905689',
            rollno: '086773',
            name: 'Nia Hillyer',
            email: 'niahillyer666@comapny.com',
            courses: 'M.Tech',
            section: 'A',
            attendanceDate: '02.05.24',
            semester: 'II',
            date: '20 Jan 2021',
            amount: '59.21',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 8,
            admno: '251689',
            rollno: '087916',
            name: 'Mary McDonald',
            email: 'maryDonald007@gamil.com',
            courses: 'MBA',
            section: 'A',
            attendanceDate: '02.05.24',
            semester: 'II',
            date: '25 Jan 2021',
            amount: '79.00',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
    ]);

    const deleteRow = (id: any = null) => {
        if (window.confirm('Are you sure want to delete selected row ?')) {
            if (id) {
                setRecords(items.filter((user) => user.id !== id));
                setInitialRecords(items.filter((user) => user.id !== id));
                setItems(items.filter((user) => user.id !== id));
                setSearch('');
                setSelectedRecords([]);
            } else {
                let selectedRows = selectedRecords || [];
                const ids = selectedRows.map((d: any) => {
                    return d.id;
                });
                const result = items.filter((d) => !ids.includes(d.id as never));
                setRecords(result);
                setInitialRecords(result);
                setItems(result);
                setSearch('');
                setSelectedRecords([]);
                setPage(1);
            }
        }
    };

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'rollno'));
    const [records, setRecords] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'firstName',
        direction: 'asc',
    });

    useEffect(() => {
        setPage(1);
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecords([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return items.filter((item) => {
                return (
                    item.rollno.toLowerCase().includes(search.toLowerCase()) ||
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.date.toLowerCase().includes(search.toLowerCase()) ||
                    item.amount.toLowerCase().includes(search.toLowerCase()) ||
                    item.status.tooltip.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search]);

    useEffect(() => {
        const data2 = sortBy(initialRecords, sortStatus.columnAccessor);
        setRecords(sortStatus.direction === 'desc' ? data2.reverse() : data2);
        setPage(1);
    }, [sortStatus]);

    return (
        <>
            <Formik
                initialValues={{
                    courses: '',
                    section: '',
                    attendanceDate: '',
                    semester: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, values }) => (
                    <Form>
                        <div className="flex xl:flex-row flex-col gap-2.5">
                            <div className="panel px-8 col border-white-light dark:border-[#1b2e4b]">
                                <div className="">
                                    <div className="flex justify-between flex-wrap px-4">
                                        <div className="lg:w-1/2 w-full">
                                            <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                                                Select Criteria
                                            </div>
                                        </div>
                                    </div>
                                    <div className="  flex col justify-between lg:flex-row flex-col">
                                        <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6 pt-3">
                                            <div className="mt-8 flex items-center gap-5 lg:flex-row flex-col">
                                                <label htmlFor="courses" className=" rtl:ml-2 w-28  mb-0">
                                                    Course
                                                </label>
                                                <div className="flex-1">
                                                    <Field as="select" className="-ml-3 form-select flex-1" value={data.courses} name="courses" onChange={handleOnChange}>
                                                        <option value="Select Course">Select Course</option>
                                                        <option value="B.Tech">B.Tech</option>
                                                        <option value="BBA">BBA</option>
                                                        <option value="M.Tech">M.Tech</option>
                                                        <option value="MBA">MBA</option>
                                                        <option value="PhD">PhD</option>
                                                        <option value="Diploma">Diploma</option>
                                                        <option value="LLB">LLB</option>
                                                        <option value="B.Sc">B.Sc</option>
                                                        <option value="M.Sc">M.Sc</option>
                                                        <option value="B.Pharma">B.Pharma</option>
                                                    </Field>
                                                    {errors.courses && touched.courses && <div className="text-red-500 mt-1">{errors.courses}</div>}
                                                </div>
                                                <label className=" rtl:ml-2 w-28  mb-0">Semester</label>
                                                <div className="flex-1">
                                                    <Field as="select" value={data.semester} name="semester" onChange={handleOnChange} className="-ml-3 form-select flex-1">
                                                        <option value="Select Semester">Select Semester</option>
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
                                                    </Field>
                                                    {errors.semester && touched.semester && <div className="text-red-500 mt-1">{errors.semester}</div>}
                                                </div>
                                            </div>
                                            <div className="mt-8 flex items-center gap-5 lg:flex-row flex-col">
                                                <label className=" rtl:ml-2 w-28  mb-0">Section</label>
                                                <div className="flex-1">
                                                    <Field as="select" value={data.section} name="section" onChange={handleOnChange} className="form-select flex-1">
                                                        <option value="Select section">Select section</option>
                                                        <option value="A">A</option>
                                                        <option value="B">B</option>
                                                        <option value="C">C</option>
                                                        <option value="D">D</option>
                                                        <option value="E">E</option>
                                                    </Field>
                                                    {errors.section && touched.section && <div className="text-red-500 mt-1">{errors.section}</div>}
                                                </div>

                                                <label htmlFor="attendanceDate" className="rtl:ml-2 w-28  mb-0">
                                                    Attendance Date
                                                </label>
                                                <Field id="attendanceDate" type="Date" value={data.attendanceDate} name="attendanceDate" onChange={handleOnChange} className="form-input flex-1" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary float-end gap-2">
                                        Search
                                    </button>
                                </div>
                                <div className="flex md:items-center md:flex-row flex-col mb-5 ">
                                    <h5 className="text-lg my-6 font-bold text-primary m-0 " style={{ fontSize: '25px' }}>
                                        Students List
                                    </h5>
                                </div>
                                <div className="rollno-table">
                                    <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                                        <div className="flex items-center gap-2">
                                            <button type="button" className="btn btn-danger gap-2" onClick={() => deleteRow()}>
                                                <IconTrashLines />
                                                Delete
                                            </button>
                                            <Link to="/apps/rollno/add" className="btn btn-primary gap-2">
                                                <IconPlus />
                                                Add New
                                            </Link>
                                        </div>
                                        <div className="ltr:ml-auto rtl:mr-auto">
                                            <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="datatables pagination-padding">
                                        <DataTable
                                            className="whitespace-nowrap table-hover rollno-table"
                                            records={records}
                                            columns={[
                                                {
                                                    accessor: 'admno',
                                                    sortable: true,
                                                    render: ({ admno }) => (
                                                        <NavLink to="/apps/admno/preview">
                                                            <div className="text-primary underline hover:no-underline font-semibold">{`${admno}`}</div>
                                                        </NavLink>
                                                    ),
                                                },
                                                {
                                                    accessor: 'rollno',
                                                    sortable: true,
                                                    render: ({ rollno }) => (
                                                        <NavLink to="/apps/rollno/preview">
                                                            <div className="text-primary underline hover:no-underline font-semibold">{`${rollno}`}</div>
                                                        </NavLink>
                                                    ),
                                                },
                                                {
                                                    accessor: 'name',
                                                    sortable: true,
                                                    render: ({ name, id }) => (
                                                        <div className="flex items-center font-semibold">
                                                            <div className="p-0.5 bg-white-dark/30 rounded-full w-max ltr:mr-2 rtl:ml-2">
                                                                <img className="h-8 w-8 rounded-full object-cover" src={`/assets/images/profile-${id}.jpeg`} alt="" />
                                                            </div>
                                                            <div>{name}</div>
                                                        </div>
                                                    ),
                                                },
                                                {
                                                    accessor: 'email',
                                                    sortable: true,
                                                },
                                                {
                                                    accessor: 'date',
                                                    sortable: true,
                                                },
                                                {
                                                    accessor: 'amount',
                                                    sortable: true,
                                                    titleClassName: 'text-right',
                                                    render: ({ amount, id }) => <div className="text-right font-semibold">{`$${amount}`}</div>,
                                                },
                                                {
                                                    accessor: 'status',
                                                    sortable: true,
                                                    render: ({ status }) => <span className={`badge badge-outline-${status.color} `}>{status.tooltip}</span>,
                                                },
                                                {
                                                    accessor: 'action',
                                                    title: 'Actions',
                                                    sortable: false,
                                                    textAlignment: 'center',
                                                    render: ({ id }) => (
                                                        <div className="flex gap-4 items-center w-max mx-auto">
                                                            <NavLink to="/apps/rollno/edit" className="flex hover:text-info">
                                                                <IconEdit className="w-4.5 h-4.5" />
                                                            </NavLink>
                                                            <NavLink to="/apps/rollno/preview" className="flex hover:text-primary">
                                                                <IconEye />
                                                            </NavLink>
                                                            {/* <NavLink to="" className="flex"> */}
                                                            <button type="button" className="flex hover:text-danger" onClick={(e) => deleteRow(id)}>
                                                                <IconTrashLines />
                                                            </button>
                                                            {/* </NavLink> */}
                                                        </div>
                                                    ),
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
                                            selectedRecords={selectedRecords}
                                            onSelectedRecordsChange={setSelectedRecords}
                                            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                    // </div>
                )}
            </Formik>
        </>
    );
};

export default StudentList;
