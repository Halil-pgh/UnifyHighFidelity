<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardFooter, CardHeader } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="flex flex-col gap-8 max-w-6xl mx-auto py-4">
	<!-- Page Heading -->
	<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
		<div>
			<p class="text-xs font-semibold tracking-wide text-primary uppercase">Global event feed</p>
			<h1 class="text-3xl font-bold tracking-tight mt-1">Explore public events</h1>
		</div>
		<div class="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 hide-scrollbar">
			<Button variant="default" size="sm" class="rounded-full shrink-0">All</Button>
			<Button variant="outline" size="sm" class="rounded-full shrink-0 bg-background/50 backdrop-blur">This week</Button>
			<Button variant="outline" size="sm" class="rounded-full shrink-0 bg-background/50 backdrop-blur">Online</Button>
			<Button variant="outline" size="sm" class="rounded-full shrink-0 bg-background/50 backdrop-blur">Near campus</Button>
		</div>
	</div>

	<!-- Event Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<Card class="overflow-hidden flex flex-col hover:shadow-md transition-shadow">
			<div class="h-32 bg-rose-100 dark:bg-rose-950 flex items-center justify-center text-rose-300 dark:text-rose-800 text-4xl font-black tracking-tighter">
				DC
			</div>
			<CardContent class="flex-1 p-5 flex flex-col gap-3">
				<Badge variant="secondary" class="w-fit">Design Circle</Badge>
				<h2 class="text-xl font-bold line-clamp-2">Portfolio Crit Night</h2>
				<p class="text-sm text-muted-foreground flex-1 line-clamp-3">
					Bring one project and leave with concrete peer feedback.
				</p>
				<div class="flex items-center justify-between text-xs font-medium mt-2">
					<span>May 22, 18:30</span>
					<span class="text-muted-foreground">38 / 50 joined</span>
				</div>
			</CardContent>
			<CardFooter class="p-5 pt-0 mt-auto">
				<Button class="w-full">Register</Button>
			</CardFooter>
		</Card>

		<Card class="overflow-hidden flex flex-col hover:shadow-md transition-shadow">
			<div class="h-32 bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-300 dark:text-emerald-800 text-4xl font-black tracking-tighter">
				GS
			</div>
			<CardContent class="flex-1 p-5 flex flex-col gap-3">
				<Badge variant="secondary" class="w-fit bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">Green Steps</Badge>
				<h2 class="text-xl font-bold line-clamp-2">Repair Cafe Weekend</h2>
				<p class="text-sm text-muted-foreground flex-1 line-clamp-3">
					A public workshop for fixing small household objects together.
				</p>
				<div class="flex items-center justify-between text-xs font-medium mt-2">
					<span>May 25, 12:00</span>
					<span class="text-emerald-600 dark:text-emerald-400">Open capacity</span>
				</div>
			</CardContent>
			<CardFooter class="p-5 pt-0 mt-auto">
				<Button class="w-full">Register</Button>
			</CardFooter>
		</Card>

		<Card class="overflow-hidden flex flex-col hover:shadow-md transition-shadow">
			<div class="h-32 bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-300 dark:text-amber-800 text-4xl font-black tracking-tighter">
				IF
			</div>
			<CardContent class="flex-1 p-5 flex flex-col gap-3">
				<Badge variant="secondary" class="w-fit bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Indie Film Club</Badge>
				<h2 class="text-xl font-bold line-clamp-2">Short Film Open Screening</h2>
				<p class="text-sm text-muted-foreground flex-1 line-clamp-3">
					Public screening followed by a moderated filmmaker Q&A.
				</p>
				<div class="flex items-center justify-between text-xs font-medium mt-2">
					<span>May 28, 19:00</span>
					<span class="text-muted-foreground">71 / 90 joined</span>
				</div>
			</CardContent>
			<CardFooter class="p-5 pt-0 mt-auto">
				<Button class="w-full">Register</Button>
			</CardFooter>
		</Card>
	</div>
</div>