import type {
	BillingInfo,
	CalendarItem,
	Community,
	CreateTemplate,
	DownloadPlatform,
	EventCard,
	EventFilterId,
	FilterOption,
	HelpTopic,
	InboxMessage,
	NotificationItem,
	PaymentMethod,
	QuickCreateOption,
	SearchResult,
	SettingPreference,
	TaskFilterId,
	TaskItem,
	UserProfile,
} from '$lib/types';

export const communities = [
	{
		slug: 'design-circle',
		name: 'Design Circle',
		role: 'Moderator',
		description: 'Creative students coordinating critique nights and shared resources.',
		members: 18,
		tasks: 24,
		companionLevel: 7,
		highlights: ['Portfolio Crit Night', 'Mentor roster', 'Brand refresh'],
	},
	{
		slug: 'campus-volunteers',
		name: 'Campus Volunteers',
		role: 'Member',
		description: 'Volunteer crews planning local care, garden, and donation drives.',
		members: 42,
		tasks: 18,
		companionLevel: 4,
		highlights: ['Garden reset', 'Donation kits', 'Volunteer map review'],
	},
	{
		slug: 'indie-film-club',
		name: 'Indie Film Club',
		role: 'Following',
		description: 'Public screenings and film conversations from independent creators.',
		members: 71,
		tasks: 0,
		companionLevel: 3,
		highlights: ['Short film screening', 'Director Q&A', 'Monthly newsletter'],
	},
	{
		slug: 'code-bloom',
		name: 'Code Bloom',
		role: 'Member',
		description: 'Peer learning cohort building dev skills through weekly challenges.',
		members: 26,
		tasks: 11,
		companionLevel: 2,
		highlights: ['Mentor notes', 'Welcome desk', 'Pairing rotation'],
	},
] satisfies Community[];

const communityBySlug = new Map(communities.map((community) => [community.slug, community]));

export const mockEvents = [
	{
		slug: 'portfolio-crit-night',
		title: 'Portfolio Crit Night',
		description: 'Bring one project and leave with concrete peer feedback.',
		date: 'May 22',
		time: '18:30',
		communitySlug: 'design-circle',
		communityName: 'Design Circle',
		capacityLabel: '38 / 50 joined',
		format: 'In-person',
		location: 'Arts Hall 2',
		initials: 'DC',
		isThisWeek: true,
		isNearCampus: true,
		heroClass: 'bg-rose-100 dark:bg-rose-950 text-rose-300 dark:text-rose-800',
		badgeClass: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',
	},
	{
		slug: 'campus-garden-reset',
		title: 'Campus Garden Reset',
		description: 'Volunteer teams prepare shared green areas for the summer term.',
		date: 'May 24',
		time: '10:00',
		communitySlug: 'campus-volunteers',
		communityName: 'Campus Volunteers',
		capacityLabel: 'Open capacity',
		format: 'In-person',
		location: 'North Garden',
		initials: 'CV',
		isThisWeek: true,
		isNearCampus: true,
		heroClass: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-300 dark:text-emerald-800',
		badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
	},
	{
		slug: 'repair-cafe-weekend',
		title: 'Repair Cafe Weekend',
		description: 'A public workshop for fixing small household objects together.',
		date: 'May 25',
		time: '12:00',
		communitySlug: 'campus-volunteers',
		communityName: 'Campus Volunteers',
		capacityLabel: 'Open capacity',
		format: 'In-person',
		location: 'Community Lab',
		initials: 'RC',
		isThisWeek: false,
		isNearCampus: false,
		heroClass: 'bg-teal-100 dark:bg-teal-950 text-teal-300 dark:text-teal-800',
		badgeClass: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
	},
	{
		slug: 'short-film-open-screening',
		title: 'Short Film Open Screening',
		description: 'Public screening followed by a moderated filmmaker Q&A.',
		date: 'May 28',
		time: '19:00',
		communitySlug: 'indie-film-club',
		communityName: 'Indie Film Club',
		capacityLabel: '71 / 90 joined',
		format: 'In-person',
		location: 'Screening Room 3',
		initials: 'IF',
		isThisWeek: false,
		isNearCampus: true,
		heroClass: 'bg-amber-100 dark:bg-amber-950 text-amber-300 dark:text-amber-800',
		badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
	},
	{
		slug: 'virtual-onboarding-standup',
		title: 'Virtual Onboarding Standup',
		description: 'A remote onboarding call to welcome new volunteers.',
		date: 'May 26',
		time: '09:00',
		communitySlug: 'campus-volunteers',
		communityName: 'Campus Volunteers',
		capacityLabel: '21 / 40 joined',
		format: 'Online',
		location: 'Live stream',
		initials: 'VO',
		isThisWeek: true,
		isNearCampus: false,
		heroClass: 'bg-sky-100 dark:bg-sky-950 text-sky-300 dark:text-sky-800',
		badgeClass: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
	},
] satisfies EventCard[];

