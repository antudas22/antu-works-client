import React from 'react';

const ReviewItemRow = ({review}) => {
    const {reviewer, photoURL, text} = review;
    return (
        <div>
            <tr>
        <th>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoURL} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{reviewer}</div>
            </div>
          </div>
        </td>
        <td>
          {text}
        </td>
      </tr>
        </div>
    );
};

export default ReviewItemRow;