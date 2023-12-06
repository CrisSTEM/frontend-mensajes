import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import * as XLSX from 'xlsx';

function App() {
  const [data, setData] = useState([]);

  const handleFileUpload = (workbook) => {
    // Procesar workbook y establecer datos
    // Por ejemplo, leer la primera hoja y establecer datos
    const wsname = workbook.SheetNames[0];
    const ws = workbook.Sheets[wsname];
    const data = XLSX.utils.sheet_to_json(ws);
    setData(data);
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">Cargar Archivo Excel</h1>
      <div className="mb-8">
        <FileUploader onFileUpload={handleFileUpload} />
      </div>
      {data.length > 0 && (
        <div className="overflow-x-auto shadow-lg">
          <table className="min-w-full bg-white divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                {Object.keys(data[0]).map((header) => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
  
}

export default App;
