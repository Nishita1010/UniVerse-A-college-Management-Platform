import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const BankDetails = () => {
    // const validationSchema = Yup.object().shape({
    //     accountno: Yup.string().required('Please fill the account number'),
    //     accholdername: Yup.string().required("Please fill the account holder's name"),
    //     username: Yup.string().required('Please choose a username'),
    //     city: Yup.string().required('Please provide a valid city'),
    //     state: Yup.string().required('Please provide a valid state'),
    //     zip: Yup.string().required('Please provide a valid zip'),
    //     agree: Yup.bool().oneOf([true], 'You must agree before submitting.'),
    // });

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

    return (
        <div className="flex xl:flex-row flex-col gap-2.5">
            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                <div className="flex justify-between flex-wrap px-4">
                    <div className="mb-6 lg:w-1/2 w-full">
                        <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                            Bank Details
                        </div>
                    </div>
                </div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="mt-8 px-4">
                    <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                        <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                            <div className="mt-4 flex gap-5 lg:flex-row flex-col">
                                <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                    Account Number
                                </label>
                                <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter First Name" />
                                <label htmlFor="lastName" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                    Account Holder's Name
                                </label>
                                <input id="lastName" type="text" name="lastName" className="form-input flex-1" placeholder="Enter Last Name" />
                            </div>

                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                <label htmlFor="collegeEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    IFSC Code
                                </label>
                                <input id="collegeEmail" type="email" name="collegeEmail" className="form-input flex-1" placeholder="Enter College Email" />

                                <label htmlFor="personalEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Name of the Bank
                                </label>
                                <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
                            </div>
                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Branch Name
                                </label>
                                <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />

                                <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Country
                                </label>
                                <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter Personal Email" />
                            </div>
                            {/* <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                        <label htmlFor="accountno" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                            Account Number
                                        </label>
                                    

                                        <div className="px-5 flex w-1/2">
                                            <label htmlFor="accholdername" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                Account Holder's Name
                                            </label>

                                            <div className="flex-1">
                                                <Field
                                                    id="accholdername"
                                                    name="accholdername"
                                                    type="text"
                                                    placeholder="Enter Account Holder's Name"
                                                    className={`form-input flex-1 ${errors.accholdername && touched.accholdername ? 'border-red-500' : ''}`}
                                                />
                                                {errors.accholdername && touched.accholdername && <div className="text-red-500 mt-1">{errors.accholdername}</div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 flex lg:flex-row flex-col">
                                    <div className="px-6 flex w-1/2">
                                        <label htmlFor="IFSC Code" className="block mb-1">
                                            IFSC Code
                                        </label>
                                            
                                    </div>

                                    <div className="px-5 flex w-1/2">
                                        <label htmlFor="city" className="block mb-1">
                                            Name of the Bank
                                        </label>
                                        
                                    </div>
                                </div>
                                <div className="mb-4 flex lg:flex-row flex-col">
                                    <div className="px-5 flex w-1/2">
                                        <label htmlFor="state" className="block mb-1">
                                            Branch Name
                                        </label>
                                       
                                    </div>
                                    <div className="px-5 flex w-1/2">
                                        <label htmlFor="zip" className="block mb-1">
                                            Country
                                        </label>
                                        
                                    </div>
                                </div> */}
                            <button type="submit" className="btn btn-primary mt-8 float-end">
                                Submit Form
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankDetails;
