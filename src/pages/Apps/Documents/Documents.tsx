import { useEffect, useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/tippy.css';

const Documents = () => {
    const [images, setImages] = useState<any>([]);
    const [images2, setImages2] = useState<any>([]);
    const [images3, setImages3] = useState<any>([]);
    const [images4, setImages4] = useState<any>([]);
    const maxNumber = 69;

    const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        setImages(imageList as never[]);
        setImages2(imageList as never[]);
        setImages3(imageList as never[]);
        setImages4(imageList as never[]);
    };

    return (
        <>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="px-0 flex-1 ">
                    {/* <div className="flex justify-between flex-wrap px-4">
                        <div className=" px-4  mb-6 lg:w-1/2 w-full">
                            <div className=" mt-4 text-lg font-bold text-primary m-0" style={{ fontSize: '25px' }}>
                                Upload Documents
                            </div>
                        </div>
                    </div> */}
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    {/* <div className="float-end ">
                        <button type="button" className=" mr-10 mt-2 mb-8 btn btn-primary gap-2">
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
                    </div> */}

                    <div className="my-10 px-10 ">
                        {/*} <div className="mt-4 flex  gap-5 lg:flex-row flex-col"> */}
                        {/*   <div className="custom-file-container" data-upload-id="myFirstImage">
                                <div className="label-container">
                                    <label>12th Marksheet </label>
                                    <button
                                        type="button"
                                        className="custom-file-container__image-clear"
                                        title="Clear Image"
                                        onClick={() => {
                                            setImages([]);
                                        }}
                                    ></button>
                                </div>
                                <label className="custom-file-container__custom-file"></label>
                                <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
                                    {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                        <div className="upload__image-wrapper">
                                            <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                                                Choose File...
                                            </button>
                                            &nbsp;
                                            {imageList.map((image, index) => (
                                                <div key={index} className="custom-file-container__image-preview relative">
                                                    <img src={image.dataURL} alt="img" className="m-auto" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ImageUploading>
                            </div>
                            <div className="custom-file-container" data-upload-id="mySecondImage">
                                <div className="label-container">
                                    <label>10th Marksheet </label>
                                    <button
                                        type="button"
                                        className="custom-file-container__image-clear"
                                        title="Clear Image"
                                        onClick={() => {
                                            setImages2([]);
                                        }}
                                    ></button>
                                </div>
                                <label className="custom-file-container__custom-file"></label>
                                <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                <ImageUploading value={images2} onChange={onChange} maxNumber={maxNumber}>
                                    {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                        <div className="upload__image-wrapper">
                                            <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                                                Choose File...
                                            </button>
                                            &nbsp;
                                            {imageList.map((image, index) => (
                                                <div key={index} className="custom-file-container__image-preview relative">
                                                    <img src={image.dataURL} alt="img" className="m-auto" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ImageUploading>
                            </div>
                            <div className="custom-file-container" data-upload-id="myThirdImage">
                                <div className="label-container">
                                    <label>SLC/CLC</label>
                                    <button
                                        type="button"
                                        className="custom-file-container__image-clear"
                                        title="Clear Image"
                                        onClick={() => {
                                            setImages3([]);
                                        }}
                                    ></button>
                                </div>
                                <label className="custom-file-container__custom-file"></label>
                                <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                <ImageUploading value={images3} onChange={onChange} maxNumber={maxNumber}>
                                    {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                        <div className="upload__image-wrapper">
                                            <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                                                Choose File...
                                            </button>
                                            &nbsp;
                                            {imageList.map((image, index) => (
                                                <div key={index} className="custom-file-container__image-preview relative">
                                                    <img src={image.dataURL} alt="img" className="m-auto" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ImageUploading>
                            </div>
                            <div className="custom-file-container" data-upload-id="myForthImage">
                                <div className="label-container">
                                    <label>Migration Certificate </label>
                                    <button
                                        type="button"
                                        className="custom-file-container__image-clear"
                                        title="Clear Image"
                                        onClick={() => {
                                            setImages4([]);
                                        }}
                                    ></button>
                                </div>
                                <label className="custom-file-container__custom-file"></label>
                                <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                                <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                <ImageUploading value={images4} onChange={onChange} maxNumber={maxNumber}>
                                    {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                        <div className="upload__image-wrapper">
                                            <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                                                Choose File...
                                            </button>
                                            &nbsp;
                                            {imageList.map((image, index) => (
                                                <div key={index} className="custom-file-container__image-preview relative">
                                                    <img src={image.dataURL} alt="img" className="m-auto" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ImageUploading>
                            </div> */}

                        <div className="mt-4 flex  gap-8 lg:flex-row flex-col">
                            <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">12th Marksheet</label>
                            <input
                                type="file"
                                accept="image/png, image/jpeg, .pdf"
                                className="form-input file:py-2.5 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                            />
                            <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">10th Marksheet</label>
                            <input
                                type="file"
                                accept="image/png, image/jpeg, .pdf"
                                className="form-input file:py-2.5 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                            />
                        </div>
                        <div className="mt-4 flex  gap-8 lg:flex-row flex-col">
                            <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">Document</label>
                            <input
                                type="file"
                                accept="image/png, image/jpeg, .pdf"
                                className="form-input file:py-2.5 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                            />
                            <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">Document</label>
                            <input
                                type="file"
                                accept="image/png, image/jpeg, .pdf"
                                className="form-input file:py-2.5 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                            />
                        </div>
                        <div className="mt-4 flex  gap-8 lg:flex-row flex-col">
                            <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">Document</label>
                            <input
                                type="file"
                                accept="image/png, image/jpeg, .pdf"
                                className="form-input file:py-2.5 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                            />
                            <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">Document</label>
                            <input
                                type="file"
                                accept="image/png, image/jpeg, .pdf"
                                className="form-input file:py-2.5 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                            />
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default Documents;
