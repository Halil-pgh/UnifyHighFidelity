<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardFooter, CardHeader } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { eventFilters, filterEvents, mockEvents } from '$lib/data/mock-data';
	import { cn } from '$lib/utils';
	import type { EventFilterId } from '$lib/types';

	let activeFilter = $state<EventFilterId>('all');
	let filteredEvents = $derived(filterEvents(mockEvents, activeFilter));
</script>

<div class="flex flex-col gap-8 max-w-6xl mx-auto py-4">
	<!-- Page Heading -->
	<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
		<div>
			<p class="text-xs font-semibold tracking-wide text-primary uppercase">Global event feed</p>
			<h1 class="text-3xl font-bold tracking-tight mt-1">Explore public events</h1>
		</div>
		<div class="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 hide-scrollbar">
			{#each eventFilters as filter (filter.id)}
				<Button
					variant={activeFilter === filter.id ? 'default' : 'outline'}
					size="sm"
					class="rounded-full shrink-0 bg-background/50 backdrop-blur"
					onclick={() => (activeFilter = filter.id)}
				>
					{filter.label}
				</Button>
			{/each}
		</div>
	</div>

	<!-- Event Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each filteredEvents as event (event.slug)}
			<Card class="overflow-hidden flex flex-col hover:shadow-md transition-shadow">
				<div
					class={cn(
						'h-32 flex items-center justify-center text-4xl font-black tracking-tighter',
						event.heroClass
					)}
				>
					{event.initials}
				</div>
				<CardContent class="flex-1 p-5 flex flex-col gap-3">
					<Badge variant="secondary" class={cn('w-fit', event.badgeClass)}>
						{event.communityName}
					</Badge>
					<h2 class="text-xl font-bold line-clamp-2">{event.title}</h2>
					<p class="text-sm text-muted-foreground flex-1 line-clamp-3">
						{event.description}
					</p>
					<div class="flex items-center justify-between text-xs font-medium mt-2">
						<span>{event.date}, {event.time}</span>
						<span class="text-muted-foreground">{event.capacityLabel}</span>
					</div>
				</CardContent>
				<CardFooter class="p-5 pt-0 mt-auto">
					<Button class="w-full" href={`/events/${event.slug}`}>Register</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>
</div>
