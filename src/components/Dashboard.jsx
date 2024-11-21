import React from 'react';
import Alerts from './Alerts';
import Weather from './Weather';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Weather Section */}
      <div className="bg-white shadow p-6 mb-6">
        <h3 className="text-2xl font-bold mb-2">Current Weather</h3>
        <Weather />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-white shadow p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">Alerts</h3>
          <div className="overflow-auto max-h-60 lg:max-h-full">
            <Alerts />
          </div>
        </div>

        {/* Main Dashboard Section */}
        <div className="w-full lg:w-3/4 p-6">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-500 text-white shadow-lg p-4">
              <h4 className="text-lg font-bold mb-2">Planting/Sowing Date</h4>
              <p className="font-bold">24th March 2024</p>
            </div>
            <div className="bg-gray-500 text-white shadow-lg p-4">
              <h4 className="text-lg font-bold mb-2">Crop Area</h4>
              <p className="font-bold">34 HA</p>
            </div>
            <div className="bg-green-500 text-white shadow-lg p-4">
              <h4 className="text-lg font-bold mb-2">Crop Status</h4>
              <p className="font-bold">Active</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-yellow-50 shadow-lg p-4">
              <h4 className="text-lg font-bold mb-2">Crop Name</h4>
              <p className="font-bold text-xl">Maize</p>
            </div>
            <div className="bg-yellow-50 shadow-lg p-4">
              <h4 className="text-lg font-bold mb-2">Crop Variety</h4>
              <p className="font-bold text-xl">Sweet Corn</p>
            </div>
            <div className="bg-yellow-400 shadow-lg p-4">
              <h4 className="text-lg font-bold mb-2">Sustainability Score</h4>
              <p className="font-bold text-3xl">90.6</p>
            </div>
          </div>

          {/* Soil Conditions Section */}
          <div className="grid gap-6 mt-6">
            <div className="bg-white shadow-lg p-4 overflow-auto rounded">
              <h4 className="text-lg font-bold mb-4">Soil Conditions</h4>
              <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Soil Type</td>
                    <td className="border border-gray-300 px-4 py-2">Loamy Soil</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Optimal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Soil Moisture</td>
                    <td className="border border-gray-300 px-4 py-2">65%</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Optimal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">pH Levels</td>
                    <td className="border border-gray-300 px-4 py-2">5.4</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-red-500">Acidic</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Soil Fertility</td>
                    <td className="border border-gray-300 px-4 py-2">NPK (125kg/ha, 70kg/ha, 80kg/ha)</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Optimal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Comments</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Soil conditions are suitable for planting but may require slight pH adjustment.
                    </td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-red-500">Action Required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          {/* Crop Health Section */}
          <div className="grid gap-6 mt-6">
            <div className="bg-white shadow-lg p-4 overflow-auto rounded">
              <h4 className="text-lg font-bold mb-4">Crop Growth (Week 2)</h4>
              <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Plant Height</td>
                    <td className="border border-gray-300 px-4 py-2">24cm</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-red-500">Low</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Leaf Development</td>
                    <td className="border border-gray-300 px-4 py-2">13 leaves</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Optimal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Root Development</td>
                    <td className="border border-gray-300 px-4 py-2">65cm</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Optimal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Chlorophyll Content</td>
                    <td className="border border-gray-300 px-4 py-2">65 SPAD Units</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-red-500">Excessive</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Comments</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Plants are shorter than expected for the growth stage. Chlorophyll content is excessive, which may indicate over-fertilization.
                    </td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-red-500">Action Required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          {/* Pest Activity Section */}
          <div className="grid gap-6 mt-6">
            <div className="bg-white shadow-lg p-4 overflow-auto rounded">
              <h4 className="text-lg font-bold mb-4">Pest Activity (Week 2)</h4>
              <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Fall Armyworn Infestation</td>
                    <td className="border border-gray-300 px-4 py-2">2%</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Low</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Stem Borer Damage</td>
                    <td className="border border-gray-300 px-4 py-2">0%</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Low</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Rootworm Larvae</td>
                    <td className="border border-gray-300 px-4 py-2">5%</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Optimal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Maize Streak Virus</td>
                    <td className="border border-gray-300 px-4 py-2">0%</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Low</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Fungal Diseases</td>
                    <td className="border border-gray-300 px-4 py-2">10%</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-red-500">Severe</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Comments</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Pests are causing significant damage to the crops. Fungal Diseases are responsible for the most severe issues.
                    </td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-red-500">Action Required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          {/* Yield Estimation Section */}
          <div className="grid gap-6 mt-6">
            <div className="bg-white shadow-lg p-4 overflow-auto rounded">
              <h4 className="text-lg font-bold mb-4">Yield Estimation (Maturity)</h4>
              <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Plant Population</td>
                    <td className="border border-gray-300 px-4 py-2">60,000 plants/ha</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Optimal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Grain Weight</td>
                    <td className="border border-gray-300 px-4 py-2">250g per cobs</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Optimal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Moisture Content</td>
                    <td className="border border-gray-300 px-4 py-2">25%</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Optimal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Total Yield</td>
                    <td className="border border-gray-300 px-4 py-2">3.85tons/ha</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">Optimal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Comments</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Yield is estimated based on optimal conditions. Grain Weight and Moisture Content are also considered.
                    </td>
                    <td className="border border-gray-300 px-4 py-2 font-bold text-white bg-green-500">No Action</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-500 shadow-lg p-4">
              <h4 className="text-lg font-bold mb-2 text-center  text-white ">PRODUCTION</h4>
              <p className='text-center font-bold  text-white '>4 Tons <br/>Estimated Production</p>
            </div>
            <div className="bg-gray-500 shadow-lg p-4">
              <h4 className="text-lg font-bold mb-2 text-center  text-white ">PRODUCTION</h4>
              <p className='text-center font-bold  text-white '>3.85Tons <br/>Actual Production</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;