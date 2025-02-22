import React from 'react';
import { MessageSquare, Heart, Share2 } from 'lucide-react';
import { TopPost } from '../types';

interface TopPostCardProps {
  post: TopPost;
}

export const TopPostCard: React.FC<TopPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <p className="text-gray-800 line-clamp-2">{post.content}</p>
      <div className="flex items-center gap-6 mt-4 text-gray-500">
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4" />
          <span className="text-sm">{post.likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm">{post.comments}</span>
        </div>
        <div className="flex items-center gap-1">
          <Share2 className="w-4 h-4" />
          <span className="text-sm">{post.shares}</span>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">{new Date(post.date).toLocaleDateString()}</p>
    </div>
  );
};