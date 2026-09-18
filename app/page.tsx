
import Search from "../components/search";
import pcds from "../data/pcds.json";
import tracks from "../data/tracks.json";

export default function Home() {
  return (
    <main
      style={{
        background:"#0b0b0b",
        minHeight:"100vh",
        color:"white",
        fontFamily:"Arial",
        padding:"40px 20px"
      }}
    >
      <div style={{maxWidth:1000,margin:"0 auto"}}>
        <h1 style={{fontSize:46,marginBottom:8}}>DJ Dreamer</h1>

        <p style={{color:"#9ca3af",marginBottom:30}}>
          Digitally restored from the original CD archive (2005–2011)
        </p>

        <Search/>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",
          gap:18,
          marginTop:30
        }}>
          {pcds.map((pcd)=>{

            const count=tracks.filter((t:any)=>t.pcd===pcd.id).length;

            return (
              <a
                key={pcd.id}
                href={`/pcd/${pcd.id}`}
                style={{
                  background:"#151515",
                  border:"1px solid #292929",
                  borderRadius:16,
                  padding:18,
                  textDecoration:"none",
                  color:"white"
                }}
              >
                <div style={{
                  background:"#202020",
                  borderRadius:12,
                  aspectRatio:"1/1",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  fontSize:46,
                  marginBottom:14
                }}>
                  💿
                </div>

                <div style={{fontSize:22,fontWeight:"bold"}}>
                  PCD {String(pcd.id).padStart(3,"0")}
                </div>

                <div style={{color:"#888",marginTop:6}}>
                  {pcd.year}
                </div>

                <div style={{color:"#666",fontSize:13,marginTop:8}}>
                  {count>0?`${count} tracks`:"Archive coming soon"}
                </div>
              </a>
            );

          })}
        </div>
      </div>
    </main>
  );
}