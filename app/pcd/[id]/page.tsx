
import data from "../../../data/tracks.json";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const tracks = data.filter((t: any) => String(t.pcd) === id);

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
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <a
          href="/"
          style={{
            color: "#9ca3af",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: 24,
          }}
        >
          ← Всички PCD
        </a>

        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            marginBottom: 30,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 170,
              aspectRatio: "1/1",
              background: "#1b1b1b",
              border: "1px solid #333",
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 70,
            }}
          >
            💿
          </div>

          <div>
            <h1 style={{ fontSize: 42, margin: 0 }}>
              PCD {id.padStart(3, "0")}
            </h1>

            <p style={{ color: "#888", marginTop: 8 }}>
              {tracks.length} трака • DJ Dreamer Archive
            </p>
          </div>
        </div>

        <div
          style={{
            background: "#141414",
            borderRadius: 18,
            border: "1px solid #262626",
            overflow: "hidden",
          }}
        >
          {tracks.map((track: any, index: number) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 20px",
                borderBottom:
                  index !== tracks.length - 1 ? "1px solid #222" : "none",
              }}
            >
              <div style={{ display: "flex", gap: 16 }}>
                <div
                  style={{
                    width: 24,
                    color: "#666",
                    textAlign: "right",
                  }}
                >
                  {index + 1}
                </div>

                <div>
                  <div style={{ fontWeight: "bold" }}>
                    {track.artist}
                  </div>

                  <div
                    style={{
                      color: "#9ca3af",
                      fontSize: 14,
                    }}
                  >
                    {track.title}
                    {track.remix ? ` • ${track.remix}` : ""}
                  </div>
                </div>
              </div>

              <button
                style={{
                  background: "#1DB954",
                  border: "none",
                  color: "white",
                  padding: "8px 18px",
                  borderRadius: 999,
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Listen
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}