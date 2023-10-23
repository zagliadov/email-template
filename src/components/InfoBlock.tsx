
export function InfoBlock({
  title,
  value,
}: any) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: 400,
        backgroundColor: "#F6FAFD",
        borderRadius: "8px",
        marginBottom: "4px",
        paddingBottom: "7px",
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          color: "#202020",
          paddingTop: "7px",
          paddingBottom: "8px",
          paddingLeft: "16px",
          fontFamily: "Arial",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px",
          letterSpacing: "0px",
          textAlign: "left",
        }}
      >
        {title}
      </div>
      <div
        style={{
          boxSizing: "border-box",
          fontFamily: "Arial",
          fontWeight: 400,
          paddingLeft: "16px",
          fontSize: "14px",
          color: "#808080",
          whiteSpace: "pre-line",
          lineHeight: "20px",
          padding: "0 16px",
        }}
      >
        {value}
      </div>
    </div>
  );
}