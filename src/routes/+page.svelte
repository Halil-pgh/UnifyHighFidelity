<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="flex flex-col gap-16 lg:gap-24 items-center max-w-6xl mx-auto py-8">
	<!-- Hero Section -->
	<section class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 w-full items-center">
		<div class="flex flex-col gap-6 text-center lg:text-left">
			<p class="text-sm font-semibold tracking-wide text-primary uppercase">Community work, made playable</p>
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance">
				Unify helps communities coordinate tasks, events, and growth.
			</h1>
			<p class="text-xl font-medium text-muted-foreground border-l-4 border-primary pl-4">
				Unify: where communities gather, work, and grow together.
			</p>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
				Build a shared workspace for members, publish public events for everyone, and let each community companion grow as people complete real work together.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
				<Button size="lg" class="rounded-full px-8 text-base" href="/home">Start with Unify</Button>
				<Button variant="outline" size="lg" class="rounded-full px-8 text-base" href="/explore">
					Explore public events
				</Button>
			</div>

			<div class="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
				<Button
					variant="secondary"
					size="lg"
					class="h-14 rounded-xl flex flex-col items-start px-6 gap-0"
					href="/download/ios"
				>
					<span class="text-[10px] text-muted-foreground leading-none">Download on</span>
					<strong class="text-sm leading-tight">App Store</strong>
				</Button>
				<Button
					variant="secondary"
					size="lg"
					class="h-14 rounded-xl flex flex-col items-start px-6 gap-0"
					href="/download/android"
				>
					<span class="text-[10px] text-muted-foreground leading-none">Get it on</span>
					<strong class="text-sm leading-tight">Google Play</strong>
				</Button>
			</div>
		</div>
		
		<div class="relative w-full h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[2.5rem] border shadow-sm p-4 overflow-hidden">
			<!-- Preview Elements -->
			<Card class="absolute top-12 right-12 w-64 rotate-3 shadow-lg z-10 opacity-90 hover:opacity-100 transition-opacity">
				<CardHeader class="p-4 pb-2">
					<Badge class="w-fit mb-2">Design Circle</Badge>
					<CardTitle class="text-lg">Portfolio Crit Night</CardTitle>
				</CardHeader>
				<CardContent class="p-4 pt-0">
					<p class="text-sm text-muted-foreground text-right mt-2">38 / 50 joined</p>
				</CardContent>
			</Card>
			
			<Card class="absolute bottom-16 left-8 w-64 -rotate-2 shadow-lg z-20 opacity-95 hover:opacity-100 transition-opacity">
				<CardHeader class="p-4 pb-2 flex flex-row items-center justify-between">
					<Badge variant="secondary" class="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Community XP</Badge>
				</CardHeader>
				<CardContent class="p-4 pt-0">
					<h3 class="font-bold text-xl mb-3">+120 this week</h3>
					<div class="w-full bg-secondary h-2.5 rounded-full overflow-hidden">
						<div class="bg-green-500 h-full rounded-full" style="width: 72%"></div>
					</div>
				</CardContent>
			</Card>
			
			<!-- Abstract Mascot Placeholder -->
			<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
				<div class="w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
				<div class="w-32 h-32 bg-primary/30 rounded-[3rem] rotate-12 absolute backdrop-blur-md shadow-2xl border flex items-center justify-center">
					<div class="flex gap-4">
						<div class="w-4 h-4 rounded-full bg-primary/80"></div>
						<div class="w-4 h-4 rounded-full bg-primary/80"></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<Separator class="w-full max-w-3xl" />

	<!-- Features Band -->
	<section class="w-full grid grid-cols-1 md:grid-cols-12 gap-8 my-8">
		<div class="md:col-span-4 flex flex-col gap-2">
			<p class="text-sm font-semibold tracking-wide text-primary uppercase">Why Unify</p>
			<h2 class="text-3xl font-bold tracking-tight text-balance">
				Private coordination and public discovery live in the same product.
			</h2>
		</div>
		<div class="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
			<Card class="bg-card/50 shadow-none border-border/50">
				<CardContent class="p-6">
					<strong class="block text-lg mb-2">Invite-only workspaces</strong>
					<span class="text-muted-foreground">Keep tasks, dependencies, members, and dashboards private.</span>
				</CardContent>
			</Card>
			<Card class="bg-card/50 shadow-none border-border/50">
				<CardContent class="p-6">
					<strong class="block text-lg mb-2">Public event pages</strong>
					<span class="text-muted-foreground">Let anyone follow communities and register for published events.</span>
				</CardContent>
			</Card>
			<Card class="bg-card/50 shadow-none border-border/50">
				<CardContent class="p-6">
					<strong class="block text-lg mb-2">Unified calendar</strong>
					<span class="text-muted-foreground">See assigned tasks and joined events without switching contexts.</span>
				</CardContent>
			</Card>
			<Card class="bg-card/50 shadow-none border-border/50">
				<CardContent class="p-6">
					<strong class="block text-lg mb-2">Companion growth</strong>
					<span class="text-muted-foreground">Turn completed work into visible community progress.</span>
				</CardContent>
			</Card>
		</div>
	</section>
</div>
