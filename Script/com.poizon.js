/*毒去广告 by ConnersHua
[Script]
com.poizon.js = type=http-response,pattern=^https?:\/\/m\.poizon\.com\/client\/init,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Bearxxuan/Sub_Ruleset/master/Script/com.poizon.js,script-update-interval=0

[MITM]
hostname = m.poizon.com
*/

let result = JSON.parse(body);

delete result.data.boot;
delete result.data.bootAnimation;

JSON.stringify(result);