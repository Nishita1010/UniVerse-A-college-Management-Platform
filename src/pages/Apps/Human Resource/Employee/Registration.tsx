import MaskedInput from 'react-text-mask';
import { useState } from 'react';

interface FormValues {
    first_name: string;
    last_name: string;
    father_name: string;
    mother_name: string;
    email: string;
    date_of_birth: string;
    phone_number: string;
    gender: string;
    employee_id: string;
    role: string;
    designation: string;
    department: string;
    category: string;
    religion: string;
    caste: string;
    joining_date: string;
    marital_status: string;
    aadhar_number: string;
    pan_card: string;
    upload_photo: string;
}
const Registration = ({ nextHandler }) => {
    // const [isFormValid, setIsFormValid] = useState(false);

    const [formData, setFormData] = useState<FormValues>({
        first_name: '',
        last_name: '',
        father_name: '',
        mother_name: '',
        email: '',
        date_of_birth: '',
        phone_number: '',
        gender: '',
        employee_id: '',
        role: '',
        designation: '',
        department: '',
        category: '',
        religion: '',
        caste: '',
        joining_date: '',
        marital_status: '',
        aadhar_number: '',
        pan_card: '',
        upload_photo: '',
    });

    const [errors, setErrors] = useState<Partial<FormValues>>({});

    const validateForm = () => {
        const errors: Partial<FormValues> = {};

        if (!formData.first_name.trim()) {
            errors.first_name = 'Please fill the first name';
        }

        if (!formData.last_name.trim()) {
            errors.last_name = 'Please fill the last name';
        }

        if (!formData.father_name.trim()) {
            errors.father_name = "Please fill the father's name";
        }

        if (!formData.mother_name.trim()) {
            errors.mother_name = "Please fill the mother's name";
        }

        if (!formData.email.trim()) {
            errors.email = 'Please fill the email address';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid Email';
        }

        if (!formData.phone_number.trim()) {
            errors.phone_number = 'Please fill the Mobile number';
        } else if (!/^\d{10}$/.test(formData.phone_number)) {
            errors.phone_number = 'Phone number must be exactly 10 digits';
        }

        if (!formData.gender.trim()) {
            errors.gender = 'Please select the gender';
        }

        if (!formData.date_of_birth.trim()) {
            errors.date_of_birth = 'Please select date of birth';
        }
        if (!formData.employee_id.trim()) {
            errors.employee_id = 'Please fill employee id';
        }

        if (!formData.role.trim()) {
            errors.role = 'Please select the role';
        }
        if (!formData.designation.trim()) {
            errors.designation = 'Please select the designation';
        }

        if (!formData.department.trim()) {
            errors.department = 'Please select the department';
        }
        if (!formData.religion.trim()) {
            errors.religion = 'Please fill the religion ';
        }
        if (!formData.category.trim()) {
            errors.category = 'Please select the category';
        }
        if (!formData.caste.trim()) {
            errors.caste = 'Please fill the caste';
        }
        if (!formData.joining_date.trim()) {
            errors.joining_date = 'Please select the joining date';
        }
        if (!formData.marital_status.trim()) {
            errors.marital_status = 'Please select the marital status';
        }
        if (!formData.aadhar_number.trim()) {
            errors.aadhar_number = 'Please fill the Aadhar number';
        } else if (!/^\d{12}$/.test(formData.aadhar_number)) {
            errors.aadhar_number = 'Aadhar number must be exactly 12 digits';
        }
        if (!formData.pan_card.trim()) {
            errors.pan_card = 'Please fill the Pan number';
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan_card)) {
            errors.pan_card = 'Invalid Pan Card';
        }
        if (!formData.upload_photo.trim()) {
            errors.upload_photo = 'Please choose the file';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            const isConfirmed = window.confirm('Are you sure you want to submit the form?');
            if (isConfirmed) {
                nextHandler();
                console.log(formData);
            }
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
       
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
        
        <form onSubmit={handleSubmit}>

            <div className="">
                {/* <div className="flex  flex-wrap px-4">
                    <div className="mb-6 lg:w-1/2 w-full">
                        <div className="text-primary text-xl font-bold">Staff Registration Form</div>
                    </div>
                </div> */}
                <hr className="border-white-light dark:border-[#1b2e4b] my-1" />

                <div className="mt-8 px-4">
                    <div className="flex justify-between lg:flex-row flex-col">
                        <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                    First Name
                                </label>
                                <div className=" flex-1">
                                    <input
                                        id="first_name"
                                        type="text"
                                        name="first_name"
                                        value={formData.first_name}
                                        className="form-input flex-1 "
                                        placeholder="Enter First Name"
                                        onChange={handleOnChange}
                                    />
                                    {errors.first_name && <div className="text-danger">{errors.first_name}</div>}
                                </div>
                                <label htmlFor="last_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                    Last Name
                                </label>
                                <div className="flex-1">
                                    <input
                                        id="last_name"
                                        type="text"
                                        name="last_name"
                                        value={formData.last_name}
                                        className="form-input flex-1"
                                        placeholder="Enter Last Name"
                                        onChange={handleOnChange}
                                    />
                                    {errors.last_name && <div className="text-danger">{errors.last_name}</div>}
                                </div>
                            </div>

                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                <label htmlFor="father_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                    Father's Name
                                </label>
                                <div className="flex-1">
                                    <input
                                        id="father_name"
                                        type="text"
                                        name="father_name"
                                        value={formData.father_name}
                                        className="form-input flex-1 "
                                        placeholder="Enter Father Name"
                                        onChange={handleOnChange}
                                    />
                                    {errors.father_name && <div className="text-danger">{errors.father_name}</div>}
                                </div>
                                <label htmlFor="mother_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                    Mother's Name
                                </label>
                                <div className="flex-1">
                                    <input
                                        id="mother_name"
                                        type="text"
                                        name="mother_name"
                                        value={formData.mother_name}
                                        className="form-input flex-1"
                                        placeholder="Enter Mother Name"
                                        onChange={handleOnChange}
                                    />
                                    {errors.mother_name && <div className="text-danger">{errors.mother_name}</div>}
                                </div>
                            </div>
                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col ">
                                <label htmlFor="email" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Email
                                </label>
                                <div className="flex-1">
                                    <input id="email" type="email" name="email" value={formData.email} className="form-input flex-1" placeholder="Enter Email" onChange={handleOnChange} />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <label htmlFor="phone_number" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                    Phone Number
                                </label>
                                <div className=" flex-1">
                                    <input className="form-input" value={formData.phone_number} name="phone_number" onChange={handleOnChange} maxLength={10} placeholder="Enter Phone Number" />
                                    {errors.phone_number && <div className="text-danger">{errors.phone_number}</div>}
                                </div>
                            </div>
                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                <label htmlFor="gender" className="ltr:mr-2 rtl:ml-2 w-28  mb-0 ">
                                    Gender
                                </label>
                                <div className="flex-1">
                                    <select id="gender" value={formData.gender} onChange={handleOnChange} className="form-select flex-1 " name="gender">
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Others</option>
                                    </select>
                                    {errors.gender && <div className="text-danger">{errors.gender}</div>}
                                </div>
                                <label htmlFor="date_of_birth" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Date of Birth
                                </label>
                                <div className="flex-1">
                                    <input id="date_of_birth" type="date" value={formData.date_of_birth} onChange={handleOnChange} name="date_of_birth" className="form-input flex-1" />
                                    {errors.date_of_birth && <div className="text-danger">{errors.date_of_birth}</div>}
                                </div>
                            </div>
                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                <label htmlFor="employee_id" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                    Employee Id
                                </label>
                                <div className="flex-1">
                                    <input
                                        id="employee_id"
                                        type="number"
                                        value={formData.employee_id}
                                        onChange={handleOnChange}
                                        name="employee_id"
                                        className="form-input flex-1"
                                        placeholder=" Employee Id"
                                    />
                                    {errors.employee_id && <div className="text-danger">{errors.employee_id}</div>}
                                </div>
                                <label htmlFor="role" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Role
                                </label>
                                <div className="flex-1">
                                    <select id="role" value={formData.role} name="role" onChange={handleOnChange} className="form-select flex-1">
                                        <option value="">Select Role </option>
                                        <option value="Admin">Admin</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Accountant">Accountant</option>
                                        <option value="Libraian">Libraian</option>
                                        <option value="Receptionist">Receptionist</option>
                                        <option value="Super Admin">Super Admin</option>
                                    </select>
                                    {errors.role && <div className="text-danger">{errors.role}</div>}
                                </div>
                            </div>  
                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                <label htmlFor="designation" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Designation
                                </label>
                                <div className="flex-1">
                                    <select id="designation" value={formData.designation} onChange={handleOnChange} name="designation" className="form-select flex-1">
                                        <option value="">Select Designation</option>
                                        <option value="Faculty">Faculty</option>
                                        <option value="Accountant">Accountant</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Receptionist">Receptionist</option>
                                        <option value="Principle">Principle</option>
                                        <option value="Director">Director</option>
                                        <option value="Librarian">Librarian</option>
                                        <option value="Technical Head">Technical Head</option>
                                    </select>
                                    {errors.designation && <div className="text-danger">{errors.designation}</div>}
                                </div>
                                <label htmlFor="department" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Department
                                </label>
                                <div className="flex-1">
                                    <select id="department" name="department" value={formData.department} onChange={handleOnChange} className="form-select flex-1">
                                        <option value="">Select Department</option>
                                        <option value="Academic">Academic</option>
                                        <option value="Library">Library</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Science">Science</option>
                                        <option value="Commerece">Commerece</option>
                                        <option value="Arts">Arts</option>
                                        <option value="Exam">Exam</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Finance">Finance</option>
                                    </select>
                                    {errors.department && <div className="text-danger">{errors.department}</div>}
                                </div>
                            </div>
                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                <label htmlFor="religion" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Religion
                                </label>
                                <div className="flex-1">
                                    <input id="religion" type="text" name="religion" value={formData.religion} onChange={handleOnChange} className="form-input flex-1" placeholder="Enter Religion" />
                                    {errors.religion && <div className="text-danger">{errors.religion}</div>}
                                </div>
                                <label htmlFor="category" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Category
                                </label>
                                <div className="flex-1">
                                    <select id="category" name="category" value={formData.category} onChange={handleOnChange} className="form-select flex-1">
                                        <option value="">Select Category</option>
                                        <option value="General">General</option>
                                        <option value="OBC">OBC</option>
                                        <option value="ST">ST</option>
                                        <option value="SC">SC</option>
                                    </select>
                                    {errors.category && <div className="text-danger">{errors.category}</div>}
                                </div>
                            </div>
                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                <label htmlFor=" caste" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Caste
                                </label>
                                <div className="flex-1">
                                    <input id="caste" type="text" name="caste" value={formData.caste} onChange={handleOnChange} className="form-input flex-1" placeholder="Enter Caste" />
                                    {errors.caste && <div className="text-danger">{errors.caste}</div>}
                                </div>
                                <label htmlFor="joining_date" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Joining Date
                                </label>
                                <div className="flex-1">
                                    <input
                                        id="joining_date"
                                        type="date"
                                        name="joining_date"
                                        value={formData.joining_date}
                                        onChange={handleOnChange}
                                        className="form-input flex-1"
                                        placeholder="Enter Phone number"
                                    />
                                    {errors.joining_date && <div className="text-danger">{errors.joining_date}</div>}
                                </div>
                            </div>
                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                <label htmlFor="marital_status" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Marital Status
                                </label>
                                <div className="flex-1">
                                    <select id="marital_status" name="marital_status" value={formData.marital_status} onChange={handleOnChange} className="form-select flex-1">
                                        <option value="">Select Marital Status</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Separated">Separated</option>
                                        <option value="No Specific">No Specific</option>
                                    </select>
                                    {errors.marital_status && <div className="text-danger">{errors.marital_status}</div>}
                                </div>
                                <label htmlFor="aadhar_number" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                    Aadhar Number
                                </label>
                                <div className="flex-1">
                                    <input className="form-input" value={formData.aadhar_number} name="aadhar_number" onChange={handleOnChange} maxLength={12} placeholder="Enter Aadhar Number" />

                                    {errors.aadhar_number && <div className="text-danger">{errors.aadhar_number}</div>}
                                </div>
                            </div>
                            <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                <label htmlFor="pan_card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Pan Card
                                </label>
                                <div className="flex-1">
                                    <input
                                        id="pan_card"
                                        type="text"
                                        name="pan_card"
                                        value={formData.pan_card}
                                        onChange={handleOnChange}
                                        maxLength={10}
                                        className="form-input flex-1"
                                        placeholder="Enter PAN Number"
                                    />
                                    {errors.pan_card && <div className="text-danger">{errors.pan_card}</div>}
                                </div>
                                <label htmlFor="upload_photo" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Upload Photo
                                </label>
                                <div className="flex-1">
                                    <input
                                        id="upload_photo"
                                        type="file"
                                        value={formData.upload_photo}
                                        onChange={handleOnChange}
                                        name="upload_photo"
                                        accept="image/png, image/jpeg,.pdf"
                                        className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                                    />
                                    {errors.upload_photo && <div className="text-danger">{errors.upload_photo}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="submit" onClick={handleSubmit}>Sbmit</button> */}
            <div className="flex justify-between mt-10 px-10">
                <button type="submit" className="btn btn-primary ltr:ml-auto rtl:mr-auto">
                    Next
                </button>
            </div>
        </form>
        </>
    );
};

export default Registration;
