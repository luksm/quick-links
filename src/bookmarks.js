const bookmarks = [
  {
    title: "Scrum Master",
    links: [
      {
        href:
          "https://kanasoftware.jira.com/wiki/spaces/VOC/pages/1410700648/Reporting",
        label: "Reporting Home"
      },
      {
        href:
          "https://kanasoftware.jira.com/wiki/spaces/VOC/pages/1727301446/2021+Release+Schedule",
        label: "2021 Release Schedule"
      },
      {
        href:
          "https://kanasoftware.jira.com/secure/Dashboard.jspa?selectPageId=24895",
        label: "XM Dev and QA Rework Dashboard"
      }
    ]
  },
  {
    title: "JIRA",
    links: [
      {
        href: "#",
        label: "Sprint Board"
      },
      {
        href: "#",
        label: "Backlog"
      },
      {
        href:
          "https://kanasoftware.jira.com/secure/Dashboard.jspa?selectPageId=24761",
        label: "Sprint Dashboard"
      }
    ]
  },
  {
    title: "Kibana",
    links: [
      {
        href: `https://vpc-qal-trace-es-fiwiuvsfap5kufr5qtvdgoqocu.us-east-1.es.amazonaws.com/_plugin/kibana/app/kibana#/discover?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-3d,to:now))&_a=(columns:!(body,url,status),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:d0ee52b0-f777-11ea-acd1-75619eda302b,key:application,negate:!f,params:(query:fs-graphql),type:phrase,value:fs-graphql),query:(match:(application:(query:fs-graphql,type:phrase))))),index:d0ee52b0-f777-11ea-acd1-75619eda302b,interval:auto,query:(language:kuery,query:''),sort:!('@timestamp',desc))`,
        label: "QA - FS GraphQL"
      },
      {
        href: `https://vpc-stg-trace-es-new-izvnqrb6kfdombl2wbqawvou7i.us-east-1.es.amazonaws.com/_plugin/kibana/app/kibana#/discover?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-1M,to:now))&_a=(columns:!(body,url,status),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:d0ee52b0-f777-11ea-acd1-75619eda302b,key:application,negate:!f,params:(query:fs-graphql),type:phrase,value:fs-graphql),query:(match:(application:(query:fs-graphql,type:phrase))))),index:'0a5d1880-0d66-11ea-bf4a-a126964c15df',interval:auto,query:(language:kuery,query:''),sort:!('@timestamp',desc))`,
        label: "STG - FS GraphQL"
      },
      {
        href: `https://vpc-prd-trace-es-new-kczl2r66psz7osahkb324zsfla.us-east-1.es.amazonaws.com/_plugin/kibana/app/kibana#/discover?_g=()&_a=(columns:!(_source),index:b51e92a0-0d3c-11ea-b33c-7b48580004c1,interval:auto,query:(language:kuery,query:''),sort:!('@timestamp',desc))`,
        label: "PROD - FS GraphQL"
      }
    ]
  }
];

export default bookmarks;
