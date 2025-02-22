import React from 'react';
import { Clock, Mail, Users } from 'lucide-react';
import { Inquiry } from '../types';

interface InquiryListProps {
  inquiries: Inquiry[];
}

export const InquiryList: React.FC<InquiryListProps> = ({ inquiries }) => {
  const getStatusColor = (status: Inquiry['status']) => {
    switch (status) {
      case 'new':
        return 'bg-green-100 text-green-800';
      case 'inProgress':
        return 'bg-yellow-100 text-yellow-800';
      case 'responded':
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-4">
      {inquiries.map((inquiry) => (
        <div key={inquiry.id} className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{inquiry.name}</h3>
              <p className="text-gray-600">{inquiry.destination}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(inquiry.status)}`}>
              {inquiry.status}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{inquiry.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{inquiry.travelDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">{inquiry.groupSize} people</span>
            </div>
          </div>

          <p className="mt-4 text-gray-700">{inquiry.message}</p>
          
          <div className="mt-4 text-sm text-gray-500">
            Received: {new Date(inquiry.createdAt).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};