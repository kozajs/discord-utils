const userMentionPattern = /<@!?(\d+)>/gm;
const roleMentionPattern = /<@&(\d+)>/gm;
const channelMentionPattern = /<#(\d+)>/gm;

function _extractIds(iterator: IterableIterator<RegExpMatchArray>): string | string[] | null {
	const matches = [...iterator];
	if (!matches.length) return null;
	if (matches.length > 1) {
		return matches.map(m => m[1]);
	} else {
		return matches[0][1];
	}
};

/**
 * Extracts user IDs from a string
 * @param string Input containing user mentions
 * @returns A single ID if only one ID was found, an array of IDs if multiple were found, or null if none were found
 */
export function getUserIdsFromMention(string: string): string | string[] | null {
	return _extractIds(string.matchAll(userMentionPattern));
};

/**
 * Extracts role IDs from a string
 * @param string Input containing role mentions
 * @returns A single ID if only one ID was found, an array of IDs if multiple were found, or null if none were found
 */
export function getRoleIdsFromMention(string: string): string | string[] | null {
	return _extractIds(string.matchAll(roleMentionPattern));
};

/**
 * Extracts channel IDs from a string
 * @param string Input containing channel mentions
 * @returns A single ID if only one ID was found, an array of IDs if multiple were found, or null if none were found
 */
export function getChannelIdsFromMention(string: string): string | string[] | null {
	return _extractIds(string.matchAll(channelMentionPattern));
};