export default function WaveBackground() {
  return (
    (<div className="absolute inset-0 z-0 overflow-hidden">
      <svg
        className="w-full h-full opacity-50"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none">
        <path
          className="text-blue-500"
          fill="currentColor"
          d="M0,500 C200,400 300,100 500,100 C700,100 800,400 1000,300 L1000,1000 L0,1000 Z">
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,500 C200,400 300,100 500,100 C700,100 800,400 1000,300 L1000,1000 L0,1000 Z;
              M0,300 C200,400 300,200 500,200 C700,200 800,400 1000,500 L1000,1000 L0,1000 Z;
              M0,500 C200,400 300,100 500,100 C700,100 800,400 1000,300 L1000,1000 L0,1000 Z
            " />
        </path>
      </svg>
    </div>)
  );
}

