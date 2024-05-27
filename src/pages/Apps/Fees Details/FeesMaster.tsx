import React from 'react';

import { useEffect, useState } from 'react';
// import IconPencil from '../../../components/Icon/IconPencil';
// import IconTrash from '../../../components/Icon/IconTrash';
// import IconPencilPaper from '../../../components/Icon/IconPencilPaper';
import Swal from 'sweetalert2';
import Select from 'react-select';
import sortBy from 'lodash/sortBy';
import { downloadExcel } from 'react-export-table-to-excel';
import IconPrinter from '../../../components/Icon/IconPrinter';
import IconFile from '../../../components/Icon/IconFile';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import IconEdit from '../../../components/Icon/IconEdit';
import IconTrashLines from '../../../components/Icon/IconTrashLines';

interface Todo {
    text: string;
    id: string;
}

const FeesMaster = () => {
    const rowData = [{}];

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
    const [department, setDepartment] = useState<Todo[]>([]);
    const [text, setText] = useState<string>('');
    const [edit, setEdit] = useState<null>(null);

    //console.log(department,"department")
    // Function to handle input change
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    // Function to show alert notification
    const showAlert = async (type: number) => {
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

    // Function to add or edit department item
    const addTodo = (data: string) => {
        if (edit) {
            const editedData = department.map((todo) => (todo.id === edit ? { ...todo, text: data } : todo)); // Update the department item with the edited text
            setDepartment(editedData); // Update department state
            setText(''); // Clear input text
            setEdit(''); // Exit edit mode
            showAlert(1); // Trigger alert after saving edited item
        } else if (text !== '') {
            const payLoad: Todo = {
                text: data,
                id: new Date().getTime().toString(),
            };
            setDepartment([...department, payLoad]); // Add new department item to the list
            setText(''); // Clear input text
            showAlert(1); // Trigger alert after adding new item
        }
    };

    // Function to handle form submission

    const handleOnSubmit = () => {
        addTodo(text); // Add or edit department item
    };

    // Function to handle editing a department item
    const handleEdit = (id: string) => {
        setEdit(id); // Set edit mode to the id of the item being edited
        const Edit = department.find((todo) => todo.id === id); // Find the item being edited
        setText(Edit.text); // Set input text to the text of the item being edited
    };

    // Function to handle editing a department item
    const deleteList = (id: string) => {
        // Filter out the department item with the given id
        const tempDepartments = department.filter((element) => element.id !== id);
        setDepartment(tempDepartments); // Update department state
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

    // const [amount , setAmount] = useState(false);
    // const handleOnClick =()=>{
    // amount("0.00");
    // }

    const options1 = [
        { value: 'Fees', label: 'Fees' },
        { value: 'Exam', label: 'Exam' },
        { value: 'Discount', label: 'Discount' },
    ];

    const options2 = [
        { value: 'Admission Fee', label: 'Admission Fee' },
        { value: 'Exam Fee', label: 'Exam Fee' },
        { value: 'Transport Fee', label: 'Transport Fee' },
        { value: 'Hostel Accomodation Fee', label: 'Hostel Accomodation Fee' },
        { value: 'Lumpsum Fee', label: 'Lumpsum Fee' },
        { value: 'Semester 1', label: 'Semester 1' },
        { value: 'Semester 1 Installment 1', label: 'Semester 1 Installment 1' },
        { value: 'Semester 1 Installment 2', label: 'Semester 1 Installment 2' },
        { value: 'Semester 2', label: 'Semester 2' },
        { value: 'Semester 2 Installment 1', label: 'Semester 2 Installment 1' },
        { value: 'Semester 2 Installment 2', label: 'Semester 2 Installment 2' },
        { value: 'Semester 3', label: 'Semester 3' },
        { value: 'Semester 3 Installment 1', label: 'Semester 3 Installment 1' },
        { value: 'Semester 3 Installment 2', label: 'Semester 3 Installment 2' },
        { value: 'Semester 4', label: 'Semester 4' },
        { value: 'Semester 4 Installment 1', label: 'Semester 4 Installment 1' },
        { value: 'Semester 4 Installment 2', label: 'Semester 4 Installment 2' },
        { value: 'Semester 5', label: 'Semester 5' },
        { value: 'Semester 5 Installment 1', label: 'Semester 5 Installment 1' },
        { value: 'Semester 5 Installment 2', label: 'Semester 5 Installment 2' },
        { value: 'Semester 6', label: 'Semester 6' },
        { value: 'Semester 6 Installment 1', label: 'Semester 6 Installment 1' },
        { value: 'Semester 6 Installment 2', label: 'Semester 6 Installment 2' },
        { value: 'Semester 7', label: 'Semester 7' },
        { value: 'Semester 7 Installment 1', label: 'Semester 7 Installment 1' },
        { value: 'Semester 7 Installment 2', label: 'Semester 7 Installment 2' },
        { value: 'Semester 8', label: 'Semester 8' },
        { value: 'Semester 8 Installment 1', label: 'Semester 8 Installment 1' },
        { value: 'Semester 8 Installment 2', label: 'Semester 8 Installment 2' },
    ];

    return (
        <>
            <div>
                <div className="flex xl:flex-row flex-col gap-2.5">
                    <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 ">
                        <div className="text-primary text-xl font-bold ml-6">Add Fees: 2024-25</div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <div className="flex justify-between flex-wrap px-4">
                            <div className="mb-2 w-full">
                                <label className="ltr:mr-2 rtl:ml-2 w-28 ml-1 mb-2">Fees Group</label>
                                <Select placeholder="Select an option" options={options1} />
                            </div>
                        </div>
                        <div className="flex justify-between flex-wrap px-4">
                            <div className="mb-2 w-full">
                                <label className="ltr:mr-2 rtl:ml-2 w-28 ml-1 mt-3 mb-2">Fees Type </label>
                                <Select placeholder="Select an option" options={options2} />
                            </div>
                        </div>
                        <div className="flex justify-between flex-wrap px-4">
                            <div className="mb-2 w-full">
                                <label className="ltr:mr-2 rtl:ml-2 w-28 ml-1 mt-3 mb-2">Due Date </label>
                                <input type="date" value={text} className="form-input flex-1" placeholder="Enter Amount" onChange={handleOnChange} />
                            </div>
                        </div>
                        <div className="flex justify-between flex-wrap px-4">
                            <div className="mb-2 w-full">
                                <label className="ltr:mr-2 rtl:ml-2 w-28 ml-1 mt-3 mb-2">Amount (Rs) </label>
                                <input type="text" value={text} className="form-input flex-1" placeholder="Enter Amount" onChange={handleOnChange} />
                            </div>
                        </div>
                        <div className="px-4 mt-3">Fine Type:</div>
                        <div className=" mt-4 mb-6 justify-between font-bold space-y-5 flex lg:flex-row flex-col px-5 ">
                            <div>
                                <label className="flex  mt-1 cursor-pointer">
                                    <input type="radio" name="custom_radio2" className="form-radio" />
                                    <span className="">None</span>
                                </label>
                            </div>
                            <div>
                                <label className=" -mt-4 flex cursor-pointer">
                                    <input type="radio" name="custom_radio2" className="form-radio" />
                                    <span className=" ">Percentage</span>
                                </label>
                            </div>
                            <div>
                                <label className=" -mt-4 flex cursor-pointer">
                                    <input type="radio" name="custom_radio2" className="form-radio" />
                                    <span className=" ">Fix Amount</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-between flex-row">
                            <div className="flex justify-between px-4">
                                <div className="mb-2 flex flex-col w-full">
                                    <label className="ltr:mr-2 rtl:ml-2 w-28 ml-1 mt-3 mb-2">Percentage (%) </label>
                                    <input type="text" value={text} className="form-input flex-1" placeholder="" onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="flex justify-between px-4">
                                <div className="mb-2 flex w-full flex-col">
                                    <label className="ltr:mr-2 rtl:ml-2 w-28 ml-1 mt-3 mb-2"> Fix Amount (Rs) </label>
                                    <input type="text" value={text} className="form-input flex-1" placeholder="" onChange={handleOnChange} />
                                </div>
                            </div>
                        </div>

                        <button type="button" onClick={handleOnSubmit} className="mt-2 btn btn-primary float-end ltr:lg:mr-4 rtl:lg:ml-6 mr-4 ">
                            Save
                        </button>
                    </div>
                    {/* list of department */}
                    <div className="panel ">
                        <div className="text-primary text-xl font-bold">Fees List: 2024-25</div>
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
                                records={department}
                                columns={[
                                    { accessor: 'Feesgroup', title: 'Fees Group', sortable: false, render: ({ text }) => <div>{text}</div> },
                                    // { accessor: 'action', sortable: true },
                                    {
                                        accessor: 'Feestype',
                                        title: 'Fees Type',
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
                                                    <button type="button" className="flex hover:text-danger" onClick={() => deleteList(id)}>
                                                        <IconTrashLines />
                                                    </button>
                                                    {/* </NavLink> */}
                                                </Tippy>
                                            </div>
                                                                              

                                        ),
                                    },
                                    { accessor: 'Amount', title: 'Amount', sortable: false, render: ({ text }) => <div>{text}</div> },
                                    { accessor: 'Action', title: 'Action', sortable: false, render: ({ text }) => <div>{text}</div> },
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
        </>
    );
};

export default FeesMaster;
