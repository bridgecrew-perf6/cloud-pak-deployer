(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"013z":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("NmYn"),i=n.n(r),s=n("Wbzz"),c=n("Xrax"),l=n("k4MR"),p=n("TSYQ"),b=n.n(p),d=n("QH2O"),m=n.n(d),u=n("qKvR"),h=function(e){var t,n=e.title,o=e.theme,a=e.tabs,r=void 0===a?[]:a;return Object(u.b)("div",{className:b()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===o,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},n)))))},f=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,o=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,a=n||o,r=a.baseUrl,i=a.subDirectory,c=r+"/edit/"+a.branch+i+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},_=n("FCXl"),O=n("dI71"),j=n("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,o=e.slug,a=o.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),r=n===a,c=new RegExp(a+"/?(#.*)?$"),l=o.replace(c,n);return Object(u.b)("li",{key:e,className:b()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(u.b)(s.Link,{className:j.link,to:""+l},e))}));return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:j.list},r))))))},t}(a.a.Component),x=n("MjG9"),N=n("CzIb"),y=n("Asxa"),v=n("OIbQ"),k=n.n(v),C=function(e){var t=e.date,n=new Date(t);return t?Object(u.b)(y.c,{className:k.a.row},Object(u.b)(y.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,a=e.Title,r=t.frontmatter,p=void 0===r?{}:r,b=t.relativePagePath,d=t.titleType,m=p.tabs,f=p.title,O=p.theme,j=p.description,y=p.keywords,v=p.date,k=Object(N.a)().interiorTheme,T=Object(s.useStaticQuery)("2456312558").site.pathPrefix,P=T?o.pathname.replace(T,""):o.pathname,A=m?P.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",S=O||k;return Object(u.b)(l.a,{tabs:m,homepage:!1,theme:S,pageTitle:f,pageDescription:j,pageKeywords:y,titleType:d},Object(u.b)(h,{title:a?Object(u.b)(a,null):f,label:"label",tabs:m,theme:S}),m&&Object(u.b)(w,{title:f,slug:P,tabs:m,currentTab:A}),Object(u.b)(x.a,{padded:!0},n,Object(u.b)(g,{relativePagePath:b}),Object(u.b)(C,{date:v})),Object(u.b)(_.a,{pageContext:t,location:o,slug:P,tabs:m,currentTab:A}),Object(u.b)(c.a,null))}},Ak1c:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));var o,a=n("wx14"),r=n("zLVn"),i=(n("q1tI"),n("7ljp")),s=n("013z"),c=(n("qKvR"),["components"]),l={},p=(o="InlineNotification",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={_frontmatter:l},d=s.a;function m(e){var t=e.components,n=Object(r.a)(e,c);return Object(i.b)(d,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Monitoring Cloud Pak for Data"),Object(i.b)("p",null,"For monitoring of Cloud Pak for Data we make use of the OpenShift Monitoring framework. The observations generated by Cloud Pak for Data are pushed to the OpenShift Monitoring Prometheus endpoint. This will allow (external) monitoring tools to combine the observations from the OpenShift platform and Cloud Pak for Data from a single source. "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"861px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABe0lEQVQoz2WS227CMAyGef/H2Q0XsMtt0hDshg2ptIxDG0pLz02ak5M57WAwLMtK3Xy2+9cjIQRorZSy1kZh6HlekiSkt5ZSfMsfjDGmtZZSjpBEzBiDsaoqRqkFYwGc98lHQwwAOT1SVWHCwPYFJGhT19VmG2y3a8/DS0P+t9bg2BOHNcbBKSHL2TxLUyyGQ2oh6yNJV1/x57IhBKQAzg0yVwP4g1fr76fpS+D7UUQopZhj8TFezIO31/1ifl57/LA31xH+wW3T1GVRlmWWZV3X2V4CBdBQWjW1kEID3nSi9PEePhwOk8kUBUQGxzZKSako4+esQGedkFLfyWVuYN/3x+MxtsU8pQwk96N68r6ZeTn682zz4efePt8c233KV7ssK4W6wkVRuF/atkNnC7phipxpUvC0ECRpdlEexnWcdadchKe2aqSSFxhulOSCK6mMltZo9/Gg3MGAi3B5BIV7ggIgOEKFh73BtigYdcbaPg6Hwe/zbvMw/gBHCnY/VeSsnwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Monitoring overview",title:"Monitoring overview",src:"/cloud-pak-deployer/static/a5e0c8c783e0a165deffbc035fc71a49/a448c/cloud-pak-deployer-monitors.png",srcSet:["/cloud-pak-deployer/static/a5e0c8c783e0a165deffbc035fc71a49/7fc1e/cloud-pak-deployer-monitors.png 288w","/cloud-pak-deployer/static/a5e0c8c783e0a165deffbc035fc71a49/a5df1/cloud-pak-deployer-monitors.png 576w","/cloud-pak-deployer/static/a5e0c8c783e0a165deffbc035fc71a49/a448c/cloud-pak-deployer-monitors.png 861w"],sizes:"(max-width: 861px) 100vw, 861px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"To deploy Cloud Pak for Data Monitors, its is mandatory to enable the OpenShift monitoring. OpenShift monitoring is activated via the ",Object(i.b)("inlineCode",{parentName:"p"},"openshift_monitoring")," object. For Cloud Pak for Data to be able to push its Prometheus metrics to OpenShift monitoring, the ",Object(i.b)("inlineCode",{parentName:"p"},"user_worload")," must be set to enabled. To make the openShift monitoring data persistent, the (optional) setting ",Object(i.b)("inlineCode",{parentName:"p"},"pvc_storage_class")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pvc_storage_size_gb")," can be set. To enable Prometheus RemoteWrite, use the ",Object(i.b)("inlineCode",{parentName:"p"},"remote_rewrite_url"),". "),Object(i.b)("p",null,"Optionally it is possible to install the community operator of Grafana, which provides the ability to build your own Grafana Dashboards. The ",Object(i.b)("inlineCode",{parentName:"p"},"grafana_project")," specifies the OpenShift project in which Grafana is deployed. The installation of Grafana creates a default local administrative user with username ",Object(i.b)("inlineCode",{parentName:"p"},"root")," and password ",Object(i.b)("inlineCode",{parentName:"p"},"secret"),". Grafana can be accessed via the OpenShift Route that is exposed in the ",Object(i.b)("inlineCode",{parentName:"p"},"grafana_project"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"openshift_monitoring:\n- openshift_cluster_name: pluto-01\n  user_workload: enabled\n  pvc_storage_class: ibmc-vpc-block-retain-general-purpose\n  pvc_storage_size_gb: 100\n  remote_rewrite_url: http://www.example.com:1234/receive\n  grafana_operator: enabled\n  grafana_project: grafana\n")),Object(i.b)("p",null,"The observations of Cloud Pak for Data are generated using the zen-watchdog component, which is part of the cpd_platform cartridge and therefore available on each instance of Cloud Pak for Data. Part of the zen-watchdog installation is a set of monitors which focus on the technical deployment of Cloud Pak for Data (e.g. running pods and bound Persistent Volume Claims (pvcs))."),Object(i.b)("h2",null,"Add custom monitors"),Object(i.b)("p",null,"Additional monitors which focus more on the operational usage of Cloud Pak for Data can be deployed as well. Click on each monitor for a detailed description and the list of observations which are generated by the monitor. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cloud-pak-deployer/cpd-design/components/monitoring/global-platform-connections"},"Global Platform connections")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cloud-pak-deployer/cpd-design/components/monitoring/watson-studio-runtimes"},"Watson Studio - Runtimes"))),Object(i.b)("h2",null,"Configuring custom monitors"),Object(i.b)("p",null,"Custom monitors are added via the ",Object(i.b)("inlineCode",{parentName:"p"},"cpd_monitors")," object, which contains a list of monitor sets. Each monitor set contains a set of default parameters, which can be overridden in the configuration of each monitor. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cp4d_monitors:\n- name: cp4d-monitor-set-1\n  cp4d_instance: zen-40\n  openshift_cluster_name: pluto-01\n  default_monitor_source_repo: https://github.com/IBM/cloud-pak-deployer-monitors\n  default_monitor_source_token_secret: monitors_source_repo_secret\n  default_monitor_target_cr: de.icr.io/monitorrepo  \n  default_monitor_target_cr_user_secret: monitors_target_cr_username\n  default_monitor_target_cr_password_secret: monitors_target_cr_password\n  # List of monitors\n  monitors:\n")),Object(i.b)("p",null,"The monitors are kept in a github source repository, specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"default_monitor_source_repo"),", the token to access the source repository should be available in the configured vault and is reference in the ",Object(i.b)("inlineCode",{parentName:"p"},"default_monitor_source_token_secret"),"."),Object(i.b)("p",null,"The Cloud Pak Deployer will use OpenShift S2i (Source to Image) to build the monitor. The resulting image can be pushed to either the internal image registry of OpenShift, or pushed to an external container registry, specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"default_monitor_target_cr"),". If the ",Object(i.b)("inlineCode",{parentName:"p"},"target_cr")," parameters are omitted, the default internal image registry of OpenShift is used. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'  # List of monitors\n  monitors:\n  - name: cp4d-platform-global-connections\n    #monitor_source_repo:             \n    #monitor_source_token_secret:    \n    #monitor_target_cr:              \n    #monitor_target_cr_user_secret:  \n    #monitor_target_cr_user_password:\n    context: cp4d-platform-global-connections\n    label: latest\n    schedule: "*/15 * * * *"\n    # List of monitor Event Types\n    event_types:\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"monitors")," contains the list of monitors. The ",Object(i.b)("inlineCode",{parentName:"p"},"name")," of the monitor must consist of lower case alphanumeric characters, - or ., and must start and end with an alphanumeric character.",Object(i.b)("br",{parentName:"p"}),"\n","Each monitor can override the ",Object(i.b)("inlineCode",{parentName:"p"},"default_")," settings using the ",Object(i.b)("inlineCode",{parentName:"p"},"monitor_source_repo"),", ",Object(i.b)("inlineCode",{parentName:"p"},"monitor_source_token_secret"),", ",Object(i.b)("inlineCode",{parentName:"p"},"monitor_target_cr"),", ",Object(i.b)("inlineCode",{parentName:"p"},"monitor_target_cr_user_secret")," and ",Object(i.b)("inlineCode",{parentName:"p"},"monitor_target_cr_user_password"),".",Object(i.b)("br",{parentName:"p"}),"\n","The ",Object(i.b)("inlineCode",{parentName:"p"},"context")," sets the subfolder in the github source repository where the monitor is available. The ",Object(i.b)("inlineCode",{parentName:"p"},"label")," sets the label of the pushed image, if omitted, it uses ",Object(i.b)("inlineCode",{parentName:"p"},"latest"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"schedule")," set the interval of the cronjob that runs the monitor. "),Object(i.b)(p,{kind:"info",mdxType:"InlineNotification"},"Be aware the running monitors requests system resources from the cluster. It is therefore important to set the interval of each monitor based on the expected changes made to the object(s) it monitors."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'    # List of monitor Event Types\n    event_types:\n    - name: "global_connections_count"\n      simple_name: "Number of CP4D Platform connections"\n      alert_type: "platform"\n      short_description: "Number of CP4D Platform connections"\n      long_description: "Number of CP4D Platform connections: <global_connections_count>"\n      resolution: "none"\n      reason_code_prefix: "80"\n    - name: "global_connection_valid"\n      simple_name: "Test CP4D Platform connection"\n      alert_type: "platform"\n      short_description: "Test CP4D Platform connection"\n      long_description: "Test result CP4D Platform connection: <global_connection_valid>"\n      resolution: "Validate the connection properties"\n      reason_code_prefix: "80"\n')),Object(i.b)("p",null,"Each ",Object(i.b)("inlineCode",{parentName:"p"},"monitors")," entry ",Object(i.b)("strong",{parentName:"p"},"must")," contain at least 1 ",Object(i.b)("inlineCode",{parentName:"p"},"event_types"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"event_types")," represent the observations that will be generated by the monitor and the information that will be pushed to the OpenShift Monitoring component. The ",Object(i.b)("inlineCode",{parentName:"p"},"name")," can only contain lowercase, numbers and _ characters. The ",Object(i.b)("inlineCode",{parentName:"p"},"simple_name"),", ",Object(i.b)("inlineCode",{parentName:"p"},"short_description")," and ",Object(i.b)("inlineCode",{parentName:"p"},"long_description")," are using in the Cloud Pak for Data User interface, when displaying the events in the Alerts and Events page. The ",Object(i.b)("strong",{parentName:"p"},"item")," in the long_description must be part of the ",Object(i.b)("inlineCode",{parentName:"p"},"metadata")," in the implementation of the monitor when construction the event payload. The ",Object(i.b)("inlineCode",{parentName:"p"},"reason_code_prefix")," is used for SNMP Alerts, it is recommended for custom monitors to use a custom prefix greater than 60.  "))}m.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-cpd-design-components-monitoring-index-mdx-8bed243c9dd6142052f8.js.map