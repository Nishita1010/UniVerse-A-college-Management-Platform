import React from 'react';
import MaskedInput from 'react-text-mask';

const ContactDetails = () => {
    return (
        <>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="px-0 flex-1">
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div>
                        <div className="mt-8 px-4">
                            <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                                <h2>Present Address</h2>
                            </label>
                        </div>
                        <div className="mt-6 px-4">
                        <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        Street Address
                                    </label>
                                    <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter your Address" />
                                    <label htmlFor="lastName" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                        Street Address
                                    </label>
                                    <input id="lastName" type="text" name="lastName" className="form-input flex-1" placeholder="Enter your Address" />
                                </div>

                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="collegeEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Country
                                    </label>
                                    <input id="collegeEmail" type="email" name="collegeEmail" className="form-input flex-1" placeholder="Enter Country" />

                                    <label htmlFor="personalEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        State
                                    </label>
                                    <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter State" />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        City
                                    </label>
                                    <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter City" />

                                    <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Postal / Zip Code
                                    </label>
                                    <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter Zip Code" />
                                </div>
                                   {/*    <button type="submit" className="btn btn-primary mt-8 float-end">
                                    Submit Form
                                </button> */}
                            </div>
                        </div>
                    </div>
                        {/* <div className="mt-8 px-4 pl-8">
                            <div className="mt-4 flex lg:flex-row flex-col">
                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="Street_Address" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Street Address
                                    </label>
                                    <input id="Street_Address" type="text" name="Street_Address" className="form-input flex-1" placeholder="Enter Street Address Line 1" />
                                </div>
                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="Street_Address_Line_2" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Street Address
                                    </label>
                                    <input id="Street_Address_Line_2" type="text" name="Street_Address_Line_2" className="form-input flex-1" placeholder="Enter Street Address Line 2" />
                                </div>
                            </div>

                            <div className="mt-4 flex lg:flex-row flex-col">
                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="country" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Country
                                    </label>
                                    <select id="country" name="country" className="form-select flex-1 p-2 rounded-md border w-80">
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
                                </div>
                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="state" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        State
                                    </label>
                                    <input id="state" type="text" name="state" className="form-input flex-1" placeholder="Enter State" />
                                </div>
                            </div>

                            <div className="mt-4 flex lg:flex-row flex-col">
                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="city" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        City
                                    </label>
                                    <input id="city" type="text" name="city" className="form-input flex-1" placeholder="Enter City" />
                                </div>
                                <div className="px-5 flex w-1/2">
                                    <label htmlFor="zip code" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Postal / Zip Code
                                    </label>
                                    <input id="zipcode" type="number" name="zipcode" className="form-input flex-1" placeholder="Enter Zip Code" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-10" />

                    <div className="mt-8 px-4">
                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            <h2>Permanent Address</h2>
                        </label>
                    </div>
                    <div className="mt-6 px-4">
                        <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        Street Address
                                    </label>
                                    <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter your Address" />
                                    <label htmlFor="lastName" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                        Street Address
                                    </label>
                                    <input id="lastName" type="text" name="lastName" className="form-input flex-1" placeholder="Enter your Address" />
                                </div>

                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="collegeEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Country
                                    </label>
                                    <input id="collegeEmail" type="email" name="collegeEmail" className="form-input flex-1" placeholder="Enter Country" />

                                    <label htmlFor="personalEmail" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        State
                                    </label>
                                    <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter State" />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        City
                                    </label>
                                    <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter City" />

                                    <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Postal / Zip Code
                                    </label>
                                    <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Enter Zip Code" />
                                </div>
{/* 
                                <button type="submit" className="btn btn-primary mt-8 float-end">
                                    Submit Form
                                </button> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="mt-8 ml-4 px-4">
                        <div className="mt-4 flex lg:flex-row flex-col">
                            <div className="px-5 flex w-1/2">
                                <label htmlFor="Street_Address" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Street Address
                                </label>
                                <input id="Street_Address" type="text" name="Street_Address" className="form-input flex-1" placeholder="Enter your address" />
                            </div>
                            <div className="px-5 flex w-1/2">
                                <label htmlFor="Street_Address_Line_2" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Street Address
                                </label>
                                <input id="Street_Address_Line_2" type="text" name="Street_Address_Line_2" className="form-input flex-1" placeholder="Enter your address" />
                            </div>
                        </div>

                        <div className="mt-4 flex lg:flex-row flex-col">
                            <div className="px-5 flex w-1/2">
                                <label htmlFor="country" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Country
                                </label>
                                <select id="country" name="country" className="form-select flex-1 p-2 rounded-md border w-80">
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
                            </div>
                            <div className="px-5 flex w-1/2">
                                <label htmlFor="state" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    State
                                </label>
                                <input id="state" type="text" name="state" className="form-input flex-1" placeholder="Enter State" />
                            </div>
                        </div>

                        <div className="mt-4 flex lg:flex-row flex-col">
                            <div className="px-5 flex w-1/2">
                                <label htmlFor="city" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    City
                                </label>
                                <input id="city" type="text" name="city" className="form-input flex-1" placeholder="Enter City" />
                            </div>
                            <div className="px-5 flex w-1/2">
                                <label htmlFor="zip code" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                    Postal / Zip Code
                                </label>
                                <input id="zipcode" type="number" name="zipcode" className="form-input flex-1" placeholder="Enter Zip Code" />
                            </div>
                        </div>
                    </div> */}
                    <hr className="border-white-light dark:border-[#1b2e4b] my-8" />

                    
                    <div className="mt-8 px-4">
                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            <h2>Emergency Contact</h2>
                        </label>
                    </div>
                    <div className="mt-8 px-4">
                        <div className=" pl-4 flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="Firstname" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        Full Name
                                    </label>
                                    <input id="Firstname" type="text" name="Firstname" className="form-input flex-1 " placeholder="Enter Full Name" />
                                    <label htmlFor="lastName" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                        E mail ID
                                    </label>
                                    <input id="lastName" type="text" name="lastName" className="form-input flex-1" placeholder="Enter Email ID" />
                                </div>

                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Phone Number
                                    </label>
                                    <MaskedInput
                                        id="phoneMask"
                                        type="text"
                                        placeholder="Enter your Phone Number"
                                        className="form-input flex-1"
                                        mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                    />

                                    <label htmlFor="personalEmail" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        Relation with the Student
                                    </label>
                                    <input id="personalEmail" type="email" name="personalEmail" className="form-input flex-1" placeholder="Example- Mother, Father, Brother etc." />
                                </div>
                            </div>
                        </div>

                        <div className=" mt-2 flex ml-12 mr-4 gap-5 lg:flex-row flex-col">
                            <label htmlFor="notes" className="ltr:mr-2 rtl:ml-2 -ml-3 w-32 mb-0">
                                Person's Address
                            </label>
                            <textarea id="ctnTextarea" rows={3} className=" -mt-3.5 form-textarea" placeholder="Enter Address" required></textarea>
                        </div>
                    </div>

                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                    <div className="mt-8 px-4">
                        <label htmlFor="permanentAdd" className=" px-5 text-primary font-bold flex-1 ltr:mr-2 rtl:ml-2 w-1/4 mb-0 text-lg">
                            <h2>Bank Details</h2>
                        </label>
                    </div>
                    <div className="mt-6 px-4">
                        <div className=" pl-5 flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:px-6 rtl:lg:px-6 pb-6">
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
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
{/* 
                                <button type="submit" className="btn btn-primary mt-8 float-end">
                                    Submit Form
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactDetails;
