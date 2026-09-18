
import data from "../data/tracks.json";
export default function Home(){
const pcds=[...new Set(data.map((t:any)=>t.pcd))];
return <main style={{maxWidth:900,margin:"40px auto",padding:"0 20px"}}>
<h1>DJ Dreamer Archive</h1>
<p>2005–2011</p>
<input placeholder="Търсене (идва във v0.2)" style={{width:"100%",padding:12,borderRadius:8,border:"1px solid #333",background:"#111",color:"#fff"}}/>
<div style={{marginTop:24}}>
{pcds.map((p:any)=><a key={p} href={`/pcd/${p}`} style={{display:"block",padding:16,marginBottom:10,background:"#141414",border:"1px solid #2b2b2b",borderRadius:10,color:"#fff",textDecoration:"none"}}>PCD {p}</a>)}
</div>
</main>
}
