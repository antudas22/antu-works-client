import React from 'react';

const ReviewItemRow = ({review}) => {
    const {_id, reviewer, photoURL, text} = review;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this item?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }

    return (
        <div>
            <tr>
        <th>
            <label>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
            </label>
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