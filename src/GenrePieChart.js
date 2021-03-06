//TO DO: How to remove the label when no events exist

import React, { useEffect, useState } from 'react';
import { PieChart, Legend, Pie, Cell, ResponsiveContainer } from 'recharts';

const GenrePieChart = ({events}) => {
  
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setData(() => getData()); }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const data = genres.map((genre) => {
      const value = events.filter(({summary}) => summary.includes(genre)).length;
      return { name: genre, value }
    });
    console.log(data);
    return data;
    
  };

  //additional color options '#c5ecd9', '#bebbbb', '#f6b5ae', '#72e1fa', '#f3eb4f', '#9677bc' teal#00C49F
  const COLORS = ['#a8a5df', '#83a6ed', '#8dd1e1', '#82ca9d', '#d0ed57'];

    return (
      <ResponsiveContainer height={400}>
        <PieChart>
          <Legend
            verticalAlign='top'
            layout='horizontal'
            align='center'
          />
          <Pie
            data={data}
            labelLine={false}
            // option for a percentage label vs absolute event count -> label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            label={({ name, value }) => `${name} ${value}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                name={entry.name} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}

export default GenrePieChart;