// eslint-disable-next-line no-unused-vars
import React from "react";

const Dnb = () => {
  return (
    <section className="text-center mb-12 px-4">
      <h3 className="text-3xl font-bold mb-10 text-green-800">
        Tour Videos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Video 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <div className="p-4">
            <h4 className="text-2xl font-semibold mb-4 text-center text-green-700">
              Tour of MCH in District Hospital Ballari
            </h4>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dRJbe99Bo8c"
                title="Tour of MCH in District Hospital Ballari"
                allowFullScreen
                aria-label="Video tour of MCH"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Video 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <div className="p-4">
            <h4 className="text-2xl font-semibold mb-4 text-center text-green-700">
              DNB in District Hospital, Ballari
            </h4>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/ihOZil546XA"
                title="DNB in District Hospital, Ballari"
                allowFullScreen
                aria-label="Video overview of DNB program"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dnb;
