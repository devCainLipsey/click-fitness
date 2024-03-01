import React from "react";

const MembershipTable = ({ plan, features, price, programs }) => {
  return (
    <div className="max-w-full mx-auto bg-black p-8 rounded-lg border border-red-500 text-xl">
      <h2 className="text-4xl font-bold text-center mb-8">
        Membership Details
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-red-500 text-white text-2xl">
              <th className="py-10 px-12 border-2 border-red-500">
                Membership Plan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-black">
              <td className="py-10 px-12 border-2 border-red-500">{plan}</td>
            </tr>
          </tbody>
          <thead>
            <tr className="bg-red-500 text-white text-2xl">
              <th className="py-10 px-12 border-2 border-red-500">
                Special Features
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-black">
              <td className="py-10 px-12 border-2 border-red-500">
                {features}
              </td>
            </tr>
          </tbody>
          <thead>
            <tr className="bg-red-500 text-white text-2xl">
              <th className="py-10 px-12 border-2 border-red-500">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-black">
              <td className="text-center py-10 px-12 border-2 border-red-500">
                {price}
              </td>
            </tr>
          </tbody>
          <thead>
            <tr className="bg-red-500 text-white text-2xl">
              <th className="py-10 px-12 border-2 border-red-500">
                Programs Offered
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-black">
              <td className="py-10 px-12 border-2 border-red-500">
                {programs}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembershipTable;
