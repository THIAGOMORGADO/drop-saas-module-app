'use client'

export default function DashboardPage() {
  return (
    <div>
      <div className="flex flex-col l sm:flex-col md:flex-row gap-4 sm:px-20 pl-4 pr-4">
        {/* rea 1 */}
        <div className="w-full md:w-full bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Área 1</h2>
          <p>Conteúdo da primeira área</p>
        </div>
      </div>
    </div>
  )
}