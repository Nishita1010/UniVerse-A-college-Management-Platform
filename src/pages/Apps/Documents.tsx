import { useEffect, useState } from 'react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/tippy.css';
import Dropdown from '../../components/Dropdown';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
// import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import IconX from '../../components/Icon/IconX';

const Documents = () => {
    const tableData = [
        {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@yahoo.com',
            date: '10/08/2020',
            status: 'completed',
            register: '5 min ago',
            progress: '40%',
            document: 'Aadhar Card',
            office: 'London',
        },
        {
            id: 2,
            name: 'Shaun Park',
            email: 'shaunpark@gmail.com',
            date: '11/08/2020',
            sale: 400,
            status: 'pendiing',
            register: '11 min ago',
            progress: '23%',
            document: 'Class X Marksheet',
            office: 'New York',
        },
        {
            id: 3,
            name: 'Alma Clarke',
            email: 'alma@gmail.com',
            date: '12/02/2020',
            sale: 310,
            status: 'in progress',
            register: '1 hour ago',
            progress: '80%',
            document: 'Class XII Marksheet',
            office: 'Amazon',
        },
        {
            id: 4,
            name: 'Vincent Carpenter',
            email: 'vincent@gmail.com',
            date: '13/08/2020',
            sale: 100,
            status: 'cancelled',
            register: '1 day ago',
            progress: '60%',
            document: 'Pastportsize Photograph',
            office: 'Canada',
        },
    ];
    const [codeArr, setCodeArr] = useState<string[]>([]);

    const toggleCode = (name: string) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };

    // const [images, setImages] = useState<any>([]);
    const [images2, setImages2] = useState<any>([]);
    const maxNumber = 69;

    // const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    //     setImages(imageList as never[]);
    // };

    const onChange2 = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        setImages2(imageList as never[]);
    };
    return (
        <>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="flex justify-between flex-wrap px-4">
                        <div className="mb-6 lg:w-1/2 w-full">
                            <div className="text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                                Upload Documents
                            </div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="float-end ">
                        <button type="button" className=" mr-10 mt-2 btn btn-primary gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"></path>
                            </svg>
                            <path
                                d="M6 17.9827C4.44655 17.9359 3.51998 17.7626 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H16C18.8284 6 20.2426 6 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.48 17.7626 19.5535 17.9359 18 17.9827"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            ></path>
                            Upload
                        </button>
                    </div>
                    <div className="table-responsive px-10 mb-5 mt-24">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Document Type / Name of Document</th>
                                    <th>Progress</th>

                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <td>
                                                <div className="whitespace-nowrap">{data.id}</div>
                                            </td>
                                            <td>{data.document}</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div
                                                        className={`h-1.5 rounded-full rounded-bl-full text-center text-white text-xs ${
                                                            data.status === 'completed'
                                                                ? 'bg-primary'
                                                                : data.status === 'pending'
                                                                ? 'bg-secondary'
                                                                : data.status === 'in progress'
                                                                ? 'bg-success'
                                                                : data.status === 'cancelled'
                                                                ? 'bg-danger'
                                                                : 'bg-secondary'
                                                        }`}
                                                        style={{ width: `${data.progress}` }}
                                                    ></div>
                                                </div>

                                                <div className="mb-5">
                                                    {/* <div className="custom-file-container" data-upload-id="mySecondImage">
                                <div className="label-container">
                                    <label>Upload </label>
                                    <button
                                        type="button"
                                        className="custom-file-container__image-clear"
                                        title="Clear Image"
                                        onClick={() => {
                                            setImages2([]);
                                        }}
                                    >
                                        
                                    </button>
                                </div>
                                {/* <label className="custom-file-container__custom-file"></label>
                                <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                <ImageUploading multiple value={images2} onChange={onChange2} maxNumber={maxNumber}>
                                    {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                        <div className="upload__image-wrapper">
                                            <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                                                Choose File...
                                            </button>
                                            &nbsp;
                                            <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
                                                {imageList.map((image, index) => (
                                                    <div key={index} className="custom-file-container__image-preview relative">
                                                        <button
                                                            type="button"
                                                            className="custom-file-container__image-clear bg-dark-light dark:bg-dark dark:text-white-dark rounded-full block w-fit p-0.5 absolute top-0 left-0"
                                                            title="Clear Image"
                                                            onClick={() => onImageRemove(index)}
                                                        >
                                                            <IconX className="w-3 h-3"/>
                                                        </button>
                                                        <img src={image.dataURL} alt="img" className="object-cover shadow rounded w-full !max-h-48" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </ImageUploading>
                                {images2.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''} 
                            </div> */}
                                                </div>
                                                {/* <span
                                            className={`badge whitespace-nowrap ${
                                                data.status === 'Upload'
                                                    ? 'bg-primary   '
                                                    : data.status === 'Upload'
                                                    ? 'bg-primary'
                                                    : data.status === 'Upload'
                                                    ? 'bg-primary'
                                                    : data.status === 'Upload'
                                                    ? 'bg-primary'
                                                    : 'bg-primary'
                                            }`}
                                        >
                                            {data.status}
                                        </span> */}
                                            </td>
                                            <td className="text-center">
                                                <div className="dropdown ">
                                                    <Dropdown offset={[0, 5]} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                                                        <ul>
                                                            <li>
                                                                <button type="button">Download</button>
                                                            </li>
                                                            <li>
                                                                <button type="button">Share</button>
                                                            </li>
                                                            <li>
                                                                <button type="button">Edit</button>
                                                            </li>
                                                            <li>
                                                                <button type="button">Delete</button>
                                                            </li>
                                                        </ul>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Documents;
