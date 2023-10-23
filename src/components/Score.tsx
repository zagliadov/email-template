interface IProps {
  title: string;
  scoreName: string;
  scoreNumber: number;
  lowScore: string;
}
export function Score({ title, scoreName, scoreNumber, lowScore }: IProps) {
  const bgColor = (scoreNumber: number) => {
    switch (scoreNumber) {
      case 1:
        return "#DF715F";
      case 2:
        return "#F8CC46";
      case 3:
        return "#FFFF00";
      case 4:
      case 5:
        return "#62C54F";
      default:
        return "#F8CC46";
    }
  }
  return (
    <div
      style={{
        marginTop: "12px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "18px",
          letterSpacing: "-0.04em",
          textAlign: "center",
          color: "#454A54",
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginTop: "12px",
          backgroundColor: "#F6FAFD",
          paddingTop: "7px",
          paddingBottom: "7px",
          paddingLeft: "16px",
        }}
      >
        <span style={{
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          color: "#454A54",
        }}>{scoreName}</span>
        <div style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          paddingTop: "8px",
          paddingRight: "16px",
        }}>
          <span style={{
            fontWeight: "400",
            fontSize: "14px",
            
          }}>{scoreNumber}</span>
          <div style={{
            marginLeft: "10px",
            width: `${70 * scoreNumber}px`,
            height: "4px",
            borderRadius: "24px",
            backgroundColor: bgColor(scoreNumber),
          }}></div>
          <div>
            <span>
              {}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
