import React from "react";

export function ReportCard({ title, description, showDownload }) {
  const generateDownloadFile = () => {
    const fileContent = `Title: ${title}\nDescription: ${description}`;
    const blob = new Blob([fileContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.txt`; // Name the file dynamically
    link.click();
  };

  return (
    <div className="flex flex-col sm:flex-row items-start justify-between gap-4 p-4 rounded-lg">
      <div className="flex gap-4">
        <div className="mt-1 bg-yellow-100 rounded-full" style={{ width: "30px", height: "30px" }}>
          {/* Applied a fixed width and height to make the background size match the icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-stone-600"
            style={{ margin: "auto" }} // Centering the icon inside the background
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-yellow-600 text-sm">{description}</p>
        </div>
      </div>

      {showDownload && (
        <div className="flex justify-center sm:justify-end w-full mt-4">
          <button
            onClick={generateDownloadFile}
            className="px-4 py-2 bg-yellow-100 text-stone-800 rounded-lg text-sm hover:bg-yellow-200 transition-colors"
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
}
