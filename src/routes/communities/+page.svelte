<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="flex flex-col gap-8 max-w-4xl mx-auto py-4">
	<!-- Page Heading -->
	<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
		<div>
			<p class="text-xs font-semibold tracking-wide text-primary uppercase">Communities</p>
			<h1 class="text-3xl font-bold tracking-tight mt-1">Your memberships and follows</h1>
		</div>
		<Button href="/communities/discover">Discover more</Button>
	</div>

	<!-- Community List -->
	<div class="flex flex-col gap-4">
		<!-- Featured / Moderator -->
		<Card class="overflow-hidden border-primary/20 shadow-md">
			<CardContent class="p-0 flex flex-col sm:flex-row">
				<div class="sm:w-32 bg-primary/5 flex items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-border/50">
					<div class="w-16 h-16 bg-primary/20 rounded-[1rem] rotate-6 flex items-center justify-center">
						<div class="flex gap-2">
							<div class="w-3 h-3 rounded-full bg-primary/80"></div>
							<div class="w-3 h-3 rounded-full bg-primary/80"></div>
						</div>
					</div>
				</div>
				<div class="flex-1 p-6 flex flex-col justify-between items-start">
					<div class="w-full">
						<Badge variant="outline" class="mb-3">Moderator</Badge>
						<h2 class="text-2xl font-bold mb-2">Design Circle</h2>
						<p class="text-muted-foreground text-sm max-w-xl mb-4">
							Creative students coordinating critique nights, exhibitions, and shared design resources.
						</p>
						
						<div class="bg-muted/50 rounded-lg p-3 text-sm flex gap-4 mb-4">
							<div class="flex flex-col">
								<span class="text-xs text-muted-foreground uppercase font-medium">Assigned</span>
								<span class="font-medium">Finalize event poster</span>
								<span class="font-medium text-muted-foreground mt-1">Confirm critique mentors</span>
							</div>
						</div>
						
						<div class="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
							<span>18 members</span>
							<span class="w-1 h-1 rounded-full bg-border"></span>
							<span>24 tasks</span>
							<span class="w-1 h-1 rounded-full bg-border"></span>
							<span class="text-primary">Level 7 companion</span>
						</div>
					</div>
					<div class="mt-6 w-full flex justify-end">
						<Button href="/communities/design-circle">Open workspace</Button>
					</div>
				</div>
			</CardContent>
		</Card>

		<!-- Member -->
		<Card class="overflow-hidden shadow-sm hover:border-emerald-500/30 transition-colors">
			<CardContent class="p-0 flex flex-col sm:flex-row">
				<div class="sm:w-32 bg-emerald-500/5 flex items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-border/50">
					<div class="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center"></div>
				</div>
				<div class="flex-1 p-6 flex flex-col justify-between items-start">
					<div class="w-full">
						<Badge variant="outline" class="mb-3 text-emerald-600 border-emerald-200 bg-emerald-50">Member</Badge>
						<h2 class="text-xl font-bold mb-2">Campus Volunteers</h2>
						<p class="text-muted-foreground text-sm max-w-xl mb-4">
							Volunteer crews planning local care, garden, and donation drives.
						</p>
						<div class="flex flex-col gap-1 text-sm">
							<div class="flex items-center gap-2">
								<div class="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
								<span>Review volunteer map</span>
							</div>
							<div class="flex items-center gap-2 text-muted-foreground">
								<div class="w-1.5 h-1.5 rounded-full bg-border"></div>
								<span>Pack donation kits</span>
							</div>
						</div>
					</div>
					<div class="mt-4 w-full flex justify-end">
						<Button variant="outline" href="/communities/campus-volunteers">View workspace</Button>
					</div>
				</div>
			</CardContent>
		</Card>

		<!-- Following -->
		<Card class="overflow-hidden shadow-sm hover:border-amber-500/30 transition-colors">
			<CardContent class="p-0 flex flex-col sm:flex-row">
				<div class="sm:w-32 bg-amber-500/5 flex items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-border/50">
					<div class="w-12 h-12 bg-amber-500/20 rotate-45 flex items-center justify-center"></div>
				</div>
				<div class="flex-1 p-6 flex flex-col justify-between items-start">
					<div class="w-full">
						<Badge variant="outline" class="mb-3 text-amber-600 border-amber-200 bg-amber-50">Following</Badge>
						<h2 class="text-xl font-bold mb-2">Indie Film Club</h2>
						<p class="text-muted-foreground text-sm max-w-xl mb-4">
							Public screenings and film conversations from independent creators.
						</p>
						<div class="flex flex-col gap-1 text-sm text-muted-foreground">
							<span>No internal access</span>
							<span>2 public events upcoming</span>
						</div>
					</div>
					<div class="mt-4 w-full flex justify-end">
						<Button variant="outline" href="/communities/indie-film-club">Public page</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
</div>
