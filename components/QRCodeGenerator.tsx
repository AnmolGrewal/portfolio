'use client';
import { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Select from 'react-select';

export default function QRCodeGenerator() {
  const colors = [
    'bg-blue-100 dark:bg-blue-900',
    'bg-green-100 dark:bg-green-900',
    'bg-purple-100 dark:bg-purple-900',
    'bg-pink-100 dark:bg-pink-900',
    'bg-yellow-100 dark:bg-yellow-900',
    'bg-orange-100 dark:bg-orange-900',
  ];

  type Profile = {
    title: string;
    baseUrl: string;
    params: { key: string; value: string }[];
  };

  const [profiles, setProfiles] = useState<Profile[]>(() => {
    if (typeof window !== 'undefined') {
      const savedProfiles = JSON.parse(localStorage.getItem('qr-profiles') || '[{"title":"","baseUrl": "", "params": []}]');
      // Add title field to any existing profiles that don't have it
      return savedProfiles.map((profile: any) => ({
        title: profile.title || '',
        baseUrl: profile.baseUrl,
        params: profile.params,
      }));
    }
    return [{ title: '', baseUrl: '', params: [] }];
  });

  const [currentProfile, setCurrentProfile] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('qr-current-profile') || '0');
    }
    return 0;
  });

  const [title, setTitle] = useState(() => {
    if (typeof window !== 'undefined' && profiles[currentProfile]) {
      return profiles[currentProfile].title || '';
    }
    return '';
  });

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

  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updatedProfiles = [...profiles];
    updatedProfiles[currentProfile] = { title, baseUrl, params };
    setProfiles(updatedProfiles);
  }, [title, baseUrl, params]);

  useEffect(() => {
    localStorage.setItem('qr-baseUrl', baseUrl);
  }, [baseUrl]);

  useEffect(() => {
    localStorage.setItem('qr-params', JSON.stringify(params));
  }, [params]);

  useEffect(() => {
    localStorage.setItem('qr-profiles', JSON.stringify(profiles));
  }, [profiles]);

  useEffect(() => {
    localStorage.setItem('qr-current-profile', currentProfile.toString());
  }, [currentProfile]);

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

  const handleBaseUrlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newUrl = e.target.value;

    // Check if the URL contains query parameters
    if (newUrl.includes('?')) {
      // If it has query parameters, use parseUrl to extract them
      parseUrl(newUrl);
    } else {
      // If it's just a base URL without parameters, set it directly
      setBaseUrl(newUrl);
    }
  };

  const parseUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      const newBaseUrl = urlObj.origin + urlObj.pathname;

      // Get parameters from the URL
      const urlParams = Array.from(urlObj.searchParams.entries());

      if (urlParams.length > 0) {
        // If the URL has parameters, use those
        const sortedParams = urlParams.sort((a, b) => a[0].localeCompare(b[0]));
        setBaseUrl(newBaseUrl);
        setParams(sortedParams.map(([key, value]) => ({ key, value })));
      } else {
        // If the URL doesn't have parameters, just set the base URL
        setBaseUrl(newBaseUrl);
      }
    } catch (e) {
      // If it's not a valid URL, just set the raw input as the base URL
      setBaseUrl(url);
    }
  };

  const exportProfiles = () => {
    const dataStr = JSON.stringify(profiles);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'qr-profiles.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importProfiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files![0], 'UTF-8');
    fileReader.onload = (e) => {
      const importedProfiles = JSON.parse(e.target?.result as string);
      setProfiles([...profiles, ...importedProfiles]);
    };
  };

  const selectOptions = [
    ...profiles.map((profile, index) => ({
      value: index,
      label:
        profile.title ||
        (profile.baseUrl
          ? profile.baseUrl + (profile.params.length ? '?' + profile.params.map((p) => `${p.key}=${p.value}`).join('&') : '')
          : profile.params.length
          ? '?' + profile.params.map((p) => `${p.key}=${p.value}`).join('&')
          : `[Empty Profile ${index + 1}]`),
      url: profile.baseUrl
        ? profile.baseUrl + (profile.params.length ? '?' + profile.params.map((p) => `${p.key}=${p.value}`).join('&') : '')
        : profile.params.length
        ? '?' + profile.params.map((p) => `${p.key}=${p.value}`).join('&')
        : '',
    })),
    { value: profiles.length, label: '+ Add New Profile', url: '' },
  ];

  const copyToClipboard = () => {
    const url = generateUrl();
    navigator.clipboard
      .writeText(url)
      .then(() => {
        // Show toast notification
        if (toastTimeoutRef.current) {
          clearTimeout(toastTimeoutRef.current);
        }
        setShowToast(true);
        toastTimeoutRef.current = setTimeout(() => {
          setShowToast(false);
        }, 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy URL: ', err);
      });
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold mb-8">QR Code Generator</h1>

      <div className="flex gap-2">
        <button onClick={exportProfiles} className="px-3 py-2 bg-green-500 text-white rounded">
          Export
        </button>
        <label className="px-3 py-2 bg-yellow-500 text-white rounded cursor-pointer">
          Import
          <input type="file" accept=".json" className="hidden" onChange={importProfiles} />
        </label>
        <button
          onClick={() => {
            if (profiles.length > 1) {
              const newProfiles = profiles.filter((_, i) => i !== currentProfile);
              setProfiles(newProfiles);
              setCurrentProfile(0);
            }
          }}
          className="px-3 py-2 bg-red-500 text-white rounded"
        >
          X
        </button>

        <button
          onClick={() => {
            const updatedProfiles = [...profiles];
            updatedProfiles[currentProfile] = { title: '', baseUrl: '', params: [] };
            setProfiles(updatedProfiles);
            setTitle('');
            setBaseUrl('');
            setParams([]);
          }}
          className="px-3 py-2 bg-blue-500 text-white rounded"
        >
          ↺
        </button>
      </div>

      <div className="flex gap-2 mb-4 items-center max-w-96 w-96">
        <Select
          value={selectOptions.find((option) => option.value === currentProfile)}
          onChange={(option) => {
            const index = option?.value || 0;
            if (index === profiles.length) {
              setProfiles([...profiles, { title: '', baseUrl: '', params: [] }]);
              setCurrentProfile(profiles.length);
              setTitle('');
              setBaseUrl('');
              setParams([]);
            } else {
              setCurrentProfile(index);
              setTitle(profiles[index].title || '');
              setBaseUrl(profiles[index].baseUrl);
              setParams(profiles[index].params);
            }
          }}
          options={selectOptions}
          className="flex-grow"
          classNamePrefix="react-select"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              neutral0: 'rgb(31 41 55)', // dark:bg-gray-800
              neutral80: 'white', // text color
              primary25: 'rgb(55 65 81)', // hover state
              primary: 'rgb(59 130 246)', // selected state
            },
          })}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              minHeight: '42px',
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              height: 'auto',
              padding: '8px 12px',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              // Add special styling for the "Add New Profile" option
              ...(state.data.value === profiles.length && {
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'rgb(59 130 246)',
              }),
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              zIndex: 10,
              maxWidth: '96rem',
              width: 'max-content',
              minWidth: '100%',
            }),
            menuList: (baseStyles) => ({
              ...baseStyles,
              maxHeight: '200px',
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              maxWidth: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }),
          }}
          formatOptionLabel={(option) => {
            // Truncate long URLs for display
            const label = option.label;
            const maxLength = 50;
            return label.length > maxLength ? `${label.substring(0, maxLength)}...` : label;
          }}
        />
      </div>

      {/* Add title input with centered label */}
      <div className="w-96 mb-2">
        <label className="block text-center mb-1 font-medium">Profile Title</label>
        <input
          type="text"
          placeholder="Profile Title (optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 w-full"
        />
      </div>

      <textarea
        placeholder="Base URL"
        value={baseUrl}
        onChange={handleBaseUrlChange}
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

      {baseUrl && baseUrl.trim() !== '' && (
        <div className="mt-4 flex flex-col items-center">
          <QRCodeSVG value={generateUrl()} size={256} />
          {title && <h2 className="mt-2 text-xl font-semibold">{title}</h2>}
          <div className="mt-2 flex items-center">
            <p className="text-sm break-all max-w-[600px] text-center">
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
            <button
              onClick={copyToClipboard}
              className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              title="Copy URL to clipboard"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}
