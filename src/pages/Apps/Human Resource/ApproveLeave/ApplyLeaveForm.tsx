import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';


const ApplyLeaveForm = ({setModal6}) => {
    const SubmittedForm = Yup.object().shape({
        apply_date: Yup.string().required('Please select Apply date'),
        available_leave: Yup.string().required('Please select leave'),
        leave_form_date: Yup.string().required("Please select leave from date"),
        leave_to_date: Yup.string().required("Please select leave to date"),
        reason: Yup.string().required('Please fill Reason'),
        attach_document: Yup.mixed().required('Please Attach document'),
    });




    const handleOnSubmit = (values, { resetForm }) => {
        console.log('Form Data:', values);
        // Call your API or perform any action with form data here
        setTimeout(() => {
            resetForm(); // Reset form after successful submission
            showAlert(1); // Show success alert
           setModal6(false)

        }, 1000);
    };

    const showAlert = async (type) => {
        if (type === 1) {
            await Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: 'Form saved successfully!',
                padding: '2em',
                customClass: 'sweet-alerts',
            });
        }
    };

    return (
        <div>
            <Formik
                initialValues={{
                    apply_date: '',
                    available_leave: '',
                    leave_form_date: '',
                    leave_to_date: '',
                    reason: '',
                    attach_document: null, 
                }}
                validationSchema={SubmittedForm}
                onSubmit={handleOnSubmit}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <div className=" px-0 flex-1 ltr:xl:mr-6 rtl:xl:ml-6">
                            <div className="flex  flex-wrap px-4">
                                {/* <div className="mb-6 lg:w-1/2 w-full">
                                    <div className="text-primary text-xl font-bold">Add Details</div>
                                </div> */}
                            </div>
                            {/* <hr className="border-white-light dark:border-[#1b2e4b] my-2" /> */}
                            
                            <div className="mt-2 px-4">
                                <div className="flex justify-between lg:flex-row flex-col">
                                    <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                        
                                        

                                        <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                            <label htmlFor="apply_date" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                                Apply date
                                            </label>
                                            <div className='flex-1'>
                                            <Field id="apply_date" type="date" name="apply_date" className="form-input flex-1" placeholder="Enter Phone number"/>
                                            {/* <ErrorMessage name="apply_date" component="div" className="error-message text-red-500" /> */}
                                            <ErrorMessage name="apply_date" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                            </div>
                                            <label htmlFor="available_leave" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                                Available Leaves
                                            </label>
                                            <div className='flex-1'>
                                            <Field as="select" id='available_leave' className="form-select flex-1" name='available_leave'>
                                                <option>Select Leave type </option>
                                                <option>Casual leave(2)</option>
                                                <option>Sick Leave(7)</option>
                                                <option>Meternity Leave(4)</option>
                                            </Field>
                                           
                                            {/* <ErrorMessage name="available_leave" component="div" className="error-message text-red-500" /> */}
                                            <ErrorMessage name="available_leave" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                
                                            </div>
                                        </div>
                                        <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                            <label htmlFor="leave_form_date" className="ltr:mr-2 rtl:ml-2 w-32 mb-0">
                                                Leave From 
                                            </label>
                                            <div className='flex-1'>
                                            <Field id="leave_form_date" type="date" name="leave_form_date" className="form-input flex-1" placeholder="Enter Phone number"/>
                                            {/* <ErrorMessage name="leave_form_date" component="div" className="error-message text-red-500" /> */}
                                            <ErrorMessage name="leave_form_date" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                            </div>
                                            <label htmlFor="leave_to_date" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                                Leave To
                                            </label>
                                            <div className='flex-1'>
                                            <Field id="leave_to_date" type="date" name="leave_to_date" className="form-input flex-1" placeholder="Enter Phone number" />
                                            {/* <ErrorMessage name="leave_to_date" component="div" className="error-message text-red-500" /> */}
                                            <ErrorMessage name="leave_to_date" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                            <label htmlFor="reason" className="ltr:mr-2 rtl:ml-2 w-32  mb-0">
                                                Reason
                                            </label>
                                            <div className='flex-1'>
                                            <Field as="textarea" id='reason' rows={4} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none" name='reason' />
                                            {/* <ErrorMessage name="reason" component="div" className="error-message text-red-500" /> */}
                                            <ErrorMessage name="reason" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                            </div>
                                        </div>

                                        <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                            <label htmlFor='attach_document' className="ltr:mr-2 rtl:ml-2 w-32  mb-0">Attach Document</label>
                                           <div className='flex-1'>
                                            <input id="attach_document" type="file" accept="image/png, image/jpeg,.pdf" name='attach_document' className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary" onChange={(event) => setFieldValue("attach_document", event.currentTarget.files[0])} />
                                            {/* <ErrorMessage name="attach_document" component="div" className="error-message text-red-500" /> */}
                                            <ErrorMessage name="attach_document" render={(msg) => <div className="text-red-600 text-sm">{msg}</div>} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                Save
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ApplyLeaveForm;
