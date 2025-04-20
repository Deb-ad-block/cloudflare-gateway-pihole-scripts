import dotenv from "dotenv";

dotenv.config();

if (process.env.CLOUDFLARE_API_KEY) {
  console.warn(
    "Using Global API Key is very risky for your Cloudflare account. It is strongly recommended to create an API Token with scoped permissions instead."
  );
}

export const API_KEY = process.env.CLOUDFLARE_API_KEY;

export const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

export const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

export const ACCOUNT_EMAIL = process.env.CLOUDFLARE_ACCOUNT_EMAIL;

export const LIST_ITEM_LIMIT = isNaN(process.env.CLOUDFLARE_LIST_ITEM_LIMIT)
  ? 300000
  : parseInt(process.env.CLOUDFLARE_LIST_ITEM_LIMIT, 10);

export const LIST_ITEM_SIZE = 1000;

export const API_HOST = "https://api.cloudflare.com/client/v4";

export const DRY_RUN = !!parseInt(process.env.DRY_RUN, 10);

export const BLOCK_PAGE_ENABLED = !!parseInt(process.env.BLOCK_PAGE_ENABLED, 10);

export const BLOCK_BASED_ON_SNI = !!parseInt(process.env.BLOCK_BASED_ON_SNI, 10);

export const DEBUG = !!parseInt(process.env.DEBUG, 10);

export const CLOUDFLARE_RATE_LIMITING_COOLDOWN_TIME = 2 * 60 * 1000;
export const RATE_LIMITING_HTTP_ERROR_CODE = 429;

export const PROCESSING_FILENAME = {
  ALLOWLIST: "allowlist.txt",
  BLOCKLIST: "blocklist.txt",
  OLD_ALLOWLIST: "whitelist.csv",
  OLD_BLOCKLIST: "input.csv",
};

export const LIST_TYPE = {
  ALLOWLIST: "allowlist",
  BLOCKLIST: "blocklist",
};

export const USER_DEFINED_ALLOWLIST_URLS = process.env.ALLOWLIST_URLS
  ? process.env.ALLOWLIST_URLS.split("\n").filter((x) => x)
  : undefined;

export const USER_DEFINED_BLOCKLIST_URLS = process.env.BLOCKLIST_URLS
  ? process.env.BLOCKLIST_URLS.split("\n").filter((x) => x)
  : undefined;

// These are the default blocklists and allowlists that are used by the script if the user doesn't provide any URLs by themselves.
// The files are dynamically fetched from the internet, therefore it's important to choose only the most reliable sources.
// Commented out lists are subject to removal.

// You can have an unlimited number of allowlists, unlike blocklists.
export const RECOMMENDED_ALLOWLIST_URLS = [
  // Torrent trackers
  "https://raw.githubusercontent.com/im-sm/Pi-hole-Torrent-Blocklist/main/all-torrent-trackres.txt",
  // Banks
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/banks.txt",
  // Official Discord domains
  "https://raw.githubusercontent.com/Dogino/Discord-Phishing-URLs/main/official-domains.txt",
  // macOS specific
  //"https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/mac.txt",
  // Windows specific
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/windows.txt",
  // URL shorteners
  "https://raw.githubusercontent.com/boutetnico/url-shorteners/master/list.txt",
  // Firefox sync, add-ons, etc.
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/firefox.txt",
  // Android apps
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/android.txt",

  // General allowlists
  "https://raw.githubusercontent.com/TogoFire-Home/AD-Settings/main/Filters/whitelist.txt",
  "https://raw.githubusercontent.com/DandelionSprout/AdGuard-Home-Whitelist/master/whitelist.txt",
  "https://raw.githubusercontent.com/AdguardTeam/AdGuardSDNSFilter/master/Filters/exclusions.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/issues.txt",
  // Uncomment the line below to use OISD's most commmonly whitelisted list
  // https://local.oisd.nl/extract/commonly_whitelisted.php,
];

