(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),i=a("NmYn"),l=a.n(i),r=a("Wbzz"),c=a("Xrax"),d=a("k4MR"),s=a("TSYQ"),b=a.n(s),p=a("QH2O"),u=a.n(p),g=a("qKvR"),m=function(e){var t,a=e.title,o=e.theme,n=e.tabs,i=void 0===n?[]:n;return Object(g.b)("div",{className:b()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===o,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,o=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||o,i=n.baseUrl,l=n.subDirectory,c=i+"/edit/"+n.branch+l+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+h.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},x=a("FCXl"),O=a("dI71"),k=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,n=o.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===n,c=new RegExp(n+"/?(#.*)?$"),d=o.replace(c,a);return Object(g.b)("li",{key:e,className:b()((t={},t[k.selectedItem]=i,t),k.listItem)},Object(g.b)(r.Link,{className:k.link,to:""+d},e))}));return Object(g.b)("div",{className:k.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:k.list},i))))))},t}(n.a.Component),w=a("MjG9"),y=a("CzIb"),v=a("Asxa"),A=a("OIbQ"),N=a.n(A),C=function(e){var t=e.date,a=new Date(t);return t?Object(g.b)(v.c,{className:N.a.row},Object(g.b)(v.a,null,Object(g.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,n=e.Title,i=t.frontmatter,s=void 0===i?{}:i,b=t.relativePagePath,p=t.titleType,u=s.tabs,h=s.title,O=s.theme,k=s.description,v=s.keywords,A=s.date,N=Object(y.a)().interiorTheme,T=Object(r.useStaticQuery)("2456312558").site.pathPrefix,P=T?o.pathname.replace(T,""):o.pathname,z=u?P.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",I=O||N;return Object(g.b)(d.a,{tabs:u,homepage:!1,theme:I,pageTitle:h,pageDescription:k,pageKeywords:v,titleType:p},Object(g.b)(m,{title:n?Object(g.b)(n,null):h,label:"label",tabs:u,theme:I}),u&&Object(g.b)(j,{title:h,slug:P,tabs:u,currentTab:z}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(f,{relativePagePath:b}),Object(g.b)(C,{date:A})),Object(g.b)(x.a,{pageContext:t,location:o,slug:P,tabs:u,currentTab:z}),Object(g.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UKS3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return d})),a.d(t,"default",(function(){return u}));var o,n=a("wx14"),i=a("zLVn"),l=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),["components"]),d={},s=(o="InlineNotification",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),b={_frontmatter:d},p=r.a;function u(e){var t=e.components,a=Object(i.a)(e,c);return Object(l.b)(p,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Logging and auditing for Cloud Paks"),Object(l.b)("p",null,"For logging and auditing of Cloud Pak for Data we make use of the OpenShift logging framework, which delivers a lot of flexibility in capturing logs from applications, storing them in an ElasticSearch datastore in the cluster (currently not supported by the deployer), or forwarding the log entries to external log collectors such as an ElasticSearch, Fluentd, Loki and others."),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"861px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVQoz21R2W7CQAzM/39L31Crqg99QlQgtRL0CFCOgkhzQjbJ3t7d1El6EFTLsrxWJjMee1rruq4BAGsQBMvlMk2SKAzjMKRVJYWQnPdSCM65MQaBnlS64rJuo6SUxQlZrd9XK//lVcl27lwvrdVKWecQ76324dXt0FmL5EJKEEKwLmgn5zIQLOU3uCyKKPx07YMzZo0hm/X8ehCPhoubwWk2xZVw2AP/MnMhScVRXLOGUrV1OkuPz9Pg6XHzMCKLuQ4OrvWl0XzBvD1Eg/sxykZypbVrpWpUbK0CIGWZZhmltHMIUIJzf8xRFKHDnSKFzMYAGIa+CsW44JSeclJRpjRggukbZs72kY1s8xGzu/F67GcTP37b5etIbBKY+MlsWyxilxWA66HQS7BqwRWDMGVprlKi9yHZHbI0l8fSHAtIiGYM4F+wxFMBOAP4i9pCjY3DJW0zMbpL7PEzNMha6+FBkRDfWH9uzGlbz5t+NhCsX8C6d9HcfZ7iAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Logging overview",title:"Logging overview",src:"/cloud-pak-deployer/static/41c73e83dc906aea787360b416a74385/a448c/cloud-pak-deployer-logging.png",srcSet:["/cloud-pak-deployer/static/41c73e83dc906aea787360b416a74385/7fc1e/cloud-pak-deployer-logging.png 288w","/cloud-pak-deployer/static/41c73e83dc906aea787360b416a74385/a5df1/cloud-pak-deployer-logging.png 576w","/cloud-pak-deployer/static/41c73e83dc906aea787360b416a74385/a448c/cloud-pak-deployer-logging.png 861w"],sizes:"(max-width: 861px) 100vw, 861px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(l.b)("p",null,"OpenShift logging captures 3 types of logging entries from workload that is running on the cluster:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"infrastructure - logs generated by OpenShift processes"),Object(l.b)("li",{parentName:"ul"},"audit - audit logs generated by applications as well as OpenShift"),Object(l.b)("li",{parentName:"ul"},"application - all other applications on the cluster")),Object(l.b)("p",null,"When OpenShift logging is activated via the ",Object(l.b)("inlineCode",{parentName:"p"},"openshift_logging")," object, all 3 logging types are activated automatically. You can specify ",Object(l.b)("inlineCode",{parentName:"p"},"logging_output")," items to forward log records to the log collector of your choice. In the below example, the application logs are forwarded to a loki server ",Object(l.b)("inlineCode",{parentName:"p"},"https://loki-application.sample.com")," and audit logs to ",Object(l.b)("inlineCode",{parentName:"p"},"https://loki-audit.sample.com"),", both have the same certificate to connect with:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"openshift_logging:\n- openshift_cluster_name: pluto-01\n  logging_output:\n  - name: loki-application\n    type: loki\n    url: https://loki-application.sample.com\n    certificates:\n      cert: pluto-01-loki-cert\n      key: pluto-01-loki-key\n      ca: pluto-01-loki-ca\n  - name: loki-audit\n    type: loki\n    url: https://loki-audit.sample.com\n    certificates:\n      cert: pluto-01-loki-cert\n      key: pluto-01-loki-key\n      ca: pluto-01-loki-ca\n")),Object(l.b)("p",null,"Cloud Pak for Data and Foundational Services application logs are automatically picked up and forwarded to the ",Object(l.b)("inlineCode",{parentName:"p"},"loki-application")," logging destination and no additional configuration is needed."),Object(l.b)("p",null,"If you also want to activate audit logging for Cloud Pak for Data, you can do this by adding a ",Object(l.b)("inlineCode",{parentName:"p"},"cp4d_audit_config")," object to your configuration. With the below example, the Cloud Pak for Data audit logger is configured to write log records to the standard output (",Object(l.b)("inlineCode",{parentName:"p"},"stdout"),") of the pods, after which they are forwarded to the ",Object(l.b)("inlineCode",{parentName:"p"},"loki-audit")," logging destination by a ",Object(l.b)("inlineCode",{parentName:"p"},"ClusterLogForwarder")," custom resource."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"cp4d_audit_config:\n- project: zen-40\n  audit_replicas: 2\n  audit_output:\n  - type: openshift-logging\n    logging_name: loki-audit\n")),Object(l.b)(s,{kind:"info",mdxType:"InlineNotification"},"Because audit log entries are written to the standard output, they will also be picked up by the generic application log forwarder and will therefore also appear in the application logging destination."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cpd-design-components-logging-auditing-index-mdx-ba029dcd59a8af325422.js.map