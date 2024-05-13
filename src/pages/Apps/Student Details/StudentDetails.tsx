import { Link, NavLink, useNavigate } from 'react-router-dom';
import { downloadExcel } from 'react-export-table-to-excel';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import IconFile from '../../../components/Icon/IconFile';
import IconPrinter from '../../../components/Icon/IconPrinter';
import IconTrashLines from '../../../components/Icon/IconTrashLines';
import IconPlus from '../../../components/Icon/IconPlus';
import IconEdit from '../../../components/Icon/IconEdit';
import IconEye from '../../../components/Icon/IconEye';
import IconFilter from '../../../components/Icon/IconFilter';

import StudentAdm from './StudentAdm';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
// import PersonalDetails from './PersonalDetails';

const StudentDetails = () => {
    const [isCardVisible, setIsCardVisible] = useState(false);
    const handleButtonClick = () => {
        setIsCardVisible(!isCardVisible);
    };

    const [data, setData] = useState({
        courses: '',
        section: '',
        attendanceDate: '',
        semester: '',
    });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        // console.log(value, 'value');
        setData({
            ...data,
            [name]: value,
        });
    };

    function handleDownloadExcel() {
        downloadExcel({
            fileName: 'table',
            sheet: 'react-export-table-to-excel',
            tablePayload: {
                Headers,
                body: items,
            },
        });
    }

    const exportTable = (type: any) => {
        let columns: any = col;
        let records = items;
        let filename = 'table';

        let newVariable: any;
        newVariable = window.navigator;

        if (type === 'csv') {
            let coldelimiter = ';';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                // eslint-disable-next-line array-callback-return
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !newVariable.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type === 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            // eslint-disable-next-line array-callback-return
            columns.map((d: any) => {
                rowhtml += '<th>' + capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';

            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                rowhtml += '<tr>';
                // eslint-disable-next-line array-callback-return
                columns.map((d: any) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            var winPrint: any = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
        } else if (type === 'txt') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                // eslint-disable-next-line array-callback-return
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/txt/i) && !newVariable.msSaveOrOpenBlob) {
                var data1 = 'data:application/txt;charset=utf-8,' + encodeURIComponent(result);
                var link1 = document.createElement('a');
                link1.setAttribute('href', data1);
                link1.setAttribute('download', filename + '.txt');
                link1.click();
            } else {
                var blob1 = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob1, filename + '.txt');
                }
            }
        }
    };
    const capitalize = (text: any) => {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };

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
        if (window.confirm('Are you sure ? You want to delete selected row.')) {
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

    const addNew = () => {
        const navigate = useNavigate();
        navigate('/src/pages/Apps/Student Details/PersonalDetails.tsx');
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
            <div className="px-8 mb-6 mr-8 flex justify-end items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                {/* <div className="ltr:mr-3 text-primary  text-2xl flex flex-wrap font-bold rtl:ml-3">Student Details</div> */}
                <div className=" flex gap-2 ">
                    <Link to="/apps/studentDetails/StudentAdm" type="button" className="btn btn-primary gap-2">
                        <IconPlus />
                        Add
                    </Link>
                    <button type="button" className="btn btn-primary gap-2" onClick={handleButtonClick}>
                        {/* {isCardVisible ? 'Hide Card' : 'Show Card'} */}
                        <IconFilter className='text-lg'/>
                        Filter
                    </button>

                    {/* <button type="button" className="btn btn-primary gap-2" onClick={() => handleFilter()}>
                                    <IconTrashLines />
                                    Filter
                                </button> */}
                    <button type="button" className="btn btn-danger gap-2" onClick={() => deleteRow()}>
                        <IconTrashLines />
                        Delete
                    </button>

                    {/* <Form action='PersonalDetails.tsx'> */}
                    {/* <Link to={'PersonalDetails'} className="btn btn-primary gap-2">
                                                <IconPlus />
                                                Add New
                                            </Link> */}
                    {/* </Form> */}
                </div>
            </div>
            {/* <div className="xl:flex-row flex-col gap-2.5 pr-8"> */}
                {isCardVisible && (
                    <div className=" mb-4 panel w-full col border-white-light dark:border-[#1b2e4b]">
                        <div className="inline-block w-full mb-2">
                            <div className="flex justify-between flex-wrap px-4">
                                <div className="lg:w-1/2 w-full">
                                    <div className="text-xl -mb-6 font-bold text-primary m-0">Select Criteria</div>
                                </div>
                            </div>
                            <div className="mt-6 px-4">
                        <div className=" flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        Street Address
                                    </label>
                                    <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter your Address" />
                                    <label htmlFor="lastName" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                        Street Address
                                    </label>
                                    <input id="lastName" type="text" name="lastName" className="form-input flex-1" placeholder="Enter your Address" />
                                </div>

                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="collegeEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Country
                                    </label>
                                    <input id="collegeEmail" type="email" name="collegeEmail" className="form-input flex-1" placeholder="Enter Country" />

                                    <label htmlFor="personalEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        State
                                    </label>
                                    <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter State" />
                                </div>
                               
                                   {/*    <button type="submit" className="btn btn-primary mt-8 float-end">
                                    Submit Form
                                </button> */}
                            </div>
                        </div>
                    </div>
                            
                            {/* <div className=" flex col justify-between lg:flex-row flex-col">
                                <div className=" w-full mt-4 ltr:lg:px-6 rtl:lg:px-6 pb-6 ">
                                    <div className="mt-8 flex gap-4 items-center lg:flex-row flex-col">
                                        <label htmlFor="courses" className=" w-28 ">
                                            Course
                                        </label>
                                        <div className="flex-1">
                                            <select className="-ml-3 form-select flex-1" value={data.courses} name="courses" onChange={handleOnChange}>
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
                                            </select>
                                        </div>
                                        <label className=" w-28">Semester</label>
                                        <div className="flex-1">
                                            <select value={data.semester} name="semester" onChange={handleOnChange} className="-ml-3 form-select flex-1">
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
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex items-center gap-4 lg:flex-row flex-col">
                                        <label className="w-28">Section</label>
                                        <div className="flex-1">
                                            <select value={data.section} name="section" onChange={handleOnChange} className="form-select flex-1">
                                                <option value="Select section">Select section</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                            </select>
                                        </div>

                                        <label htmlFor="attendanceDate" className="w-28">
                                            Attendance Date
                                        </label>
                                        <input id="attendanceDate" type="Date" value={data.attendanceDate} name="attendanceDate" onChange={handleOnChange} className="form-input flex-1" />
                                    </div>
                                </div>
                            </div> */}
                            <button className="btn btn-primary float-end gap-2">Search</button>
                        </div>
                    </div>
                )}

                {/* <div className="flex md:items-center md:flex-row flex-col mb-5 ">
                                    <h5 className="text-lg my-6 font-bold text-primary m-0 " style={{ fontSize: '25px' }}>
                                        Students Details
                                    </h5>
                                </div> */}
            {/* </div> */}
            <div className="panel flex-1 w-full px-8 col border-white-light dark:border-[#1b2e4b]">
                <div className="rollno-table">
                    <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                        <div className="flex items-center flex-wrap">
                            <button type="button" onClick={() => exportTable('csv')} className="btn btn-primary btn-sm m-1 ">
                                <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                CSV
                            </button>
                            <button type="button" onClick={() => exportTable('txt')} className="btn btn-primary btn-sm m-1">
                                <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                TXT
                            </button>

                            <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleDownloadExcel}>
                                <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                EXCEL
                            </button>

                            <button type="button" onClick={() => exportTable('print')} className="btn btn-primary btn-sm m-1">
                                <IconPrinter className="ltr:mr-2 rtl:ml-2" />
                                PRINT
                            </button>
                        </div>
                        <div className="ltr:ml-auto rtl:mr-auto">
                            <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>

                    <div className="datatables pagination-padding">
                        <DataTable
                            className="whitespace-nowrap table-compact rollno-table"
                            records={records}
                            columns={[
                                {
                                    accessor: 'admno',
                                    sortable: true,
                                    render: ({ admno }) => (
                                        <NavLink to="/apps/admno/preview">
                                            <div className="font-semibold">{`${admno}`}</div>
                                        </NavLink>
                                    ),
                                },
                                // {
                                //     accessor: 'rollno',
                                //     sortable: true,
                                //     render: ({ rollno }) => (
                                //         <NavLink to="/apps/rollno/preview">
                                //             <div className="text-primary underline hover:no-underline font-semibold">{`${rollno}`}</div>
                                //         </NavLink>
                                //     ),
                                // },
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
        </>
    );
};

export default StudentDetails;
