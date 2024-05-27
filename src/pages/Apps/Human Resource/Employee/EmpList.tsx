import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { downloadExcel } from 'react-export-table-to-excel';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import IconTrashLines from '../../../../components/Icon/IconTrashLines';
import IconPlus from '../../../../components/Icon/IconPlus';
import IconEdit from '../../../../components/Icon/IconEdit';
import IconEye from '../../../../components/Icon/IconEye';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import IconFile from '../../../../components/Icon/IconFile';
import IconPrinter from '../../../../components/Icon/IconPrinter';
import IconFilter from '../../../../components/Icon/IconFilter';

const EmpList = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Export Table'));
    // });

    const [items, setItems] = useState([
        {
            id: 1,
            employee_id: '081451',
            name: 'Laurie Fox',
            email: 'lauriefox@company.com',
            date: '15 Dec 2020',
            phone: '9852463851',
            department: 'BBA',
            designation: 'Librarian',
            profile: 'profile-1.jpeg',
        },
        {
            id: 2,
            employee_id: '081452',
            name: 'Alexander Gray',
            email: 'alexGray3188@gmail.com',
            date: '20 Dec 2020',
            phone: '9852463851',
            department: 'BBA',
            designation: 'Accountant',
            profile: 'profile-1.jpeg',
        },
        {
            id: 3,
            employee_id: '081681',
            name: 'James Taylor',
            email: 'jamestaylor468@gmail.com',
            date: '27 Dec 2020',
            phone: '9852463851',
            department: 'BCA',
            designation: 'Accountant',
            profile: 'profile-1.jpeg',
        },
        {
            id: 4,
            employee_id: '082693',
            name: 'Grace Roberts',
            email: 'graceRoberts@company.com',
            date: '31 Dec 2020',
            phone: '9852463851',
            department: 'B.TECH',
            designation: 'Principle',
            profile: 'profile-1.jpeg',
        },
        {
            id: 5,
            employee_id: '084743',
            name: 'Donna Rogers',
            email: 'donnaRogers@hotmail.com',
            date: '03 Jan 2021',
            phone: '9852463851',
            department: 'B.com',
            designation: 'faculty',
            profile: 'profile-1.jpeg',
        },
        {
            id: 6,
            employee_id: '086643',
            name: 'Amy Diaz',
            email: 'amy968@gmail.com',
            date: '14 Jan 2020',
            phone: '9852463851',
            department: 'B.sc',
            designation: 'faculty',
            profile: 'profile-1.jpeg',
        },
        {
            id: 7,
            employee_id: '086773',
            name: 'Nia Hillyer',
            email: 'niahillyer666@comapny.com',
            date: '20 Jan 2021',
            phone: '9852463851',
            department: 'MBA',
            designation: 'faculty',
            profile: 'profile-1.jpeg',
        },
        {
            id: 8,
            employee_id: '087916',
            role: 'Accountant',
            name: 'Mary McDonald',
            email: 'maryDonald007@gamil.com',
            date: '25 Jan 2021',
            phone: '9852463851',
            department: 'DIPLOMA',
            designation: 'faculty',
            profile: 'profile-1.jpeg',
        },
        {
            id: 9,
            employee_id: '089472',
            role: 'Teacher',
            name: 'Andy King',
            email: 'kingandy07@company.com',
            date: '28 Jan 2021',
            phone: '9852463851',
            department: 'BCA',
            designation: 'faculty',
            profile: 'profile-1.jpeg',
        },
        {
            id: 10,
            employee_id: '091768',
            role: 'Admin',
            name: 'Vincent Carpenter',
            email: 'vincentcarpenter@gmail.com',
            date: '30 Jan 2021',
            phone: '7479407010',
            designation: 'faculty',
            department: 'MCA',
            profile: 'profile-1.jpeg',
        },
        {
            id: 11,
            employee_id: '095841',
            role: 'Admin',
            name: 'Kelly Young',
            email: 'youngkelly@hotmail.com',
            date: '06 Feb 2021',
            phone: '9852463851',
            department: 'B.TECH',
            designation: 'faculty',
            profile: 'profile-1.jpeg',
        },
        {
            id: 12,
            employee_id: '098424',
            role: 'Libraian',
            name: 'Alma Clarke',
            email: 'alma.clarke@gmail.com',
            date: '10 Feb 2021',
            phone: '9852463851',
            department: 'Library',
            designation: 'Faculty',
            profile: 'profile-1.jpeg',
        },
    ]);

    const col = ['id', 'employee_id', 'name', 'email', 'role', 'date', 'phone', 'department'];
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
    const [formData, setformData] = useState({
        employee_id: '',
        role: '',
        designation: '',
        department: '',
    });

    const handleonChange = (e) => {
        const { name, value } = e.target;
        console.log(value, 'value');
        setformData({
            ...formData,
            [name]: value,
        });
    };

    const handleOnSearch = () => {
        // Filter data based on the selected values
        const filteredData = items.filter((item) => {
            return (
                (formData.employee_id === '' || item.employee_id === formData.employee_id) &&
                (formData.role === '' || item.role === formData.role) &&
                (formData.designation === '' || item.designation === formData.designation) &&
                (formData.department === '' || item.department === formData.department)
            );
        });
        setRecordsData(filteredData);
    };

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
            return items.filter((item: any) => {
                return (
                    item.employee_id.toLowerCase().includes(search.toLowerCase()) ||
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.date.toLowerCase().includes(search.toLowerCase()) ||
                    item.phone.toLowerCase().includes(search.toLowerCase()) ||
                    item.role?.toLowerCase().includes(search.toLowerCase()) ||
                    item.department.toLowerCase().includes(search.toLowerCase())
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
    const header = ['id', 'emp_id', 'name', 'email', 'role', 'date', 'phone', 'department'];

    // const formatDate = (date: any) => {
    //     if (date) {
    //         const dt = new Date(date);
    //         const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
    //         const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
    //         return day + '/' + month + '/' + dt.getFullYear();
    //     }
    //     return '';
    // };
    //   const handleOnSearch=()=>{
    //         if(items.emp_id!=="" && items.role ){

    //         }
    //   }
    const deleteRow = (id: any = null) => {
        if (window.confirm('Are you sure want to delete selected row ?')) {
            if (id) {
                setRecordsData(items.filter((user) => user.id !== id));
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
                setRecordsData(result);
                setInitialRecords(result);
                setItems(result);
                setSearch('');
                setSelectedRecords([]);
                setPage(1);
            }
        }
    };

    function handleDownloadExcel() {
        downloadExcel({
            fileName: 'table',
            sheet: 'react-export-table-to-excel',
            tablePayload: {
                header,
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

    const [filterbtn, setFilterbtn] = useState(false);

    return (
        <>
            <div className="panel flex justify-between  items-center overflow-x-auto whitespace-nowrap p-3 md:flex-row flex-col">
                <div className="ltr:mr-3 text-primary  text-xl flex justify-between flex-wrap font-bold rtl:ml-3">Staff Lists</div>
                <div className="flex">
                    <div className=" text-white ltr:mr-3 rtl:ml-3">
                        <Link to="apps/human_resource/employee/empAdd" className="btn btn-primary gap-2 ">
                            <IconPlus />
                            Add
                        </Link>
                    </div>
                    <button className="btn btn-primary gap-2 " onClick={() => setFilterbtn(!filterbtn)}>
                        <IconFilter className="text-lg" />
                        Filter
                    </button>
                    <button className="btn btn-danger gap-1 ml-3 " onClick={() => deleteRow()}>
                        <IconTrashLines />
                        Delete
                    </button>
                </div>
            </div>
            {filterbtn && (
                <div className="panel mt-4  overflow-x-auto p-3">
                    <div className="flex justify-between lg:flex-row flex-col">
                        <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                <label htmlFor="employee_id" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                    Employee Id
                                </label>
                                <div className="flex-1">
                                    <input
                                        id="employee_id"
                                        type="text"
                                        name="employee_id"
                                        maxLength={6}
                                        value={formData.employee_id}
                                        onChange={handleonChange}
                                        className="form-input flex-1"
                                        placeholder=" Employee Id"
                                    />
                                </div>
                                <label htmlFor="role" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Role
                                </label>
                                <div className="flex-1">
                                    <select id="role" name="role" value={formData.role} onChange={handleonChange} className="form-select flex-1">
                                        <option value="">Select Role </option>
                                        <option value="Admin">Admin</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Accountant">Accountant</option>
                                        <option value="Libraian">Libraian</option>
                                        <option value="Receptionist">Receptionist</option>
                                        <option value="Super Admin">Super Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                <label htmlFor="designation" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Designation
                                </label>
                                <div className="flex-1">
                                    <select id="designation" name="designation" value={formData.designation} onChange={handleonChange} className="form-select flex-1">
                                        <option value="">Select Designation</option>
                                        <option value="Faculty">Faculty</option>
                                        <option value="Accountant">Accountant</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Receptionist">Receptionist</option>
                                        <option value="Principle">Principle</option>
                                        <option value="Director">Director</option>
                                        <option value="Librarian">Librarian</option>
                                        <option value="Technical Head">Technical Head</option>
                                    </select>
                                    {/* {errors.designation && <div className="text-danger">{errors.designation}</div>} */}
                                    {/* <ErrorMessage name="designation" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                </div>
                                <label htmlFor="department" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Department
                                </label>
                                <div className="flex-1">
                                    <select id="department" name="department" value={formData.department} onChange={handleonChange} className="form-select flex-1">
                                        <option value="">Select Department</option>
                                        <option value="Academic">Academic</option>
                                        <option value="Library">Library</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Science">Science</option>
                                        <option value="Commerece">Commerece</option>
                                        <option value="Arts">Arts</option>
                                        <option value="Exam">Exam</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Finance">Finance</option>
                                    </select>
                                    {/* {errors.department && <div className="text-danger">{errors.department}</div>} */}
                                    {/* <ErrorMessage name="department" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                </div>
                            </div>
                            <button onClick={handleOnSearch} className="btn btn-primary gap-2 mt-4 float-end">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="panel mt-6">
                <div className="flex md:items-center justify-between md:flex-row flex-col mb-4.5 gap-5">
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

                    <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="datatables">
                    <DataTable
                        highlightOnHover
                        className="whitespace-nowrap table-hover"
                        records={recordsData}
                        columns={[
                            {
                                accessor: 'Emp id',
                                title: 'Emp id',
                                render: ({ employee_id, id }) => (
                                    <NavLink to="/apps/emppreview">
                                        <div className="text-primary underline hover:no-underline font-semibold">{`${employee_id}`}</div>
                                    </NavLink>
                                ),
                                sortable: true,
                            },
                            { accessor: 'name', sortable: true },
                            { accessor: 'email', sortable: true },
                            {
                                accessor: 'Phone ',
                                sortable: true,
                                titleClassName: 'text-right',
                                render: ({ phone, id }) => <div className="text-right font-semibold">{`${phone}`}</div>,
                            },
                            { accessor: 'role', title: 'Role', sortable: true },
                            { accessor: 'date', title: 'Date', sortable: true },

                            {
                                accessor: 'department',
                                title: 'Department',
                                sortable: true,
                                render: ({ department }) => <div className="text-center font-semibold">{`${department}`}</div>,
                            },
                            {
                                accessor: 'action',
                                title: 'Actions',
                                sortable: false,
                                textAlignment: 'center',
                                render: ({ id }) => (
                                    <div className="flex gap-4 items-center w-max mx-auto">
                                        <Tippy content="Edit">
                                            <NavLink to="" className="flex hover:text-info">
                                                <IconEdit className="w-4.5 h-4.5" />
                                            </NavLink>
                                        </Tippy>
                                        <Tippy content="Preview">
                                            <NavLink to="/apps/emppreview" className="flex hover:text-primary">
                                                <IconEye />
                                            </NavLink>
                                        </Tippy>
                                        <Tippy content="Delete">
                                            {/* <NavLink to="" className="flex"> */}
                                            <button type="button" className="flex hover:text-danger" onClick={(e) => deleteRow(id)}>
                                                <IconTrashLines />
                                            </button>
                                            {/* </NavLink> */}
                                        </Tippy>
                                    </div>
                                ),
                            },
                            // {
                            //    accessor: 'dob',
                            //    title: 'Start Date',
                            //     sortable: true,
                            //    render: ({ dob }) => <div>{formatDate(dob)}</div>,
                            // },
                        ]}
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
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                </div>
            </div>
        </>
    );
};

export default EmpList;

// https://www.jotform.com/form-templates/student-registration-form
// https://www.jotform.com/form-templates/alumni-registration-form
