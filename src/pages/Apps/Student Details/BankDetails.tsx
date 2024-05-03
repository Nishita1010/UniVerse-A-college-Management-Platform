import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const BankDetails = () => {
    const validationSchema = Yup.object().shape({
        accountno: Yup.string().required('Please fill the account number'),
        accholdername: Yup.string().required("Please fill the account holder's name"),
        username: Yup.string().required('Please choose a username'),
        city: Yup.string().required('Please provide a valid city'),
        state: Yup.string().required('Please provide a valid state'),
        zip: Yup.string().required('Please provide a valid zip'),
        agree: Yup.bool().oneOf([true], 'You must agree before submitting.'),
    });

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
        // <div className="panel px-0 py-6">
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

                {/* <div className="text-lg font-bold text-primary mb-6" style={{ fontSize: '25px' }}>
                Bank Details
            </div> */}
                <Formik
                    initialValues={{
                        accountno: '',
                        accholdername: '',
                        username: '',
                        city: '',
                        state: '',
                        zip: '',
                        agree: false,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, values }) => (
                        <Form>
                            {/* <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6"> */}
                            <div className="mb-4 flex lg:flex-row flex-col">
                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="accountno" className="block mb-1">
                                        Account Number
                                    </label>
                                    <div className='flex-1'>
                                    <Field
                                        id="accountno"
                                        name="accountno"
                                        type="text"
                                        placeholder="Enter Account Number"
                                        className={`form-input flex-row ${errors.accountno && touched.accountno ? 'border-red-500' : ''}`}
                                    />
                                   {errors.accountno && touched.accountno && <div className="text-red-500 mt-1">{errors.accountno}</div>}
                                </div>
                                </div>
                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="accholdername" className="block mb-1">
                                        Account Holder's Name 
                                    </label>
                                   
                                    <div className='flex-1'>
                                    <Field
                                        id="accholdername"
                                        name="accholdername"
                                        type="text"
                                        placeholder="Enter Account Holder's Name"
                                        className={`form-input ${errors.accholdername && touched.accholdername ? 'border-red-500' : ''}`}
                                    />
                                    {errors.accholdername && touched.accholdername && <div className="text-red-500 mt-1">{errors.accholdername}</div>}
                                    </div>
                                   
                                   
                                </div>
                                
                            </div>
                            <div className="mb-4 flex lg:flex-row flex-col">
                                <div className="px-6 flex w-1/2">
                                    <label htmlFor="IFSC Code" className="block mb-1">
                                        IFSC Code
                                    </label>
                                    <div className='flex-1'>
                                    <Field
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Enter IFSC Code"
                                        className={`form-input ${errors.username && touched.username ? 'border-red-500' : ''}`}
                                    />
                                    {errors.username && touched.username && <div className="text-red-500 mt-1">{errors.username}</div>}
                                </div>
                                </div>

                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="city" className="block mb-1">
                                        Name of the Bank
                                    </label>
                                    <div className='flex-1'>
                                    <Field id="city" name="city" type="text" placeholder="Enter Bank Name" className={`form-input ${errors.city && touched.city ? 'border-red-500' : ''}`} />
                                    {errors.city && touched.city && <div className="text-red-500 mt-1">{errors.city}</div>}
                                </div>
                                </div>
                            </div>
                            <div className="mb-4 flex lg:flex-row flex-col">
                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="state" className="block mb-1">
                                        Branch Name
                                    </label>
                                    <div className='flex-1'>
                                    <Field id="state" name="state" type="text" placeholder="Enter Branch Name" className={`form-input ${errors.state && touched.state ? 'border-red-500' : ''}`} />
                                    {errors.state && touched.state && <div className="text-red-500 mt-1">{errors.state}</div>}
                                </div>
                                </div>
                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="zip" className="block mb-1">
                                        Country
                                    </label>
                                    <div className='flex-1'>
                                    <Field id="zip" name="zip" type="text" placeholder="Select Country" className={`form-input ${errors.zip && touched.zip ? 'border-red-500' : ''}`} />
                                    {errors.zip && touched.zip && <div className="text-red-500 mt-1">{errors.zip}</div>}
                                </div>
                                </div>
                            </div>
                            {/* <div className="mb-4">
                            <label className="block mb-1">
                                <Field type="checkbox" name="agree" className="mr-2" />
                                I agree to the terms and conditions
                            </label>
                            {errors.agree && touched.agree && <div className="text-red-500 mt-1">{errors.agree}</div>}
                        </div> */}
                            <button type="submit" className="btn btn-primary">
                                Submit Form
                            </button>
                            
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default BankDetails;
