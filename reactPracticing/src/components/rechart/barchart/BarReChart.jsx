import React from 'react'
import {
        BarChart, Bar,
        XAxis, YAxis,
        CartesianGrid,
        Tooltip, Legend,
        ResponsiveContainer} from 'recharts'
import "./BarChart.css"


const dataLevel = [
    {
        day: "01",
        wins: 2,
        lost: 0,
    },
    {
        day: "02",
        wins: 5,
        lost: 2,
    },
    {
        day: "03",
        wins: 0,
        lost: 1,
    },
    {
        day: "04",
        wins: 7,
        lost: 3,
    },
    {
        day: "05",
        wins: 3,
        lost: 5,
    },
    {
        day: "06",
        wins: 0,
        lost: 0,
    },
    {
        day: "07",
        wins: 0,
        lost: 0,
    },
    {
        day: "08",
        wins: 5,
        lost: 2,
    },
    {
        day: "09",
        wins: 7,
        lost: 4,
    },
    {
        day: "10",
        wins: 6,
        lost: 5,
    },
    {
        day: "11",
        wins: 7,
        lost: 8,
    },
    {
        day: "12",
        wins: 5,
        lost: 4,
    },
    {
        day: "13",
        wins: 2,
        lost: 2,
    },
    {
        day: "14",
        wins: 10,
        lost: 5,
    },
    {
        day: "15",
        wins: null,
        lost: null,
    },
]


function BarREChart() {
  return (
    <div className='barchart'>
      <ResponsiveContainer height="100%" width="100%">
        <BarChart width={500} height={500} data={dataLevel}>
            <Bar dataKey="wins" fill="#8884d8" stroke='#250939'/>
            <Bar dataKey="lost" fill="#250939" stroke='#8884d8'/>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="rgb(104, 104, 104, 0.3)" strokeDasharray="5 5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarREChart
