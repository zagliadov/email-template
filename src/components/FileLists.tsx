import { ReactComponent as FileIcon } from "../assets/FileArrowUp.svg";
import { ReactComponent as FileUpload } from "../assets/DownloadSimple.svg";

export function FileLists() {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: "0px",
        marginTop: "12px",
      }}
    >
      <li key={"first"}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                fontWeight: "400",
                fontSize: "14px",
                fontFamily: "Arial",
                lineHeight: "20px",
              }}
            >
              <FileIcon />
              <span
                style={{
                  color: "#454A54",
                  paddingLeft: "6px",
                }}
              >
                {"first.xls"}
              </span>
            </div>
          </div>
          <div
            style={{
              cursor: "pointer",
            }}
          >
            <FileUpload />
          </div>
        </div>
      </li>
    </ul>
  );
}
