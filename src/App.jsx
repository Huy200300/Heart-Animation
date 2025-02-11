import { useState } from 'react'
import { motion } from "framer-motion";


function App() {
  const [open, setOpen] = useState(false);
  const isBrowser = typeof window !== "undefined";

  const generateHeartShape = (numPoints = 300) => {
    let points = [];
    for (let i = 0; i < numPoints; i++) {
      let t = (Math.PI * 2 * i) / numPoints;
      let x = 18 * Math.pow(Math.sin(t), 3);
      let y =
        15 * Math.cos(t) -
        6 * Math.cos(2 * t) -
        3 * Math.cos(3 * t) -
        Math.cos(4 * t);
      points.push({ x: x * 3 + 50, y: -y * 3 + 50 });
    }
    return points;
  };

  const heartShape = generateHeartShape(300);

  return (
    <div className="relative w-screen flex items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-blue-200 overflow-hidden">
      {/* ☀️ Mặt Trời */}
      <motion.div
        className="absolute top-10 left-10 w-28 h-28 bg-yellow-300 rounded-full shadow-2xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ☁️ Mây Bay */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-80 shadow-lg"
          style={{
            width: `${80 + i * 20}px`,
            height: `${50 + i * 10}px`,
            left: `${i * 30}%`,
            top: `${i * 15 + 10}%`,
          }}
          animate={{ x: ["-20vw", "120vw"] }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute w-10 h-10 bg-white rounded-full top-[-10px] left-[10px]"></div>
          <div className="absolute w-14 h-14 bg-white rounded-full top-[-15px] left-[30px]"></div>
          <div className="absolute w-12 h-12 bg-white rounded-full top-[-5px] left-[50px]"></div>
        </motion.div>
      ))}

      {/* ❄️ Tuyết Rơi */}
      {[...Array(300)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            y: [
              0,
              isBrowser ? window.innerHeight : 500,
              isBrowser ? window.innerHeight + 100 : 600,
            ],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -100}%`,
          }}
        />
      ))}

      {/* ❤️ Hiệu Ứng Trái Tim Với Khói */}
      <div
        className="relative w-80 h-80 flex items-center justify-center cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {heartShape.map((pos, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-pink-600 shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0.8], scale: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.01,
            }}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          />
        ))}

        {/* Khói */}
        {/* {[...Array(40)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-pink-100 to-pink-300 opacity-60"
            initial={{ opacity: 0.6, scale: 0.3 }}
            animate={{
              opacity: [0.6, 0.3, 0.6],
              scale: [0.3, 1, 0.3],
              y: [0, -30, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
            }}
          />
        ))} */}

        {/* 🌟 Dòng Chữ Gradient & Phát Sáng */}
        {!open ? (
          <motion.span
            className="text-3xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-100 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              textShadow: [
                "0 0 10px rgba(255, 255, 255, 0.8)",
                "0 0 20px rgba(255, 255, 180, 0.7)",
                "0 0 10px rgba(255, 255, 255, 0.8)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Mở Trái Nè
          </motion.span>
        ) : (
          <motion.span
            className="text-3xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #d80000, #ff3b3b, #ff6464, #d80000)",
              backgroundSize: "300% 300%",
              textShadow:
                "0 0 18px rgba(255, 0, 0, 1), 0 0 25px rgba(255, 50, 50, 0.9)",
            }}
            animate={{
              opacity: [1, 0, 1],
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              scale: [1, 1.1, 1],
              textShadow: [
                "0 0 18px rgba(255, 0, 0, 1), 0 0 25px rgba(255, 50, 50, 0.9)",
                "0 0 22px rgba(255, 0, 0, 1), 0 0 35px rgba(255, 80, 80, 1)",
                "0 0 18px rgba(255, 0, 0, 1), 0 0 25px rgba(255, 50, 50, 0.9)",
              ],
              transition: {
                repeat: Infinity,
                duration: 0.1,
                repeatDelay: 1,
              },
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Yay! Yêu Trà ❤️
          </motion.span>
        )}
      </div>
    </div>
  );
}

export default App
