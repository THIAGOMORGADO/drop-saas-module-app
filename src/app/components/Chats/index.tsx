'use client'
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, CartesianGrid, XAxis, YAxis, Bar, Rectangle } from "recharts";

export interface ChatsProps {
  data: { name: string; value: number }[];
}

export default function Chats({ data }: ChatsProps) {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <div className="sm:w-auto  items-cente  bg-white rounded-lg shadow-md p-6  md:flex  flex-col">
          <div className="mt-2 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Utilização de Serviços</h3>
            <div className="w-full sm:flex-row justify-between items-center">
              <div className="w-[100%] flex justify-center items-center">
                <PieChart width={300} height={300}>
                  <Pie
                    data={data}
                    cx={150}
                    cy={150}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    <Cell key="cell-0" fill="#222" />
                    <Cell key="cell-1" fill="#fff000" />
                    <Cell key="cell-2" fill="#00ff00" />


                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}