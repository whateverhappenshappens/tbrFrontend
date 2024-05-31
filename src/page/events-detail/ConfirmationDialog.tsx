import React from 'react';

interface ConfirmationDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed  inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-[40px] rounded-lg shadow-lg text-center">
        <div className="mb-12 text-3xl">{message}</div>
        <div className="flex justify-around">
          <button
            className="bg-red-500 hover:bg-red-700 text-white text-2xl font-bold py-4 px-12 rounded"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-4 px-12 rounded text-2xl"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
