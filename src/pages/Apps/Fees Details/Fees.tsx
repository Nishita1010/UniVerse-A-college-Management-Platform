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

const Fees = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Student List'));
    });
    const [items, setItems] = useState([
        {
            id: 1,
            admno: '235689',
            rollno: '081451',
            name: 'Laurie Fox',
            email: 'lauriefox@company.com',

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
            date: '25 Jan 2021',
            amount: '79.00',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 9,
            admno: '2378689',
            rollno: '089472',
            name: 'Andy King',
            email: 'kingandy07@company.com',
            date: '28 Jan 2021',
            amount: '149.00',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 10,
            admno: '285689',
            rollno: '091768',
            name: 'Vincent Carpenter',
            email: 'vincentcarpenter@gmail.com',
            date: '30 Jan 2021',
            amount: '400',
            status: { tooltip: 'Paid', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 11,
            admno: '2887689',
            rollno: '095841',
            name: 'Kelly Young',
            email: 'youngkelly@hotmail.com',
            date: '06 Feb 2021',
            amount: '49.00',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 12,
            admno: '735689',
            rollno: '098424',
            name: 'Alma Clarke',
            email: 'alma.clarke@gmail.com',
            date: '10 Feb 2021',
            amount: '234.40',
            status: { tooltip: 'Paid', color: 'success' },
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
        <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
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
    );
};

export default Fees;

// import { useEffect, useState } from 'react';

// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/dist/tippy.css';
// import Dropdown from '../../components/Dropdown';
// import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
// // import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
// import ImageUploading, { ImageListType } from 'react-images-uploading';

// const Fees = () => {
//     const tableData = [
//         {
//             id: 1,
//             name: 'Tution Fee',
//             email: 'johndoe@yahoo.com',
//             date: '10/08/2020',
//             status: 'Paid',
//             amount:'1,00,000',
//             particulars: 'Tution Fee',
//             register: '5 min ago',
//             progress: '40%',
//             document: 'Aadhar Card',
//             office: 'London',
//         },
//         {
//             id: 2,
//             name: 'Admission Fee',
//             email: 'shaunpark@gmail.com',
//             date: '11/08/2020',
//             sale: 400,
//             status: 'Balance',
//             amount:'50,000',
//             register: '11 min ago',
//             progress: '23%',
//             document: 'Class X Marksheet',
//             office: 'New York',
//         },
//         {
//             id: 3,
//             name: 'Food and Laundry',
//             email: 'alma@gmail.com',
//             date: '12/02/2020',
//             sale: 310,
//             status: 'Paid',
//             amount:'20,000',

//             register: '1 hour ago',
//             progress: '80%',
//             document: 'Class XII Marksheet',
//             office: 'Amazon',
//         },
//         {
//             id: 4,
//             name: 'Hostel Fee',
//             email: 'vincent@gmail.com',
//             date: '13/08/2020',
//             sale: 100,
//             status: 'Balance',
//             amount:'25,000',

//             register: '1 day ago',
//             progress: '60%',
//             document: 'Pastportsize Photograph',
//             office: 'Canada',
//         },
//     ];

//     const [codeArr, setCodeArr] = useState<string[]>([]);

//     const toggleCode = (name: string) => {
//         if (codeArr.includes(name)) {
//             setCodeArr((value) => value.filter((d) => d !== name));
//         } else {
//             setCodeArr([...codeArr, name]);
//         }
//     };

//     // const [images, setImages] = useState<any>([]);
//     const [images2, setImages2] = useState<any>([]);
//     const maxNumber = 69;

//     // const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
//     //     setImages(imageList as never[]);
//     // };

//     const onChange2 = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
//         setImages2(imageList as never[]);
//     };
//     return (
//         <>
//             <div className="flex xl:flex-row flex-col gap-2.5">
//                 <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
//                     <div className="flex justify-between flex-wrap px-4">
//                         <div className="mb-6 lg:w-1/2 w-full">
//                             <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
//                                 Fees Details
//                             </div>
//                         </div>
//                     </div>
//                     <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
//                     <div className="float-end ">
//                         <button type="button" className=" mr-10 mt-2 btn btn-primary gap-2">
//                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
//                                 <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
//                                 <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"></path>
//                             </svg>
//                             <path
//                                 d="M6 17.9827C4.44655 17.9359 3.51998 17.7626 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H16C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.48 17.7626 19.5535 17.9359 18 17.9827"
//                                 stroke="currentColor"
//                                 strokeWidth="1.5"
//                             ></path>
//                             Fee Upload
//                         </button>
//                     </div>
//                     <div className="table-responsive px-10 mb-5 mt-24">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Sr. No.</th>
//                                     <th>Particulars</th>
//                                     <th>Amount (in Rupees)</th>
//                                     <th>Scholarship Awarded</th>
//                                     <th>Fee Paid</th>
//                                     <th>Balance</th>
//                                     <th>Receipt</th>

//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {tableData.map((data) => {
//                                     return (
//                                         <tr key={data.id}>
//                                             <td>
//                                                 <div className="whitespace-nowrap">{data.id}</div>
//                                             </td>
//                                             <td>{data.particulars}</td>

//                                             <td>
//                                                 <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
//                                                     <div
//                                                         className={`h-1.5 rounded-full rounded-bl-full text-center text-white text-xs ${
//                                                             data.amount === 'completed'
//                                                                 ? 'bg-primary'
//                                                                 : data.status === 'pending'
//                                                                 ? 'bg-secondary'
//                                                                 : data.status === 'in progress'
//                                                                 ? 'bg-success'
//                                                                 : data.status === 'cancelled'
//                                                                 ? 'bg-danger'
//                                                                 : 'bg-secondary'
//                                                         }`}
//                                                         style={{ width: `${data.progress}` }}
//                                                     ></div>
//                                                 </div>

//                                             </td>
//                                             <td className="text-center">
//                                                 <div className="dropdown ">
//                                                     <Dropdown offset={[0, 5]} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
//                                                         <ul>
//                                                             <li>
//                                                                 <button type="button">Download</button>
//                                                             </li>
//                                                             <li>
//                                                                 <button type="button">Share</button>
//                                                             </li>
//                                                             <li>
//                                                                 <button type="button">Edit</button>
//                                                             </li>
//                                                             <li>
//                                                                 <button type="button">Delete</button>
//                                                             </li>
//                                                         </ul>
//                                                     </Dropdown>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     );
//                                 })}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Fees;
