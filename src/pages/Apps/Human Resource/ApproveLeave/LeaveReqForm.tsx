import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const LeaveReqForm = ({ sendDataToAPI ,setModal5}) => {
    const SubmittedForm = Yup.object().shape({
        role: Yup.string().required('Please select role'),
        name: Yup.string().required('Please fill the name'),
        apply_date: Yup.string().required("Please select Apply date"),
        leave_type: Yup.string().required("Please select leave type "),
        leave_form_date: Yup.string().required('Please select date'),
        leave_to_date: Yup.string().required('Please select date'),
        reason: Yup.string().required('Please fill valid reason'),
        note: Yup.string().required('Please fill valid note'),
        attach_document:Yup.mixed().required('Please Attach document'),
        status: Yup.string().required('Please select status'),
    });

    const handleOnSubmit = async (values, { resetForm }) => {
        console.log('Form Data:', values);
        try {
            setTimeout(()=>{
 // Call your API or perform any action with form data here
            // await sendDataToAPI({ data: values });
            resetForm(); 
            setModal5(false)
            showAlert('success');
            },1000)
           


        } catch (error) {
            console.error('Error submitting form:', error);
            showAlert('error');
        }
    };

    const showAlert = (type) => {
        let title, text;
        if (type === 'success') {
            title = 'Good job!';
            text = 'Form saved successfully!';
        } else {
            title = 'Error!';
            text = 'Failed to save form.';
        }
        Swal.fire({
            icon: type === 'success' ? 'success' : 'error',
            title,
            text,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    };

    return (
        <div className="">
            <Formik
                initialValues={{
                    role: '',
                    name: '',
                    apply_date: '',
                    leave_type: '',
                    leave_form_date: '',
                    leave_to_date: '',
                    reason: '',
                    note: '',
                    attach_document: null,
                    status: ''
                }}
                validationSchema={SubmittedForm}
                onSubmit={handleOnSubmit}
            >
                 {({ setFieldValue }) => (
                <Form className="">
                    <div className=" px-0 flex-1  ltr:xl:mr-6 rtl:xl:ml-6">
                        {/* <div className="flex flex-wrap px-4">
                            <div className="mb-6 lg:w-1/2 w-full">
                                <div className="text-primary text-xl font-bold">Add Details</div>
                            </div>
                        </div> */}
                        {/* <hr className="border-white-light dark:border-[#1b2e4b] my-1" /> */}
                        <div className="mt-1 px-4">
                            <div className="flex justify-between lg:flex-row flex-col">
                                <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                    <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                        <label htmlFor=" role" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                            Role
                                        </label>
                                        <div className='flex-1'>
                                        <Field as="select" id='role' name="role"  className="form-select flex-1" required>
                                            <option>Select Role</option>
                                            <option>Admin</option>
                                            <option>Teacher</option>
                                            <option>Accountant</option>
                                            <option>Librarian</option>
                                            <option>Receptionist</option>
                                            <option>Super Admin</option>
                                        </Field>
                                        {/* <ErrorMessage name="role" className="error-message text-red-500"/> */}
                                        <ErrorMessage name="role" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                        </div>
                                        <label htmlFor="name" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                            Name
                                        </label>
                                        <div className='flex-1'>
                                        <Field id="name" type="text" name="name" className="form-input flex-1" placeholder="Enter Name" />
                                        {/* <ErrorMessage name="name" className="error-message text-red-500"/> */}
                                        <ErrorMessage name="name" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                        </div>
                                    </div>

                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                        <label htmlFor="apply_date" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                            Apply date
                                        </label>
                                        <div className='flex-1'>
                                        <Field id="apply_date" type="date" name="apply_date" className="form-input flex-1" placeholder="Enter Apply date" />
                                        {/* <ErrorMessage name="apply_date" className="error-message text-red-500"/> */}
                                        <ErrorMessage name="apply_date" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                        </div>
                                        <label htmlFor="leave_type" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                            Leave Type
                                        </label>
                                        <div className='flex-1'>
                                        <Field name="leave_type" as="select" className="form-select flex-1" >
                                            <option>Select Leave type</option>
                                            <option>Casual leave</option>
                                            <option>Sick Leave</option>
                                            <option>Meternity Leave</option>
                                        </Field>
                                        {/* <ErrorMessage name="leave_type" className="error-message text-red-500"/> */}
                                        <ErrorMessage name="leave_type" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                        </div>
                                    </div>

                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                        <label htmlFor="leave_from_date" className="ltr:mr-2 rtl:ml-2 w-32 mb-0">
                                            Leave From 
                                        </label>
                                        <div className='flex-1'>
                                        <Field id="leave_from_date" type="date" name="leave_form_date" className="form-input flex-1" placeholder="Enter Leave From Date" />
                                        {/* <ErrorMessage name="leave_form_date" className="error-message text-red-500"/> */}
                                        <ErrorMessage name="leave_form_date" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                        </div>
                                        <label htmlFor="leave_to_date" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                            Leave To
                                        </label>
                                        <div className='flex-1'>
                                        <Field id="leave_to_date" type="date" name="leave_to_date" className="form-input flex-1" placeholder="Enter Leave to Date" />
                                        {/* <ErrorMessage name="leave_to_date" className="error-message text-red-500"/> */}
                                        <ErrorMessage name="leave_to_date" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                        </div>
                                    </div>

                                    <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                        <label htmlFor="reason" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                            Reason
                                        </label>
                                        <div className='flex-1'>
                                        <Field id="reason" as="textarea" rows={4} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none" name="reason" placeholder="Enter Reason"/>
                                        {/* <ErrorMessage name="reason" className="error-message text-red-500" /> */}
                                        <ErrorMessage name="reason" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                        </div>
                                        <label htmlFor="note" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                            Note
                                        </label>
                                        <div className='flex-1'>
                                        <Field id="note" as="textarea" rows={4} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none" name="note" placeholder="Enter Note"  />
                                        {/* <ErrorMessage name="note" className="error-message text-red-500"/> */}
                                        <ErrorMessage name="note" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                        </div>
                                    </div>

                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                        <label className="ltr:mr-2 rtl:ml-2 w-32  mb-0">Attach Document</label>
                                        <div className='flex-1'>
                                        <input type="file" accept="image/png, image/jpeg,.pdf" name="attach_document" className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary" onChange={(event) => setFieldValue("attach_document", event.currentTarget.files[0])} />
                                        {/* <ErrorMessage name="attach_document" className="error-message text-red-500"/> */}
                                        <ErrorMessage name="attach_document" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                        </div>
                                        <label className="ltr:mr-2 rtl:ml-2 w-32  mb-0">status</label>
                                            <div className='flex-1'>
                                        <div className='  gap-5 lg:flex-row flex-coln form-input'>
                                            <label className="flex items-center cursor-pointer">
                                                <Field type="radio" name="status" value="pending" className="form-radio" />
                                                <span className="text-white-dark">Pending</span>
                                            </label>
                                            <label className="flex items-center cursor-pointer">
                                                <Field type="radio" name="status" value="approve" className="form-radio" />
                                                <span className="text-white-dark">Approve</span>
                                            </label>
                                            <label className="flex items-center cursor-pointer">
                                                <Field type="radio" name="status" value="disapprove" className="form-radio" />
                                                <span className="text-white-dark">Disapprove</span>
                                            </label>
                                        </div>
                                        {/* <ErrorMessage name="status" className="error-message text-red-500"/> */}
                                        <ErrorMessage name="status" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit"  className="btn btn-primary ">Save</button>
                    </div>
                </Form>
                 )}
            </Formik>
        </div>
    );
};

export default LeaveReqForm;
