<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { settingPreferences } from '$lib/data/mock-data';
</script>

<div class="flex flex-col gap-8 max-w-4xl mx-auto py-4">
	<div>
		<p class="text-xs font-semibold tracking-wide text-primary uppercase">Settings</p>
		<h1 class="text-3xl font-bold tracking-tight mt-1">Notification preferences</h1>
	</div>

	<Card class="border shadow-sm">
		<CardContent class="p-6 flex flex-col gap-5">
			{#each settingPreferences as preference (preference.id)}
				<div class="flex items-start justify-between gap-4 rounded-lg border border-border/60 p-4">
					<div class="space-y-1">
						<Label class="text-sm font-medium">{preference.label}</Label>
						<p class="text-xs text-muted-foreground">{preference.description}</p>
					</div>
					<Checkbox checked={preference.enabled} />
				</div>
			{/each}
		</CardContent>
	</Card>
</div>
