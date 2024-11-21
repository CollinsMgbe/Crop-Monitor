import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  
  // Register the required components
  ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);
  
  const CropChart = () => {
    // Data for Crop Yield
    const yieldData = {
      labels: ["Mar", "Apr", "May", "Jun", "Jul"], // Months of the year
      datasets: [
        {
          label: "Crop Yield (in tons)", // Dataset label
          data: [12, 19, 3, 5, 2], // Crop yield data in tons
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
          fill: false,
        },
      ],
    };
  
    // Data for Crop Growth
    const growthData = {
      labels: ["Mar", "Apr", "May", "Jun", "Jul"], // Months of the year
      datasets: [
        {
          label: "Crop Growth (in cm)", // Dataset label
          data: [50, 70, 30, 40, 25], // Crop growth data in cm
          borderColor: "rgb(255, 99, 132)",
          tension: 0.1,
          fill: false,
        },
      ],
    };
  
    // Options shared between the graphs
    const sharedOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top", // Position of the legend
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`; // Customize tooltip text
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months", // Label for the x-axis
          },
        },
        y: {
          ticks: {
            callback: function (value) {
              return value; // Leave y-axis values unchanged
            },
          },
        },
      },
    };
  
    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Farm Productivity Graph</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100">
        
        {/* Crop Yield Chart */}
        <div className="p-4 bg-white shadow rounded" style={{ height: "400px" }}>
          <Line
            data={yieldData}
            options={{
              ...sharedOptions,
              plugins: {
                ...sharedOptions.plugins,
                title: {
                  display: true,
                  text: "Crop Yield Trends Over Months", // Title for the chart
                },
              },
              scales: {
                ...sharedOptions.scales,
                y: {
                  ...sharedOptions.scales.y,
                  title: {
                    display: true,
                    text: "Crop Yield (tons)", // Label for the y-axis
                  },
                },
              },
            }}
          />
          <p className="mt-4 text-sm text-gray-600">
            This graph shows the crop yield trends over the months. The y-axis
            represents the crop yield in tons, and the x-axis represents the
            months from January to May. Each data point indicates the total yield
            for that month.
          </p>
        </div>
  
        {/* Crop Growth Chart */}
        <div className="p-4 bg-white shadow rounded" style={{ height: "400px" }}>
          <Line
            data={growthData}
            options={{
              ...sharedOptions,
              plugins: {
                ...sharedOptions.plugins,
                title: {
                  display: true,
                  text: "Crop Growth Trends Over Months", // Title for the chart
                },
              },
              scales: {
                ...sharedOptions.scales,
                y: {
                  ...sharedOptions.scales.y,
                  title: {
                    display: true,
                    text: "Crop Growth (cm)", // Label for the y-axis
                  },
                },
              },
            }}
          />
          <p className="mt-4 text-sm text-gray-600">
            This graph shows the crop growth trends over the months. The y-axis
            represents the crop growth in centimeters, and the x-axis represents
            the months from January to May. Each data point indicates the average
            growth for that month.
          </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CropChart;