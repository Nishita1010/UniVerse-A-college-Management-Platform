import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import IconPrinter from '../../../../components/Icon/IconPrinter';
import IconDownload from '../../../../components/Icon/IconDownload';
// import { jsPDF } from 'jspdf';

const EmpPreview = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Invoice Preview'));
    // });
    const exportTable = () => {
        window.print();
    };

    const downloadPdf = () => {
        const doc = new jsPDF();

        // Add content to the PDF document
        doc.text('Employee Details', 10, 10);
        doc.autoTable({
            head: [columns.map(column => column.label)],
            body: items.map(item => columns.map(column => item[column.key])),
        });

        // Save the PDF as a file
        doc.save('employee_details.pdf');
    };


    
   

    return (
        <div>
            <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
                {/* <button type="button" className="btn btn-info gap-2">
                    <IconSend />
                    Send Invoice
                </button> */}

                <button type="button" className="btn btn-primary gap-2" onClick={() => exportTable()}>
                    <IconPrinter />
                    Print
                </button>

                <button type="button" className="btn btn-success gap-2"  onClick={()=>downloadPdf()}>
                    <IconDownload />
                    Download
                </button>

                {/* <Link to="/apps/invoice/add" className="btn btn-secondary gap-2">
                    <IconPlus />
                    Create
                </Link> */}

                {/* <Link to="/apps/invoice/edit" className="btn btn-warning gap-2">
                    <IconEdit />
                    Edit
                </Link> */}
            </div>
            <div className="panel">
                <img
                    className="h-36 w-36"
                    src="https://media.licdn.com/dms/image/D5603AQFizd8agGEAOQ/profile-displayphoto-shrink_800_800/0/1681713000195?e=2147483647&v=beta&t=oQWxUvy522tYeylq8Al2GrkzYnobeCf4m09Zsx0bjvs"
                />
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="text-primary text-xl font-bold">Personal Details</div>
                <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
                    <div>Name:-</div>
                    <div>Father's Name:-</div>
                    <div>Mother's Name:-</div>
                </div>
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Email:-</div>
                    <div>Phone Number:-</div>
                    <div>Gender:-</div>
                    <div>Date of Birth:-</div>
                </div>
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Emplyee id :-</div>
                    <div>Role:-</div>
                    <div>Designation:-</div>
                    <div>Department:-</div>
                </div>
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Religion:-</div>
                    <div>Category:-</div>
                    <div>Cast:-</div>
                    <div>Joining Date:-</div>
                </div>
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Merital Status:-</div>
                    <div>Aadhar Number:-</div>
                    <div>Pan Card:-</div>
                </div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="text-primary text-xl font-bold">Present Address</div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Street Address L1:-</div>
                    <div>Street Address L2:-</div>
                </div>
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Country:-</div>
                    <div>City:-</div>
                </div>
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>State:-</div>
                    <div>Zip/Postal code:-</div>
                </div>

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="text-primary text-xl font-bold">Permanent Address</div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Street Address L1:-</div>
                    <div>Street Address L2:-</div>
                </div>
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Country:-</div>
                    <div>City:-</div>
                </div>
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>State:-</div>
                    <div>Zip/Postal code:-</div>
                </div>
                
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="text-primary text-xl font-bold">Emergency Contact Details</div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Name:-</div>
                    <div>Phone Number:-</div>
                    <div>Relation:-</div>
                </div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Street Address L1:-</div>
                    <div>Street Address L2:-</div>
                </div>
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Country:-</div>
                    <div>City:-</div>
                </div>
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>State:-</div>
                    <div>Zip/Postal code:-</div>
                </div>

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="text-primary text-xl font-bold">Bank Details</div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Account Number:-</div>
                    <div>Bank Name:-</div>
                <div>IFSC Code:-</div>
                   
                </div>
        
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Branch Name:-</div>
                    <div>Country:-</div>
                </div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="text-primary text-xl font-bold">Payroll details</div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>EPF No:-</div>
                    <div>Basic Salary:-</div>
                </div>
        
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Work Shift:-</div>
                    <div>Work Location:-</div>
                </div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="text-primary text-xl font-bold">Leaves details</div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    <div>Medical Leave:-</div>
                    <div>Casual Leave:-</div>
                    <div>Maternity Leave:-</div>
                    <div>Sick Leave:-</div>
                </div>
        
                <div className="mt-4 flex gap-5 justify-between lg:flex-row flex-col">
                    
                </div>
            </div>
        </div>
    );
};

export default EmpPreview;
