import { Link, NavLink, useNavigate } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState, Fragment } from 'react';
import sortBy from 'lodash/sortBy';
import { downloadExcel } from 'react-export-table-to-excel';
import IconFile from '../../../components/Icon/IconFile';
import IconPrinter from '../../../components/Icon/IconPrinter';
import IconPlus from '../../../components/Icon/IconPlus';
import IconFilter from '../../../components/Icon/IconFilter';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../../../components/Icon/IconX';
import Dropdown from '../../../components/Dropdown';
import IconHorizontalDots from '../../../components/Icon/IconHorizontalDots';

const rowData = [
  {
    id: 1,
    AdmnNo: '235689',
    rollno: '081451',
    Name: 'Laurie Fox',
    Email: 'lauriefox@company.com',
    course: 'CSE',
    branch: 'B.Tech',
    phone: '9874563210',
    attendanceDate: '02.05.24',
    semester: 'II',
    date: '15 Dec 2020',
    amount: '2275.45',
    status: { tooltip: 'Paid', color: 'success' },
    profile: 'profile-1.jpeg',
},
{
  id: 2,
  AdmnNo: '235687',
  rollno: '081452',
  Name: 'Alexander Gray',
  Email: 'alexGray3188@gmail.com',
  course: 'Criminal Lawer',
  branch: 'LLB',
  phone: '9861563210',

  attendanceDate: '02.05.24',
  semester: 'II',
  date: '20 Dec 2020',
  amount: '1044.00',
  status: { tooltip: 'Paid', color: 'success' },
  profile: 'profile-1.jpeg',
},
{
  id: 3,
  AdmnNo: '205689',
  rollno: '081681',
  Name: 'James Taylor',
  Email: 'jamestaylor468@gmail.com',
  course: 'ME',
  branch: 'M.Tech',
  phone: '9874563820',

  semester: 'II',
  attendanceDate: '02.05.24',
  date: '27 Dec 2020',
  amount: '20.00',
  status: { tooltip: 'Pending', color: 'danger' },
  profile: 'profile-1.jpeg',
},
{
  id: 4,
  AdmnNo: '237689',
  rollno: '082693',
  Name: 'Grace Roberts',
  Email: 'graceRoberts@company.com',
  course: 'Business Analytics',
  branch: 'MBA',
  phone: '9874563660',

  attendanceDate: '02.05.24',
  semester: 'II',
  date: '31 Dec 2020',
  amount: '344.00',
  status: { tooltip: 'Paid', color: 'success' },
  profile: 'profile-1.jpeg',
},
{
  id: 5,
  AdmnNo: '2365439',
  rollno: '084743',
  Name: 'Donna Rogers',
  Email: 'donnaRogers@hotmail.com',
  course: 'HR',
  branch: 'BBA',
  phone: '9114563210',

  attendanceDate: '02.05.24',
  semester: 'II',
  date: '03 Jan 2021',
  amount: '405.15',
  status: { tooltip: 'Paid', color: 'success' },
  profile: 'profile-1.jpeg',
},
];

const col = ['id', 'activityName', 'activityType', 'college', 'achievements', 'date', 'leave', 'details'];

