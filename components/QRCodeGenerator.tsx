'use client';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function QRCodeGenerator() {
  const colors = [
    'bg-blue-100 dark:bg-blue-900',
    'bg-green-100 dark:bg-green-900',
    'bg-purple-100 dark:bg-purple-900',
    'bg-pink-100 dark:bg-pink-900',
    'bg-yellow-100 dark:bg-yellow-900',
    'bg-orange-100 dark:bg-orange-900',
  ];

  const [baseUrl, setBaseUrl] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('qr-baseUrl') || '';
    }
    return '';
  });

  const [params, setParams] = useState<{ key: string; value: string }[]>(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('qr-params') || '[]');
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('qr-baseUrl', baseUrl);
  }, [baseUrl]);

  useEffect(() => {
    localStorage.setItem('qr-params', JSON.stringify(params));
  }, [params]);

  const addParam = () => {
    setParams([...params, { key: '', value: '' }]);
  };

  const removeParam = (index: number) => {
    setParams(params.filter((_, i) => i !== index));
  };

  const updateParam = (index: number, key: string, value: string) => {
    const newParams = [...params];
    newParams[index] = { key, value };
    setParams(newParams);
  };

  const generateUrl = () => {
    if (!baseUrl) return '';
    const queryParams = params
      .filter((p) => p.key && p.value)
      .map((p, i) => `${i === 0 ? '?' : '&'}${p.key}=${p.value}`)
      .join('');
    return `${baseUrl}${queryParams}`;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold mb-8">QR Code Generator</h1>
      <textarea
        placeholder="Base URL"
        value={baseUrl}
        onChange={(e) => setBaseUrl(e.target.value)}
        className="p-2 border rounded dark:bg-gray-800 w-96 h-32 resize-none"
      />

      {params.map((param, index) => (
        <div key={index} className={`flex gap-2 p-2 rounded-lg ${colors[index % colors.length]}`}>
          <input
            type="text"
            placeholder="Key"
            value={param.key}
            onChange={(e) => updateParam(index, e.target.value, param.value)}
            className="p-2 border rounded dark:bg-gray-800"
          />
          <input
            type="text"
            placeholder="Value"
            value={param.value}
            onChange={(e) => updateParam(index, param.key, e.target.value)}
            className="p-2 border rounded dark:bg-gray-800"
          />
          <button onClick={() => removeParam(index)} className="px-4 py-2 bg-red-500 text-white rounded">
            -
          </button>
        </div>
      ))}

      <button onClick={addParam} className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Parameter
      </button>

      {baseUrl && (
        <div className="mt-4 flex flex-col items-center">
          <QRCodeSVG value={generateUrl()} size={256} />
          <p className="mt-2 text-sm break-all max-w-[600px] text-center">
            {baseUrl}
            {params
              .filter((p) => p.key && p.value)
              .map((p, index) => (
                <span key={index} className={`${colors[index % colors.length]} px-1 rounded mx-1`}>
                  {index === 0 ? '?' : '&'}
                  {p.key}={p.value}
                </span>
              ))}
          </p>
        </div>
      )}
    </div>
  );
}
