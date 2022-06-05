import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const GenrePieChart = ({events}) => {
  
  const [data, setData] = useState([]);

  useEffect(() => { setData(() => getData()); }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) => {
        if (summary.split(" ").includes(genre)) {
          return true;
        }
        if (summary.indexOf(genre) >= 0) {
          return true;
        }
        return false;
      }).length;
      return { name: genre, value };
    })
    return data.filter((data) => data.value >= 1);
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

/*const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};*/
    return (
      <ResponsiveContainer height='400'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
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