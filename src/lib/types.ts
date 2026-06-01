export type CommunityRole = 'Moderator' | 'Member' | 'Following';

export interface Community {
	slug: string;
	name: string;
	role: CommunityRole;
	description: string;
	members: number;
	tasks: number;
	companionLevel: number;
	highlights: string[];
}

export type EventFormat = 'In-person' | 'Online';

export interface EventCard {
	slug: string;
	title: string;
	description: string;
	date: string;
	time: string;
	communitySlug: string;
	communityName: string;
	capacityLabel: string;
	format: EventFormat;
	location: string;
	initials: string;
	isThisWeek: boolean;
	isNearCampus: boolean;
	heroClass: string;
	badgeClass: string;
}

export type EventFilterId = 'all' | 'this-week' | 'online' | 'near-campus';

export type TaskStatus = 'In Progress' | 'In Review' | 'To Be Assigned' | 'Done';
export type TaskFilterId = 'all' | 'in-progress' | 'in-review' | 'due-soon';

export interface TaskItem {
	id: string;
	title: string;
	description: string;
	communitySlug: string;
	communityName: string;
	status: TaskStatus;
	dueDate: string;
	dependencies: string;
	isDueSoon: boolean;
	isComplete: boolean;
	dotClass: string;
	badgeVariant: 'secondary' | 'outline';
	badgeClass: string;
}

export interface QuickCreateOption {
	id: string;
	title: string;
	description: string;
	href: string;
}

export interface InboxMessage {
	id: string;
	from: string;
	subject: string;
	preview: string;
	time: string;
	isUnread: boolean;
	body: string;
}

export interface NotificationItem {
	id: string;
	title: string;
	description: string;
	time: string;
	href: string;
}

export interface SearchResult {
	id: string;
	title: string;
	description: string;
	category: string;
	href: string;
}

export interface HelpTopic {
	id: string;
	title: string;
	description: string;
}

export interface PaymentMethod {
	id: string;
	brand: string;
	last4: string;
	expiry: string;
	isPrimary: boolean;
}

export interface BillingInfo {
	planName: string;
	status: string;
	renewalDate: string;
}

export interface UserProfile {
	name: string;
	email: string;
	role: string;
	location: string;
	avatarFallback: string;
	communities: string[];
}

export interface FilterOption<TFilter extends string> {
	id: TFilter;
	label: string;
}

export interface CalendarItem {
	id: string;
	title: string;
	subtitle: string;
	href: string;
	dotClass: string;
}

export interface DownloadPlatform {
	id: 'ios' | 'android';
	name: string;
	cta: string;
	description: string;
	steps: string[];
}

export interface CreateTemplateField {
	id: string;
	label: string;
	placeholder: string;
	helper?: string;
}

export interface CreateTemplate {
	id: 'community' | 'event' | 'task';
	title: string;
	description: string;
	primaryAction: string;
	primaryHref: string;
	fields: CreateTemplateField[];
}

export interface SettingPreference {
	id: string;
	label: string;
	description: string;
	enabled: boolean;
}
