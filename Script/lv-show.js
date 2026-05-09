/*Remove 浪live's Ad by Bearxx
[Script]
lv-show.js = type=http-response,pattern=^https?:\/\/langapi\.lv-show\.com/.*?system/config,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Bearxxuan/Sub_Ruleset/master/Script/lv-show.js,script-update-interval=0

[MITM]
hostname = langapi.lv-show.com
*/
var obj = JSON.parse($response.body);
obj.data.w_ad = null;
obj.data.h_ad = null;

$done({
    body: JSON.stringify(obj)
});