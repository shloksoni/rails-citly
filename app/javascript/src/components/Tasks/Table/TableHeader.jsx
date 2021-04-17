import React from "react";

const TableHeader = () => {
  const title = `Tasks`;

  return (
    <thead>
      <tr>
        <th className="w-1"></th>
        <th
          className="px-6 py-3 text-xs font-bold
        leading-4 tracking-wider text-left text-bb-gray-600
        text-opacity-50 uppercase bg-gray-50"
        >
          {title}
        </th>

        <th
          className="px-6 py-3 text-sm font-bold leading-4
          tracking-wider text-left text-bb-gray-600
          text-opacity-50 bg-gray-50"
        >
          Assigned To
        </th>

        <th
          className="pl-6 py-3 text-sm font-bold leading-4
          tracking-wider text-center text-bb-gray-600
          text-opacity-50 bg-gray-50"
        >
          Clicks
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
