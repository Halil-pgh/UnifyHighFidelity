<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { helpTopics } from '$lib/data/mock-data';
</script>

<div class="flex flex-col gap-8 max-w-4xl mx-auto py-4">
	<div>
		<p class="text-xs font-semibold tracking-wide text-primary uppercase">Help center</p>
		<h1 class="text-3xl font-bold tracking-tight mt-1">How can we help?</h1>
		<p class="text-muted-foreground mt-2">Browse the most requested guides and workflows.</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each helpTopics as topic (topic.id)}
			<Card class="border shadow-sm">
				<CardHeader class="pb-2">
					<CardTitle class="text-lg">{topic.title}</CardTitle>
				</CardHeader>
				<CardContent class="text-sm text-muted-foreground">{topic.description}</CardContent>
			</Card>
		{/each}
	</div>
</div>
