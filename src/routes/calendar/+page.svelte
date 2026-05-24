<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="flex flex-col gap-8 max-w-6xl mx-auto py-4">
	<!-- Page Heading -->
	<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
		<div>
			<p class="text-xs font-semibold tracking-wide text-primary uppercase">Personal calendar</p>
			<h1 class="text-3xl font-bold tracking-tight mt-1">Tasks and joined events</h1>
		</div>
		<div class="flex gap-2">
			<Button variant="default" size="sm" class="rounded-full">Week</Button>
			<Button variant="outline" size="sm" class="rounded-full bg-background/50 backdrop-blur">Month</Button>
		</div>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
		<!-- Calendar Panel -->
		<Card class="lg:col-span-2 overflow-hidden border shadow-sm">
			<CardContent class="p-0">
				<div class="grid grid-cols-7 divide-x divide-border/50 border-b border-border/50 bg-muted/30">
					{#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as day}
						<div class="p-3 text-center text-sm font-semibold">{day}</div>
					{/each}
				</div>
				<div class="grid grid-cols-7 divide-x divide-border/50 min-h-[400px]">
					<!-- Mon -->
					<div class="p-2 flex flex-col gap-2">
						<div class="p-1.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded border border-blue-200 dark:border-blue-800/50 truncate">Poster draft</div>
					</div>
					<!-- Tue -->
					<div class="p-2 flex flex-col gap-2">
						<div class="p-1.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded border border-blue-200 dark:border-blue-800/50 truncate">Mentor notes</div>
					</div>
					<!-- Wed (Active) -->
					<div class="p-2 flex flex-col gap-2 bg-primary/5 ring-inset ring-2 ring-primary relative">
						<div class="p-1.5 text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 rounded border border-rose-200 dark:border-rose-800/50 truncate">Crit Night</div>
						<div class="p-1.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded border border-blue-200 dark:border-blue-800/50 truncate">Review copy</div>
					</div>
					<!-- Thu -->
					<div class="p-2 flex flex-col gap-2">
						<div class="p-1.5 text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 rounded border border-rose-200 dark:border-rose-800/50 truncate">Garden Reset</div>
					</div>
					<!-- Fri -->
					<div class="p-2 flex flex-col gap-2"></div>
					<!-- Sat -->
					<div class="p-2 flex flex-col gap-2 bg-muted/10">
						<div class="p-1.5 text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 rounded border border-rose-200 dark:border-rose-800/50 truncate">Repair Cafe</div>
					</div>
					<!-- Sun -->
					<div class="p-2 flex flex-col gap-2 bg-muted/10"></div>
				</div>
			</CardContent>
		</Card>

		<!-- Selected Day Sidebar -->
		<Card class="bg-card">
			<CardContent class="p-6">
				<p class="text-xs font-semibold uppercase text-muted-foreground mb-1">Selected day</p>
				<h2 class="text-xl font-bold mb-6">Wednesday, May 22</h2>
				
				<div class="flex flex-col gap-4">
					<button class="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left border border-transparent hover:border-border">
						<div class="mt-1 w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></div>
						<div>
							<h4 class="font-medium">Portfolio Crit Night</h4>
							<p class="text-xs text-muted-foreground mt-1">18:30 · Design Circle</p>
						</div>
					</button>
					<button class="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left border border-transparent hover:border-border">
						<div class="mt-1 w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></div>
						<div>
							<h4 class="font-medium">Review registration copy</h4>
							<p class="text-xs text-muted-foreground mt-1">Due today</p>
						</div>
					</button>
				</div>
			</CardContent>
		</Card>
	</div>
</div>