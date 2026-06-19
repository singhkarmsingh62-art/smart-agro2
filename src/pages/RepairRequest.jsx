import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Wrench, ShieldCheck, Clock } from 'lucide-react';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function RepairRequest() {
  const [formData, setFormData] = useState({
    machineName: '',
    problem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    alert('Repair request submitted successfully! Tracking ID: REQ' + Math.floor(Math.random() * 1000));
    setFormData({ machineName: '', problem: '' });
  };

  return (
    <div className="bg-neutral-50 min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl mb-4 shadow-sm transform -rotate-6">
            <Wrench size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">Need a Repair?</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Describe the issue with your machinery, upload a picture, and our expert service providers will get in touch shortly.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-100">
          <div className="flex flex-col md:flex-row">
            
            {/* Form Section */}
            <div className="w-full md:w-3/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Service Request Details</h2>
              <form onSubmit={handleSubmit}>
                <InputField 
                  label="Machine Name / Model" 
                  id="machineName" 
                  placeholder="e.g., Mahindra 575 DI Tractor" 
                  value={formData.machineName}
                  onChange={(e) => setFormData({...formData, machineName: e.target.value})}
                  required
                />
                
                <InputField 
                  label="Describe the Problem" 
                  id="problem" 
                  textarea 
                  rows={4}
                  placeholder="What seems to be the issue? e.g., Engine making a rattling noise when starting up..." 
                  value={formData.problem}
                  onChange={(e) => setFormData({...formData, problem: e.target.value})}
                  required
                />

                <div className="mb-8">
                  <label className="text-sm font-semibold text-neutral-700 ml-1 mb-2 block">Upload Image (Optional)</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group">
                    <div className="space-y-2 text-center">
                      <div className="mx-auto h-12 w-12 text-neutral-400 group-hover:text-green-500 transition-colors flex items-center justify-center rounded-full bg-neutral-100 group-hover:bg-green-50">
                        <ImageIcon size={24} />
                      </div>
                      <div className="flex text-sm text-neutral-600 justify-center">
                        <span className="relative font-bold text-green-600 bg-transparent rounded-md hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                          Upload a file
                        </span>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-neutral-400 font-medium">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full py-4 text-lg font-bold shadow-green-500/30 shadow-lg">
                  Submit Request
                </Button>
              </form>
            </div>

            {/* Sidebar Promo */}
            <div className="w-full md:w-2/5 bg-green-600 p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
                <Wrench size={200} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Service?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg shrink-0 backdrop-blur-sm">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight mb-1">Fast Response Time</h4>
                      <p className="text-green-50 text-sm font-medium">Get a quote within 2 hours of submitting your request.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg shrink-0 backdrop-blur-sm">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight mb-1">Verified Experts</h4>
                      <p className="text-green-50 text-sm font-medium">All our repair partners are certified and background checked.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg shrink-0 backdrop-blur-sm">
                      <Wrench size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight mb-1">Genuine Parts</h4>
                      <p className="text-green-50 text-sm font-medium">We ensure ONLY original manufacturer parts are used.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
