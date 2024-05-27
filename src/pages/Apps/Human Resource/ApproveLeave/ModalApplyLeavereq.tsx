    import { Dialog, Transition } from '@headlessui/react';
    import { useState, Fragment } from 'react';
    import IconX from '../../../../components/Icon/IconX';

    import LeaveReqForm from './LeaveReqForm';

    const ModalApplyLeavereq = ({ modal5, setModal5 }) => {
        function sendDataToAPI({ data }) {
            alert('sending data');
            console.log('data', data);
        }
        return (
            <div>
                {/* <button type="button" onClick={() => setModal5(true)} className="btn btn-warning">
                    Extra large
                </button> */}
                <Transition appear show={modal5} as={Fragment}>
                    <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <div className="fixed inset-0" />
                        </Transition.Child>
                        <div className="fixed inset-0 z-[999] bg-[black]/60">
                            <div className="flex min-h-screen items-start justify-center px-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="panel my-8 w-full max-w-5xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                        <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                            <h5 className="text-lg font-bold">Approve Leave Request</h5>
                                            <button onClick={() => setModal5(false)} type="button" className="text-white-dark hover:text-dark">
                                                <IconX />
                                            </button>
                                        </div>
                                        <div className="p-5">
                                            <LeaveReqForm sendDataToAPI={sendDataToAPI} setModal5={setModal5} />
                                            {/* <div className="mt-8 flex items-center justify-end">
                                                <button onClick={() => setModal5(false)} type="button" className="btn btn-outline-danger">
                                                    Discard
                                                </button>
                                                <button onClick={() => {}} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                    Save
                                                </button>
                                            </div> */}
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        );
    };

    export default ModalApplyLeavereq;
