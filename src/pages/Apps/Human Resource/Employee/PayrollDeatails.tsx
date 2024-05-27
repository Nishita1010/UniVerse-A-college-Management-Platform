import { ErrorMessage, Field, Formik ,Form} from 'formik';
import * as Yup from 'yup';

interface FormValues {
    epf_no: string;
    basic_salary: string;
    work_shift: string;
    work_location: string;
    medical_leave: string;
    casual_leave:string;
    meternity_leave: string;
    sick_leave: string;
}

const PayrollDeatails = ({ nextHandler, backHandler }) => {
    const SubmittedForm = Yup.object().shape({
        epf_no: Yup.number().required('Please fill the EPF number'),
        basic_salary: Yup.string().required('Please fill the basic salary'),
        work_shift: Yup.string().required('Please fill the work shift'),
        work_location: Yup.string().required('Please fill the work location'),
        medical_leave: Yup.number().required('Please fill the medical leave'),
        casual_leave: Yup.number().required('Please fill the casual leave'),
        meternity_leave: Yup.number().required('Please fill the meternity leave'),
        sick_leave: Yup.number().required('Please fill the sick leave'),
    });

    function submitForm(values: FormValues) {
        //const isConfirmed = window.confirm('Are you sure you want to submit the form?');
        //if (isConfirmed) {
            // alert('Submitting....');
            nextHandler();
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
            epf_no: '',
            basic_salary: '',
            work_shift: '',
            work_location: '',
            medical_leave: '',
            casual_leave: '',
            meternity_leave: '',
            sick_leave: '',
        }}

        validationSchema={SubmittedForm}
        onSubmit={submitForm}
    >
        {({ errors, submitCount, touched, isValid }) => {
            return (
                <Form>
                    <div>
                        <div className="">
                            <div className="flex justify-between flex-wrap px-4">
                                {/* <div className="mb-6 lg:w-1/2 w-full">
                                    <div className="text-primary text-xl font-bold"> Payroll </div>
                                </div> */}
                            </div>
                            <hr className="border-white-light dark:border-[#1b2e4b]" />
                            <div className="mt-8 px-4">
                                <div className="flex justify-between lg:flex-row flex-col">
                                    <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                            <label htmlFor="epf_no" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                EPF No.
                                            </label>
                                            <div className="flex-1">
                                                <Field id="epf_no" type="number" name="epf_no" className="form-input flex-1 " placeholder="Enter EPF no" />
                                            
                                                <ErrorMessage name="epf_no" render={(msg) => <div className="text-danger">{msg}</div>} />
                                            </div>
                                            <label htmlFor="basic_salary" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                                Basic Salary
                                            </label>
                                            <div className='flex-1'>
                                            <Field id="basic_salary" type="text" name="basic_salary" className="form-input flex-1" placeholder="Basic Salary" />
                                                <ErrorMessage name="basic_salary" render={(msg) => <div className="text-danger">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                            <label htmlFor="work_shift" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                Work Shift
                                            </label>
                                            <div className="flex-1">
                                                <Field id="work_shift" type="text" name="work_shift" className="form-input flex-1 " placeholder=" Work Shift" />
                                                <ErrorMessage name="work_shift" render={(msg) => <div className="text-danger">{msg}</div>} />
                                            </div>
                                            <label htmlFor="work_location" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                                Work Location
                                            </label>
                                            <div className="flex-1">
                                                <Field id="work_location" type="text" name="work_location" className="form-input flex-1" placeholder="Work Location" />
                                                <ErrorMessage name="work_location" render={(msg) => <div className="text-danger">{msg}</div>} />
                                            </div>
                                        </div>
                                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                        <div className="text-primary text-xl font-bold">Leaves</div>

                                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                            <label htmlFor="medical_leave" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                Medical Leave
                                            </label>
                                            <div className="flex-1">
                                                <Field id="medical_leave" type="number" name="medical_leave" className="form-input flex-1 " placeholder="Number of Leaves" />
                                                <ErrorMessage name="medical_leave" render={(msg) => <div className="text-danger">{msg}</div>} />
                                            </div>
                                            <label htmlFor=" casual_leave" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                                Casual Leave
                                            </label>
                                            <div className="flex-1">
                                                <Field id="casual_leave" type="number" name="casual_leave" className="form-input flex-1" placeholder="Number of Leaves" />
                                                <ErrorMessage name="casual_leave" render={(msg) => <div className="text-danger">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                            <label htmlFor="meternity_leave" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                Maternity Leave
                                            </label>
                                            <div className="flex-1">
                                                <Field id="meternity_leave" type="number" name="meternity_leave" className="form-input flex-1 " placeholder="Number of Leaves" />
                                                <ErrorMessage name="meternity_leave" render={(msg) => <div className="text-danger">{msg}</div>} />
                                            </div>
                                            <label htmlFor="sick_leave" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                                Sick Leave
                                            </label>
                                            <div className="flex-1">
                                                <Field id="sick_leave" type="number" name="sick_leave" className="form-input flex-1" placeholder="Number of Leaves" />
                                                <ErrorMessage name="sick_leave" render={(msg) => <div className="text-danger">{msg}</div>} />
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
                                Next
                            </button>
                        </div>
                    </div>
                </Form>
            );
        }}
    </Formik>);
};

export default PayrollDeatails;
