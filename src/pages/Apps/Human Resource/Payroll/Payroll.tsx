import React, { useEffect, useState } from 'react';

import { DataTable } from 'mantine-datatable';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../../store/themeConfigSlice';

interface Address {
    street: string;
    city: string;
    zipcode: number;
    geo: {
        lat: number;
        lng: number;
    };
}

interface SampleData {
    id: number;
    firstName: string;
    role: string;
    department: string;
    attendance: string;
    attendance_date: string;
    phone: string;
    address: Address;
    note: string;
    source: string;
    isActive: boolean;
    age: number;
    company: string;
}

const sampleData: SampleData[] = [
    {
        id: 1,
        firstName: 'Lali',
        role: 'Admin',
        attendance: 'present',
        attendance_date: '2024-03-28',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        note: '',
        source: 'N/A',
        isActive: true,
        age: 39,
        company: 'POLARAX',
        department: '',
        phone: ''
    },

    {
        id: 2,
        firstName: 'Ranjay Kumar',
        role: 'super-admin',
        attendance: 'absent',
        attendance_date: '2024-04-28',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        note: '',
        source: 'N/A',
        isActive: true,
        age: 39,
        company: 'POLARAX',
        department: '',
        phone: ''
    },
    {
        id: 3,
        firstName: 'Rahul',
        role: 'Teacher',
        department: 'Academic',
        phone: '9863232323',
        attendance: 'late',
        attendance_date: '2024-03-28',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        note: '',
        source: 'N/A',
        isActive: true,
        age: 39,
        company: 'POLARAX', 
    },
];

const Payroll = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Basic Table'));
    // });
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const initialRecords = sampleData.slice(0, pageSize);
    const [recordsData, setRecordsData] = useState([]);
    const [formData, setFormData] = useState({
        role: '',
        attendance_date: '',
    });

    const handleonChange = (e) => {
        const { name, value } = e.target;
        console.log(name, 'namsd');
        console.log(value, 'value');
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSearch = () => {
        console.log('search button clicked');
        let filteredData: SampleData[] = sampleData;
        console.log(filteredData, 'filter');
        const selectedMonthObject = new Date(formData.attendance_date);
        const selectedMonth = selectedMonthObject.getMonth();
        console.log(selectedMonth, 'selectedMOnth');
        if (formData.role !== 'Select Role' && formData.attendance_date !== '') {
            filteredData = filteredData.filter((item) => item.role === formData.role && new Date(item.attendance_date).getMonth() === selectedMonth);
            // console.log('filteredDataadjshad', filteredData)
            // console.log("sscsjchudc")
        } else if (formData.role !== 'Select Role') {
            filteredData = filteredData.filter((item) => item.role === formData.role);
            //console.log("rrrrrrrrrrrrrr")
        } else if (formData.attendance_date !== '') {
            filteredData = filteredData.filter((item) => item.attendance_date === formData.attendance_date);
            // console.log("eeeeeeeeeeeeeeee")
        }
        // console.log(filteredData,"filteredData")
        setRecordsData(filteredData);
    };
    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    return (
        <div>
            <div className="panel flex justify-between items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="ltr:mr-3 text-primary  text-xl flex justify-between flex-wrap font-bold rtl:ml-3">Payroll</div>
            </div>
            <div className="panel mt-4 px-0 flex-1 ">
                {/* <div className="flex flex-wrap px-4">
                    <div className="text-primary text-xl font-bold">Select Criteria</div>
                </div> */}

                <form>
                    <div className="mt-8 px-4">
                        <div className="flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                <div className="flex gap-5 -mt-4 lg:flex-row flex-col">
                                    <label htmlFor="role" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Role
                                    </label>
                                    <select id="role" className="form-select flex-1" value={formData.role} name="role" onChange={handleonChange}>
                                        <option value="Select Role">Select Role </option>
                                        <option value="Admin">Admin</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Accountant">Accountant</option>
                                        <option value="Librarian">Librarian</option>
                                        <option value="Receptionist">Receptionist</option>
                                        <option value="super-admin">Super Admin</option>
                                    </select>
                                    <label htmlFor="attendance_date" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Month & Year
                                    </label>
                                    <input type="month" id="attendance_date" value={formData.attendance_date} name="attendance_date" className="form-input flex-1" onChange={handleonChange} />
                                    <button type="button" className="btn btn-primary gap-2 float-end" onClick={handleSearch}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {recordsData.length != 0 && (
                    <div className="">
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <div className="text-primary text-xl font-bold px-4">Staff List</div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        {/* <div className="mt-4 flex gap-5  lg:flex-row flex-col"></div> */}

                        <div className="datatables mt-4">
                            <DataTable
                                noRecordsText="No results match your search query"
                                highlightOnHover
                                className="whitespace-nowrap table-hover"
                                records={recordsData}
                                columns={[
                                    { accessor: 'id', sortable: true, title: 'Staff ID' },
                                    { accessor: 'firstName', sortable: true, title: 'Name' },
                                    { accessor: 'role', sortable: true, title: 'Role' },
                                    { accessor: ' department', sortable: true, title: 'Department' },
                                    { accessor: 'designation', sortable: true },
                                    { accessor: 'phone', sortable: true },
                                    { accessor: 'Status', sortable: true },
                                    { accessor: 'action', sortable: true },
                                ]}
                                totalRecords={recordsData.length}
                                recordsPerPage={pageSize}
                                page={page}
                                onPageChange={(p) => setPage(p)}
                                recordsPerPageOptions={PAGE_SIZES}
                                onRecordsPerPageChange={setPageSize}
                                minHeight={200}
                                paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Payroll;
