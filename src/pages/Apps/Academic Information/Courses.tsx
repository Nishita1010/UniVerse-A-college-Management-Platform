import React, { useState } from 'react';
import Dropdown from '../../../components/Dropdown';
import IconHorizontalDots from '../../../components/Icon/IconHorizontalDots';

const Courses = () => {
    const tableData = [
        {
            id: 1,
            name: 'DSA',
            email: 'johndoe@yahoo.com',
            date: '10/08/2020',
            sale: 'C120',
            status: 'Theory',
            register: '5 min ago',
            progress: '40%',
            position: 'Developer',
            office: 'London',
        },
        {
            id: 2,
            name: 'Dev Ops',
            email: 'shaunpark@gmail.com',
            date: '11/08/2020',
            sale: 'D400',
            status: 'Theory',
            register: '11 min ago',
            progress: '23%',
            position: 'Designer',
            office: 'New York',
        },
        {
            id: 3,
            name: 'Android Development',
            email: 'alma@gmail.com',
            date: '12/02/2020',
            sale: 'K310',
            status: 'Lab',
            register: '1 hour ago',
            progress: '80%',
            position: 'Accountant',
            office: 'Amazon',
        },
        {
            id: 4,
            name: 'IoT ',
            email: 'vincent@gmail.com',
            date: '13/08/2020',
            sale: 'L100',
            status: 'Lab',
            register: '1 day ago',
            progress: '60%',
            position: 'Data Scientist',
            office: 'Canada',
        },
        {
            id: 5,
            name: 'Engineering Mathematics',
            email: 'vincent@gmail.com',
            date: '13/08/2020',
            sale: 'T605',
            status: 'Theory',
            register: '1 day ago',
            progress: '60%',
            position: 'Data Scientist',
            office: 'Canada',
        },
    ];

    return (
        <>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="flex justify-between flex-wrap px-4">
                        <div className="mb-6 lg:w-1/2 w-full">
                            <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                                Add Course
                            </div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="mt-8 px-8">
                        <div className="mt-4 flex gap-5 lg:flex-row flex-col">
                            <label className=' className="ltr:mr-2 rtl:ml-2 w-28  mb-0"'>Course Name</label>
                            <select className="form-select flex-1">
                                <option>Select Course</option>
                                <option>DSA</option>
                                <option>Dev Ops</option>
                                <option>Android Development</option>
                                <option>IoT</option>
                                <option>Computing Mathematics</option>
                            </select>

                            <label className=' className="ltr:mr-2 rtl:ml-2 w-28  mb-0"'>Course Code</label>
                            <input id="religion" type="text" name="religion" className="form-input flex-1" placeholder="Enter Course Code" />
                        </div>
                        <div>
                            <div className=" mt-6 gap-10 font-bold items-center space-y-5 flex flex-row ">
                                <div>
                                    <label className="flex  cursor-pointer">
                                        <input type="radio" name="custom_radio2" className="form-radio" />
                                        <span className="">Theory</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="pl-8 -mt-4 flex  cursor-pointer">
                                        <input type="radio" name="custom_radio2" className="form-radio" />
                                        <span className=" ">Lab</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 flex justify-end ">
                        <button type="button" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            {/* -------------------------Course List Begin---------------------------------------------- */}

            <div className="mt-4 flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="mt-8 px-8">
                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            Courses
                        </label>
                    </div>

                    <div className="px-8 mt-8 table-responsive mb-5">
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Course Code</th>
                                    <th>Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <td>
                                                <div className="whitespace-nowrap">{data.name}</div>
                                            </td>
                                            <td>{data.sale}</td>
                                            <td>{data.status}</td>
                                            {/* <td>
                                                <span
                                                    className={`badge whitespace-nowrap ${
                                                        data.status === 'completed'
                                                            ? 'bg-primary   '
                                                            : data.status === 'Pending'
                                                            ? 'bg-secondary'
                                                            : data.status === 'In Progress'
                                                            ? 'bg-success'
                                                            : data.status === 'Canceled'
                                                            ? 'bg-danger'
                                                            : 'bg-primary'
                                                    }`}
                                                >
                                                    {data.status}
                                                </span>
                                            </td> */}
                                            <td className="text-center ">
                                                <div className="dropdown ">
                                                    <Dropdown offset={[0, 5]} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                                                        <ul>
                                                            <li>
                                                                <button type="button">Download</button>
                                                            </li>
                                                            <li>
                                                                <button type="button">Share</button>
                                                            </li>
                                                            <li>
                                                                <button type="button">Edit</button>
                                                            </li>
                                                            <li>
                                                                <button type="button">Delete</button>
                                                            </li>
                                                        </ul>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* -------------------------Course List End---------------------------------------------- */}
        </>
    );
};
export default Courses;