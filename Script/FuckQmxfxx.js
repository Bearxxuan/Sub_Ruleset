/* FuckQmxfxx by Bearxx
[Script]
FuckQmxfxx.js = type=http-response,pattern=^https?:\/\/qmxfxx\.119\.gov\.cn\/alipay\/mini\/api\/users\/activeScore,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Bearxxuan/Sub_Ruleset/master/Script/FuckQmxfxx.js,script-update-interval=0

[MITM]
hostname = qmxfxx.119.gov.cn
*/

let body= $response.body.replace(/"result":.*?,/g,"\"result\":1008,");
$done({body});