import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { downloadExcel } from 'react-export-table-to-excel';
import { useDispatch} from 'react-redux';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import IconTrashLines from '../../../../components/Icon/IconTrashLines';
import IconPlus from '../../../../components/Icon/IconPlus';
import IconEdit from '../../../../components/Icon/IconEdit';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import IconFile from '../../../../components/Icon/IconFile';
import IconPrinter from '../../../../components/Icon/IconPrinter';

import IconStar from '../../../../components/Icon/IconStar';




const TeachersRating = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Export Table'));
    });
    
    const[items,setItems]=useState([  {
        id: 1,
        invoice: '081451',
        name: 'Laurie Fox',
        student_name: 'Lalit',
        rating: '2',
        comment: 'Motivates students to progress',
        leave_type: 'sick Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'lauriefox@company.com',
        apply_date: '15 Dec 2020',
        amount: '9852463851',
        status: { tooltip: 'Approve', color: 'success' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 2,
        invoice: '081452',
        name: 'Alexander Gray',
        student_name: 'ranjay',
        rating: '3',
        comment: 'good',
        leave_type: 'casual Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'alexGray3188@gmail.com',
        apply_date: '20 Dec 2020',
        amount: '9852463851',
        status: { tooltip: 'Pending', color: 'danger' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 3,
        invoice: '081681',
        name: 'James Taylor',
        student_name: 'Arvind',
        rating: '2',
        comment: '	Excellent',
        leave_type: 'sick Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'jamestaylor468@gmail.com',
        apply_date: '27 Dec 2020',
        amount: '9852463851',
        status: { tooltip: 'Approve', color: 'success' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 4,
        invoice: '082693',
        name: 'Grace Roberts',
        student_name: 'Rahul',
        rating: '5',
        comment: 'Solidifies a positive relationship or connection with your students ',
        leave_type: 'sick Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'graceRoberts@company.com',
        apply_date: '31 Dec 2020',
        amount: '9852463851',
        status: { tooltip: 'Pending', color: 'danger' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 5,
        invoice: '084743',
        name: 'Donna Rogers',
        student_name: 'Suraj',
        rating: '3',
        comment: '	good team teacher learning and best regards',
        leave_type: 'Meternity Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'donnaRogers@hotmail.com',
        apply_date: '03 Jan 2021',
        amount: '9852463851',
        status: { tooltip: 'Approve', color: 'success' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 6,
        invoice: '086643',
        name: 'Amy Diaz',
        student_name: 'Suraj Sharma',
        rating: '3',
        comment: '	good team teacher learning and best regards',
        leave_type: 'Meternity Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'amy968@gmail.com',
        apply_date: '14 Jan 2020',
        amount: '9852463851',
        status: { tooltip: 'Pending', color: 'danger' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 7,
        invoice: '086773',
        name: 'Nia Hillyer',
        student_name: 'Suraj Sharma',
        rating: '3',
        comment: '	good team teacher learning and best regards',
        leave_type: 'casual Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'niahillyer666@comapny.com',
        apply_date: '20 Jan 2021',
        amount: '9852463851',
        status: { tooltip: 'Approve', color: 'success' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 8,
        invoice: '087916',
        name: 'Mary McDonald',
        student_name: 'Suraj Sharma',
        rating: '4',
        comment: '	good team teacher learning and best regards',
        leave_type: 'Meternity Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'maryDonald007@gamil.com',
        apply_date: '25 Jan 2021',
        amount: '9852463851',
        status: { tooltip: 'Pending', color: 'danger' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 9,
        invoice: '089472',
        name: 'Andy King',
        student_name: 'Suraj Sharma',
        rating: '4',
        comment: '	good team teacher learning and best regards',
        leave_type: 'Meternity Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'kingandy07@company.com',
        apply_date: '28 Jan 2021',
        amount: '9852463851',
        status: { tooltip: 'Approve', color: 'success' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 10,
        invoice: '091768',
        name: 'Vincent Carpenter',
        rating: '5',
        student_name: 'Suraj Sharma',
        comment: '	good team teacher learning and best regards',
        leave_type: 'Medical  Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'vincentcarpenter@gmail.com',
        apply_date: '30 Jan 2021',
        amount: '7479407010',
        status: { tooltip: 'Pending', color: 'danger' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 11,
        invoice: '095841',
        name: 'Kelly Young',
        rating: '5',
        student_name: 'Suraj Sharma',
        comment: '	good team teacher learning and best regards',
        leave_type: 'casual Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'youngkelly@hotmail.com',
        apply_date: '06 Feb 2021',
        amount: '9852463851',
        status: { tooltip: 'Approve', color: 'success' },
        profile: 'profile-1.jpeg',
    },
    {
        id: 12,
        invoice: '098424',
        name: 'Alma Clarke',
        rating: '5',
        student_name: 'Suraj Sharma',
        comment: '	good team teacher learning and best regards',
        leave_type: 'sick Leave',
        leave_date: '15 april 2024 - 18 april 2024',
        days: '4',
        email: 'alma.clarke@gmail.com',
        apply_date: '10 Feb 2021',
        amount: '9852463851',
        status: { tooltip: 'Approve', color: 'success' },
        profile: 'profile-1.jpeg',
    },]);

    const col = ['id',  'name', 'leave_type', 'leave_date', 'days','email','apply_date','tooltipz'];
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
    const [modal5, setModal5] = useState<boolean>(false);
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
                    item.invoice.toLowerCase().includes(search.toLowerCase()) ||
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.student_name.toLowerCase().includes(search.toLowerCase())||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.apply_date.toLowerCase().includes(search.toLowerCase()) ||
                    item.leave_type.toLowerCase().includes(search.toLowerCase()) ||
                    item.amount.toLowerCase().includes(search.toLowerCase()) ||
                    item.status.tooltip.toLowerCase().includes(search.toLowerCase())
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
    const header = ['id',  'name', 'leave_type', 'leave_date', 'days','email','apply_date','tooltip'];

    // const formatDate = (date: any) => {
    //     if (date) {
    //         const dt = new Date(date);
    //         const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
    //         const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
    //         return day + '/' + month + '/' + dt.getFullYear();
    //     }
    //     return '';
    // };

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
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 justify-between">
                <div className="ltr:mr-3 text-primary  text-xl flex justify-between flex-wrap font-bold rtl:ml-3">
                    Teachers Rating
                      
                </div>
                {/* <button className="btn btn-primary gap-2" onClick={() => setFilterbtn(!filterbtn)}>
                    <IconFilter className="text-lg" />
                    Filter
                </button> */}
                <button className="btn btn-danger gap-1 ml-3" onClick={()=>deleteRow()}>
                    <IconTrashLines />
                    Delete
                </button>
            </div>
            

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
                                sortable: true,
                                render: ({ invoice }) => (
                                    <NavLink to="/apps/invoice/preview">
                                        <div className="text-primary underline hover:no-underline font-semibold">{`${invoice}`}</div>
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
                                accessor: 'rating',
                                sortable: true,
                                title: 'Rate',
                                titleClassName: '!text-center',
                                render: ({ id, rating }) => (
                                    <div className="flex items-center justify-center text-warning">
                                        {Array.from(Array(5).keys()).map((i) => {
                                            return <IconStar key={i} className={i < rating ? 'fill-warning' : ''} />;
                                        })}
                                    </div>
                                ),
                            },
                            {
                                accessor: 'Comment',
                                sortable: true,
                                render: ({ comment }) => (
                                    <div className="whitespace-normal break-words">
                                        <div>{comment}</div>
                                    </div>
                                ),
                            },

                            {
                                accessor: 'status',
                                sortable: true,
                                render: ({ status }) => <span className={`badge badge-outline-${status.color} `}>{status.tooltip}</span>,
                            },
                            {
                                accessor: 'Student name',
                                sortable: true,
                                render: ({ student_name }) => <div>{student_name}</div>,
                            },
                            {
                                accessor: 'action',
                                title: 'Actions',
                                sortable: false,
                                textAlignment: 'center',
                                render: ({ id }) => (
                                    <div className="flex gap-4 items-center w-max mx-auto">
                                        <Tippy content='Edit'>
                                        <NavLink to="" className="flex hover:text-info">
                                            <IconEdit className="w-4.5 h-4.5" />
                                        </NavLink>
                                        </Tippy>
                                        {/* <NavLink to="/apps/invoice/preview" className="flex hover:text-primary">
                                            <IconEye />
                                        </NavLink> */}
                                        {/* <NavLink to="" className="flex"> */}
                                        <Tippy content='Delete'>
                                        <button type="button" className="flex hover:text-danger" onClick={(e) => deleteRow(id)}>
                                            <IconTrashLines />
                                        </button>
                                        </Tippy>
                                        {/* </NavLink> */}
                                    </div>
                                ),
                            },
                           
                           
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

export default TeachersRating;

// https://www.jotform.com/form-templates/student-registration-form
// https://www.jotform.com/form-templates/alumni-registration-form
