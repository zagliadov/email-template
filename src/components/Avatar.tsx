import { ReactComponent as MarriottITOPLogo } from "../assets/MarriottITOP_logo 1.svg";

export function Avatar() {
  return (
    <div
      style={{
        position: "relative",
        width: "167px",
        height: "58px",
        margin: "0 auto",
        overflow: "hidden",
        marginBottom: "8px",
      }}
    >
      <MarriottITOPLogo />
    </div>
  );
};