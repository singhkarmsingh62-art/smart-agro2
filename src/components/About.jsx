import React, { useState } from "react";

export default function About() {
 

  const sectionStyle =
    "flex flex-col md:flex-row items-center justify-between gap-6 bg-orange-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 max-w-4xl mx-auto";

  return (
    <div className="bg-orange-100 mt-10 min-h-screen">

      
      <div className="pt-24 px-4 space-y-10 bg-white pb-10">

        
        <section className={sectionStyle}>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl text-orange-500 font-bold">
              About Smart Agro
            </h1>
            <p className="text-gray-600 mt-4">
              SMAT Agro is an innovative agriculture company dedicated to empowering farmers through smart, sustainable, and technology-driven solutions. We combine modern techniques with practical farming knowledge to improve productivity and efficienc
            </p>
          </div>

          <img
            src="https://tse2.mm.bing.net/th/id/OIP.TA_jI4GgM1D3NtN7K0l-IAHaHa?pid=Api&P=0&h=180"
            alt="about"
            className="w-40 h-40"
          ></img>
        </section>

        


        <section className={sectionStyle}>
          <div className="flex-1">
            <h1 className="text-3xl text-orange-500 font-bold">
              Our Mission
            </h1>
            <p className="text-gray-600 mt-4">
              Our mission is to make agriculture smarter, more profitable, and environmentally sustainable by providing farmers with reliable tools, knowledge, and support.
            </p>
          </div>

          <img
            src="https://tse2.mm.bing.net/th/id/OIP.PKOAg6ynjJeyH1zjdOsxSAHaGI?pid=Api&P=0&h=180"
            alt="mission"
            className="w-40 h-40"
          />
        </section>

        


        <section className={sectionStyle}>
          <div className="flex-1">
            <h1 className="text-3xl text-orange-500 font-bold">
              What We Offer
            </h1>

            <ul className="list-disc pl-5 mt-4 text-gray-600">
              <li>Farming tools</li>
              <li>Tractor info</li>
              <li>Smart techniques</li>
            </ul>
          </div>

          <img
            src="https://tse3.mm.bing.net/th/id/OIP.oIJQw8dGScOoGmAynUKYjAHaHh?pid=Api&P=0&h=180"
            alt="offer"
            className="w-40 h-40"
          />
        </section>

        

        <section className={sectionStyle}>
          <div className="flex-1">
            <h1 className="text-3xl text-orange-500 font-bold">
              Why Choose Us
            </h1>
<p>
  Choose SMAT Agro for our commitment to innovation, quality, and farmer success—we deliver practical solutions that create real results
</p>
            <ul className="list-disc pl-5 mt-4 text-gray-600">
              <li>Reliable</li>
              <li>User friendly</li>
              <li>Affordable</li>
            </ul>
          </div>

          <img
            src="https://tse4.mm.bing.net/th/id/OIP.f-ENH5fxEJv0Po86fEuDgAHaE8?pid=Api&P=0&h=180"
            alt="why"
            className="w-40 h-40"
          />
        </section>

      </div>




    </div>
  );
}