import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { downloadExcel } from 'react-export-table-to-excel';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconBell from '../../components/Icon/IconBell';
import IconFile from '../../components/Icon/IconFile';
import IconPrinter from '../../components/Icon/IconPrinter';

const rowData = [
    {
        id: 1,
        activityName: 'Badminton',
        activityType: 'Sports',
        leave: 'approved',
        date: '2004-05-28',
        details: 'abc',
        isActive: true,
        achievements: '2nd position',
        college: 'POLARAX',
    },
    {
        id: 2,
        activityName: 'Cricket',
        activityType: 'Sports',
        date: '2004-06-13',
        leave: 'approved',
        details: '+1 (838) 515-3408',
        isActive: false,
        achievements: 32,
        college: 'MANGLO',
    },
    {
        id: 3,
        activityName: 'HackBMU',
        activityType: 'Hackathon',
        leave: 'approved',
        date: '2016-09-05',
        details: '+1 (969) 496-2892',
        isActive: false,
        achievements: 26,
        college: 'APPLIDECK',
    },
    {
        id: 4,
        activityName: 'Mandala Art',
        activityType: 'Painting Competition',
        leave:'not approved',
        date: '1987-03-23',
        details: '+1 (861) 564-2877',
        isActive: true,
        achievements: 21,
        college: 'VOLAX',
    },
    {
        id: 5,
        activityName: 'Boxing',
        activityType: 'Sports',
        leave: 'approved',
        date: '1983-02-24',
        details: '+1 (962) 466-3483',
        isActive: false,
        achievements: 26,
        college: 'ORBAXTER',
    },
    {
        id: 6,
        activityName: 'Go Carting',
        activityType: 'Automobile Building Competition',
        leave: 'approved',
        date: '2011-05-29',
        details: '+1 (884) 595-2643',
        isActive: true,
        achievements: 40,
        college: 'OPPORTECH',
    },
    {
        id: 7,
        activityName: 'Race X',
        activityType: 'Motorbike Racing Competition',
        leave: 'approved',
        date: '2010-11-23',
        details: '+1 (906) 474-3155',
        isActive: true,
        achievements: 24,
        college: 'GORGANIC',
    },
    {
        id: 8,
        activityName: 'Hacked',
        activityType: 'Hackathon',
        leave: 'approved',
        date: '1987-07-02',
        details: '+1 (930) 546-2952',
        isActive: true,
        achievements: 24,
        college: 'AVIT',
    },
    {
        id: 9,
        activityName: 'Robo Soccer',
        activityType: 'Robotics',
        leave: ' not approved',
        date: '2010-11-02',
        details: '+1 (927) 566-3600',
        isActive: false,
        achievements: 28,
        college: 'QUILCH',
    },
    {
        id: 10,
        activityName: 'Drone Race',
        activityType: 'Robotics',
        leave: 'approved',
        date: '1994-04-21',
        details: '+1 (846) 535-3283',
        isActive: false,
        achievements: 27,
        college: 'MEMORA',
    },
    {
        id: 11,
        activityName: 'Dodge Ball',
        activityType: 'Sports',
        leave: 'approved',
        date: '2010-01-24',
        details: '+1 (995) 525-3402',
        isActive: true,
        achievements: 34,
        college: 'ZORROMOP',
    },
    {
        id: 12,
        activityName: 'Pool',
        activityType: 'Indoor Games Competition',
        leave: ' not approved',
        date: '1975-11-12',
        details: '+1 (830) 430-3157',
        isActive: true,
        achievements: 28,
        college: 'ORBOID',
    },
    {
        id: 13,
        activityName: 'Wend',
        activityType: 'Powers',
        leave: 'approved',
        date: '1979-06-02',
        details: '+1 (863) 457-2088',
        isActive: true,
        achievements: 31,
        college: 'SNORUS',
    },
    {
        id: 14,
        activityName: 'Sophie',
        activityType: 'Horn',
        leave:'approved',
        date: '2018-09-20',
        details: '+1 (885) 418-3948',
        isActive: true,
        achievements: 22,
        college: 'XTH',
    },
    {
        id: 15,
        activityName: 'Levine',
        activityType: 'Rodriquez',
        leave:'not approved',
        date: '1973-02-08',
        details: '+1 (999) 565-3239',
        isActive: true,
        achievements: 27,
        college: 'COMTRACT',
    },

];

const col = ['id', 'activityName', 'activityType', 'college', 'achievements', 'date', 'leave', 'details'];

const Activities = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Export Table'));
    });
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
                    item.activityName.toLowerCase().includes(search.toLowerCase()) ||
                    item.activityType.toLowerCase().includes(search.toLowerCase()) ||
                    item.college.toLowerCase().includes(search.toLowerCase()) ||
                    item.leave.toLowerCase().includes(search.toLowerCase()) ||
                    item.achievements.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.date.toLowerCase().includes(search.toLowerCase()) ||
                    item.details.toLowerCase().includes(search.toLowerCase())
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
    const header = ['Id', 'activityName', 'activityType', 'leave', 'Start Date', 'details No.', 'achievements', 'college'];

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
            tablePayload: {
                header,
                body: rowData,
            },
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
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
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
            <div className="panel mb-4 flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="ltr:mr-3 text-primary  text-xl flex justify-between flex-wrap font-bold rtl:ml-3">Extracurricular Activities</div>
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
                            { accessor: 'id', title: 'Sr. No.', sortable: true },
                            { accessor: 'activityName', title: 'Activity Name', sortable: true },
                            { accessor: 'activityType', title: 'Activity Type', sortable: true },
                            { accessor: 'college', title: 'College Name', sortable: true },
                            { accessor: 'achievements', title: 'Achievements', sortable: true },
                            { accessor: 'date', title: 'Event Date', sortable: true, render: ({ date }) => <div>{formatDate(date)}</div> },
                            { accessor: 'leave', title: 'Apply for Leave', sortable: true },
                            { accessor: 'details', title: 'Details', sortable: true },
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

export default Activities;
