import { error } from '@sveltejs/kit';
import { getCreateTemplate } from '$lib/data/mock-data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const template = getCreateTemplate(params.type);

	if (!template) {
		throw error(404, 'Create flow not found');
	}

	return { template };
};