const eventBySlug = new Map(mockEvents.map((event) => [event.slug, event]));

export const mockTasks = [
	{
		id: 'finalize-event-poster',
		title: 'Finalize event poster',
		description: 'Lock the layout and export assets for print + social.',
		communitySlug: 'design-circle',
		communityName: 'Design Circle',
		status: 'In Progress',
		dueDate: 'May 21',
		dependencies: 'Venue confirmed',
		isDueSoon: true,
		isComplete: false,
		dotClass: 'bg-blue-500',
		badgeVariant: 'secondary',
		badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
	},
	{
		id: 'review-volunteer-map',
		title: 'Review volunteer map',
		description: 'Check updated routes and confirm coverage gaps.',
		communitySlug: 'campus-volunteers',
		communityName: 'Campus Volunteers',
		status: 'In Review',
		dueDate: 'May 23',
		dependencies: 'None',
		isDueSoon: true,
		isComplete: false,
		dotClass: 'bg-amber-500',
		badgeVariant: 'secondary',
		badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
	},
	{
		id: 'prepare-mentor-notes',
		title: 'Prepare mentor notes',
		description: 'Summarize mentorship assignments for the welcome kit.',
		communitySlug: 'code-bloom',
		communityName: 'Code Bloom',
		status: 'To Be Assigned',
		dueDate: 'May 27',
		dependencies: 'Mentor list',
		isDueSoon: false,
		isComplete: false,
		dotClass: 'border-2 border-muted-foreground',
		badgeVariant: 'outline',
		badgeClass: 'text-muted-foreground border-muted',
	},
	{
		id: 'publish-event-recap',
		title: 'Publish event recap',
		description: 'Share photos and lessons learned from the last meetup.',
		communitySlug: 'design-circle',
		communityName: 'Design Circle',
		status: 'Done',
		dueDate: 'May 18',
		dependencies: 'Photos uploaded',
		isDueSoon: false,
		isComplete: true,
		dotClass: 'bg-emerald-500',
		badgeVariant: 'secondary',
		badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
	},
	{
		id: 'review-registration-copy',
		title: 'Review registration copy',
		description: 'Tighten the signup messaging for public events.',
		communitySlug: 'design-circle',
		communityName: 'Design Circle',
		status: 'In Review',
		dueDate: 'May 22',
		dependencies: 'Draft prepared',
		isDueSoon: true,
		isComplete: false,
		dotClass: 'bg-amber-500',
		badgeVariant: 'secondary',
		badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
	},
	{
		id: 'assign-welcome-desk',
		title: 'Assign welcome desk',
		description: 'Pick two volunteers to greet new members.',
		communitySlug: 'code-bloom',
		communityName: 'Code Bloom',
		status: 'To Be Assigned',
		dueDate: 'May 29',
		dependencies: 'Schedule confirmed',
		isDueSoon: false,
		isComplete: false,
		dotClass: 'border-2 border-muted-foreground',
		badgeVariant: 'outline',
		badgeClass: 'text-muted-foreground border-muted',
	},
] satisfies TaskItem[];

const taskById = new Map(mockTasks.map((task) => [task.id, task]));

export const eventFilters: FilterOption<EventFilterId>[] = [
	{ id: 'all', label: 'All' },
	{ id: 'this-week', label: 'This week' },
	{ id: 'online', label: 'Online' },
	{ id: 'near-campus', label: 'Near campus' },
];

export const taskFilters: FilterOption<TaskFilterId>[] = [
	{ id: 'all', label: 'All' },
	{ id: 'in-progress', label: 'In Progress' },
	{ id: 'in-review', label: 'In Review' },
	{ id: 'due-soon', label: 'Due soon' },
];

export const quickCreateOptions = [
	{
		id: 'community',
		title: 'Create a community',
		description: 'Set up a private workspace with roles and channels.',
		href: '/create/community',
	},
	{
		id: 'event',
		title: 'Publish an event',
		description: 'Launch a public event with registration and updates.',
		href: '/create/event',
	},
	{
		id: 'task',
		title: 'Assign a task',
		description: 'Create a task with owners, deadlines, and dependencies.',
		href: '/create/task',
	},
] satisfies QuickCreateOption[];

