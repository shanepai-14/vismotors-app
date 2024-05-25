import React from "react";

const contact = () => {
  return (
    <div className="">
      <div className="p-4">
        <div className="relative mx-auto h-auto pt-4  flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
          <div className="relative h-56 mx-4  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18196.213727153623!2d123.28798144339532!3d9.303025360935562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab6fdfca923c23%3A0x495b56e152d919f5!2sVISMOTOR%20CORPORATION!5e0!3m2!1sen!2sph!4v1716618463160!5m2!1sen!2sph'
              width='100%'
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-6">
            <div className="flex">
              <h5 className="block mb-2 mr-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              VISMOTOR DUMAGUETE
              </h5>
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Real St., Tabug-Tubig Dumaguete City, Negros Oriental
            </p>

            <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">call</span>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            09564963746
            </p>
            </div>
          </div>
        </div>
        {/* <div className="relative mx-auto h-auto pt-4  flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
          <div className="relative h-56 mx-4  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2009087.8701314502!2d122.97225055169233!3d10.421594034631806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9984c94544b25%3A0x13b146f5601ecc3d!2sVismotor%20Corporation!5e0!3m2!1sen!2sph!4v1715791361804!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-6">
            <div className="flex">
              <h5 className="block mb-2 mr-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                VISMOTOR TALAMBAN
              </h5>
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              8WJW+H9M, A. C. Cortes Ave, Mandaue City, 6014 Cebu
            </p>

            <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">call</span>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            09232323
            </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default contact;
