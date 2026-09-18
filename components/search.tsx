
"use client";

import { useMemo, useState } from "react";
import data from "../data/tracks.json";

export default function Search() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    if (!q.trim()) return [];

    const text = q.toLowerCase();

    return data
      .filter((t: any) =>
        `${t.artist} ${t.title} ${t.remix ?? ""}`
          .toLowerCase()
          .includes(text)
      )
      .slice(0, 20);
  }, [q]);

  return (
    <>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Търси артист, песен или ремикс..."
        style={{
          width: "100%",
          padding: "14px 16px",
          borderRadius: 12,
          border: "1px solid #333",
          background: "#111",
          color: "#fff",
          fontSize: 16
        }}
      />

      {results.length > 0 && (
        <div
          style={{
            marginTop: 14,
            background: "#151515",
            border: "1px solid #2a2a2a",
            borderRadius: 12,
            overflow: "hidden"
          }}
        >
          {results.map((track: any, i: number) => (
            <a
              key={i}
              href={`/pcd/${track.pcd}`}
              style={{
                display: "block",
                padding: "12px 16px",
                color: "#fff",
                textDecoration: "none",
                borderBottom:
                  i !== results.length - 1 ? "1px solid #222" : "none"
              }}
            >
              <strong>{track.artist}</strong>

              <div style={{ color: "#9ca3af", fontSize: 14 }}>
                {track.title}
                {track.remix ? ` • ${track.remix}` : ""}
              </div>

              <div style={{ color: "#666", fontSize: 12 }}>
                PCD {String(track.pcd).padStart(3, "0")}
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
}