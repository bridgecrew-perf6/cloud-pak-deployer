(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),u=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},f=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,c=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+f.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},y=a("FCXl"),O=a("dI71"),j=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,c=new RegExp(o+"/?(#.*)?$"),s=n.replace(c,a);return Object(m.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(m.b)(l.Link,{className:j.link,to:""+s},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:j.list},i))))))},t}(o.a.Component),x=a("MjG9"),N=a("CzIb"),w=a("Asxa"),k=a("OIbQ"),C=a.n(k),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:C.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,p=t.titleType,u=b.tabs,f=b.title,O=b.theme,j=b.description,w=b.keywords,k=b.date,C=Object(N.a)().interiorTheme,A=Object(l.useStaticQuery)("2456312558").site.pathPrefix,P=A?n.pathname.replace(A,""):n.pathname,I=u?P.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",S=O||C;return Object(m.b)(s.a,{tabs:u,homepage:!1,theme:S,pageTitle:f,pageDescription:j,pageKeywords:w,titleType:p},Object(m.b)(h,{title:o?Object(m.b)(o,null):f,label:"label",tabs:u,theme:S}),u&&Object(m.b)(v,{title:f,slug:P,tabs:u,currentTab:I}),Object(m.b)(x.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:d}),Object(m.b)(T,{date:k})),Object(m.b)(y.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:I}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},mnse:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n,o=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),c=(a("qKvR"),["components"]),s={},b=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),d={_frontmatter:s},p=l.a;function u(e){var t=e.components,a=Object(i.a)(e,c);return Object(r.b)(p,Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Cloud Pak Deployer Configuration"),Object(r.b)("p",null,"The Cloud Pak Deployer includes several samples which you can use to build your own configuration. You can find sample configuration ",Object(r.b)("inlineCode",{parentName:"p"},"yaml")," files in the sub-directories of the ",Object(r.b)("inlineCode",{parentName:"p"},"sample-configurations")," directory of the repository. Descriptions are also included in the sub-directories."),Object(r.b)(b,{kind:"warning",mdxType:"InlineNotification"},"Do not make changes to the sample configurations in the `cloud-pak-deployer` directory, but rather copy it to your own home directory or somewhere else and then make changes. If you store your own configuration under the repository's clone, you may not be able to update (pull) the repository with changes applied on GitHub, or accidentally overwrite it."),Object(r.b)(b,{kind:"warning",mdxType:"InlineNotification"},"The deployer expects to manage all objects referenced in the configuration files, including the referenced OpenShift cluster and Cloud Pak installation. If you have already pre-provisioned the OpenShift cluster, choose a configuration with `existing-ocp` cloud platform. If the Cloud Pak has already been installed, unexpected and undesired activities may happen. The deployer has not been designed to alter a pre-provisioned OpenShift cluster or existing Cloud Pak installation."),Object(r.b)("h2",null,"Configuration steps - static sample configuration"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Copy the static sample configuration directory to your own directory:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    mkdir -p /data/config\n    cp -r ./sample-configurations/roks-ocs-cp4d /data/config/sample\n    cd /data/config/sample\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Edit the “config/cp4d-…yaml” file and select the cartridges to be installed by changing the state to ",Object(r.b)("inlineCode",{parentName:"li"},"installed"),". Additionally you can accept the Cloud Pak license in the config file by specifying ",Object(r.b)("inlineCode",{parentName:"li"},"accept_licenses: True"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    nano ./config/cp4d-408.yaml\n")),Object(r.b)("p",null,"The configuration typically works without any configuration changes and will create all referenced objects, including the Virtual Private Cloud, subnets, SSH keys, ROKS cluster and OCS storage ndoes. There is typically no need to change address prefixes and subnets. The IP addresses used by the provisioned components are private to the VPC and are not externally exposed."),Object(r.b)("h2",null,"Configuration steps - dynamically choose OpenShift and Cloud Pak"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Copy the sample configuration directory to your own directory:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    mkdir -p /data/config\n    cp -r ./sample-configurations/sample-dynamic /data/config/sample\n    cd /data/config/sample\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Update the inventory file ",Object(r.b)("inlineCode",{parentName:"li"},"./inventory/sample.inv")," to uncomment the ",Object(r.b)("inlineCode",{parentName:"li"},"cloud_platform")," that matches the infrastructure you’re targeting"),Object(r.b)("li",{parentName:"ol"},"Copy the relevant “ocp-…” file from the ",Object(r.b)("inlineCode",{parentName:"li"},"./config-samples")," direcotry to the ",Object(r.b)("inlineCode",{parentName:"li"},"./config")," directory, for example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    cp ./config-samples/ocp-ibm-cloud-roks-ocs.yaml ./config/\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Copy the relevant “cp4d-…” file from the ",Object(r.b)("inlineCode",{parentName:"li"},"./config-samples")," direcotry to the ",Object(r.b)("inlineCode",{parentName:"li"},"./config")," directory, for example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    cp ./config-samples/cp4d-408.yaml ./config/\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Edit the “config/cp4d-…yaml” file and select the cartridges to be installed by changing the state to ",Object(r.b)("inlineCode",{parentName:"li"},"installed"),". Additionally you can accept the Cloud Pak license in the config file by specifying ",Object(r.b)("inlineCode",{parentName:"li"},"accept_licenses: True"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    nano ./config/cp4d-408.yaml\n")),Object(r.b)("p",null,"For more advanced configuration topics such as using a private registry, setting up transit gateways between VPCs, etc, go to ",Object(r.b)("a",{parentName:"p",href:"/cloud-pak-deployer/advanced/advanced-configuration"},"advanced configuration")),Object(r.b)("h2",null,"Directory structure"),Object(r.b)("p",null,"Every configuration has a fixed directory structure, consisting of mandatory and optional subdirectories.\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"646px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"165.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAhCAIAAABWXBxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFklEQVQ4y41VW2sTQRjtj/DBZxH/hvg3BJ/UFwWf1DefRB+soKAISgV9UqSISO3FUrWVSpukUVprm6TNxTbdbLe57m5m5+7ZnVjaZMvmYzPsZObMmXO+b2ZH7FZ3Jff3xfTqrtPRWiul9NAxcu725zO3Zk/fmE4Vm+hzqaRSImyHAF979fPKWPrqy8yW7aEvDbOS4ZMIxk9wpmRvapeKDhFTK+VsYS8cEtJoMRED9v1ut0sY55h2Z3z97M2ZU9cnns5uhyqESmAmhAAdUKolH/2UO39v/sL9hXepKob2rJrruhjtdDp44SHBcTClVAgRSQ15GA0UD6AFs1OpVLlc9jyvFQVjrB8cBIEBG1XoGgb8mclkdnZ2gAmFESKlTAAbFdiO7/v5fD6XyzmOcxAFhjATa5lV4sEIkKNdXl6uVCqHmg0GrdnaMXCUZ00Zh3uM8YCQQqFg2zY094HN/H5wL9vtOgu64UvXx/77MiSiiAHnLHduff/uhz9f1u2IRA0WyTFmGBMlk2jJLo9lRi69H7k4/mAiH1skYIKEeOZvG86jqc3HM4VspYWuFRWJGTLM8LxYLMa43ZskhVbsaJEAUKvV4rc9YJiya5bvhYTtdhuihjXM8XWhrudLotRQ5oQOHqZBwzxCAk67U3nx8IceXdTpai/tg3Hitvdc/avK12qyHqZZ1esN1Nlw4GiHnFHJKWzDUUin0yjPRqMBw1CkwximUZj4EwcAtQkk3sGPrrEKhR0PJkK7TGdLrcq+d1hbxjZ5JIyLPTCYcBKUoHPb8smyhmfpvSgrMukawjLYCe4wJfhqTX3ckJN5VWr2ZjRabax8IrjfTLgliBTUJ3Qyr19nme3K2LT1g6EFDyQgcLAXyuprSbisV9uSBwnMx9aSgtMwzwHXWw5f3DzA0pQGKHv4nwBmXDRbbcFI0aHPV/TbNeF6Xs2ystmsZVkJYGQFuYhs1z7TXiBAWK1Wcbft7u4OC/6vIrw3cTE1m020yWBT20bz93VbhFcnw/2YrBkO40smKNl26LO0fvNb4buGal9aWsIl8Q/xxGmgZ+hpDgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Directory structure",title:"Directory structure",src:"/cloud-pak-deployer/static/b4a577048b6f6fd32b22154cbc1adb00/ebebe/directory-structure.png",srcSet:["/cloud-pak-deployer/static/b4a577048b6f6fd32b22154cbc1adb00/7fc1e/directory-structure.png 288w","/cloud-pak-deployer/static/b4a577048b6f6fd32b22154cbc1adb00/a5df1/directory-structure.png 576w","/cloud-pak-deployer/static/b4a577048b6f6fd32b22154cbc1adb00/ebebe/directory-structure.png 646w"],sizes:"(max-width: 646px) 100vw, 646px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(r.b)("p",null,"Mandatory subdirectories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"config"),": Keeps one or more ",Object(r.b)("inlineCode",{parentName:"li"},"yaml")," files with your OpenShift and Cloud Pak configuration"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"inventory"),": Holds global settings for the configuration such as environment name and type of vault you want to use")),Object(r.b)("p",null,"Additionally, there are 2 optional subdirectories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaults"),": Directory that keeps the defaults which will be merged with your configuration"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"assets"),": Keeps directories of assets which must be deployed onto the Cloud Pak")),Object(r.b)("h3",null,Object(r.b)("inlineCode",{parentName:"h3"},"config")," directory"),Object(r.b)("p",null,"You can choose to keep only a single file per subdirectory or, for more complex configurations, you can create multiple yaml files. You can find a full list of all supported object types here: ",Object(r.b)("a",{parentName:"p",href:"/cloud-pak-deployer/cpd-design/objects/objects"},"Configuration objects"),". The generator automatically merges all ",Object(r.b)("inlineCode",{parentName:"p"},".yaml")," files in the config and defaults directory. In the sample configurations we split configuration of the OpenShift ",Object(r.b)("inlineCode",{parentName:"p"},"ocp-...")," and Cloud Pak ",Object(r.b)("inlineCode",{parentName:"p"},"cp4.-...")," objects."),Object(r.b)("p",null,"For example, your ",Object(r.b)("inlineCode",{parentName:"p"},"config")," directory could hold the following files:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cp4d-408.yaml\nocp-ibm-cloud-roks-ocs.yaml\n")),Object(r.b)("p",null,"This will provision a ROKS cluster on IBM Cloud with OpenShift Data Foundation (fka OCS) and Cloud Pak for Data 4.0.8."),Object(r.b)("h3",null,Object(r.b)("inlineCode",{parentName:"h3"},"inventory")," directory"),Object(r.b)("p",null,"The Cloud Pak Deployer pipeline has been built using Ansible and it can be configured using “inventory” files. Inventory files hold the global parameters which are available throughout the Ansible playbooks. "),Object(r.b)("p",null,"The most important configuration you will find in the Cloud Pak Deployer’s inventory files are the cloud platform and vault configuration. All samples default to the ",Object(r.b)("strong",{parentName:"p"},"File Vault"),", meaning that the vault will be kept in the ",Object(r.b)("inlineCode",{parentName:"p"},"vault")," directory under the status directory you specify when you run the deployer. Detailed descriptions of the vault settings can be found in the sample inventory file and also here: ",Object(r.b)("a",{parentName:"p",href:"/cloud-pak-deployer/cpd-design/objects/vault"},"vault settings"),"."),Object(r.b)("h3",null,Object(r.b)("inlineCode",{parentName:"h3"},"defaults")," directory (optional)"),Object(r.b)("p",null,"Holds the defaults for all object types. If a certain object property has not been specified in the ",Object(r.b)("inlineCode",{parentName:"p"},"config")," directory, it will be retrieved from the ",Object(r.b)("inlineCode",{parentName:"p"},"defaults")," directory using the flavour specified in the configured object. If no flavour has been selected, the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," flavour will be chosen."),Object(r.b)("p",null,"You should not need this subdirectory most circumstances."),Object(r.b)("h3",null,Object(r.b)("inlineCode",{parentName:"h3"},"assets")," directory (optional)"),Object(r.b)("p",null,"Optional directory holding the assets you wish to deploy for the Cloud Pak. More information about Cloud Pak for Data assets which can be deployed can be found in object definition ",Object(r.b)("a",{parentName:"p",href:"/cloud-pak-deployer/cpd-design/objects/cloud-pak-assets"},"cp4d_asset"),". The directory can be named differently as well, for example ",Object(r.b)("inlineCode",{parentName:"p"},"cp4d-assets")," or ",Object(r.b)("inlineCode",{parentName:"p"},"customer-churn-demo"),"."),Object(r.b)("h2",null,"Vault secrets"),Object(r.b)("p",null,"User passwords, certificates and other “secret” information is kept in the vault, which can be either a flat file (not encrypted), HashiCorp Vault or the IBM Cloud Secrets Manager service. Some of the deployment configurations require that the vault is pre-populated with secrets which as needed during the deployment. For example, a vSphere deployment needs the vSphere user and password to authenticate to vSphere and Cloud Pak for Data SAML configuration requires the idP certificate."),Object(r.b)("p",null,"To set secrets, ensure that the environment variables for the configuration and status directories are set:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"export STATUS_DIR=/data/status/sample\nexport CONFIG_DIR=/data/config/sample\n")),Object(r.b)("p",null,"Set vSphere user secret:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"./cp-deploy.sh vault set \\\n    --vault-secret vsphere-user \\\n    --vault-secret-value super_user@vsphere.local\n")),Object(r.b)("p",null,"Or, if you want to create the secret from an input file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"./cp-deploy.sh vault set \\\n    --vault-secret kubeconfig \\\n    --vault-secret-file ~/.kube/config\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cp-deploy-configure-index-mdx-78236ec6bc8393a95b86.js.map