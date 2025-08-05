// import { useState } from "react";
// import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
// import logo from "./assets/download.png";

// function App() {
//   const [trivandrumFile, setTrivandrumFile] = useState(null);
//   const [kochiFile, setKochiFile] = useState(null);
//   const [status, setStatus] = useState("");

//   const handleTrivandrumChange = (e) => {
//     setTrivandrumFile(e.target.files[0]);
//     setStatus("");
//   };

//   const handleKochiChange = (e) => {
//     setKochiFile(e.target.files[0]);
//     setStatus("");
//   };

//   const handleUpload = async () => {
//     if (!trivandrumFile || !kochiFile) {
//       setStatus("Please select both Trivandrum and Kochi files.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("trivandrum", trivandrumFile);
//     formData.append("kochi", kochiFile);

//     try {
//       setStatus("Uploading...");
//       const response = await fetch("http://127.0.0.1:8000/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setStatus(`✅ Success: ${result.status} for ${result.date}`);
//       } else {
//         setStatus(`❌ Failed: ${result.error || "Unknown error"}`);
//       }
//     } catch (err) {
//       setStatus("❌ Error connecting to backend.");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-end pr-[1%]"
//       style={{ backgroundImage: "url('/bg.jpg')" }}
//     >
//       <div className="max-w-md w-full bg-[#1b2f2b]/90 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-8">

//         {/* Logo with lines above and below */}
//         <div className="relative mb-6">
//           <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
//           <img src={logo} alt="Logo" className="h-10 mx-auto relative z-10 bg-white px-2" />
//           <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
//         </div>

//         {/* Heading inside black box */}
//         <div className="bg-black text-white text-xl text-center font-heading py-2 px-4 mb-6 rounded-md tracking-wide shadow-sm">
//           Attendance Upload
//         </div>

//         {/* Trivandrum Upload Section */}
//         <div className="bg-green-100 text-black rounded-lg p-4 mb-4">
//           <label className="block font-semibold mb-1 flex items-center">
//             <span className="mr-2">📍</span> Trivandrum File
//           </label>
//           <input
//             type="file"
//             accept=".xls,.xlsx"
//             onChange={handleTrivandrumChange}
//             className="w-full text-sm file:rounded-full file:border-0 file:bg-emerald-600 file:text-white file:font-semibold hover:file:bg-emerald-700 transition"
//           />
//           {trivandrumFile && (
//             <p className="text-xs text-emerald-700 mt-1">📂 {trivandrumFile.name}</p>
//           )}
//         </div>

//         {/* Kochi Upload Section */}
//         <div className="bg-green-100 text-black rounded-lg p-4 mb-4">
//           <label className="block font-semibold mb-1 flex items-center">
//             <span className="mr-2">📍</span> Kochi File
//           </label>
//           <input
//             type="file"
//             accept=".xls,.xlsx"
//             onChange={handleKochiChange}
//             className="w-full text-sm file:rounded-full file:border-0 file:bg-emerald-600 file:text-white file:font-semibold hover:file:bg-emerald-700 transition"
//           />
//           {kochiFile && (
//             <p className="text-xs text-emerald-700 mt-1">📂 {kochiFile.name}</p>
//           )}
//         </div>

//         {/* Upload Button */}
//         <button
//           onClick={handleUpload}
//           className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
//         >
//           <CloudArrowUpIcon className="h-5 w-5" />
//           Upload Attendance
//         </button>

//         {/* Status Message */}
//         {status && (
//           <div className="mt-6 bg-white/10 border border-white/20 text-white text-sm p-3 rounded-xl shadow-inner text-center">
//             {status}
//           </div>
//         )}
//       </div>

//       {/* Custom Font Style */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');
//           .font-heading {
//             font-family: 'Playfair Display', serif;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import logo from "./assets/download.png";

