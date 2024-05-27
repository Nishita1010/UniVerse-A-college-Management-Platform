import { useEffect, useState } from 'react';
import IconTrash from '../../../../components/Icon/IconTrash';
import IconPencilPaper from '../../../../components/Icon/IconPencilPaper';
import Swal from 'sweetalert2';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import IconFile from '../../../../components/Icon/IconFile';
import IconPrinter from '../../../../components/Icon/IconPrinter';
import sortBy from 'lodash/sortBy';
import { downloadExcel } from 'react-export-table-to-excel';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { NavLink } from 'react-router-dom';
import IconEdit from '../../../../components/Icon/IconEdit';
import IconEye from '../../../../components/Icon/IconEye';
import IconTrashLines from '../../../../components/Icon/IconTrashLines';

interface Todo {
    text: string;
    id: string;
}

const LeaveType = () => {

    const rowData =[{

    }]

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Export Table'));
    // });
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

    const [LeaveType, setLeaveType] = useState<Todo[]>(sortBy([]));
    const [text, setText] = useState<string>('');
    const [edit, setEdit] = useState<null>(null);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const showAlert = (type: number) => {
        if (type === 1) {
            const toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: 'success',
                title: 'Saved successfully',
                padding: '10px 20px',
            });
        }
    };

    const addTodo = (data: string) => {
         
        if (edit) {
            const editedData = LeaveType.map((todo) => (todo.id === edit ? { ...todo, text: data } : todo));
            setLeaveType(editedData);
            setText('');
            setEdit(null);
            showAlert(1); // Trigger alert after saving edited item
        } else if (text !== '') {
            const payLoad: Todo = {
                text: data,
                id: new Date().getTime().toString(),
            };
            setLeaveType([...LeaveType, payLoad]);
            setText('');
            showAlert(1);// Trigger alert after adding new item
        }
    };

    const handleOnSubmit = () => {
        addTodo(text);
    };

    const handleEdit = (id: string) => {
        setEdit(id);
        const edit = LeaveType.find((todo) => todo.id === id);
        setText(edit.text);
        
    };

    const deleteList = (id: string) => {
        const tempDepartments = LeaveType.filter((element) => element.id !== id);
        setLeaveType(tempDepartments);
    };

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    // useEffect(() => {
    //     setInitialRecords(() => {
    //         return LeaveType.filter((item: any) => {
    //             return (
    //                 item.id.toString().includes(search.toLowerCase()) ||
    //                 item.firstName.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.lastName.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.company.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.email.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.age.toString().toLowerCase().includes(search.toLowerCase()) ||
    //                 item.dob.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.phone.toLowerCase().includes(search.toLowerCase())
    //             );
    //         });
    //     });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);
    const header = ['name'];

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

    const col = ['name'];

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
            <div className=" container flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 h-56 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="text-primary text-xl font-bold ml-6">Add Leave Type</div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between flex-wrap px-4">
                        <div className="mb-2  w-full">
                            <label className="ltr:mr-2 rtl:ml-2 w-28 mb-0 font-bold">Leave</label>
                            <input type="text" value={text} className="form-input flex-1" placeholder="Enter Department" onChange={handleOnChange} />
                        </div>
                    </div>
                    {/* <hr className="border-white-light dark:border-[#1b2e4b] my-2" /> */}
                    <div className='w-auto'>
                    <button type="submit" onClick={handleOnSubmit} className="btn btn-primary float-end ltr:xl:mr-4 rtl:xl:ml-6">
                        Save
                    </button>
                    </div>
                </div>
                {/* list of leave */}
                <div className="panel ">
                    <div className='text-primary text-xl font-bold'>Leave Type Lists</div>
                <div className="flex mt-6 md:items-center justify-between md:flex-row flex-col mb-4.5 gap-5">
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
                        records={LeaveType}
                        columns={[
                            
                            { accessor: 'Name',sortable: false, render:({text})=>(
                                <div>{text}</div>
                            ) },
                            // { accessor: 'action', sortable: true },
                            {
                                accessor: 'action',
                                title: 'Actions',
                                sortable: false,
                                textAlignment: 'right',
                                render: ({ id }) => (
                                    <div className="flex gap-4 items-center  mx-auto justify-end">
                                        <Tippy content="Edit">
                                            <div className="flex hover:text-info " onClick={() => handleEdit(id)}>
                                                <IconEdit className="w-4.5 h-4.5" />
                                            </div>
                                        </Tippy>
                                        {/* <Tippy content="Preview">
                                            <NavLink to="/apps/emppreview" className="flex hover:text-primary">
                                                <IconEye />
                                            </NavLink>
                                        </Tippy> */}
                                        <Tippy content="Delete">
                                            {/* <NavLink to="" className="flex"> */}
                                            <button type="button" className="flex hover:text-danger"onClick={() => deleteList(id)}>
                                                <IconTrashLines />
                                            </button>
                                            {/* </NavLink> */}
                                        </Tippy>
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
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                </div>
            </div>
            </div>
        </div>
    );
};

export default LeaveType;
