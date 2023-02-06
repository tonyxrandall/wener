"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[40631],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76579:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return _}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const m={title:"PostgreSQL Admin"},d="PostgreSQL Admin",g={unversionedId:"db/relational/postgresql/postgresql-admin",id:"db/relational/postgresql/postgresql-admin",title:"PostgreSQL Admin",description:"- https://www.postgresql.org/docs/current/functions-info.html",source:"@site/../notes/db/relational/postgresql/postgresql-admin.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/admin",permalink:"/notes/db/relational/postgresql/admin",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-admin.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634945411,formattedLastUpdatedAt:"Oct 22, 2021",frontMatter:{title:"PostgreSQL Admin"},sidebar:"docs",previous:{title:"ACL",permalink:"/notes/db/relational/postgresql/acl"},next:{title:"PostgreSQL Awesome",permalink:"/notes/db/relational/postgresql/awesome"}},f={},_=[{value:"Info Schema",id:"info-schema",level:2},{value:"Transaction ID Exhaustion/Wraparound",id:"transaction-id-exhaustionwraparound",level:2}],b={toc:_};function h(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),p),o(t,s({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"postgresql-admin"}),"PostgreSQL Admin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.postgresql.org/docs/current/functions-info.html"}),"https://www.postgresql.org/docs/current/functions-info.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.postgresql.org/docs/current/routine-vacuuming.html"}),"https://www.postgresql.org/docs/current/routine-vacuuming.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://postgresqlco.nf/doc/en/param/"}),"https://postgresqlco.nf/doc/en/param/"))),(0,r.kt)("h2",u({},{id:"info-schema"}),"Info Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.postgresql.org/docs/current/information-schema.html"}),"https://www.postgresql.org/docs/current/information-schema.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"SELECT column_name,\n       is_nullable,\n       udt_name,\n       character_maximum_length,\n       numeric_precision,\n       numeric_precision_radix,\n       numeric_scale,\n       datetime_precision,\n       8 * typlen\nFROM information_schema.columns AS cols\n         JOIN pg_type AS pgt ON cols.udt_name = pgt.typname\nWHERE table_catalog = 'db'\n  AND table_schema = CURRENT_SCHEMA()\n  AND table_name = 'users';\n")),(0,r.kt)("h2",u({},{id:"transaction-id-exhaustionwraparound"}),"Transaction ID Exhaustion/Wraparound"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://blog.crunchydata.com/blog/managing-transaction-id-wraparound-in-postgresql"}),"Managing Transaction ID Exhaustion (Wraparound) in PostgreSQL"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"-- https://stackoverflow.com/a/32644144/1870054\nSELECT txid_current();\nSELECT xmin FROM test;\n\nSELECT datname\n     , age(datfrozenxid)\n     , current_setting('autovacuum_freeze_max_age')\nFROM pg_database;\n\nSELECT c.oid::regclass\n     , age(c.relfrozenxid)\n     , pg_size_pretty(pg_total_relation_size(c.oid)) as total_relation_size\nFROM pg_class c\n       JOIN pg_namespace n on c.relnamespace = n.oid\nWHERE relkind IN ('r', 't', 'm')\n  AND n.nspname NOT IN ('pg_toast')\nORDER BY 2 DESC\nLIMIT 100;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"WITH max_age AS (\n  SELECT 2000000000 as max_old_xid\n       , setting    AS autovacuum_freeze_max_age\n  FROM pg_catalog.pg_settings\n  WHERE name = 'autovacuum_freeze_max_age')\n   , per_database_stats AS (\n  SELECT datname\n       , m.max_old_xid::int\n       , m.autovacuum_freeze_max_age::int\n       , age(d.datfrozenxid) AS oldest_current_xid\n  FROM pg_catalog.pg_database d\n         JOIN max_age m ON (true)\n  WHERE d.datallowconn)\nSELECT max(oldest_current_xid)                                                   AS oldest_current_xid\n     , max(ROUND(100 * (oldest_current_xid / max_old_xid::float)))               AS percent_towards_wraparound\n     , max(ROUND(100 * (oldest_current_xid / autovacuum_freeze_max_age::float))) AS percent_towards_emergency_autovac\nFROM per_database_stats\n")))}h.isMDXComponent=!0}}]);