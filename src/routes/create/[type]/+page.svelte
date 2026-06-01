<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	let { data } = $props();
	const { template } = data;
</script>

<div class="flex flex-col gap-8 max-w-3xl mx-auto py-4">
	<div>
		<p class="text-xs font-semibold tracking-wide text-primary uppercase">Create flow</p>
		<h1 class="text-3xl font-bold tracking-tight mt-1">{template.title}</h1>
		<p class="text-muted-foreground mt-2">{template.description}</p>
	</div>

	<Card class="border shadow-sm">
		<CardHeader>
			<CardTitle class="text-lg">Draft details</CardTitle>
		</CardHeader>
		<CardContent class="flex flex-col gap-6">
			{#each template.fields as field (field.id)}
				<div class="flex flex-col gap-1.5">
					<Label for={field.id}>{field.label}</Label>
					<Input id={field.id} name={field.id} placeholder={field.placeholder} />
					{#if field.helper}
						<p class="text-xs text-muted-foreground">{field.helper}</p>
					{/if}
				</div>
			{/each}

			<div class="flex flex-col sm:flex-row gap-3">
				<Button class="sm:w-auto w-full" href={template.primaryHref}>
					{template.primaryAction}
				</Button>
				<Button variant="outline" class="sm:w-auto w-full" href="/quick-create">Back to quick create</Button>
			</div>
		</CardContent>
	</Card>
</div>
