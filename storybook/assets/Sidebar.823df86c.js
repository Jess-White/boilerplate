import{r as c,j as e,a as u}from"./jsx-runtime.b35027c6.js";import{c as m,L as g,N as f}from"./react-router-dom.b57375c1.js";import{p as o}from"./index.9ab846ab.js";import{c as h}from"./clsx.m.c5ef2623.js";import{e as x,f as C,g as z,h as b,i as N,j as _}from"./index.esm.67a3a5eb.js";import{u as y,b as L,c as O,g as v}from"./currentUserContext.bb0ab506.js";const d=c.exports.createContext(),M=()=>c.exports.useContext(d),P=({children:s})=>{const{organizationId:a}=m(),{authenticatedApiClient:t}=y(),r=c.exports.useMemo(()=>L.create({...t.defaults,baseURL:`${t.defaults.baseURL}/organizations/${a}`}),[t,a]),{data:i}=O(["currentOrganization",t,a],()=>v(t,a)),l={currentOrganization:i,organizationClient:r};return e(d.Provider,{value:l,children:s})};P.__docgenInfo={description:"",methods:[],displayName:"CurrentOrganizationProvider"};function n(s){const{as:a,to:t,...r}=s,{currentOrganization:i}=M();return e(a,{...r,to:`/organizations/${i.id}${t}`})}n.propTypes={as:o.exports.elementType,to:o.exports.string.isRequired};n.defaultProps={as:g};n.__docgenInfo={description:"",methods:[],displayName:"CurrentOrganizationLink",props:{as:{defaultValue:{value:"Link",computed:!0},type:{name:"elementType"},required:!1,description:""},to:{type:{name:"string"},required:!0,description:""}}};const k=[{icon:e(x,{}),title:"Dashboard",path:"/dashboard"},{icon:e(C,{}),title:"Grants",path:"/grants"},{icon:e(z,{}),title:"Boilerplates",path:"/boilerplates"},{icon:e(b,{}),title:"Funding Organizations",path:"/funding_orgs"},{icon:e(N,{}),title:"Categories",path:"/categories"},{icon:e(_,{}),title:"Users",path:"/users"}];function p(s){return e("nav",{className:h(s.className,"sidebar"),children:e("ul",{className:"sidebar__list",children:k.map(({icon:a,title:t,path:r})=>e("li",{children:u(n,{as:f,className:"sidebar__navitem",activeClassName:"sidebar__navitem--selected",to:r,children:[a,t]})},t))})})}p.propTypes={className:o.exports.string};p.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{className:{type:{name:"string"},required:!1,description:""}}};export{P as C,p as S,M as u};
//# sourceMappingURL=Sidebar.823df86c.js.map
