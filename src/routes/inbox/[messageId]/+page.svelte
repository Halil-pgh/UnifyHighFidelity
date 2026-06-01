<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';

	let { data } = $props();
	const { message } = data;
</script>

<div class="flex flex-col gap-8 max-w-3xl mx-auto py-4">
	<div>
		<p class="text-xs font-semibold tracking-wide text-primary uppercase">Inbox message</p>
		<h1 class="text-3xl font-bold tracking-tight mt-1">{message.subject}</h1>
		<p class="text-sm text-muted-foreground mt-2">{message.from} · {message.time}</p>
	</div>

	<Card class="border shadow-sm">
		<CardContent class="p-6 flex flex-col gap-4">
			<p class="text-sm text-muted-foreground">{message.preview}</p>
			<p class="text-sm leading-relaxed">{message.body}</p>
			<div class="flex flex-col sm:flex-row gap-3">
				<Button href="/inbox">Back to inbox</Button>
				<Button variant="outline" href="/communities">View community</Button>
			</div>
		</CardContent>
	</Card>
</div>
