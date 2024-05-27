import React from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface FormValues {
    resume: string;
    joinig_letter: string;
    resignation_letter: string;
    other_document: string;
    remarks: string;
}

const UploadDocument = ({ nextHandler, backHandler }) => {
    const SubmittedForm = Yup.object().shape({
        resume: Yup.mixed().required('Please upload your resume'),
        joinig_letter: Yup.mixed().required('Please upload your joining letter'),
        resignation_letter: Yup.mixed().required('Please upload your resignation letter'),
        remarks: Yup.string().required('Please write a short note'),
    });

    const navigate = useNavigate();

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

    function submitForm(values: FormValues) {
        // const isConfirmed = window.confirm('Are you sure you want to submit the form?');
        // if (isConfirmed) {
        // alert('Submitting....');
        nextHandler();
        showAlert(1);
        navigate('/apps/empdetails', { state: { showAlert: true } });

        console.log(values);
        // }
    }

    function handleBackClick(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Your other back button logic goes here
        backHandler();
    }

    return (
        <Formik
            initialValues={{
                resume: '',
                joinig_letter: '',
                resignation_letter: '',
                other_document: '',
                remarks: '',
            }}
            validationSchema={SubmittedForm}
            onSubmit={submitForm}
        >
            <Form>
                <div>
                    <div className="">
                        <div className="flex justify-between flex-wrap px-4">
                            {/* <div className="mb-6 lg:w-1/2 w-full">
                                <div className="text-primary text-xl font-bold"> Upload Document </div>
                            </div> */}
                        </div>

                        <hr className="border-white-light dark:border-[#1b2e4b]" />
                        <div className="mt-8 px-4">
                            <div className="flex justify-between lg:flex-row flex-col">
                                <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                    <div className="flex justify-evenly mt-5 lg:flex-row flex-col gap-4">
                                        <div>
                                            <label className="text-lg" htmlFor="resume">
                                                Upload Resume
                                            </label>
                                            <div className="flex-1">
                                                <p className="text-gray-400">only upload pdf,jpeg,png file</p>
                                                <Field
                                                    type="file"
                                                    id="resume"
                                                    name="resume"
                                                    accept="image/png, image/jpeg, .pdf"
                                                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary "
                                                />
                                                <ErrorMessage name="resume" render={(msg) => <div className="text-danger">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-lg" htmlFor="joinig_letter">
                                                Upload Joining Letter
                                            </label>
                                            <div className="flex-1">
                                                <p className="text-gray-400">only upload pdf,jpeg,png file</p>
                                                <Field
                                                    type="file"
                                                    id="joinig_letter"
                                                    name="joinig_letter"
                                                    accept="image/png, image/jpeg, .pdf"
                                                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                                                />
                                                <ErrorMessage name="joinig_letter" render={(msg) => <div className="text-danger">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-lg" htmlFor="resignation_letter">
                                                Upload Resignation Letter
                                            </label>
                                            <div className="flex-1">
                                                <p className="text-gray-400">only upload pdf,jpeg,png file</p>
                                                <Field
                                                    type="file"
                                                    id="resignation_letter"
                                                    name="resignation_letter"
                                                    accept="image/png, image/jpeg, .pdf"
                                                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary "
                                                />
                                                <ErrorMessage name="resignation_letter" render={(msg) => <div className="text-danger">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-lg" htmlFor="other_document">
                                                Upload Other Documents
                                            </label>
                                            <div className="flex-1">
                                                <p className="text-gray-400">only upload pdf,jpeg,png file</p>
                                                <Field
                                                    type="file"
                                                    id="other_document"
                                                    name="other_document"
                                                    accept="image/png, image/jpeg, .pdf"
                                                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                                                />
                                                {/* <ErrorMessage name="other_document" render={(msg) => <div className="text-red-500">{msg}</div>} /> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                                    <div className="mt-8 px-4">
                                        <label htmlFor="remarks">Remarks</label>
                                        <div className="flex-1">
                                            <Field as="textarea" id="remarks" name="remarks" className="form-textarea min-h-[130px]" placeholder="Notes...." />
                                            <ErrorMessage name="remarks" render={(msg) => <div className="text-danger">{msg}</div>} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                    </div>
                    <div className="flex justify-between mt-10 px-10">
                        <button type="button" className={`btn btn-primary`} onClick={handleBackClick}>
                            Back
                        </button>
                        <button type="submit" className="btn btn-primary ltr:ml-auto rtl:mr-auto">
                            Finish
                        </button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

export default UploadDocument;
