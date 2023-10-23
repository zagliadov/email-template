import { FileLists } from "./FileLists";

export function FileUploaded() {
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
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          color: "#454A54",
        }}
      >
        Files Uploaded
        <FileLists />
      </div>
    </div>
  );
}
