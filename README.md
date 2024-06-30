It contains <br /> **Enums**  : QueryType,API_PATHS,ComponentSize,ComponentColorType,ComponentType . <br />
**Interfaces**  MetaData, PostMetaData, Post .<br />
To include the package in project : <br />
1 Add a .npmrc file  <br />
//12-digit-id.d.codeartifact.us-east-1.amazonaws.com/npm/nbnw-repo/:always-auth=true
@12-digit-id:registry=https://12-digit-id.d.codeartifact.us-east-1.amazonaws.com/npm/nbnw-repo/
<br />
2 login on aws codeartifact : aws codeartifact login --tool npm --repository nbnw-repo --domain nbnw-domain --domain-owner 747136956388 --region us-east-1 <br />
3 npm install uinbnwconstants
