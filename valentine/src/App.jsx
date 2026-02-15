import { useState } from 'react';
import confetti from 'canvas-confetti';

// Floating hearts (generated once)
const hearts = Array.from({ length: 20 }, () => ({
  left: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 7 + Math.random() * 5,
}));

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noIndex, setNoIndex] = useState(0);
  const [showNoToast, setShowNoToast] = useState(false);
  const [noMessage, setNoMessage] = useState('');

  const cuteNoMessages = [
    "Aww nooo, don't break my heart 🥺💔",
    "Please... one more try? 🥹❤️",
    "That's not fair! My heart wants you 😤💕",
    "No? But I already planned our forever 🫶",
    "Clicking no should be illegal 😭🚫",
    "Pretty pleaseeee with a cherry on top? 🍒🥰",
    "You're hurting my little feelings... 🩷",
    "Try again cutie — Yes is waiting ✨",
    "You can't resist forever~ 😏💘",
    "Say yes or the hearts will keep coming 😢❤️",
  ];

  const params = new URLSearchParams(window.location.search);
  const name = params.get('name') || 'Neeelum';
  const note = params.get('note') || "I've been crushing on you forever... say yes please 🥺💕";

  const bgImage = '/Image/MyImage.jpeg';

  const handleYes = () => {
    setYesClicked(true);
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 },
    });
  };

  const handleNo = () => {
    const msg = cuteNoMessages[noIndex];
    setNoMessage(msg);
    setShowNoToast(true);
    setTimeout(() => setShowNoToast(false), 3000);

    setNoIndex((prev) => (prev + 1) % cuteNoMessages.length);
  };

  const yesScale = 1 + noIndex * 0.15; // slow growth
  const yesMessage = noIndex >= 10 
    ? "No more No's… you have to say Yes now! 💥❤️" 
    : `${name}, will you be my Valentine? 💕`;

  if (yesClicked) {
    return (
      <div
        className="min-h-screen relative flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        {hearts.map((heart, i) => (
          <div
            key={i}
            className="absolute text-4xl sm:text-6xl pointer-events-none z-10"
            style={{
              left: `${heart.left}%`,
              bottom: '-10%',
              animation: `floatHearts ${heart.duration}s linear infinite`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ❤️
          </div>
        ))}

        <div className="relative z-20 text-center px-6 max-w-3xl">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-white drop-shadow-2xl mb-8 animate-bounce">
            Yayyyy! 💖🫶
          </h1>
          <p className="text-4xl sm:text-6xl font-semibold text-pink-100 mb-6">
            {name}, you're my Valentine forever! ❤️
          </p>
          <p className="text-2xl sm:text-3xl text-white/90">
            Endless hugs, kisses & all my love incoming 💕
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      {hearts.map((heart, i) => (
        <div
          key={i}
          className="absolute text-3xl sm:text-5xl pointer-events-none"
          style={{
            left: `${heart.left}%`,
            bottom: '-10%',
            animation: `floatHearts ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-xl w-full">
        <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg mb-6">
          {yesMessage}
        </h1>

        <p className="text-xl sm:text-2xl text-pink-100 mb-10 italic">
          {note}
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button
            onClick={handleYes}
            className="yes-btn bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-2xl px-16 py-6 rounded-full shadow-2xl transition-all duration-700 hover:scale-110 hover:shadow-[0_0_60px_#ff69b4] active:scale-105 relative overflow-hidden group"
            style={{
              transform: `scale(${yesScale})`,
              transition: 'transform 0.8s ease-out',
            }}
          >
            Yes!
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl">
              💖💖💖
            </span>
            <span className="absolute inset-0 rounded-full border-4 border-pink-300/50 opacity-0 group-hover:opacity-70 animate-pulse-slow"></span>
          </button>

          <button
            onClick={handleNo}
            className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-2xl px-16 py-6 rounded-full shadow-2xl hover:scale-110 hover:shadow-rose-500/50 transition-all duration-300"
          >
            No
          </button>
        </div>

        {showNoToast && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-pink-600/95 text-white px-10 py-5 rounded-full shadow-2xl text-xl font-medium animate-bounce z-50 border-2 border-white/30">
            {noMessage}
          </div>
        )}
      </div>

      <p className="mt-12 text-sm text-pink-200/80">
        Made with lots of love 💕
      </p>
    </div>
  );
}

export default App;