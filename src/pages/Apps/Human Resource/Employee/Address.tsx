import { useState } from 'react';


interface FormValues {
    present_address_l1: string;
    present_address_l2: string;
    present_country: string;
    present_state: string;
    present_city: string;
    present_pincode: string;
    permanent_address_l1: string;
    permanent_address_l2: string;
    permanent_country: string;
    permanent_state: string;
    permanent_city: string;
    permanent_pincode: string;
    emergency_firstname: string;
    emergency_lastname: string;
    emergency_phone_number: string;
    relation: string;
    emergency_address_l1: string;
    emergency_address_l2: string;
    emergency_country: string;
    emergency_state: string;
    emergency_city: string;
    emergency_pincode: string;
    account_number: string;
    bank_name: string;
    ifsc_code: string;
    branch_name: string;
    bank_country: string;
}
const Address = ({ nextHandler, backHandler }) => {

const [formData , setFormData] = useState<FormValues>({
    present_address_l1: '',
    present_address_l2: '',
    present_country: '',
    present_state: '',
    present_city: '',
    present_pincode: '',
    permanent_address_l1: '',
    permanent_address_l2: '',
    permanent_country: '',
    permanent_state: '',
    permanent_city: '',
    permanent_pincode: '',
    emergency_firstname: '',
    emergency_lastname: '',
    emergency_phone_number: '',
    relation: '',
    emergency_address_l1: '',
    emergency_address_l2: '',
    emergency_country: '',
    emergency_state: '',
    emergency_city: '',
    emergency_pincode: '',
    account_number: '',
    bank_name: '',
    ifsc_code: '',
    branch_name: '',
    bank_country: '',
})

   
const [errors, setErrors] = useState<Partial<FormValues>>({});


const validateForm = () => {
    const errors: Partial<FormValues> = {};

    if (!formData.present_address_l1.trim()) {
        errors.present_address_l1 = 'Please fill the address';
    }

    if (!formData.present_address_l2.trim()) {
        errors.present_address_l2 = 'Please fill the address';
    }

    if (!formData.present_country.trim()) {
        errors.present_country = "Please fill the country";
    }
    if (!formData.present_state.trim()) {
        errors.present_state = "Please fill the state";
    }
    if (!formData.present_city.trim()) {
        errors.present_city = "Please fill the city";
    }
    if (!formData.present_pincode.trim()) {
        errors.present_pincode = "Please fill the pincode";
    }
    if (!formData.permanent_address_l1.trim()) {
        errors.permanent_address_l1 = "Please fill the address";
    }
    if (!formData.permanent_address_l2.trim()) {
        errors.permanent_address_l2 = "Please fill the address";
    }
    if (!formData.permanent_country.trim()) {
        errors.permanent_country = "Please fill the country";
    }
    if (!formData.permanent_state.trim()) {
        errors.permanent_state = "Please fill the state";
    }
    if (!formData.permanent_city.trim()) {
        errors.permanent_city = "Please select the city";
    }
    if (!formData.permanent_pincode.trim()) {
        errors.permanent_pincode = "Please fill the pincode ";
    }
    if (!formData.emergency_firstname.trim()) {
        errors.emergency_firstname = "Please fill the first name";
    }
    if (!formData.emergency_lastname.trim()) {
        errors.emergency_lastname = "Please fill the last name";
    }
    if (!formData.emergency_phone_number.trim()) {
        errors.emergency_phone_number = "Please fill the phone number";
    }
    if (!formData.relation.trim()) {
        errors.relation = "Please fill the relation";
    }
    if (!formData.emergency_address_l1.trim()) {
        errors.emergency_address_l1 = "Please fill the address";
    }
    if (!formData.emergency_address_l2.trim()) {
        errors.emergency_address_l2 = "Please fill the address";
    }
   
    if (!formData.emergency_country.trim()) {
        errors.emergency_country = "Please select the country";
    }
    if (!formData.emergency_state.trim()) {
        errors.emergency_state = "Please fill the state";
    }
    if (!formData.emergency_city.trim()) {
        errors.emergency_city = "Please fill the city";
    }
    if (!formData.emergency_pincode.trim()) {
        errors.emergency_pincode = "Please fill the pincode";
    }
    if (!formData.account_number.trim()) {
        errors.account_number = "Please fill the account number";
    }
    if (!formData.bank_name.trim()) {
        errors.bank_name = "Please fill the bank name";
    }
    if (!formData.ifsc_code.trim()) {
        errors.ifsc_code = "Please fill the ifsc code";
    }
    if (!formData.branch_name.trim()) {
        errors.branch_name = "Please fill the branch name ";
    }
    if (!formData.bank_country.trim()) {
        errors.bank_country = "Please select the country ";
    }
}

    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
       // const isConfirmed = window.confirm('Are you sure you want to submit the form?');
        //if (isConfirmed) {
            // alert('Submitting....');
            nextHandler();
            console.log(values);
       // }
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
       
        setFormData({ ...formData, [name]: value });
    };

    function handleBackClick(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Your other back button logic goes here
        backHandler();
    }

            
                return (
                    <form  onSubmit={submitForm}>
                        <div>
                            <div className="">
                                <div className="flex justify-between flex-wrap px-4">
                                    {/* <div className="mb-6 lg:w-1/2 w-full">
                                        <div className="text-primary text-xl font-bold">Staff Registration Form</div>
                                    </div> */}
                                </div>
                                <hr className="border-white-light dark:border-[#1b2e4b] " />
                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                                <div className="mt-8 px-4">
                                    <div className="flex justify-between lg:flex-row flex-col">
                                        <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                            <div className="text-lg font-bold">Present Address </div>
                                            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="present_address_l1" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <div className="flex-1">
                                                    <input id="present_address_l1" type="textarea" name="present_address_l1" className="form-input flex-1" placeholder="Enter Street Address line 1" />
                                                    {errors.present_address_l1 && <div className="text-danger">{errors.present_address_l1}</div>}
                                                    {/* <ErrorMessage name="present_address_l1" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                                <label htmlFor="present_address_l2" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <div className="flex-1">
                                                    <input id="present_address_l2" type="text" name="present_address_l2" className="form-input flex-1" placeholder="Enter Street Address Line 2" />
                                                    {errors.present_address_l2 && <div className="text-danger">{errors.present_address_l2}</div>}
                                                    {/* <ErrorMessage name="present_address_l2" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="present_country" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Country
                                                </label>
                                                <div className="flex-1">
                                                    <select id="present_country" name="present_country" className=" form-select flex-1">
                                                        <option value="">Choose Country</option>
                                                        <option value="United States">United States</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Sweden">Sweden</option>
                                                        <option value="Denmark">Denmark</option>
                                                        <option value="Norway">Norway</option>
                                                        <option value="New-Zealand">New Zealand</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Albania">Albania</option>
                                                        <option value="Algeria">Algeria</option>
                                                        <option value="American-Samoa">Andorra</option>
                                                        <option value="Angola">Angola</option>
                                                        <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                        <option value="Argentina">Argentina</option>
                                                        <option value="Armenia">Armenia</option>
                                                        <option value="Aruba">Aruba</option>
                                                        <option value="Austria">Austria</option>
                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                        <option value="Bahamas">Bahamas</option>
                                                        <option value="Bahrain">Bahrain</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="Barbados">Barbados</option>
                                                        <option value="Belarus">Belarus</option>
                                                        <option value="Belgium">Belgium</option>
                                                        <option value="Belize">Belize</option>
                                                        <option value="Benin">Benin</option>
                                                        <option value="Bermuda">Bermuda</option>
                                                        <option value="Bhutan">Bhutan</option>
                                                        <option value="Bolivia">Bolivia</option>
                                                        <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                        <option value="Botswana">Botswana</option>
                                                        <option value="Brazil">Brazil</option>
                                                        <option value="British">British Virgin Islands</option>
                                                        <option value="Brunei">Brunei</option>
                                                        <option value="Bulgaria">Bulgaria</option>
                                                        <option value="Burkina">Burkina Faso</option>
                                                        <option value="Burundi">Burundi</option>
                                                        <option value="Cambodia">Cambodia</option>
                                                        <option value="Cameroon">Cameroon</option>
                                                        <option value="Cape">Cape Verde</option>
                                                        <option value="Cayman">Cayman Islands</option>
                                                        <option value="Central-African">Central African Republic</option>
                                                        <option value="Chad">Chad</option>
                                                        <option value="Chile">Chile</option>
                                                        <option value="China">China</option>
                                                        <option value="Colombia">Colombia</option>
                                                        <option value="Comoros">Comoros</option>
                                                        <option value="Costa-Rica">Costa Rica</option>
                                                        <option value="Croatia">Croatia</option>
                                                        <option value="Cuba">Cuba</option>
                                                        <option value="Cyprus">Cyprus</option>
                                                        <option value="Czechia">Czechia</option>
                                                        <option value="Côte">Côte d'Ivoire</option>
                                                        <option value="Djibouti">Djibouti</option>
                                                        <option value="Dominica">Dominica</option>
                                                        <option value="Dominican">Dominican Republic</option>
                                                        <option value="Ecuador">Ecuador</option>
                                                        <option value="Egypt">Egypt</option>
                                                        <option value="El-Salvador">El Salvador</option>
                                                        <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                        <option value="Eritrea">Eritrea</option>
                                                        <option value="Estonia">Estonia</option>
                                                        <option value="Ethiopia">Ethiopia</option>
                                                        <option value="Fiji">Fiji</option>
                                                        <option value="Finland">Finland</option>
                                                        <option value="France">France</option>
                                                        <option value="Gabon">Gabon</option>
                                                        <option value="Georgia">Georgia</option>
                                                        <option value="Ghana">Ghana</option>
                                                        <option value="Greece">Greece</option>
                                                        <option value="Grenada">Grenada</option>
                                                        <option value="Guatemala">Guatemala</option>
                                                        <option value="Guernsey">Guernsey</option>
                                                        <option value="Guinea">Guinea</option>
                                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                        <option value="Guyana">Guyana</option>
                                                        <option value="Haiti">Haiti</option>
                                                        <option value="Honduras">Honduras</option>
                                                        <option value="Hong-Kong">Hong Kong SAR China</option>
                                                        <option value="Hungary">Hungary</option>
                                                        <option value="Iceland">Iceland</option>
                                                        <option value="India">India</option>
                                                        <option value="Indonesia">Indonesia</option>
                                                        <option value="Iran">Iran</option>
                                                        <option value="Iraq">Iraq</option>
                                                        <option value="Ireland">Ireland</option>
                                                        <option value="Israel">Israel</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Jamaica">Jamaica</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="Jordan">Jordan</option>
                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                        <option value="Kenya">Kenya</option>
                                                        <option value="Kuwait">Kuwait</option>
                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                        <option value="Laos">Laos</option>
                                                        <option value="Latvia">Latvia</option>
                                                        <option value="Lebanon">Lebanon</option>
                                                        <option value="Lesotho">Lesotho</option>
                                                        <option value="Liberia">Liberia</option>
                                                        <option value="Libya">Libya</option>
                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                        <option value="Lithuania">Lithuania</option>
                                                        <option value="Luxembourg">Luxembourg</option>
                                                        <option value="Macedonia">Macedonia</option>
                                                        <option value="Madagascar">Madagascar</option>
                                                        <option value="Malawi">Malawi</option>
                                                        <option value="Malaysia">Malaysia</option>
                                                        <option value="Maldives">Maldives</option>
                                                        <option value="Mali">Mali</option>
                                                        <option value="Malta">Malta</option>
                                                        <option value="Mauritania">Mauritania</option>
                                                        <option value="Mauritius">Mauritius</option>
                                                        <option value="Mexico">Mexico</option>
                                                        <option value="Moldova">Moldova</option>
                                                        <option value="Monaco">Monaco</option>
                                                        <option value="Mongolia">Mongolia</option>
                                                        <option value="Montenegro">Montenegro</option>
                                                        <option value="Morocco">Morocco</option>
                                                        <option value="Mozambique">Mozambique</option>
                                                        <option value="Myanmar">Myanmar (Burma)</option>
                                                        <option value="Namibia">Namibia</option>
                                                        <option value="Nepal">Nepal</option>
                                                        <option value="Netherlands">Netherlands</option>
                                                        <option value="Nicaragua">Nicaragua</option>
                                                        <option value="Niger">Niger</option>
                                                        <option value="Nigeria">Nigeria</option>
                                                        <option value="North-Korea">North Korea</option>
                                                        <option value="Oman">Oman</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Palau">Palau</option>
                                                        <option value="Palestinian">Palestinian Territories</option>
                                                        <option value="Panama">Panama</option>
                                                        <option value="Papua">Papua New Guinea</option>
                                                        <option value="Paraguay">Paraguay</option>
                                                        <option value="Peru">Peru</option>
                                                        <option value="Philippines">Philippines</option>
                                                        <option value="Poland">Poland</option>
                                                        <option value="Portugal">Portugal</option>
                                                        <option value="Puerto">Puerto Rico</option>
                                                        <option value="Qatar">Qatar</option>
                                                        <option value="Romania">Romania</option>
                                                        <option value="Russia">Russia</option>
                                                        <option value="Rwanda">Rwanda</option>
                                                        <option value="Réunion">Réunion</option>
                                                        <option value="Samoa">Samoa</option>
                                                        <option value="San-Marino">San Marino</option>
                                                        <option value="Saudi-Arabia">Saudi Arabia</option>
                                                        <option value="Senegal">Senegal</option>
                                                        <option value="Serbia">Serbia</option>
                                                        <option value="Seychelles">Seychelles</option>
                                                        <option value="Sierra-Leone">Sierra Leone</option>
                                                        <option value="Singapore">Singapore</option>
                                                        <option value="Slovakia">Slovakia</option>
                                                        <option value="Slovenia">Slovenia</option>
                                                        <option value="Solomon-Islands">Solomon Islands</option>
                                                        <option value="Somalia">Somalia</option>
                                                        <option value="South-Africa">South Africa</option>
                                                        <option value="South-Korea">South Korea</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="Sri-Lanka">Sri Lanka</option>
                                                        <option value="Sudan">Sudan</option>
                                                        <option value="Suriname">Suriname</option>
                                                        <option value="Swaziland">Swaziland</option>
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="Syria">Syria</option>
                                                        <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                        <option value="Tajikistan">Tajikistan</option>
                                                        <option value="Tanzania">Tanzania</option>
                                                        <option value="Thailand">Thailand</option>
                                                        <option value="Timor-Leste">Timor-Leste</option>
                                                        <option value="Togo">Togo</option>
                                                        <option value="Tonga">Tonga</option>
                                                        <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                        <option value="Tunisia">Tunisia</option>
                                                        <option value="Turkey">Turkey</option>
                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                        <option value="Uganda">Uganda</option>
                                                        <option value="Ukraine">Ukraine</option>
                                                        <option value="UAE">United Arab Emirates</option>
                                                        <option value="Uruguay">Uruguay</option>
                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                        <option value="Vanuatu">Vanuatu</option>
                                                        <option value="Venezuela">Venezuela</option>
                                                        <option value="Vietnam">Vietnam</option>
                                                        <option value="Yemen">Yemen</option>
                                                        <option value="Zambia">Zambia</option>
                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                    </select>
                                                    {errors.present_country && <div className="text-danger">{errors.present_country}</div>}
                                                    {/* <ErrorMessage name="present_country" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                                <label htmlFor="present_state" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    State
                                                </label>
                                                <div className="flex-1">
                                                <select id="present_state" name="present_state"  className=" form-select flex-1">
                                                        <option>Choose state</option>
                                                        <option>Jharkhand</option>
                                                        <option>Bihar</option>
                                                        <option>Ordisha</option>
                                                        <option>west Bengal</option>
                                                    </select>
                                                    {/* <input id="present_state" type="text" name="present_state" className="form-input flex-1" placeholder="Enter State" /> */}
                                                    {errors.present_state && <div className="text-danger">{errors.present_state}</div>}
                                                    {/* <ErrorMessage name="present_state" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor=" present_city" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    City
                                                </label>
                                                <div className="flex-1">
                                                <select id="present_city" name="present_city"  className=" form-select flex-1">
                                                        <option>Choose city</option>
                                                        <option>Ranchi</option>
                                                        <option>Gumla</option>
                                                        <option>Deoghar</option>
                                                    </select>
                                                    {/* <input id="present_city" type="text" name="present_city" className="form-input flex-1" placeholder="Enter your City" /> */}
                                                    {errors.present_city && <div className="text-danger">{errors.present_city}</div>}
                                                    {/* <ErrorMessage name="present_city" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                                <label htmlFor="present_pincode" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Postal/Zip code
                                                </label>
                                                <div className="flex-1">
                                                    <input id="present_pincode" type="text" name="present_pincode" className="form-input flex-1" placeholder="Enter Postal/Zip code" />
                                                    {errors.present_pincode && <div className="text-danger">{errors.present_pincode}</div>}
                                                    {/* <ErrorMessage name="present_pincode" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                            </div>

                                            {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                                            <div className="text-lg font-bold py-5">Permanent Address </div>
                                            <div>
                                    <label className="flex cursor-pointer items-center">
                                        <input type="checkbox" className="form-checkbox bg-white dark:bg-black" />
                                        <span className="text-white-dark">Same as present address</span>
                                    </label>
                                </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="permanent_address_l1" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <div className="flex-1">
                                                    <input id="permanent_address_l1" type="text" name="permanent_address_l1" className="form-input flex-1" placeholder="Enter Street Address line 1" />
                                                    {errors.permanent_address_l1 && <div className="text-danger">{errors.permanent_address_l1}</div>}
                                                    {/* <ErrorMessage name="permanent_address_l1" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                                <label htmlFor="permanent_address_l2" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <div className="flex-1">
                                                    <input id="permanent_address_l2" type="text" name="permanent_address_l2" className="form-input flex-1" placeholder="Enter Street Address Line 2" />
                                                    {errors.permanent_address_l2 && <div className="text-danger">{errors.permanent_address_l2}</div>}
                                                    {/* <ErrorMessage name="permanent_address_l2" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="permanent_country" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Country
                                                </label>
                                                <div className="flex-1">
                                                    <select id="permanent_country" name="permanent_country" className=" form-select flex-1">
                                                        <option value="">Choose Country</option>
                                                        <option value="United States">United States</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Sweden">Sweden</option>
                                                        <option value="Denmark">Denmark</option>
                                                        <option value="Norway">Norway</option>
                                                        <option value="New-Zealand">New Zealand</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Albania">Albania</option>
                                                        <option value="Algeria">Algeria</option>
                                                        <option value="American-Samoa">Andorra</option>
                                                        <option value="Angola">Angola</option>
                                                        <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                        <option value="Argentina">Argentina</option>
                                                        <option value="Armenia">Armenia</option>
                                                        <option value="Aruba">Aruba</option>
                                                        <option value="Austria">Austria</option>
                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                        <option value="Bahamas">Bahamas</option>
                                                        <option value="Bahrain">Bahrain</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="Barbados">Barbados</option>
                                                        <option value="Belarus">Belarus</option>
                                                        <option value="Belgium">Belgium</option>
                                                        <option value="Belize">Belize</option>
                                                        <option value="Benin">Benin</option>
                                                        <option value="Bermuda">Bermuda</option>
                                                        <option value="Bhutan">Bhutan</option>
                                                        <option value="Bolivia">Bolivia</option>
                                                        <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                        <option value="Botswana">Botswana</option>
                                                        <option value="Brazil">Brazil</option>
                                                        <option value="British">British Virgin Islands</option>
                                                        <option value="Brunei">Brunei</option>
                                                        <option value="Bulgaria">Bulgaria</option>
                                                        <option value="Burkina">Burkina Faso</option>
                                                        <option value="Burundi">Burundi</option>
                                                        <option value="Cambodia">Cambodia</option>
                                                        <option value="Cameroon">Cameroon</option>
                                                        <option value="Cape">Cape Verde</option>
                                                        <option value="Cayman">Cayman Islands</option>
                                                        <option value="Central-African">Central African Republic</option>
                                                        <option value="Chad">Chad</option>
                                                        <option value="Chile">Chile</option>
                                                        <option value="China">China</option>
                                                        <option value="Colombia">Colombia</option>
                                                        <option value="Comoros">Comoros</option>
                                                        <option value="Costa-Rica">Costa Rica</option>
                                                        <option value="Croatia">Croatia</option>
                                                        <option value="Cuba">Cuba</option>
                                                        <option value="Cyprus">Cyprus</option>
                                                        <option value="Czechia">Czechia</option>
                                                        <option value="Côte">Côte d'Ivoire</option>
                                                        <option value="Djibouti">Djibouti</option>
                                                        <option value="Dominica">Dominica</option>
                                                        <option value="Dominican">Dominican Republic</option>
                                                        <option value="Ecuador">Ecuador</option>
                                                        <option value="Egypt">Egypt</option>
                                                        <option value="El-Salvador">El Salvador</option>
                                                        <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                        <option value="Eritrea">Eritrea</option>
                                                        <option value="Estonia">Estonia</option>
                                                        <option value="Ethiopia">Ethiopia</option>
                                                        <option value="Fiji">Fiji</option>
                                                        <option value="Finland">Finland</option>
                                                        <option value="France">France</option>
                                                        <option value="Gabon">Gabon</option>
                                                        <option value="Georgia">Georgia</option>
                                                        <option value="Ghana">Ghana</option>
                                                        <option value="Greece">Greece</option>
                                                        <option value="Grenada">Grenada</option>
                                                        <option value="Guatemala">Guatemala</option>
                                                        <option value="Guernsey">Guernsey</option>
                                                        <option value="Guinea">Guinea</option>
                                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                        <option value="Guyana">Guyana</option>
                                                        <option value="Haiti">Haiti</option>
                                                        <option value="Honduras">Honduras</option>
                                                        <option value="Hong-Kong">Hong Kong SAR China</option>
                                                        <option value="Hungary">Hungary</option>
                                                        <option value="Iceland">Iceland</option>
                                                        <option value="India">India</option>
                                                        <option value="Indonesia">Indonesia</option>
                                                        <option value="Iran">Iran</option>
                                                        <option value="Iraq">Iraq</option>
                                                        <option value="Ireland">Ireland</option>
                                                        <option value="Israel">Israel</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Jamaica">Jamaica</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="Jordan">Jordan</option>
                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                        <option value="Kenya">Kenya</option>
                                                        <option value="Kuwait">Kuwait</option>
                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                        <option value="Laos">Laos</option>
                                                        <option value="Latvia">Latvia</option>
                                                        <option value="Lebanon">Lebanon</option>
                                                        <option value="Lesotho">Lesotho</option>
                                                        <option value="Liberia">Liberia</option>
                                                        <option value="Libya">Libya</option>
                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                        <option value="Lithuania">Lithuania</option>
                                                        <option value="Luxembourg">Luxembourg</option>
                                                        <option value="Macedonia">Macedonia</option>
                                                        <option value="Madagascar">Madagascar</option>
                                                        <option value="Malawi">Malawi</option>
                                                        <option value="Malaysia">Malaysia</option>
                                                        <option value="Maldives">Maldives</option>
                                                        <option value="Mali">Mali</option>
                                                        <option value="Malta">Malta</option>
                                                        <option value="Mauritania">Mauritania</option>
                                                        <option value="Mauritius">Mauritius</option>
                                                        <option value="Mexico">Mexico</option>
                                                        <option value="Moldova">Moldova</option>
                                                        <option value="Monaco">Monaco</option>
                                                        <option value="Mongolia">Mongolia</option>
                                                        <option value="Montenegro">Montenegro</option>
                                                        <option value="Morocco">Morocco</option>
                                                        <option value="Mozambique">Mozambique</option>
                                                        <option value="Myanmar">Myanmar (Burma)</option>
                                                        <option value="Namibia">Namibia</option>
                                                        <option value="Nepal">Nepal</option>
                                                        <option value="Netherlands">Netherlands</option>
                                                        <option value="Nicaragua">Nicaragua</option>
                                                        <option value="Niger">Niger</option>
                                                        <option value="Nigeria">Nigeria</option>
                                                        <option value="North-Korea">North Korea</option>
                                                        <option value="Oman">Oman</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Palau">Palau</option>
                                                        <option value="Palestinian">Palestinian Territories</option>
                                                        <option value="Panama">Panama</option>
                                                        <option value="Papua">Papua New Guinea</option>
                                                        <option value="Paraguay">Paraguay</option>
                                                        <option value="Peru">Peru</option>
                                                        <option value="Philippines">Philippines</option>
                                                        <option value="Poland">Poland</option>
                                                        <option value="Portugal">Portugal</option>
                                                        <option value="Puerto">Puerto Rico</option>
                                                        <option value="Qatar">Qatar</option>
                                                        <option value="Romania">Romania</option>
                                                        <option value="Russia">Russia</option>
                                                        <option value="Rwanda">Rwanda</option>
                                                        <option value="Réunion">Réunion</option>
                                                        <option value="Samoa">Samoa</option>
                                                        <option value="San-Marino">San Marino</option>
                                                        <option value="Saudi-Arabia">Saudi Arabia</option>
                                                        <option value="Senegal">Senegal</option>
                                                        <option value="Serbia">Serbia</option>
                                                        <option value="Seychelles">Seychelles</option>
                                                        <option value="Sierra-Leone">Sierra Leone</option>
                                                        <option value="Singapore">Singapore</option>
                                                        <option value="Slovakia">Slovakia</option>
                                                        <option value="Slovenia">Slovenia</option>
                                                        <option value="Solomon-Islands">Solomon Islands</option>
                                                        <option value="Somalia">Somalia</option>
                                                        <option value="South-Africa">South Africa</option>
                                                        <option value="South-Korea">South Korea</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="Sri-Lanka">Sri Lanka</option>
                                                        <option value="Sudan">Sudan</option>
                                                        <option value="Suriname">Suriname</option>
                                                        <option value="Swaziland">Swaziland</option>
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="Syria">Syria</option>
                                                        <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                        <option value="Tajikistan">Tajikistan</option>
                                                        <option value="Tanzania">Tanzania</option>
                                                        <option value="Thailand">Thailand</option>
                                                        <option value="Timor-Leste">Timor-Leste</option>
                                                        <option value="Togo">Togo</option>
                                                        <option value="Tonga">Tonga</option>
                                                        <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                        <option value="Tunisia">Tunisia</option>
                                                        <option value="Turkey">Turkey</option>
                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                        <option value="Uganda">Uganda</option>
                                                        <option value="Ukraine">Ukraine</option>
                                                        <option value="UAE">United Arab Emirates</option>
                                                        <option value="Uruguay">Uruguay</option>
                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                        <option value="Vanuatu">Vanuatu</option>
                                                        <option value="Venezuela">Venezuela</option>
                                                        <option value="Vietnam">Vietnam</option>
                                                        <option value="Yemen">Yemen</option>
                                                        <option value="Zambia">Zambia</option>
                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                    </select>
                                                    {errors.permanent_country && <div className="text-danger">{errors.permanent_country}</div>}
                                                    {/* <ErrorMessage name="permanent_country" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                                <label htmlFor="permanent_state" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    State
                                                </label>
                                                <div className="flex-1">
                                                <select id="permanent_state" name="permanent_state"  className=" form-select flex-1">
                                                        <option>Choose state</option>
                                                        <option>Jharkhand</option>
                                                        <option>Bihar</option>
                                                        <option>Ordisha</option>
                                                        <option>west Bengal</option>
                                                    </select>
                                                    {/* <input id="permanent_state" type="text" name="permanent_state" className="form-input flex-1" placeholder="Enter State" /> */}
                                                    {errors.permanent_state && <div className="text-danger">{errors.permanent_state}</div>}
                                                    {/* <ErrorMessage name="permanent_state" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="permanent_city" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    City
                                                </label>
                                                <div className="flex-1">
                                                <select id="permanent_city" name="permanent_city"  className=" form-select flex-1">
                                                        <option>Choose city</option>
                                                        <option>Ranchi</option>
                                                        <option>Gumla</option>
                                                        <option>Deoghar</option>
                                                    </select>
                                                    {/* <input id="permanent_city" type="text" name="permanent_city" className="form-input flex-1" placeholder="Enter your City" /> */}
                                                    {errors.permanent_city && <div className="text-danger">{errors.permanent_city}</div>}
                                                    {/* <ErrorMessage name="permanent_city" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                                <label htmlFor="permanent_pincode" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Postal/Zip code
                                                </label>
                                                <div className="flex-1">
                                                    <input id="permanent_pincode" type="text" name="permanent_pincode" className="form-input flex-1" placeholder="Enter Postal/Zip code" />
                                                    {errors.permanent_pincode && <div className="text-danger">{errors.permanent_pincode}</div>}
                                                    {/* <ErrorMessage name="permanent_pincode" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                            </div>

                                            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                                            <div className="text-lg font-bold ">Emergency Contact Details</div>
                                            <div className=" flex justify-around  items-center mt-4 lg:flex-row flex-col">
                                                <div>
                                                    <label htmlFor="emergency_firstname">First Name</label>
                                                    <div className="flex-1">
                                                        <input id="emergency_firstname" name="emergency_firstname" type="text" className="form-input " placeholder="First Name" />
                                                        {errors.emergency_firstname && <div className="text-danger">{errors.emergency_firstname}</div>}
                                                        {/* <ErrorMessage name="emergency_firstname" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="emergency_lastname">Last Name</label>
                                                    <div className="flex-1">
                                                        <input type="text" id="emergency_lastname" name="emergency_lastname" className="form-input " placeholder="Last Name" />
                                                        {errors.emergency_lastname && <div className="text-danger">{errors.emergency_lastname}</div>}
                                                        {/* <ErrorMessage name="emergency_lastname" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="phone_number">Phone Number</label>
                                                    <div className=" flex-1">
                                                        <input
                                                        type='text'
                                                        className="form-input"
                                                        placeholder="Enter Phone Number"
                                                        maxLength={10}
                                                        />
                                                        {/* <ErrorMessage name="phone_number" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="relation">Relationship</label>
                                                    <input id="relation" name="relation" type="text" className="form-input " placeholder="ex. Mother,Father,etc" />
                                                    {errors.relation && <div className="text-danger">{errors.relation}</div>}
                                                    {/* <ErrorMessage name="relation" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                            </div>
                                            {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                                            <div className="text-lg font-bold py-5">Address Of Person To Contact In Case Of Emergency</div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <div className="flex-1">
                                                    <input id="emergency_address_l1" type="text" name="emergency_address_l1" className="form-input flex-1" placeholder="Enter Street Address line 1" />
                                                    {errors.emergency_address_l1 && <div className="text-danger">{errors.emergency_address_l1}</div>}
                                                    {/* <ErrorMessage name="emergency_address_l1" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                                <label htmlFor="emergency_address_l2" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <div className="flex-1">
                                                    <input id="emergency_address_l2" type="text" name="emergency_address_l2" className="form-input flex-1" placeholder="Enter Street Address Line 2" />
                                                    {errors.emergency_address_l2 && <div className="text-danger">{errors.emergency_address_l2}</div>}
                                                    {/* <ErrorMessage name="emergency_address_l2" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="emergency_country" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Country
                                                </label>
                                                <div className="flex-1">
                                                    <select id="emergency_country" name="emergency_country" className=" form-select flex-1">
                                                        <option value="">Choose Country</option>
                                                        <option value="United States">United States</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Sweden">Sweden</option>
                                                        <option value="Denmark">Denmark</option>
                                                        <option value="Norway">Norway</option>
                                                        <option value="New-Zealand">New Zealand</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Albania">Albania</option>
                                                        <option value="Algeria">Algeria</option>
                                                        <option value="American-Samoa">Andorra</option>
                                                        <option value="Angola">Angola</option>
                                                        <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                        <option value="Argentina">Argentina</option>
                                                        <option value="Armenia">Armenia</option>
                                                        <option value="Aruba">Aruba</option>
                                                        <option value="Austria">Austria</option>
                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                        <option value="Bahamas">Bahamas</option>
                                                        <option value="Bahrain">Bahrain</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="Barbados">Barbados</option>
                                                        <option value="Belarus">Belarus</option>
                                                        <option value="Belgium">Belgium</option>
                                                        <option value="Belize">Belize</option>
                                                        <option value="Benin">Benin</option>
                                                        <option value="Bermuda">Bermuda</option>
                                                        <option value="Bhutan">Bhutan</option>
                                                        <option value="Bolivia">Bolivia</option>
                                                        <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                        <option value="Botswana">Botswana</option>
                                                        <option value="Brazil">Brazil</option>
                                                        <option value="British">British Virgin Islands</option>
                                                        <option value="Brunei">Brunei</option>
                                                        <option value="Bulgaria">Bulgaria</option>
                                                        <option value="Burkina">Burkina Faso</option>
                                                        <option value="Burundi">Burundi</option>
                                                        <option value="Cambodia">Cambodia</option>
                                                        <option value="Cameroon">Cameroon</option>
                                                        <option value="Cape">Cape Verde</option>
                                                        <option value="Cayman">Cayman Islands</option>
                                                        <option value="Central-African">Central African Republic</option>
                                                        <option value="Chad">Chad</option>
                                                        <option value="Chile">Chile</option>
                                                        <option value="China">China</option>
                                                        <option value="Colombia">Colombia</option>
                                                        <option value="Comoros">Comoros</option>
                                                        <option value="Costa-Rica">Costa Rica</option>
                                                        <option value="Croatia">Croatia</option>
                                                        <option value="Cuba">Cuba</option>
                                                        <option value="Cyprus">Cyprus</option>
                                                        <option value="Czechia">Czechia</option>
                                                        <option value="Côte">Côte d'Ivoire</option>
                                                        <option value="Djibouti">Djibouti</option>
                                                        <option value="Dominica">Dominica</option>
                                                        <option value="Dominican">Dominican Republic</option>
                                                        <option value="Ecuador">Ecuador</option>
                                                        <option value="Egypt">Egypt</option>
                                                        <option value="El-Salvador">El Salvador</option>
                                                        <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                        <option value="Eritrea">Eritrea</option>
                                                        <option value="Estonia">Estonia</option>
                                                        <option value="Ethiopia">Ethiopia</option>
                                                        <option value="Fiji">Fiji</option>
                                                        <option value="Finland">Finland</option>
                                                        <option value="France">France</option>
                                                        <option value="Gabon">Gabon</option>
                                                        <option value="Georgia">Georgia</option>
                                                        <option value="Ghana">Ghana</option>
                                                        <option value="Greece">Greece</option>
                                                        <option value="Grenada">Grenada</option>
                                                        <option value="Guatemala">Guatemala</option>
                                                        <option value="Guernsey">Guernsey</option>
                                                        <option value="Guinea">Guinea</option>
                                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                        <option value="Guyana">Guyana</option>
                                                        <option value="Haiti">Haiti</option>
                                                        <option value="Honduras">Honduras</option>
                                                        <option value="Hong-Kong">Hong Kong SAR China</option>
                                                        <option value="Hungary">Hungary</option>
                                                        <option value="Iceland">Iceland</option>
                                                        <option value="India">India</option>
                                                        <option value="Indonesia">Indonesia</option>
                                                        <option value="Iran">Iran</option>
                                                        <option value="Iraq">Iraq</option>
                                                        <option value="Ireland">Ireland</option>
                                                        <option value="Israel">Israel</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Jamaica">Jamaica</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="Jordan">Jordan</option>
                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                        <option value="Kenya">Kenya</option>
                                                        <option value="Kuwait">Kuwait</option>
                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                        <option value="Laos">Laos</option>
                                                        <option value="Latvia">Latvia</option>
                                                        <option value="Lebanon">Lebanon</option>
                                                        <option value="Lesotho">Lesotho</option>
                                                        <option value="Liberia">Liberia</option>
                                                        <option value="Libya">Libya</option>
                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                        <option value="Lithuania">Lithuania</option>
                                                        <option value="Luxembourg">Luxembourg</option>
                                                        <option value="Macedonia">Macedonia</option>
                                                        <option value="Madagascar">Madagascar</option>
                                                        <option value="Malawi">Malawi</option>
                                                        <option value="Malaysia">Malaysia</option>
                                                        <option value="Maldives">Maldives</option>
                                                        <option value="Mali">Mali</option>
                                                        <option value="Malta">Malta</option>
                                                        <option value="Mauritania">Mauritania</option>
                                                        <option value="Mauritius">Mauritius</option>
                                                        <option value="Mexico">Mexico</option>
                                                        <option value="Moldova">Moldova</option>
                                                        <option value="Monaco">Monaco</option>
                                                        <option value="Mongolia">Mongolia</option>
                                                        <option value="Montenegro">Montenegro</option>
                                                        <option value="Morocco">Morocco</option>
                                                        <option value="Mozambique">Mozambique</option>
                                                        <option value="Myanmar">Myanmar (Burma)</option>
                                                        <option value="Namibia">Namibia</option>
                                                        <option value="Nepal">Nepal</option>
                                                        <option value="Netherlands">Netherlands</option>
                                                        <option value="Nicaragua">Nicaragua</option>
                                                        <option value="Niger">Niger</option>
                                                        <option value="Nigeria">Nigeria</option>
                                                        <option value="North-Korea">North Korea</option>
                                                        <option value="Oman">Oman</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Palau">Palau</option>
                                                        <option value="Palestinian">Palestinian Territories</option>
                                                        <option value="Panama">Panama</option>
                                                        <option value="Papua">Papua New Guinea</option>
                                                        <option value="Paraguay">Paraguay</option>
                                                        <option value="Peru">Peru</option>
                                                        <option value="Philippines">Philippines</option>
                                                        <option value="Poland">Poland</option>
                                                        <option value="Portugal">Portugal</option>
                                                        <option value="Puerto">Puerto Rico</option>
                                                        <option value="Qatar">Qatar</option>
                                                        <option value="Romania">Romania</option>
                                                        <option value="Russia">Russia</option>
                                                        <option value="Rwanda">Rwanda</option>
                                                        <option value="Réunion">Réunion</option>
                                                        <option value="Samoa">Samoa</option>
                                                        <option value="San-Marino">San Marino</option>
                                                        <option value="Saudi-Arabia">Saudi Arabia</option>
                                                        <option value="Senegal">Senegal</option>
                                                        <option value="Serbia">Serbia</option>
                                                        <option value="Seychelles">Seychelles</option>
                                                        <option value="Sierra-Leone">Sierra Leone</option>
                                                        <option value="Singapore">Singapore</option>
                                                        <option value="Slovakia">Slovakia</option>
                                                        <option value="Slovenia">Slovenia</option>
                                                        <option value="Solomon-Islands">Solomon Islands</option>
                                                        <option value="Somalia">Somalia</option>
                                                        <option value="South-Africa">South Africa</option>
                                                        <option value="South-Korea">South Korea</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="Sri-Lanka">Sri Lanka</option>
                                                        <option value="Sudan">Sudan</option>
                                                        <option value="Suriname">Suriname</option>
                                                        <option value="Swaziland">Swaziland</option>
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="Syria">Syria</option>
                                                        <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                        <option value="Tajikistan">Tajikistan</option>
                                                        <option value="Tanzania">Tanzania</option>
                                                        <option value="Thailand">Thailand</option>
                                                        <option value="Timor-Leste">Timor-Leste</option>
                                                        <option value="Togo">Togo</option>
                                                        <option value="Tonga">Tonga</option>
                                                        <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                        <option value="Tunisia">Tunisia</option>
                                                        <option value="Turkey">Turkey</option>
                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                        <option value="Uganda">Uganda</option>
                                                        <option value="Ukraine">Ukraine</option>
                                                        <option value="UAE">United Arab Emirates</option>
                                                        <option value="Uruguay">Uruguay</option>
                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                        <option value="Vanuatu">Vanuatu</option>
                                                        <option value="Venezuela">Venezuela</option>
                                                        <option value="Vietnam">Vietnam</option>
                                                        <option value="Yemen">Yemen</option>
                                                        <option value="Zambia">Zambia</option>
                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                    </select>
                                                    {errors.emergency_country && <div className="text-danger">{errors.emergency_country}</div>}
                                                    {/* <ErrorMessage name="emergency_country" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                                <label htmlFor="emergency_state" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    State
                                                </label>
                                                <div className="flex-1">
                                                    <select id="emergency_state" name="emergency_state" placeholder="Enter State" className=" form-select flex-1">
                                                        <option>Choose state</option>
                                                        <option>Jharkhand</option>
                                                        <option>Bihar</option>
                                                        <option>Ordisha</option>
                                                        <option>west Bengal</option>
                                                    </select>
                                                    {/* <input id="emergency_state" type="text" name="emergency_state" className="form-input flex-1" placeholder="Enter State" /> */}
                                                    {errors.emergency_state && <div className="text-danger">{errors.emergency_state}</div>}
                                                    {/* <ErrorMessage name="emergency_state" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="emergency_city" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    City
                                                </label>
                                                <div className="flex-1">
                                                    <select id="emergency_city" type="text" name="emergency_city"  className=" form-select flex-1">
                                                        <option>Choose city</option>
                                                        <option>Ranchi</option>
                                                        <option>Gumla</option>
                                                        <option>Deoghar</option>
                                                    </select>
                                                    {/* <input id="emergency_city" type="text" name="emergency_city" className="form-input flex-1" placeholder="Enter your City" /> */}
                                                    {errors.emergency_city && <div className="text-danger">{errors.emergency_city}</div>}
                                                    {/* <ErrorMessage name="emergency_city" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                                <label htmlFor="emergency_pincode" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Postal/Zip code
                                                </label>
                                                <div className="flex-1">
                                                    <input id="emergency_pincode" type="text" name="emergency_pincode" className="form-input flex-1" placeholder="Enter Postal/Zip code" />
                                                    {errors.emergency_pincode && <div className="text-danger">{errors.emergency_pincode}</div>}
                                                    {/* <ErrorMessage name="emergency_pincode" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                </div>
                                            </div>

                                            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                            <div className="text-lg font-bold">Bank Details:</div>
                                            <div className="lg:w-1/2 w-full  ">
                                                <div className="flex items-center mt-4">
                                                    <label htmlFor="account_number" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                                        Account Number
                                                    </label>
                                                    <div className="flex-1">
                                                        <input id="account_number" type="text" name="account_number" className="form-input flex-1" placeholder="Enter Account Number" />
                                                        {errors.account_number && <div className="text-danger">{errors.account_number}</div>}
                                                        {/* <ErrorMessage name="account_number" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-4">
                                                    <label htmlFor="bank_name" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                                        Bank Name
                                                    </label>
                                                    <div className="flex-1">
                                                        <input id="bank_name" type="text" name="bank_name" className="form-input flex-1" placeholder="Enter Bank Name" />
                                                        {errors.bank_name && <div className="text-danger">{errors.bank_name}</div>}
                                                        {/* <ErrorMessage name="bank_name" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-4">
                                                    <label htmlFor="ifsc_code" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                                        IFSC Code
                                                    </label>
                                                    <div className="flex-1">
                                                        <input id="ifsc_code" type="text" name="ifsc_code" className="form-input flex-1" placeholder="Enter IFSC Code" />
                                                        {errors.ifsc_code && <div className="text-danger">{errors.ifsc_code}</div>}
                                                        {/* <ErrorMessage name="ifsc_code" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-4">
                                                    <label htmlFor="branch_name" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                                        Branch Name
                                                    </label>
                                                    <div className="flex-1">
                                                        <input id="branch_name" type="text" name="branch_name" className="form-input flex-1" placeholder="Enter Branch Name" />
                                                        {errors.branch_name && <div className="text-danger">{errors.branch_name}</div>}
                                                        {/* <ErrorMessage name="branch_name" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                    </div>
                                                </div>
                                                <div className="flex items-center mt-4">
                                                    <label htmlFor="bank_country" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                                        Country
                                                    </label>
                                                    <div className="flex-1">
                                                        <select id="bank_country" name="bank_country" className="form-select flex-1">
                                                            <option value="">Choose Country</option>
                                                            <option value="United States">United States</option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="Sweden">Sweden</option>
                                                            <option value="Denmark">Denmark</option>
                                                            <option value="Norway">Norway</option>
                                                            <option value="New-Zealand">New Zealand</option>
                                                            <option value="Afghanistan">Afghanistan</option>
                                                            <option value="Albania">Albania</option>
                                                            <option value="Algeria">Algeria</option>
                                                            <option value="American-Samoa">Andorra</option>
                                                            <option value="Angola">Angola</option>
                                                            <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                            <option value="Argentina">Argentina</option>
                                                            <option value="Armenia">Armenia</option>
                                                            <option value="Aruba">Aruba</option>
                                                            <option value="Austria">Austria</option>
                                                            <option value="Azerbaijan">Azerbaijan</option>
                                                            <option value="Bahamas">Bahamas</option>
                                                            <option value="Bahrain">Bahrain</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="Barbados">Barbados</option>
                                                            <option value="Belarus">Belarus</option>
                                                            <option value="Belgium">Belgium</option>
                                                            <option value="Belize">Belize</option>
                                                            <option value="Benin">Benin</option>
                                                            <option value="Bermuda">Bermuda</option>
                                                            <option value="Bhutan">Bhutan</option>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                            <option value="Botswana">Botswana</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="British">British Virgin Islands</option>
                                                            <option value="Brunei">Brunei</option>
                                                            <option value="Bulgaria">Bulgaria</option>
                                                            <option value="Burkina">Burkina Faso</option>
                                                            <option value="Burundi">Burundi</option>
                                                            <option value="Cambodia">Cambodia</option>
                                                            <option value="Cameroon">Cameroon</option>
                                                            <option value="Cape">Cape Verde</option>
                                                            <option value="Cayman">Cayman Islands</option>
                                                            <option value="Central-African">Central African Republic</option>
                                                            <option value="Chad">Chad</option>
                                                            <option value="Chile">Chile</option>
                                                            <option value="China">China</option>
                                                            <option value="Colombia">Colombia</option>
                                                            <option value="Comoros">Comoros</option>
                                                            <option value="Costa-Rica">Costa Rica</option>
                                                            <option value="Croatia">Croatia</option>
                                                            <option value="Cuba">Cuba</option>
                                                            <option value="Cyprus">Cyprus</option>
                                                            <option value="Czechia">Czechia</option>
                                                            <option value="Côte">Côte d'Ivoire</option>
                                                            <option value="Djibouti">Djibouti</option>
                                                            <option value="Dominica">Dominica</option>
                                                            <option value="Dominican">Dominican Republic</option>
                                                            <option value="Ecuador">Ecuador</option>
                                                            <option value="Egypt">Egypt</option>
                                                            <option value="El-Salvador">El Salvador</option>
                                                            <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                            <option value="Eritrea">Eritrea</option>
                                                            <option value="Estonia">Estonia</option>
                                                            <option value="Ethiopia">Ethiopia</option>
                                                            <option value="Fiji">Fiji</option>
                                                            <option value="Finland">Finland</option>
                                                            <option value="France">France</option>
                                                            <option value="Gabon">Gabon</option>
                                                            <option value="Georgia">Georgia</option>
                                                            <option value="Ghana">Ghana</option>
                                                            <option value="Greece">Greece</option>
                                                            <option value="Grenada">Grenada</option>
                                                            <option value="Guatemala">Guatemala</option>
                                                            <option value="Guernsey">Guernsey</option>
                                                            <option value="Guinea">Guinea</option>
                                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                            <option value="Guyana">Guyana</option>
                                                            <option value="Haiti">Haiti</option>
                                                            <option value="Honduras">Honduras</option>
                                                            <option value="Hong-Kong">Hong Kong SAR China</option>
                                                            <option value="Hungary">Hungary</option>
                                                            <option value="Iceland">Iceland</option>
                                                            <option value="India">India</option>
                                                            <option value="Indonesia">Indonesia</option>
                                                            <option value="Iran">Iran</option>
                                                            <option value="Iraq">Iraq</option>
                                                            <option value="Ireland">Ireland</option>
                                                            <option value="Israel">Israel</option>
                                                            <option value="Italy">Italy</option>
                                                            <option value="Jamaica">Jamaica</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Jordan">Jordan</option>
                                                            <option value="Kazakhstan">Kazakhstan</option>
                                                            <option value="Kenya">Kenya</option>
                                                            <option value="Kuwait">Kuwait</option>
                                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="Laos">Laos</option>
                                                            <option value="Latvia">Latvia</option>
                                                            <option value="Lebanon">Lebanon</option>
                                                            <option value="Lesotho">Lesotho</option>
                                                            <option value="Liberia">Liberia</option>
                                                            <option value="Libya">Libya</option>
                                                            <option value="Liechtenstein">Liechtenstein</option>
                                                            <option value="Lithuania">Lithuania</option>
                                                            <option value="Luxembourg">Luxembourg</option>
                                                            <option value="Macedonia">Macedonia</option>
                                                            <option value="Madagascar">Madagascar</option>
                                                            <option value="Malawi">Malawi</option>
                                                            <option value="Malaysia">Malaysia</option>
                                                            <option value="Maldives">Maldives</option>
                                                            <option value="Mali">Mali</option>
                                                            <option value="Malta">Malta</option>
                                                            <option value="Mauritania">Mauritania</option>
                                                            <option value="Mauritius">Mauritius</option>
                                                            <option value="Mexico">Mexico</option>
                                                            <option value="Moldova">Moldova</option>
                                                            <option value="Monaco">Monaco</option>
                                                            <option value="Mongolia">Mongolia</option>
                                                            <option value="Montenegro">Montenegro</option>
                                                            <option value="Morocco">Morocco</option>
                                                            <option value="Mozambique">Mozambique</option>
                                                            <option value="Myanmar">Myanmar (Burma)</option>
                                                            <option value="Namibia">Namibia</option>
                                                            <option value="Nepal">Nepal</option>
                                                            <option value="Netherlands">Netherlands</option>
                                                            <option value="Nicaragua">Nicaragua</option>
                                                            <option value="Niger">Niger</option>
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="North-Korea">North Korea</option>
                                                            <option value="Oman">Oman</option>
                                                            <option value="Pakistan">Pakistan</option>
                                                            <option value="Palau">Palau</option>
                                                            <option value="Palestinian">Palestinian Territories</option>
                                                            <option value="Panama">Panama</option>
                                                            <option value="Papua">Papua New Guinea</option>
                                                            <option value="Paraguay">Paraguay</option>
                                                            <option value="Peru">Peru</option>
                                                            <option value="Philippines">Philippines</option>
                                                            <option value="Poland">Poland</option>
                                                            <option value="Portugal">Portugal</option>
                                                            <option value="Puerto">Puerto Rico</option>
                                                            <option value="Qatar">Qatar</option>
                                                            <option value="Romania">Romania</option>
                                                            <option value="Russia">Russia</option>
                                                            <option value="Rwanda">Rwanda</option>
                                                            <option value="Réunion">Réunion</option>
                                                            <option value="Samoa">Samoa</option>
                                                            <option value="San-Marino">San Marino</option>
                                                            <option value="Saudi-Arabia">Saudi Arabia</option>
                                                            <option value="Senegal">Senegal</option>
                                                            <option value="Serbia">Serbia</option>
                                                            <option value="Seychelles">Seychelles</option>
                                                            <option value="Sierra-Leone">Sierra Leone</option>
                                                            <option value="Singapore">Singapore</option>
                                                            <option value="Slovakia">Slovakia</option>
                                                            <option value="Slovenia">Slovenia</option>
                                                            <option value="Solomon-Islands">Solomon Islands</option>
                                                            <option value="Somalia">Somalia</option>
                                                            <option value="South-Africa">South Africa</option>
                                                            <option value="South-Korea">South Korea</option>
                                                            <option value="Spain">Spain</option>
                                                            <option value="Sri-Lanka">Sri Lanka</option>
                                                            <option value="Sudan">Sudan</option>
                                                            <option value="Suriname">Suriname</option>
                                                            <option value="Swaziland">Swaziland</option>
                                                            <option value="Switzerland">Switzerland</option>
                                                            <option value="Syria">Syria</option>
                                                            <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                            <option value="Tajikistan">Tajikistan</option>
                                                            <option value="Tanzania">Tanzania</option>
                                                            <option value="Thailand">Thailand</option>
                                                            <option value="Timor-Leste">Timor-Leste</option>
                                                            <option value="Togo">Togo</option>
                                                            <option value="Tonga">Tonga</option>
                                                            <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                            <option value="Tunisia">Tunisia</option>
                                                            <option value="Turkey">Turkey</option>
                                                            <option value="Turkmenistan">Turkmenistan</option>
                                                            <option value="Uganda">Uganda</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="UAE">United Arab Emirates</option>
                                                            <option value="Uruguay">Uruguay</option>
                                                            <option value="Uzbekistan">Uzbekistan</option>
                                                            <option value="Vanuatu">Vanuatu</option>
                                                            <option value="Venezuela">Venezuela</option>
                                                            <option value="Vietnam">Vietnam</option>
                                                            <option value="Yemen">Yemen</option>
                                                            <option value="Zambia">Zambia</option>
                                                            <option value="Zimbabwe">Zimbabwe</option>
                                                        </select>
                                                        {errors.bank_country && <div className="text-danger">{errors.bank_country}</div>}
                                                        {/* <ErrorMessage name="bank_country" render={(msg) => <div className="text-danger">{msg}</div>} /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                            </div>
                            <div className="flex justify-between mt-10 px-10">
                                <button type="button" className="btn btn-primary" onClick={handleBackClick}>
                                    Back
                                </button>
                                <button type="submit" className="btn btn-primary ltr:ml-auto rtl:mr-auto">
                                    Next
                                </button>
                            </div>
                        </div>
                    </form>
     
   
    );
};

export default Address;
