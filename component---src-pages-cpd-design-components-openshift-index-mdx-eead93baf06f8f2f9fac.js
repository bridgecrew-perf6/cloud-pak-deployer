(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),b=a.n(l),o=a("Wbzz"),i=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),d=a.n(c),u=a("QH2O"),p=a.n(u),m=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,l=void 0===r?[]:r;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=l.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,b=r.subDirectory,i=l+"/edit/"+r.branch+b+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("dI71"),N=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),l=a===r,i=new RegExp(r+"/?(#.*)?$"),s=n.replace(i,a);return Object(m.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=l,t),N.listItem)},Object(m.b)(o.Link,{className:N.link,to:""+s},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:N.list},l))))))},t}(r.a.Component),v=a("MjG9"),y=a("CzIb"),w=a("Asxa"),T=a("OIbQ"),P=a.n(T),S=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:P.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,c=void 0===l?{}:l,d=t.relativePagePath,u=t.titleType,p=c.tabs,g=c.title,f=c.theme,N=c.description,w=c.keywords,T=c.date,P=Object(y.a)().interiorTheme,k=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=k?n.pathname.replace(k,""):n.pathname,I=p?C.split("/").filter(Boolean).slice(-1)[0]||b()(p[0],{lower:!0}):"",z=f||P;return Object(m.b)(s.a,{tabs:p,homepage:!1,theme:z,pageTitle:g,pageDescription:N,pageKeywords:w,titleType:u},Object(m.b)(O,{title:r?Object(m.b)(r,null):g,label:"label",tabs:p,theme:z}),p&&Object(m.b)(x,{title:g,slug:C,tabs:p,currentTab:I}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:d}),Object(m.b)(S,{date:T})),Object(m.b)(h.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:I}),Object(m.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},P2w9:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),b=a("013z"),o=(a("qKvR"),["components"]),i={},s={_frontmatter:i},c=b.a;function d(e){var t=e.components,a=Object(r.a)(e,o);return Object(l.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"OpenShift cluster(s)"),Object(l.b)("p",null,"You can configure one or more OpenShift clusters that will be layed down on the specified infrastructure, or which already exist."),Object(l.b)("p",null,"Dependent on the cloud platform on which the OpenShift cluster will be provisioned, different installation methods apply. For IBM Cloud, Terraform is used, whereas for vSphere the IPI installer is used. On AWS (ROSA), the ",Object(l.b)("inlineCode",{parentName:"p"},"rosa")," CLI is used to create and modify ROSA clusters. Each of the different platforms have slightly different properties for the ",Object(l.b)("inlineCode",{parentName:"p"},"openshift")," objects."),Object(l.b)("p",null,"For a reference of the various ",Object(l.b)("inlineCode",{parentName:"p"},"openshift")," objects refer to ",Object(l.b)("a",{parentName:"p",href:"/cloud-pak-deployer/cpd-design/objects/openshift"},"OpenShift object"),". Example of a ROKS ",Object(l.b)("inlineCode",{parentName:"p"},"openshift")," definition based on OpenShift 4.8, 3 compute nodes and OCS storage is below."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"openshift:\n- name: sample\n  managed: True\n  ocp_version: 4.8\n  compute_flavour: bx2.16x64\n  compute_nodes: 3\n  infrastructure:\n    type: vpc\n    vpc_name: sample\n    subnets:\n    - sample-subnet-zone-1\n    - sample-subnet-zone-2\n    - sample-subnet-zone-3\n  openshift_storage:\n  - storage_type: ocs\n    ocs_storage_label: ocs\n    ocs_storage_size_gb: 500\n")),Object(l.b)("h2",null,"Storage"),Object(l.b)("p",null,"An OpenShift cluster also defines the type(s) of storage that it will provide. When the OpenShift cluster is provisioned by the deployer, the necessary infrastructure and storage class(es) are also configured. In case an existing OpenShift cluster is referenced by the configuration, the storage classes are expected to exist already."),Object(l.b)("p",null,"The table below indicates which storage classes are supported per cloud infrastructure."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Cloud Provider"),Object(l.b)("th",{parentName:"tr",align:null},"NFS Storage"),Object(l.b)("th",{parentName:"tr",align:null},"OCS Storage"),Object(l.b)("th",{parentName:"tr",align:null},"Portworx Storage"),Object(l.b)("th",{parentName:"tr",align:null},"Custom"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ibm-cloud"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vsphere"),Object(l.b)("td",{parentName:"tr",align:null},"Yes (1)"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"aws"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"azure"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"existing-ocp"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Yes (2)")))),Object(l.b)("p",null,"(1) An existing NFS server can be specified so that the deployer configures the ",Object(l.b)("inlineCode",{parentName:"p"},"managed-nfs-storage")," storage class. The deployer will not provision or change the NFS server itself.\n(2) If you specify a ",Object(l.b)("inlineCode",{parentName:"p"},"custom")," storage type, you must specify the storage class to be used for block (RWO) and file (RWX) storage."))}d.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-cpd-design-components-openshift-index-mdx-eead93baf06f8f2f9fac.js.map