import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#635C51', '#ABA9C3'];

const getData = (events) => {
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
  const data = genres.map((genre) => {
      const value = events.filter(({ summary }) =>
          summary.includes(genre)).length;
          return { name: genre, value };
      });
      return data;
};

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setData(() => getData(events));
    }, [events]);

  return (
    <ResponsiveContainer height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          labelLine={false}
          outerRadius={80}
          label={({ percent }) => `${(percent * 100).toFixed(0)} %`}
        >
          {data.map((entry, index) => ( 
              <Cell key={`cell-${index}`} fill={colors[index]} /> ))}
         
        </Pie>
        <Legend verticalAlign="bottom" layout="horizontal"  formatter={(value, entry, index) => <span style={{ color: entry.color }}>{entry.payload.name}</span>} />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;