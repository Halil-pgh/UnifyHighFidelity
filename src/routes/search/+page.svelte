<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { filterSearchResults, searchResults } from '$lib/data/mock-data';

	let query = $state('');
	let filteredResults = $derived(filterSearchResults(searchResults, query));
</script>

<div class="flex flex-col gap-8 max-w-4xl mx-auto py-4">
	<div>
		<p class="text-xs font-semibold tracking-wide text-primary uppercase">Search</p>
		<h1 class="text-3xl font-bold tracking-tight mt-1">Find people, tasks, and events</h1>
	</div>

	<Card class="border shadow-sm">
		<CardContent class="p-6 flex flex-col gap-4">
			<Input
				placeholder="Search across communities, tasks, and events..."
				bind:value={query}
			/>
			<div class="flex flex-col gap-3">
				{#each filteredResults as result (result.id)}
					<a
						href={result.href}
						class="flex items-start justify-between gap-4 rounded-lg border border-border/60 p-4 hover:bg-muted/30 transition-colors"
					>
						<div>
							<p class="font-medium">{result.title}</p>
							<p class="text-sm text-muted-foreground">{result.description}</p>
						</div>
						<Badge variant="outline">{result.category}</Badge>
					</a>
				{/each}
			</div>
		</CardContent>
	</Card>
</div>
