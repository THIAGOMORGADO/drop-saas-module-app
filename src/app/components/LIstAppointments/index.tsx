import { appointmentList } from "@/app/utils/appointmentList";
import { SheetItem } from "../SheetItem";

export default function ListAppointments() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-5000 uppercase tracking-wider">Status</th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {appointmentList.map((link, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    {link.profileImage ? (
                      <img src={link.profileImage} alt={link.name} className="h-10 w-10 rounded-full" />
                    ) : (
                      <link.icon className="h-10 w-10 text-gray-500" />
                    )}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{link.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center hidden sm:flex">
                {link.status !== 'Agendado' ? (
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Agendado
                  </span>
                ) : null}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <SheetItem />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}