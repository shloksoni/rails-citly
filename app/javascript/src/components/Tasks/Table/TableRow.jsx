import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TableRow = ({ data, pinUrl, openShortenedLink }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td className="pl-6 py-4 text-center cursor-pointer">
            <i
              onClick={() => pinUrl(rowData.id, rowData.status)}
              className={classnames(
                "transition duration-300 ease-in-out text-2xl hover:text-bb-yellow p-1",
                {
                  "text-bb-border ri-star-line": rowData.status !== "pinned",
                },
                {
                  "text-white text-bb-yellow ri-star-fill":
                    rowData.status === "pinned",
                }
              )}
            ></i>
          </td>

          <td className="px-6 py-4 overflow-hidden text-opacity-50 text-sm font-medium leading-5 whitespace-no-wrap text-bb-purple">
            <div className="w-40">
              <a href={rowData.url} rel="noreferrer" target="_blank">
                {rowData.url}
              </a>
            </div>
          </td>

          <td
            className="px-6 py-4 text-sm font-medium leading-5
                        text-bb-gray-600 whitespace-no-wrap hover:text-bb-purple cursor-pointer"
            onClick={() => openShortenedLink(rowData.shortened)}
          >
            {window.location.href + rowData.shortened}
          </td>
          <td
            className="px-6 py-4 text-sm font-medium leading-5
                        text-bb-gray-600 whitespace-no-wrap"
          >
            {rowData.clicks}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableRow;
