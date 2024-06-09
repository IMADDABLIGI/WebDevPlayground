import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend} from 'recharts'
import "./PieReChart.css"

const data = [
    { name: 'WINS', wins: 15 },
    { name: 'Matches', wins: 45 },
  ];

const COLORS = ['purple', '#775C9E',];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className='pie-text'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function PieReChart() {
  return (
    <div className="piechart">
      <ResponsiveContainer width="100%" height="100%">
          <PieChart width={300} height={300}>
              <Pie 
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="wins"
              >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
              <Legend
                iconSize={10} // Sets the size of the legend icons
                layout="horizontal" // Sets the layout of the legend to horizontal
                align="center" // Centers the legend
                verticalAlign="bottom" // Positions the legend at the bottom
                labelStyle={{ fontSize: '10px' }} // Sets the font-size of the legend labels
                wrapperStyle={{left:10}}
              />
          </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieReChart
