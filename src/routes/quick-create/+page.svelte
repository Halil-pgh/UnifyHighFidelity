<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { quickCreateOptions } from '$lib/data/mock-data';
</script>

<div class="flex flex-col gap-8 max-w-4xl mx-auto py-4">
	<div>
		<p class="text-xs font-semibold tracking-wide text-primary uppercase">Quick create</p>
		<h1 class="text-3xl font-bold tracking-tight mt-1">Start something new</h1>
		<p class="text-muted-foreground mt-2">
			Pick a starting point and we will draft a mock flow for you.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each quickCreateOptions as option (option.id)}
			<Card class="border shadow-sm">
				<CardHeader class="pb-3">
					<CardTitle class="text-lg">{option.title}</CardTitle>
				</CardHeader>
				<CardContent class="flex flex-col gap-4">
					<p class="text-sm text-muted-foreground">{option.description}</p>
					<Button class="w-full" href={option.href}>Continue</Button>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>
