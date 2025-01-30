// eslint-disable-next-line no-unused-vars
import React from "react";

const Dnb = () => {
  return (
    <div>
      <section className="text-center mb-8">
        <h3 className="text-3xl font-semibold mb-6">Tour Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
            <div className="p-4">
              <h4 className="text-2xl font-semibold mb-4 text-center">
                Tour of MCH in District Hospital Ballari
              </h4>
              <iframe
                src="https://www.youtube.com/embed/dRJbe99Bo8c"
                title="YouTube video player"
                allowFullScreen
                className="w-full h-64 rounded-lg"
              />
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
            <div className="p-4">
              <h4 className="text-2xl font-semibold mb-4 text-center">
                DNB in District Hospital, Ballari
              </h4>
              <iframe
                src="https://www.youtube.com/embed/ihOZil546XA"
                title="YouTube video player"
                allowFullScreen
                className="w-full h-64 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dnb;
