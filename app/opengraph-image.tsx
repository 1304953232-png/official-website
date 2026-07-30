import { ImageResponse } from "next/og";

export const alt = "YAN VENTURES / 燕南创新";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 78px",
          color: "#f3efe7",
          backgroundColor: "#05070a",
          backgroundImage: "linear-gradient(135deg, #182443 0%, #05070a 56%, #241e13 100%)"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            color: "#c8a96a",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase"
          }}
        >
          <span>YAN VENTURES</span>
          <span>Beijing · Zhongguancun</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 700, lineHeight: 0.96 }}>
            Venture Studio for
          </div>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 700, lineHeight: 0.96 }}>
            Early-Stage AI Innovation.
          </div>
          <div style={{ display: "flex", marginTop: 34, color: "#aab4c0", fontSize: 28 }}>
            燕南创新 · From university research to scalable AI companies.
          </div>
        </div>
      </div>
    ),
    size
  );
}
