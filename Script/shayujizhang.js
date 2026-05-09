/* shayujizhang by Bearxx
[Script]
shayujizhang.js = type=http-response,pattern=^https?:\/\/api\.shayujizhang\.com\/account\/detail\/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Bearxxuan/Sub_Ruleset/master/Script/shayujizhang.js,script-update-interval=0

[MITM]
hostname = api.shayujizhang.com
*/

let body= $response.body.replace(/"vip":\s?{}/g,"\"vip\": {\"isvip\": 1,\"days\": 999}");
$done({body});