function App() {
  const [trivandrumFile, setTrivandrumFile] = useState(null);
  const [kochiFile, setKochiFile] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025"); // Default to 2025
  const [status, setStatus] = useState("");

  const handleTrivandrumChange = (e) => {
    setTrivandrumFile(e.target.files[0]);
    setStatus("");
  };

  const handleKochiChange = (e) => {
    setKochiFile(e.target.files[0]);
    setStatus("");
  };

  const handleUpload = async () => {
    if (!trivandrumFile || !kochiFile) {
      setStatus("Please select both Trivandrum and Kochi files.");
      return;
    }

    const formData = new FormData();
    formData.append("trivandrum", trivandrumFile);
    formData.append("kochi", kochiFile);

    try {
      setStatus("Uploading...");
      const response = await fetch("https://attendance-backend-cz9g.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(`✅ Success: ${result.status} for ${result.date}`);
      } else {
        setStatus(`❌ Failed: ${result.error || "Unknown error"}`);
      }
    } catch (err) {
      setStatus("❌ Error connecting to backend.");
    }
  };

  const handleDownload = async () => {
    if (!selectedMonth || !selectedYear) {
      alert("Please select both month and year.");
      return;
    }

    const monthMap = {
      January: "01", February: "02", March: "03", April: "04",
      May: "05", June: "06", July: "07", August: "08",
      September: "09", October: "10", November: "11", December: "12"
    };

    const formattedMonth = `${selectedYear}-${monthMap[selectedMonth]}`;

    try {
      const response = await fetch(`https://attendance-backend-cz9g.onrender.com/download?month=${formattedMonth}`, {
        method: "GET",
      });

      if (!response.ok) throw new Error("Failed to download.");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `attendance_report_${formattedMonth}.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Download failed. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-end pr-[1%]"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg)` }}
    >
      <div className="max-w-md w-full bg-[#1b2f2b]/90 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-8">

        {/* Logo with lines */}
        <div className="relative mb-6">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
          <img src={logo} alt="Logo" className="h-10 mx-auto relative z-10 bg-white px-2" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
        </div>

        {/* Heading */}
        <div className="bg-black text-white text-xl text-center font-heading py-2 px-4 mb-6 rounded-md tracking-wide shadow-sm">
          Attendance Upload
        </div>

        {/* Trivandrum File Upload */}
        <div className="bg-green-100 text-black rounded-lg p-4 mb-4">
          <label className="block font-semibold mb-1 flex items-center">
            <span className="mr-2">📍</span> Trivandrum File
          </label>
          <input
            type="file"
            accept=".xls,.xlsx"
            onChange={handleTrivandrumChange}
            className="w-full text-sm file:rounded-full file:border-0 file:bg-emerald-600 file:text-white file:font-semibold hover:file:bg-emerald-700 transition"
          />
          {trivandrumFile && (
            <p className="text-xs text-emerald-700 mt-1">📂 {trivandrumFile.name}</p>
          )}
        </div>

        {/* Kochi File Upload */}
        <div className="bg-green-100 text-black rounded-lg p-4 mb-4">
          <label className="block font-semibold mb-1 flex items-center">
            <span className="mr-2">📍</span> Kochi File
          </label>
          <input
            type="file"
            accept=".xls,.xlsx"
            onChange={handleKochiChange}
            className="w-full text-sm file:rounded-full file:border-0 file:bg-emerald-600 file:text-white file:font-semibold hover:file:bg-emerald-700 transition"
          />
          {kochiFile && (
            <p className="text-xs text-emerald-700 mt-1">📂 {kochiFile.name}</p>
          )}
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
        >
          <CloudArrowUpIcon className="h-5 w-5" />
          Upload Attendance
        </button>

        {/* Download Section */}
        <div className="mt-6 bg-green-50 p-4 rounded-lg shadow-inner text-black">
          {/* Month Selector */}
          <label className="block mb-1 font-semibold">📅 Select Month</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">-- Select Month --</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>

          {/* Year Selector */}
          <label className="block mb-1 font-semibold">📆 Select Year</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">-- Select Year --</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition-all"
          >
            ⬇️ Download Excel
          </button>
        </div>

        {/* Status Message */}
        {status && (
          <div className="mt-6 bg-white/10 border border-white/20 text-white text-sm p-3 rounded-xl shadow-inner text-center">
            {status}
          </div>
        )}
      </div>

      {/* Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');
          .font-heading {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>
    </div>
  );
}

export default App;
