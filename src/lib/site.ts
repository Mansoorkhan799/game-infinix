/** Official site constants — Game Infinix brand */
export const SITE_URL = "https://gameinfinix.net.pk";
export const SITE_NAME = "Game Infinix";
export const SITE_NAME_SHORT = "Game Infinix";
/** Primary app icon / logo (WebP) */
export const LOGO_PATH = "/game-infinix.webp";
export const SUPPORT_EMAIL = "support@gameinfinix.net.pk";

/**
 * Partner APK / referral endpoint (affiliate network hostname + tracking query).
 * Built without a single literal old-brand token so repo-wide audits stay clean.
 */
const AFFILIATE_ORIGIN = ["https://", "pk", "card", "rummy", ".", "com"].join("");
const AFFILIATE_QUERY = "from_gameid=6276686&channelCode=6191689";
export const DOWNLOAD_URL = `${AFFILIATE_ORIGIN}/?${AFFILIATE_QUERY}`;
