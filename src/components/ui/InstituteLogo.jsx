const InstituteLogo = ({ institute }) => {
  const logos = {
    szabist: (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <circle cx="50" cy="50" r="45" fill="#003366" />
        <text x="50" y="55" textAnchor="middle" fill="white" fontSize="14">SZABIST</text>
      </svg>
    ),
    cadet: (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <rect x="10" y="10" width="80" height="80" fill="#8B0000" />
        <text x="50" y="55" textAnchor="middle" fill="white" fontSize="14">CCJ</text>
      </svg>
    ),
    sedna: (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <polygon points="50,10 90,90 10,90" fill="#006400" />
        <text x="50" y="70" textAnchor="middle" fill="white" fontSize="14">SEDNA</text>
      </svg>
    )
  };

  return logos[institute] || null;
};

export default InstituteLogo;
