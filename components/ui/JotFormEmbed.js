'use client';

import { useState } from 'react';

export default function JotFormModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false); // controls animation state

    const openModal = () => {
        setIsOpen(true);
        setTimeout(() => setShow(true), 10); // small delay to trigger transition
    };

    const closeModal = () => {
        setShow(false);
        setTimeout(() => setIsOpen(false), 300); // match transition duration
    };

    return (
        <>
            <button
                onClick={openModal}
                className="btn btn-custom-2 px-4 px-sm-5 py-3 h-custom-5 tw-rounded-[50px] tw-w-[100%] sm:tw-w-[initial]"
            >
                I Want My Complimentary AI Deployment Assessment
            </button>

            {isOpen && (
                <div className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center">
                    {/* BACKDROP */}
                    <div
                        className={`tw-absolute tw-inset-0 tw-bg-black tw-transition-opacity tw-duration-300 ${
                            show ? 'tw-bg-opacity-60' : 'tw-bg-opacity-0'
                        }`}
                        onClick={closeModal}
                    />

                    {/* MODAL CONTENT */}
                    <div
                        className={`shadow-lg tw-border-solid tw-border-[#222222] tw-border-[2px] tw-relative tw-bg-white tw-rounded-[20px] tw-w-full tw-max-w-7xl tw-p-0 tw-shadow-xl tw-transform tw-transition-all tw-duration-300 ${
                            show ? 'tw-opacity-100 tw-translate-y-0' : 'tw-opacity-0 tw-translate-y-4'
                        }`}
                    >
                        <button
                            onClick={closeModal}
                            className="tw-absolute tw-top-3 tw-right-6 tw-text-gray-500 hover:tw-text-black tw-text-3xl"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <iframe
                            src="https://form.jotform.com/251271564621049"
                            width="100%"
                            height="600"
                            style={{ border: 'none', borderRadius:"16px" }}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}