export const createTemplates = [
	{
		id: 'community',
		title: 'Create a community',
		description: 'Spin up a private workspace and invite members.',
		primaryAction: 'Create community',
		primaryHref: '/communities',
		fields: [
			{
				id: 'community-name',
				label: 'Community name',
				placeholder: 'e.g. Design Circle',
			},
			{
				id: 'community-purpose',
				label: 'Purpose',
				placeholder: 'Share what the community coordinates together.',
			},
		],
	},
	{
		id: 'event',
		title: 'Publish an event',
		description: 'Launch a public event and collect RSVPs.',
		primaryAction: 'Publish event',
		primaryHref: '/explore',
		fields: [
			{
				id: 'event-title',
				label: 'Event title',
				placeholder: 'Portfolio Crit Night',
			},
			{
				id: 'event-date',
				label: 'Date & time',
				placeholder: 'May 22 · 18:30',
				helper: 'Use a clear, short format for visibility.',
			},
		],
	},
	{
		id: 'task',
		title: 'Assign a task',
		description: 'Create a task with owners and deadlines.',
		primaryAction: 'Assign task',
		primaryHref: '/tasks',
		fields: [
			{
				id: 'task-title',
				label: 'Task title',
				placeholder: 'Finalize event poster',
			},
			{
				id: 'task-deadline',
				label: 'Deadline',
				placeholder: 'May 21',
				helper: 'Deadlines are visible in the shared calendar.',
			},
		],
	},
] satisfies CreateTemplate[];

const templateById = new Map(createTemplates.map((template) => [template.id, template]));

export const inboxMessages = [
	{
		id: 'msg-portfolio',
		from: 'Design Circle',
		subject: 'Crit night checklist ready',
		preview: 'The final checklist for Thursday is ready to review.',
		time: '2h ago',
		isUnread: true,
		body: 'We pulled together the final checklist for Crit Night. Please review the mentor list and confirm the print order.',
	},
	{
		id: 'msg-volunteer-map',
		from: 'Campus Volunteers',
		subject: 'Map updates for garden reset',
		preview: 'Routes updated based on the new volunteer signups.',
		time: 'Yesterday',
		isUnread: false,
		body: 'Routes have been refreshed to include new volunteers. Can you confirm the supply pickup points?',
	},
	{
		id: 'msg-film-club',
		from: 'Indie Film Club',
		subject: 'Screening Q&A questions',
		preview: 'Send your top questions for the filmmaker Q&A.',
		time: 'May 18',
		isUnread: false,
		body: 'We are collecting audience questions for the upcoming screening. Reply with your top three prompts.',
	},
] satisfies InboxMessage[];

const inboxById = new Map(inboxMessages.map((message) => [message.id, message]));

export const notificationItems = [
	{
		id: 'notif-task',
		title: 'Task due tomorrow',
		description: 'Finalize event poster is due tomorrow at 18:00.',
		time: '1h ago',
		href: '/tasks/finalize-event-poster',
	},
	{
		id: 'notif-event',
		title: 'New RSVP spike',
		description: 'Portfolio Crit Night reached 38 attendees.',
		time: 'Today',
		href: '/events/portfolio-crit-night',
	},
	{
		id: 'notif-community',
		title: 'Community update',
		description: 'Campus Volunteers added 5 new members.',
		time: 'May 17',
		href: '/communities/campus-volunteers',
	},
] satisfies NotificationItem[];

export const searchResults = [
	{
		id: 'search-event',
		title: 'Portfolio Crit Night',
		description: 'Design Circle · May 22 at 18:30',
		category: 'Event',
		href: '/events/portfolio-crit-night',
	},
	{
		id: 'search-task',
		title: 'Finalize event poster',
		description: 'Task · Design Circle · Due May 21',
		category: 'Task',
		href: '/tasks/finalize-event-poster',
	},
	{
		id: 'search-community',
		title: 'Campus Volunteers',
		description: 'Community · 42 members · 18 tasks',
		category: 'Community',
		href: '/communities/campus-volunteers',
	},
] satisfies SearchResult[];

export const helpTopics = [
	{
		id: 'getting-started',
		title: 'Getting started',
		description: 'Set up your first community and invite teammates.',
	},
	{
		id: 'events',
		title: 'Publishing events',
		description: 'Create a public event page and manage RSVPs.',
	},
	{
		id: 'tasks',
		title: 'Task workflows',
		description: 'Assign tasks, set dependencies, and track progress.',
	},
] satisfies HelpTopic[];

