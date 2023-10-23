interface IProps {
  title: string;
  message: string;
}
export function DetailOnTheAboveScore({ title, message }: IProps) {
  return (
    <div
      style={{
        backgroundColor: "#F6FAFD",
        marginTop: "30px",
        paddingTop: "7px",
        paddingRight: "16px",
        paddingBottom: "7px",
        paddingLeft: "16px",
        fontFamily: "Arial",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
      }}
    >
      <div
        style={{
          color: "#202020",
          paddingBottom: "8px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#808080",
        }}
      >
        {message}
      </div>
    </div>
  );
}
