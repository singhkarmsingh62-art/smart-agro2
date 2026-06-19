import React, { useState } from "react";

const ServicePage = () => {
  const [machineName, setMachineName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState(false);

  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!machineName || !description) {
      alert("Please fill all required fields");
      return;
    }

    const formData = {
      machineName,
      description,
      image,
    };

    console.log(formData);

    setSuccess(true);
    setMachineName("");
    setDescription("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="mt-10">
      <div
        className="min-h-screen shadow-lg bg-orange-50 flex items-center justify-center p-4 bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565647952915-9644fcd446a4?q=80&w=870&auto=format&fit=crop')",
        }}
      >
       

        
        <div className="flex flex-col md:flex-row gap-6 mt-20 w-full max-w-5xl">

          
          <div className="bg-white shadow-2xl rounded-2xl p-8 w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-orange-500 text-center mb-6">
              Agro-Smart Service Request
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Machine Name
                </label>
                <input
                  type="text"
                  value={machineName}
                  onChange={(e) => setMachineName(e.target.value)}
                  placeholder="Enter machine name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Problem Description
                </label>
                <textarea
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the problem..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50"
                />

                {preview && (
                  <img
                    src={preview}
                    alt="preview"
                    className="mt-3 w-full h-40 object-cover rounded-lg border"
                  />
                )}
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition"
              >
                Submit Request
              </button>
            </form>

            {success && (
              <p className="text-green-600 text-center mt-4">
                ✅ Request Submitted Successfully!
              </p>
            )}
          </div>

          
          <div className="bg-white shadow-2xl rounded-2xl p-4 w-full md:w-1/2 flex flex-col justify-center">
           

            <div className="space-y-9 text-gray-700 mb-7 mt-5 text-lg">
                 <h2 className="text-3xl font-bold  text-orange-500 text-center ">
              Contact Us
            </h2>
              <p>
                📞 <span className="font-semibold ">Phone:</span> +91 77174-47908
              </p>
              <p>
                📧 <span className="font-semibold">Email:</span> singhkarmsingh62@gmail.com
              </p>
              <p>
                📍 <span className="font-semibold">Address:</span>Ferozepur cantt Punjab, India
              </p>
              <p>
                ⏰ <span className="font-semibold">Working Hours:</span> 9 AM – 6 PM
              </p>
            

            <div className="mt-6">
             <button
  onClick={() => window.location.href = "tel:+911234567890"}
  className="w-full cursor-pointer bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition"
>
  Get Support
</button>

<button
  onClick={() => window.open("https://wa.me/911234567890", "_blank")}
  className="w-full bg-orange-400 cursor-pointer mt-5 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition"
>
  Chat on WhatsApp
</button>
</div>


            </div>
          </div>
        </div>
      </div>

      </div>
  );
};

export default ServicePage;