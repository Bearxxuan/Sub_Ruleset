/*微信阅读 by HoGer
[Script]
weixinyuedu.js = type=http-response,pattern=^https?:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Bearxxuan/Sub_Ruleset/master/Script/weixinyuedu.js,script-update-interval=0

[MITM]
hostname = i.weread.qq.com
*/

var body = $response.body;
var url = $request.url;
const path = "/pay/memberCardSummary";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
        obj["expired"] = 0;
	obj["expiredTime"] = 1591804799;
	obj["remainTime"] = 86313600;
	body = JSON.stringify(obj);
 }
$done({body});