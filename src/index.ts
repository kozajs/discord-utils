import type { CommandInteraction, Message } from 'discord.js';

const userMentionPattern = /<@!?(\d+)>/gm;
const roleMentionPattern = /<@&(\d+)>/gm;
const channelMentionPattern = /<#(\d+)>/gm;

function _extractIds(iterator: IterableIterator<RegExpMatchArray>): string[] | null {
	const matches = [...iterator];
	if (!matches.length) return null;
	return matches.map(m => m[1]);
};

/**
 * Returns the first user ID from a mention in a string
 * @param string Input containing user mentions
 * @returns An ID or null if none were found
 */
export function getUserIdFromMention(string: string): string | null {
	const ids = getUserIdsFromMention(string);
	if (ids && ids.length) return ids[0];
	return null;
};

/**
 * Extracts user IDs from a string
 * @param string Input containing user mentions
 * @returns An array of IDs or null if none were found
 */
export function getUserIdsFromMention(string: string): string | string[] | null {
	return _extractIds(string.matchAll(userMentionPattern));
};

/**
 * Returns the first role ID from a mention in a string
 * @param string Input containing role mentions
 * @returns An ID or null if none were found
 */
export function getRoleIdFromMention(string: string): string | null {
	const ids = getRoleIdsFromMention(string);
	if (ids && ids.length) return ids[0];
	return null;
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
 * Returns the first role ID from a mention in a string
 * @param string Input containing role mentions
 * @returns An ID or null if none were found
 */
export function getChannelIdFromMention(string: string): string | null {
	const ids = getChannelIdsFromMention(string);
	if (ids && ids.length) return ids[0];
	return null;
};

/**
 * Extracts channel IDs from a string
 * @param string Input containing channel mentions
 * @returns A single ID if only one ID was found, an array of IDs if multiple were found, or null if none were found
 */
export function getChannelIdsFromMention(string: string): string | string[] | null {
	return _extractIds(string.matchAll(channelMentionPattern));
};

/**
 * Gets the URL to a message
 * @param message Message
 * @returns The URL to the message
 */
export function getMessageURL(message: Message): string {
	const { id, guildId, channelId} = message;

	return `https://discord.com/channels/${guildId}/${channelId}/${id}`;
};