export const settingPreferences = [
	{
		id: 'pref-task-reminders',
		label: 'Task deadline reminders',
		description: 'Send a reminder 24 hours before a due date.',
		enabled: true,
	},
	{
		id: 'pref-event-updates',
		label: 'Joined event updates',
		description: 'Get notified when an event agenda changes.',
		enabled: true,
	},
	{
		id: 'pref-companion-milestones',
		label: 'Companion milestones',
		description: 'Celebrate community XP and growth moments.',
		enabled: true,
	},
	{
		id: 'pref-weekly-summary',
		label: 'Weekly summary email',
		description: 'Receive a roundup of progress every Monday.',
		enabled: false,
	},
] satisfies SettingPreference[];

export const billingInfo = {
	planName: 'Community Plus',
	status: 'Active',
	renewalDate: 'Jun 30, 2026',
} satisfies BillingInfo;

export const paymentMethods = [
	{
		id: 'card-visa',
		brand: 'Visa',
		last4: '4027',
		expiry: '04/27',
		isPrimary: true,
	},
	{
		id: 'card-mastercard',
		brand: 'Mastercard',
		last4: '8851',
		expiry: '11/26',
		isPrimary: false,
	},
] satisfies PaymentMethod[];

export const userProfile = {
	name: 'Mira Yilmaz',
	email: 'mira@unify.app',
	role: 'Community Moderator',
	location: 'Ankara, TR',
	avatarFallback: 'MY',
	communities: ['Design Circle', 'Campus Volunteers'],
} satisfies UserProfile;

export const calendarDayItems = [
	{
		id: 'calendar-event',
		title: 'Portfolio Crit Night',
		subtitle: '18:30 · Design Circle',
		href: '/events/portfolio-crit-night',
		dotClass: 'bg-rose-500',
	},
	{
		id: 'calendar-task',
		title: 'Review registration copy',
		subtitle: 'Due today',
		href: '/tasks/review-registration-copy',
		dotClass: 'bg-amber-500',
	},
] satisfies CalendarItem[];

export const downloadPlatforms = [
	{
		id: 'ios',
		name: 'iOS',
		cta: 'Open in App Store',
		description: 'Download Unify on iPhone and iPad.',
		steps: ['Tap "Open in App Store"', 'Install Unify', 'Sign in to your workspace'],
	},
	{
		id: 'android',
		name: 'Android',
		cta: 'Open in Google Play',
		description: 'Get Unify for Android phones and tablets.',
		steps: ['Tap "Open in Google Play"', 'Install Unify', 'Log in to your community'],
	},
] satisfies DownloadPlatform[];

export const filterEvents = (events: EventCard[], filter: EventFilterId) => {
	switch (filter) {
		case 'this-week':
			return events.filter((event) => event.isThisWeek);
		case 'online':
			return events.filter((event) => event.format === 'Online');
		case 'near-campus':
			return events.filter((event) => event.isNearCampus);
		default:
			return events;
	}
};

export const filterTasks = (tasks: TaskItem[], filter: TaskFilterId) => {
	switch (filter) {
		case 'in-progress':
			return tasks.filter((task) => task.status === 'In Progress');
		case 'in-review':
			return tasks.filter((task) => task.status === 'In Review');
		case 'due-soon':
			return tasks.filter((task) => task.isDueSoon && !task.isComplete);
		default:
			return tasks;
	}
};

export const filterSearchResults = (items: SearchResult[], query: string) => {
	const normalized = query.trim().toLowerCase();

	if (!normalized) {
		return items;
	}

	return items.filter((item) =>
		`${item.title} ${item.description} ${item.category}`.toLowerCase().includes(normalized)
	);
};

export const getCommunityBySlug = (slug: string) => communityBySlug.get(slug);
export const getEventBySlug = (slug: string) => eventBySlug.get(slug);
export const getTaskById = (id: string) => taskById.get(id);
export const getInboxMessageById = (id: string) => inboxById.get(id);
export const getCreateTemplate = (id: string) => templateById.get(id);

export const getEventsByCommunity = (slug: string) =>
	mockEvents.filter((event) => event.communitySlug === slug);

export const getTasksByCommunity = (slug: string) =>
	mockTasks.filter((task) => task.communitySlug === slug);

export const getDownloadPlatform = (platformId: DownloadPlatform['id']) =>
	downloadPlatforms.find((platform) => platform.id === platformId);

export const discoverCommunities = communities;
