import React from 'react';

const ReportCard = ({ title, data }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.date} - {item.material} - {item.weight} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportCard;