// The default blocklist settings are optimized for performance while still blocking a lot.
// Adding too many blocklists may slow down DNS response times and thus your internet speed.
// If you'd like to use something larger, consider something like hagezi's Multi LIGHT:
// https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/light.txt
export const RECOMMENDED_BLOCKLIST_URLS = [
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt",
  "https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/light.txt",
  "https://small.oisd.nl/",
  "https://raw.githubusercontent.com/Perflyst/PiHoleBlocklist/master/android-tracking.txt",
  "https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Extension/GoodbyeAds-Samsung-AdBlock.txt",
  "https://raw.githubusercontent.com/Perflyst/PiHoleBlocklist/master/SmartTV-AGH.txt", 
  //"https://raw.githubusercontent.com/crazy-max/WindowsSpyBlocker/master/data/hosts/spy.txt", 
  //"https://malware-filter.gitlab.io/malware-filter/urlhaus-filter-agh.txt", 
  //"https://raw.githubusercontent.com/durablenapkin/scamblocklist/master/hosts.txt", 
  //"https://someonewhocares.org/hosts/zero/hosts", 
  "https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/hosts.txt", 
  // The below list never gets updated.  
  //"https://raw.githubusercontent.com/mitchellkrogza/The-Big-List-of-Hacked-Malware-Web-Sites/master/hosts", 
  "https://anti-ad.net/easylist.txt", 
  // The below list never gets updated.
  //"https://raw.githubusercontent.com/blocklistproject/Lists/master/malware.txt", 
  "https://raw.githubusercontent.com/mitchellkrogza/nginx-ultimate-bad-bot-blocker/master/_generator_lists/bad-referrers.list", 
  "https://raw.githubusercontent.com/jerryn70/GoodbyeAds/master/Extension/GoodbyeAds-YouTube-AdBlock.txt", 
  "https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt", 
  // The below lists never gets updated.
  //"https://www.github.developerdan.com/hosts/lists/ads-and-tracking-extended.txt", 
  //"https://www.github.developerdan.com/hosts/lists/amp-hosts-extended.txt", 
  //"https://www.github.developerdan.com/hosts/lists/dating-services-extended.txt", 
  // Not sure if the below four are supported so commented out. Problem for furure me.
  //"https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/firehol_level1.netset", 
  //"https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/firehol_level4.netset", 
  //"https://www.team-cymru.org/Services/Bogons/fullbogons-ipv6.txt", 
  //"https://www.team-cymru.org/Services/Bogons/fullbogons-ipv4.txt", 
  //"https://raw.githubusercontent.com/olbat/ut1-blacklists/master/blacklists/phishing/urls",
  // The below is a huge list, so check if this is causing problems
  "https://hblock.molinero.dev/hosts_adblock.txt", 
  // The below is a huge list, so check if this is causing problems
  "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts", 
  //"https://v.firebog.net/hosts/Prigent-Malware.txt", 
  //"https://v.firebog.net/hosts/static/w3kbl.txt", 
  //"https://raw.githubusercontent.com/matomo-org/referrer-spam-blacklist/master/spammers.txt", 
  //"https://raw.githubusercontent.com/VeleSila/yhosts/master/hosts", 
  "https://v.firebog.net/hosts/Easyprivacy.txt", 
  //"https://v.firebog.net/hosts/Prigent-Ads.txt", 
  //"https://gitlab.com/quidsup/notrack-blocklists/raw/master/notrack-blocklist.txt",, 
  "https://raw.githubusercontent.com/Dogino/Discord-Phishing-URLs/main/scam-urls.txt", 
  "https://pgl.yoyo.org/adservers/serverlist.php?hostformat=adblockplus&showintro=1&mimetype=plaintext", 
  //"https://raw.githubusercontent.com/jdlingyu/ad-wars/master/hosts",
  "https://raw.githubusercontent.com/TogoFire-Home/AD-Settings/main/Filters/hosts.txt", 
  //"https://raw.githubusercontent.com/d3ward/toolz/master/src/d3host.txt", 
  // Check next time with the below uncommneted to see if there is any difference
  //"https://malware-filter.gitlab.io/malware-filter/phishing-filter-agh.txt", 
  //"https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt",
  //"https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/badware.txt",
  //"https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/privacy.txt",
  //"https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/resource-abuse.txt",
  // Only blocks mobile ads and analytics. Very tiny; comment the rest out and only use this one for the absolute best performance.
  "https://adaway.org/hosts.txt",
];