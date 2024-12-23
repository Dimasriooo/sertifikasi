import React from 'react';
import ReactPlayer from 'react-player';
import { Line } from 'react-chartjs-2';

// Data untuk grafik
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Pertumbuhan Pengguna',
      data: [30, 45, 55, 70],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    },
  ],
};

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Selamat Datang di TechNova</h1>
      <p>Temukan berbagai solusi teknologi terbaik di sini!</p>

      {/* Grafik interaktif */}
      <div className="chart-container">
        <Line data={chartData} />
      </div>

      {/* Video */}
      <div className="video-container">
        <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </div>
    </div>
  );
};

export default HomePage;
