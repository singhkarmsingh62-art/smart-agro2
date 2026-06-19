import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import RequestCard from '../components/RequestCard';
import { repairRequests } from '../data/dummyData';

export default function MyRequests() {
  const [filter, setFilter] = useState('All');

  const filteredRequests = repairRequests.filter(req => 
    filter === 'All' ? true : req.status === filter
  );

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">My Repair Requests</h1>
          <p className="text-neutral-600">Track the status of your machinery repairs here.</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2 text-neutral-500 font-bold w-full md:w-auto">
            <Filter size={18} />
            <span>Filter by Status:</span>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {['All', 'Pending', 'In Progress', 'Completed'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-xl whitespace-nowrap font-bold text-sm transition-colors ${
                  filter === status 
                    ? "bg-green-600 text-white" 
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {filteredRequests.length > 0 ? (
          <div className="space-y-4">
            {filteredRequests.map(request => (
              <RequestCard key={request.id} request={request} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-neutral-100 shadow-sm mt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 text-neutral-400 rounded-2xl mb-4">
              <Filter size={32} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">No requests found</h3>
            <p className="text-neutral-500">You don't have any requests matching "{filter}".</p>
          </div>
        )}

      </div>
    </div>
  );
}
