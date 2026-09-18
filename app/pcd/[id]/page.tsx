
import data from "../../../data/tracks.json";
export default async function Page({params}:{params:Promise<{id:string}>}){
const {id}=await params;
const tracks=data.filter((t:any)=>String(t.pcd)===id);
return <main style={{maxWidth:900,margin:"40px auto",padding:"0 20px"}}>
<a href="/" style={{color:"#aaa"}}>← Назад</a>
<h1>PCD {id}</h1>
{tracks.map((t:any,i:number)=><div key={i} style={{padding:"12px 0",borderBottom:"1px solid #222"}}>
<strong>{i+1}. {t.artist}</strong><br/>
<span>{t.title}{t.remix?` (${t.remix})`:''}</span>
</div>)}
</main>
}
