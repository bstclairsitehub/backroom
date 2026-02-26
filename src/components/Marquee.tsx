export default function Marquee() {
  const text =
    "BEAR • TWINK • VERS • POWER BOTTOM • DUMP TRUCK • THROAT GOAT • FREE USE • ANONYMOUS • ";
  const repeatedText = text.repeat(4);

  return (
    <div className="border-t border-b border-[#222] overflow-hidden py-[14px]">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-content {
          animation: marquee 20s linear infinite;
          display: flex;
          white-space: nowrap;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-content">
        <span className="font-heading text-[13px] text-white tracking-[0.2em]">
          {repeatedText}
        </span>
        <span className="font-heading text-[13px] text-white tracking-[0.2em]">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
