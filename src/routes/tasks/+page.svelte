<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { filterTasks, mockTasks, taskFilters } from '$lib/data/mock-data';
	import { cn } from '$lib/utils';
	import type { TaskFilterId } from '$lib/types';

	let activeFilter = $state<TaskFilterId>('all');
	let filteredTasks = $derived(filterTasks(mockTasks, activeFilter));
</script>

<div class="flex flex-col gap-8 max-w-6xl mx-auto py-4">
	<!-- Page Heading -->
	<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
		<div>
			<p class="text-xs font-semibold tracking-wide text-primary uppercase">My tasks</p>
			<h1 class="text-3xl font-bold tracking-tight mt-1">All assigned work across communities</h1>
		</div>
		<div class="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 hide-scrollbar">
			{#each taskFilters as filter (filter.id)}
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

	<Card>
		<div class="overflow-x-auto">
			<table class="w-full text-sm text-left">
				<thead class="bg-muted/50 text-muted-foreground uppercase text-xs">
					<tr>
						<th class="px-6 py-4 font-semibold">Task</th>
						<th class="px-6 py-4 font-semibold">Community</th>
						<th class="px-6 py-4 font-semibold">Status</th>
						<th class="px-6 py-4 font-semibold">Deadline</th>
						<th class="px-6 py-4 font-semibold">Dependencies</th>
						<th class="px-6 py-4 font-semibold text-right">Action</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-border/50 bg-card">
					{#each filteredTasks as task (task.id)}
						<tr class="hover:bg-muted/30 transition-colors group">
							<td class={cn('px-6 py-4 font-medium', task.isComplete && 'text-muted-foreground line-through')}>
								<div class="flex items-center gap-3">
									<div class={cn('w-2 h-2 rounded-full shrink-0', task.dotClass)}></div>
									{task.title}
								</div>
							</td>
							<td class="px-6 py-4 text-muted-foreground group-hover:text-foreground transition-colors">
								{task.communityName}
							</td>
							<td class="px-6 py-4">
								<Badge variant={task.badgeVariant} class={cn('hover:bg-inherit', task.badgeClass)}>
									{task.status}
								</Badge>
							</td>
							<td class={cn('px-6 py-4', task.isComplete && 'text-muted-foreground')}>
								{task.dueDate}
							</td>
							<td class="px-6 py-4 text-muted-foreground">{task.dependencies}</td>
							<td class="px-6 py-4 text-right">
								<Button variant="outline" size="sm" href={`/tasks/${task.id}`}>Open</Button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Card>
</div>
