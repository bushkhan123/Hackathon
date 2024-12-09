// @/app/components/ui/sheet.tsx
import React from "react";

interface SheetProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Sheet: React.FC<SheetProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="w-1/3 bg-white h-full shadow-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export const SheetHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="p-4 border-b">{children}</div>;

export const SheetTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="text-lg font-bold">{children}</h2>;

export const SheetDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <p className="text-sm text-gray-600">{children}</p>;

export const SheetContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="p-4">{children}</div>;

export const SheetTrigger: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
}> = ({ children, onClick }) => (
  <button onClick={onClick} className="text-blue-500 hover:underline">
    {children}
  </button>
);
