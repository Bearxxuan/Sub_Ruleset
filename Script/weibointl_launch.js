/*
[Script]
weibointl_launch.js = type=http-response,pattern=^https?:\/\/weibointl\.api\.weibo\.cn/portal\.php\?a=get_coopen_ads,requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Bearxxuan/Sub_Ruleset/master/Script/weibointl_launch.js,script-update-interval=0

[MITM]
hostname = weibointl.api.weibo.cn, api.weibo.cn
*/

let body = JSON.parse($response.body);

body["data"]["display_ad"] = 0;

$done({ body: JSON.stringify(body) });