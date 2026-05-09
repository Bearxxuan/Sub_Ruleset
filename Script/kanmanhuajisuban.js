/*看漫画极速版 by HoGer
[Script]
kanmanhuajisuban.js = type=http-response,pattern=^https?:\/\/getuserinfo\.321mh\.com\/app_api\/v5\/getuserinfo\/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Bearxxuan/Sub_Ruleset/master/Script/kanmanhuajisuban.js,script-update-interval=0

[MITM]
hostname = getuserinfo.321mh.com
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