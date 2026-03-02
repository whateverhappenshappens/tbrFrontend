import React from "react";
import AdminPanel from "./AdminPanel";

const CouponManagementViewer: React.FC = () => {
  return (
    <div className="p-6 w-full min-h-screen bg-gray-50">
      {/* the admin panel handles all coupon UI and state */}
      <AdminPanel />
    </div>
  );
};

export default CouponManagementViewer;