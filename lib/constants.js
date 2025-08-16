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
  
  //personal
  "https://raw.githubusercontent.com/Deb-ad-block/cloudflare-gateway-pihole-scripts/refs/heads/main/personal_blocklist.txt",
  
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
  // Previous list :
  // "https://raw.githubusercontent.com/hagezi/dns-blocklists/refs/heads/main/adblock/native.oppo-realme.txt",
  // "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.oppo-realme.txt",
  // "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.vivo.txt",
  // "https://raw.githubusercontent.com/hagezi/dns-blocklists/refs/heads/main/adblock/native.samsung.txt",
  // "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/popupads.txt",
  // "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/popupads.txt",
  // "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/popupads.txt",
  // "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/popupads.txt",
  // "https://adguardteam.github.io/HostlistsRegistry/assets/filter_59.txt",
  // "https://adguardteam.github.io/HostlistsRegistry/assets/filter_61.txt",
  // "https://adguardteam.github.io/HostlistsRegistry/assets/filter_60.txt",
  // "https://adguardteam.github.io/HostlistsRegistry/assets/filter_1.txt",
  // "https://adguardteam.github.io/HostlistsRegistry/assets/filter_34.txt"
  // New List :
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_1.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_2.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_59.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_34.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_61.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_63.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_53.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_24.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_4.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_5.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_60.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_47.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_54.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_31.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_10.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_9.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_11.txt",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt",
  "https://raw.githubusercontent.com/hkamran80/blocklists/main/smart-tv.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_18.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_8.txt",
  "https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/popupads.txt",
  "https://raw.githubusercontent.com/TogoFire-Home/AD-Settings/refs/heads/main/Filters/filter.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_7.txt",
  "https://raw.githubusercontent.com/PeterDaveHello/url-shorteners/master/list",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.mini.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_48.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_39.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_30.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_55.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_12.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_50.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.oppo-realme.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/native.vivo.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/refs/heads/main/adblock/native.samsung.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/refs/heads/main/adblock/native.oppo-realme.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/refs/heads/main/adblock/native.vivo.txt",
  "https://raw.githubusercontent.com/Deb-ad-block/cloudflare-gateway-pihole-scripts/refs/heads/main/personal_blocklist.txt",
  "https://adguardteam.github.io/HostlistsRegistry/assets/filter_44.txt"
];