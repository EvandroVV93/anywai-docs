import{d,aa as f,H as a,X as m,b as o,W as i,w as _,f as g,n as x,I as b,ab as S,D as h,k}from"./entry.fJv6ifaz.js";import{r as z}from"./slot.MG2CXoKY.js";import"./node.V6KjywBy.js";const y=d({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:f("primary"),href:{type:String,required:!0,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},transparent:{required:!1,type:[Boolean,Object],default:!1}},setup(e){const s=a(()=>((t=n)=>`{color.${t.color}.600}`)()),r=a(()=>((t=n)=>`{color.${t.color}.500}`)()),n=e,l={size:{small:{padding:"{space.2} {space.4}",fontSize:"{text.sm.fontSize}",lineHeight:"{text.sm.lineHeight}"},medium:{padding:"{space.rem.625} {space.5}",fontSize:"{text.base.fontSize}",lineHeight:"{text.base.lineHeight}"},large:{padding:"{space.3} {space.6}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"},giant:{padding:"{space.4} {space.8}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"}},transparent:{true:{backgroundColor:"transparent"}}},{$pinceau:c}=m(n,l,{_YM9_buttonPrimary:s,_A23_buttonSecondary:r});return(t,H)=>{const u=S,p=h;return o(),i(p,{class:x(["button-link",[b(c)]]),to:e.href,target:e.blank?"_blank":void 0},{default:_(()=>[e.icon?(o(),i(u,{key:0,name:e.icon},null,8,["name"])):g("",!0),z(t.$slots,"default",{unwrap:"p ul li"},void 0,!0)]),_:3},8,["to","target","class"])}}}),q=k(y,[["__scopeId","data-v-77df4fcb"]]);export{q as default};
