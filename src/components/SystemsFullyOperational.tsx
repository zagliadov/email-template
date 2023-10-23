
interface IProps {
  title: string;
  message: string;
}
export function SystemsFullyOperational({ title, message}: IProps) {
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
        borderRadius: "8px"
      }}
    >

    </div>
  )
}