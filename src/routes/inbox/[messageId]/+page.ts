import { error } from '@sveltejs/kit';
import { getInboxMessageById } from '$lib/data/mock-data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const message = getInboxMessageById(params.messageId);

	if (!message) {
		throw error(404, 'Message not found');
	}

	return { message };
};
