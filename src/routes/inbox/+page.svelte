<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { inboxMessages } from '$lib/data/mock-data';
</script>

<div class="flex flex-col gap-8 max-w-4xl mx-auto py-4">
	<div>
		<p class="text-xs font-semibold tracking-wide text-primary uppercase">Inbox</p>
		<h1 class="text-3xl font-bold tracking-tight mt-1">Latest community updates</h1>
	</div>

	<div class="flex flex-col gap-4">
		{#each inboxMessages as message (message.id)}
			<Card class="border shadow-sm">
				<CardContent class="p-5 flex flex-col sm:flex-row gap-4 sm:items-center">
					<div class="flex-1">
						<div class="flex items-center gap-2">
							<h2 class="text-lg font-semibold">{message.subject}</h2>
							{#if message.isUnread}
								<Badge variant="secondary">New</Badge>
							{/if}
						</div>
						<p class="text-sm text-muted-foreground mt-1">
							{message.from} · {message.time}
						</p>
						<p class="text-sm mt-3">{message.preview}</p>
					</div>
					<Button variant="outline" class="w-full sm:w-auto" href={`/inbox/${message.id}`}>
						Open
					</Button>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>