const Examination = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Export Table'));
    // });

    const [modal5, setModal5] = useState(false);
    const addLeave = () => {
        setModal5(true);
        console.log('setting modal5');
    };

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

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
            return rowData.filter((item: any) => {
                return (
                    item.id.toString().includes(search.toLowerCase()) ||
                    item.activityName.toLowerCase().includes(search.toLowerCase()) ||
                    item.activityType.toLowerCase().includes(search.toLowerCase()) ||
                    item.college.toLowerCase().includes(search.toLowerCase()) ||
                    item.leave.toLowerCase().includes(search.toLowerCase()) ||
                    item.achievements.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.date.toLowerCase().includes(search.toLowerCase()) ||
                    item.action.toLowerCase().includes(search.toLowerCase())
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
    const header = ['Id', 'activityName', 'activityType', 'leave', 'Start Date', 'details No.', 'achievements', 'Action'];

    const formatDate = (date: any) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };

    function handleDownloadExcel() {
        downloadExcel({
            fileName: 'table',
            sheet: 'react-export-table-to-excel',
            tablePayload: {
                header,
                body: rowData,
            },
        });
    }

    const exportTable = (type: any) => {
        let columns: any = col;
        let records = rowData;
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
    return (
        <div>
            <div className=" mb-4 panel flex  justify-between items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="ltr:mr-3 text-primary  text-xl flex justify-between flex-wrap font-bold rtl:ml-3">Exam List </div>
                <div className=" flex gap-2 ">
                    <button type="button" onClick={addLeave} className="btn btn-primary ">
                        <IconPlus className="mr-2 -ml-3"></IconPlus>
                        Add
                    </button>
                </div>
            </div>
            {modal5 && (
                <Transition appear show={modal5} as={Fragment}>
                    <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0" />
                        </Transition.Child>
                        <div className="fixed inset-0 z-[999] bg-[black]/60">
                            <div className="flex min-h-screen items-start justify-center px-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="panel my-8 w-full max-w-5xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                        <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                            <h5 className="text-lg font-bold">Add Exam</h5>
                                            <button onClick={() => setModal5(false)} type="button" className="text-white-dark hover:text-dark">
                                                <IconX />
                                            </button>
                                        </div>
                                        {/* yaha se */}
                                        <div className="mt-4 px-4">
                                            <div className="px-5 flex w-full">
                                                <label htmlFor="Street_Address" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Exam Name
                                                </label>
                                                <input id="Street_Address" type="text" name="Street_Address" className="form-input flex-1" placeholder="Enter Exam Name" />
                                            </div>

                                            <div className="  px-5 mt-5 flex  gap-3 lg:flex-row flex-col">
                                                <label htmlFor="notes" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                    Description
                                                </label>
                                                <textarea id="notes" name="notes" className="form-textarea min-h-[130px]"></textarea>
                                            </div>
                                            <div className="px-5 mt-4 flex gap-3 lg:flex-row flex-col">
                                                <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">Upload Document</label>
                                                <input
                                                    type="file"
                                                    accept="image/png, image/jpeg, .pdf"
                                                    className="form-input file:py-4 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                                                />
                                            </div>

                                            <div className="  flex justify-between lg:flex-row flex-col">
                                                <div className=" w-full ltr:lg:px-4 rtl:lg:px-4 pb-6 pt-8">
                                                    <div className=" flex gap-3 lg:flex-row flex-col">
                                                        <label htmlFor="dob" className=" w-28  mb-0">
                                                            Course
                                                        </label>
                                                        <input id="gender" type="text" name="gender" className="-ml-2 form-input flex-1" placeholder="Ex. B.Tech CSE, ME, LLB etc." />
                                                        <label className='rtl:ml-2 w-28  mb-0"'>Semester</label>
                                                        <select className="-ml-4 form-select flex-1">
                                                            <option>Select...</option>
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
                                                    <div className="mt-4  flex gap-3 lg:flex-row flex-col">
                                                    <label className=' className=" rtl:ml-2 w-28  mb-0"'>Section</label>
                                                        <select className="-ml-4 form-select flex-1">
                                                            <option>Select...</option>
                                                            <option>A</option>
                                                            <option>B</option>
                                                            <option>C</option>
                                                            <option>D</option>
                                                            <option>E</option>
                                                        </select>
                                                        <label htmlFor="dob" className=" w-28  mb-0">
                                                            Assessment Type
                                                        </label>
                                                        <input id="gender" type="text" name="gender" className="-ml-2 form-input flex-1" placeholder="Ex. B.Tech CSE, ME, LLB etc." />
              
                                                    </div>
                                                    <div className="mt-4  flex gap-3 lg:flex-row flex-col">
                                                    <label className='rtl:ml-2 w-28  mb-0"'>Grade</label>
                                                        <input id="gender" type="text" name="gender" className="-ml-2 form-input flex-1 " />

                                                        <label className=" gap-2 inline-flex ">
                                                            <input type="checkbox" className="form-checkbox text-success" />
                                                            <span>Publish Exam</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            {/* Buttons */}
                                            <div className="mt-8 flex items-center justify-end">
                                                <button onClick={() => setModal5(false)} type="button" className="btn btn-outline-danger">
                                                    Discard
                                                </button>
                                                <button onClick={() => setModal5(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
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
                            { accessor: 'ExamName', title: 'Exam Name', sortable: true },
                            { accessor: 'CourseSession', title: 'Course and Session', sortable: true },
                            { accessor: 'Semester', title: 'Semester', sortable: true },
                            { accessor: 'ExamPublished', title: 'Exam Published', sortable: true },
                            { accessor: 'PublishedResult', title: 'Published Result', sortable: true },
                            { accessor: 'CreatedOn ', title: 'Created on ', sortable: true },
                            {
                              accessor: 'Action',
                              title: 'Action',
                              sortable: true,
                              render: () => (
                                  <div className="dropdown">
                                      <Dropdown offset={[0, 5]} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                                          <ul>
                                              <li>
                                              <Link to="/apps/StudentDetails/StudentAdm">

                                                  <button type="button">Edit</button>
                                                  </Link>
                                              </li>
                                              <li>
                                                  <Link to="/apps/StudentDetails/StudentProfile">
                                                      <button type="button">Exam Subjects</button>
                                                  </Link>
                                              </li>
                                              <li>
                                                  <Link to="/apps/StudentDetails/StudentProfile">
                                                      <button type="button">Exam Marks</button>
                                                  </Link>
                                              </li>
                                              <li>
                                                  <Link to="/apps/StudentDetails/StudentProfile">
                                                      <button type="button">Exam Attendance</button>
                                                  </Link>
                                              </li>
                                              <li>
                                                  <Link to="/apps/StudentDetails/StudentProfile">
                                                      <button type="button">Teacher Remarks</button>
                                                  </Link>
                                              </li>
                                              <li>
                                                  <Link to="/apps/StudentDetails/StudentProfile">
                                                      <button type="button">Assign / View Student</button>
                                                  </Link>
                                              </li>
                                              <li>
                                                  <button type="button">Delete</button>
                                              </li>
                                          </ul>
                                      </Dropdown>
                                  </div>
                              ),
                          },
                            // { accessor: 'Action', title: 'Action', sortable: true },
                        ]}
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
        </div>
    );
};

export default Examination;
