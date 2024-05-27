import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { downloadExcel } from 'react-export-table-to-excel';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconBell from '../../../components/Icon/IconBell';
import IconFile from '../../../components/Icon/IconFile';
import IconPrinter from '../../../components/Icon/IconPrinter';

const ExtraActivities = () => {
      const dispatch = useDispatch();
      useEffect(() => {
          dispatch(setPageTitle('Student List'));
      });
      const rowData = [ 
                {
                    id: 1,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
        
                    admno: '235689',
                    rollno: '081451',
                    name: 'Laurie Fox',
                    email: 'lauriefox@company.com',
                    date: '15 Dec 2020',
                    amount: '2275.45',
                    status: { tooltip: 'Paid', color: 'success' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 2,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '235687',
                    rollno: '081452',
                    name: 'Alexander Gray',
                    email: 'alexGray3188@gmail.com',
                    date: '20 Dec 2020',
                    amount: '1044.00',
                    status: { tooltip: 'Paid', color: 'success' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 3,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '205689',
                    rollno: '081681',
                    name: 'James Taylor',
                    email: 'jamestaylor468@gmail.com',
                    date: '27 Dec 2020',
                    amount: '20.00',
                    status: { tooltip: 'Pending', color: 'danger' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 4,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '237689',
                    rollno: '082693',
                    name: 'Grace Roberts',
                    email: 'graceRoberts@company.com',
                    date: '31 Dec 2020',
                    amount: '344.00',
                    status: { tooltip: 'Paid', color: 'success' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 5,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '2365439',
                    rollno: '084743',
                    name: 'Donna Rogers',
                    email: 'donnaRogers@hotmail.com',
                    date: '03 Jan 2021',
                    amount: '405.15',
                    status: { tooltip: 'Paid', color: 'success' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 6,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '2356789',
                    rollno: '086643',
                    name: 'Amy Diaz',
                    email: 'amy968@gmail.com',
                    date: '14 Jan 2020',
                    amount: '100.00',
                    status: { tooltip: 'Paid', color: 'success' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 7,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '905689',
                    rollno: '086773',
                    name: 'Nia Hillyer',
                    email: 'niahillyer666@comapny.com',
                    date: '20 Jan 2021',
                    amount: '59.21',
                    status: { tooltip: 'Pending', color: 'danger' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 8,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '251689',
                    rollno: '087916',
                    name: 'Mary McDonald',
                    email: 'maryDonald007@gamil.com',
                    date: '25 Jan 2021',
                    amount: '79.00',
                    status: { tooltip: 'Pending', color: 'danger' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 9,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '2378689',
                    rollno: '089472',
                    name: 'Andy King',
                    email: 'kingandy07@company.com',
                    date: '28 Jan 2021',
                    amount: '149.00',
                    status: { tooltip: 'Paid', color: 'success' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 10,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '285689',
                    rollno: '091768',
                    name: 'Vincent Carpenter',
                    email: 'vincentcarpenter@gmail.com',
                    date: '30 Jan 2021',
                    amount: '400',
                    status: { tooltip: 'Paid', color: 'success' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 11,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '2887689',
                    rollno: '095841',
                    name: 'Kelly Young',
                    email: 'youngkelly@hotmail.com',
                    date: '06 Feb 2021',
                    amount: '49.00',
                    status: { tooltip: 'Pending', color: 'danger' },
                    profile: 'profile-1.jpeg',
                },
                {
                    id: 12,
                    activity: 'Badminton Tournament',
                    type: 'Sports',
                    Organization: 'ABC College',
                    CertificatesorAchievements: 'Badminton Certificate',
                    admno: '735689',
                    rollno: '098424',
                    name: 'Alma Clarke',
                    email: 'alma.clarke@gmail.com',
                    date: '10 Feb 2021',
                    amount: '234.40',
                    status: { tooltip: 'Paid', color: 'success' },
                    profile: 'profile-1.jpeg',
                },
           ];
     

const col = ['id', 'activity', 'type', 'Organization', 'CertificateorAchievements', 'admno', 'rollno', 'name','email','date','amount','status','profile'];


    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return rowData.filter((item: any) => {
                return (
                    item.id.toString().includes(search.toLowerCase()) ||
                    item.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    item.company.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.age.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.dob.toLowerCase().includes(search.toLowerCase()) ||
                    item.phone.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);
    const header = ['Id', 'Firstname', 'Lastname', 'Email', 'Start Date', 'Phone No.', 'Age', 'Company'];

    const formatDate = (date: any) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };

    function handleDownloadExcel() {
        downloadExcel({
            fileName: 'table',
            sheet: 'react-export-table-to-excel',
        //     tablePayload: {
        //     header,
        //     // body: rowData,
        //      },
     });
    }

    const exportTable = (type: any) => {
        let columns: any = col;
        let records = rowData;
        let filename = 'table';

        let newVariable: any;
        newVariable = window.navigator;

        if (type === 'csv') {
            let coldelimiter = ';';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                // eslint-disable-next-line array-callback-return
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !newVariable.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type === 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; > ';
            // eslint-disable-next-line array-callback-return
            columns.map((d: any) => {
                rowhtml += '<th>' + capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';

            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                rowhtml += '<tr>';
                // eslint-disable-next-line array-callback-return
                columns.map((d: any) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            var winPrint: any = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
        } else if (type === 'txt') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                // eslint-disable-next-line array-callback-return
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/txt/i) && !newVariable.msSaveOrOpenBlob) {
                var data1 = 'data:application/txt;charset=utf-8,' + encodeURIComponent(result);
                var link1 = document.createElement('a');
                link1.setAttribute('href', data1);
                link1.setAttribute('download', filename + '.txt');
                link1.click();
            } else {
                var blob1 = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob1, filename + '.txt');
                }
            }
        }
    };

    const capitalize = (text: any) => {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };
    return (
        
        <div>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <IconBell />
                </div>
                <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                <a href="https://www.npmjs.com/package/mantine-datatable" target="_blank" className="block hover:underline">
                    https://www.npmjs.com/package/mantine-datatable
                </a>
            </div>

            <div className="panel mt-6">
                <div className="flex md:items-center justify-between md:flex-row flex-col mb-4.5 gap-5">
                    <div className="flex items-center flex-wrap">
                        <button type="button" onClick={() => exportTable('csv')} className="btn btn-primary btn-sm m-1 ">
                            <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                            CSV
                        </button>
                        <button type="button" onClick={() => exportTable('txt')} className="btn btn-primary btn-sm m-1">
                            <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                            TXT
                        </button>

                        <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleDownloadExcel}>
                            <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                            EXCEL
                        </button>

                        <button type="button" onClick={() => exportTable('print')} className="btn btn-primary btn-sm m-1">
                            <IconPrinter className="ltr:mr-2 rtl:ml-2" />
                            PRINT
                        </button>
                    </div>

                    <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="datatables">
                    <DataTable
                        highlightOnHover
                        className="whitespace-nowrap table-hover"
                        records={recordsData}
                        columns={[
                            { accessor: 'id', title: '#', sortable: true },
                            { accessor: 'firstName', sortable: true },
                            { accessor: 'lastName', sortable: true },
                            { accessor: 'company', title: 'Company', sortable: true },
                            { accessor: 'age', title: 'Age', sortable: true },
                            // {
                            //     accessor: 'dob',
                            //     title: 'Start Date',
                            //     sortable: true,
                            //     render: ({ dob }) => <div>{formatDate(dob)}</div>,
                            // },
                            { accessor: 'email', sortable: true },
                            { accessor: 'phone', sortable: true },
                        ]}
                        totalRecords={initialRecords.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                </div>
            </div>
        </div>
    );
};
export default ExtraActivities ; 


