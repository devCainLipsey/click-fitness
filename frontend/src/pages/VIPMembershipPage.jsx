import React, { useState } from "react";
import MembershipTable from "../components/MembershipTable";
import OverlayModule from "../components/OverlayModule";

const VIPMembershipPage = () => {
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
        <p className="text-center text-3xl text-yellow-400">VIP</p>
      </>
    ),
    features: (
      <>
        <li>Access to exclusive VIP gym facilities</li>
        <li>24/7 unlimited access with a personal concierge</li>
        <li>Priority locker room access with personal attendant</li>
        <li>
          Access to VIP fitness classes and personalized training sessions
        </li>
        <li>Complimentary spa treatments</li>
        <li>Exclusive access to VIP lounges and amenities</li>
        <li>Reserved parking spaces</li>
        <li>Private events and celebrity guest appearances</li>
      </>
    ),
    price: "$100/Month",
    programs: (
      <>
        <li>Bodyweight Strength</li>
        <li>Outdoor Adventure Training</li>
        <li>Personal Trainer</li>
      </>
    ),
  };

  return (
    <section className="min-h-screen py-12 border-t-2 border-red-500 bg-black relative flex flex-col items-center">
      <h1 className="text-6xl text-center font-bold pb-3 mt-6">
        <span className="text-yellow-400">VIP</span> Membership
      </h1>
      <div className="flex-grow flex justify-center items-center">
        <MembershipTable {...membershipData} />
      </div>
      <button
        className="mb-32 border-2 border-red-500 bg-black text-white  text-2xl font-bold py-4 px-8 rounded-xl hover:bg-red-700 hover:border-gray-950 transition duration-200"
        onClick={() => setShowConfirmation(true)}
      >
        Buy VIP Plan
      </button>
      <OverlayModule
        show={showConfirmation}
        onConfirmPurchase={handleConfirmPurchase}
        onCancel={handleCancelPurchase}
      />
    </section>
  );
};

export default VIPMembershipPage;
