import data from "../data/tracks.json";
import Search from "../components/Search";

export default function Home() {
  const pcds = [...new Set(data.map((t: any) => t.pcd))].sort(
    (a, b) => a - b
  );

  return (
    <main
      style={{
        background: "#0b0b0b",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h1 style={{ fontSize: 44, marginBottom: 8 }}>DJ Dreamer</h1>

        <p style={{ color: "#9ca3af", marginBottom: 28 }}>
          Progressive • Tech House • Electro • 2005–2011
        </p>

        <Search />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: 18,
            marginTop: 30,
          }}
        >
          {pcds.map((pcd: any) => {
            const count = data.filter((t: any) => t.pcd === pcd).length;

            return (
              <a
                key={pcd}
                href={`/pcd/${pcd}`}
                style={{
                  background: "#151515",
                  border: "1px solid #2a2a2a",
                  borderRadius: 16,
                  padding: 18,
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    background: "#202020",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 48,
                    marginBottom: 14,
                  }}
                >
                  💿
                </div>

                <div style={{ fontSize: 22, fontWeight: "bold" }}>
                  PCD {String(pcd).padStart(3, "0")}
                </div>

                <div style={{ marginTop: 6, color: "#888" }}>
                  {count} tracks
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}