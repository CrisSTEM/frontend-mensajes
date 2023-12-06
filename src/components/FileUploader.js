import React from 'react';
import * as XLSX from 'xlsx';

function FileUploader({ onFileUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      // Procesar workbook aquí o pasar a la función onFileUpload
      onFileUpload(wb);
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow-md">
      <label className="block">
        <span className="sr-only">Cargar archivo Excel</span>
        <input 
          type="file" 
          onChange={handleFileChange} 
          accept=".xlsx, .xls"
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:border-0 file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />
      </label>
    </div>
  );
}

export default FileUploader;
