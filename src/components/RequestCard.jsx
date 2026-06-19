import React from 'react';
import { Wrench, Calendar, ChevronRight } from 'lucide-react';
import Button from './Button';

export default function RequestCard({ request }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Pending':
      default:
        return 'bg-amber-100 text-amber-700 border-amber-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-5">
        
        <div className="hidden sm:block w-24 h-24 rounded-xl bg-neutral-100 overflow-hidden shrink-0">
          {request.image ? (
            <img src={request.image} alt={request.machineName} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 bg-neutral-50 border border-neutral-200 rounded-xl">
              <Wrench size={24} className="opacity-50 mb-1" />
              <span className="text-[10px] uppercase font-bold tracking-wider">No Image</span>
            </div>
          )}
        </div>

        <div className="flex-grow flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{request.id}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusColor(request.status)}`}>
                  {request.status}
                </span>
              </div>
              <h3 className="font-bold text-lg text-neutral-900">{request.machineName}</h3>
            </div>
          </div>
          
          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{request.problem}</p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
              <Calendar size={14} />
              <span>Requested on {new Date(request.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            
            <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 !p-1.5 rounded-lg -mr-1.5">
              <span className="text-sm font-semibold mr-1">View Details</span>
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
