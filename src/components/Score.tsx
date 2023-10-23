function Line({ scoreNumber }: { scoreNumber: number }) {
  const bgColor = (score: number) => {
    switch (score) {
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
  };

  return (
    <div
      style={{
        marginLeft: "10px",
        width: `${70 * scoreNumber}px`,
        height: "4px",
        borderRadius: "24px",
        backgroundColor: bgColor(scoreNumber),
      }}
    ></div>
  );
}

interface IProps {
  scoreName: string;
  scoreNumber: number;
  message?: string | undefined | null;
}
export function Score({ scoreName, scoreNumber, message }: IProps) {
  return (
    <div style={{ marginBottom: "4px" }}>
      <div
        style={{
          backgroundColor: "#F6FAFD",
          paddingBottom: "7px",
          paddingLeft: "16px",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#454A54",
          }}
        >
          {scoreName}
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            paddingTop: "8px",
            paddingRight: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: "400",
                fontSize: "14px",
              }}
            >
              {scoreNumber}
            </span>
            <Line scoreNumber={scoreNumber} />
          </div>
          {message && (
            <div
              style={{
                paddingTop: "4px",
              }}
            >
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#808080",
                }}
              >
                {message}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
