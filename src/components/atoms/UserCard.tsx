import React from 'react';
import { Button } from '../atoms/Button';

interface UserCardProps {
  name: string;
  role: string;
  avatarUrl: string;
  onProfileClick: () => void;
  className?: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  role,
  avatarUrl,
  onProfileClick,
  className = '',
}) => {
  return (
    <div
      className={`
        flex items-center gap-4 p-4 
        bg-white rounded-lg shadow-md 
        hover:shadow-lg transition-shadow duration-200
        ${className}
      `}
    >
      {/* Avatar Section */}
      <div className="flex-shrink-0">
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-100"
        />
      </div>

      {/* User Details Section */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {name}
        </h3>
        <p className="text-sm text-gray-600 truncate">
          {role}
        </p>
      </div>

      {/* Action Button Section */}
      <div className="flex-shrink-0">
        <Button
          variant="outlined"
          onClick={onProfileClick}
          aria-label={`View ${name}'s profile`}
        >
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
