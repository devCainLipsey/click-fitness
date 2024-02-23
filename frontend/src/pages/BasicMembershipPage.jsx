import React, { useState } from "react";
import MembershipTable from "../components/MembershipTable";
import ConfirmOverlayModule from "../components/ConfirmOverlayModule";

const BasicMembershipPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmPurchase = () => {
    setShowConfirmation(false);
    // Logic after confirming the purchase
    console.log("Purchase Confirmed");
  };

  const handleCancelPurchase = () => {
    setShowConfirmation(false);
    // Logic after cancelling the purchase
    console.log("Purchase Cancelled");
  };

  const membershipData = {
    plan: (
      <>
        <p className="text-center text-3xl text-blue-400">Basic</p>
      </>
    ),
    features: (
      <>
        <li>Access to basic gym facilities</li>
        <li>Unlimited access during operating hours</li>
        <li>Locker room access</li>
        <li>Access to basic fitness classes</li>
        <li>Discounts on personal training sessions</li>
      </>
    ),
    price: "$30/Month",
    programs: (
      <>
        <li>Advanced Strength</li>
        <li>Squat Mastery</li>
        <li>Cable Training</li>
      </>
    ),
  };

  return (
    <section className="min-h-screen py-12 border-t-2 border-red-500 bg-black relative flex flex-col items-center">
      <h1 className="text-6xl text-center font-bold pb-3 mt-6">
        <span className="text-blue-400">Basic</span> Membership
      </h1>
      <div className="flex-grow flex justify-center items-center">
        <MembershipTable {...membershipData} />
      </div>
      <button
        className="mb-32 border-2 border-red-500 bg-black text-white text-2xl font-bold py-4 px-8 rounded-xl hover:bg-red-700 hover:border-gray-950 transition duration-200"
        onClick={() => setShowConfirmation(true)}
      >
        Buy Basic Plan
      </button>
      <ConfirmOverlayModule
        show={showConfirmation}
        onConfirmPurchase={handleConfirmPurchase}
        onCancel={handleCancelPurchase}
      />
    </section>
  );
};

export default BasicMembershipPage;
