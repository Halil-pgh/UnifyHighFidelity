<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="flex flex-col gap-8 max-w-6xl mx-auto">

	<!-- Content Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
		<div class="lg:col-span-3 flex flex-col gap-6">
			<!-- Your Communities -->
			<section>
				<div class="flex items-end justify-between mb-4">
					<div>
						<p class="text-xs font-semibold uppercase text-muted-foreground">Your communities</p>
						<h2 class="text-xl font-bold">Different roles, one personal home</h2>
					</div>
					<Button variant="ghost" size="sm" href="/communities">Manage all</Button>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<!-- Community Card -->
					<Card class="hover:border-primary/50 transition-colors cursor-pointer group">
						<CardContent class="p-5">
							<div class="mb-4 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
								<div class="w-5 h-5 bg-primary/40 rounded shadow-sm"></div>
							</div>
							<Badge variant="outline" class="mb-2">Moderator</Badge>
							<h3 class="font-semibold text-lg line-clamp-1 mb-1">Design Circle</h3>
							<p class="text-xs text-muted-foreground line-clamp-2">Finalize event poster · Confirm critique mentors</p>
						</CardContent>
					</Card>
					
					<Card class="hover:border-emerald-500/50 transition-colors cursor-pointer group">
						<CardContent class="p-5">
							<div class="mb-4 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
								<div class="w-5 h-5 bg-emerald-500/40 rounded-full shadow-sm"></div>
							</div>
							<Badge variant="outline" class="mb-2 text-emerald-600 border-emerald-200 bg-emerald-50">Member</Badge>
							<h3 class="font-semibold text-lg line-clamp-1 mb-1">Campus Volunteers</h3>
							<p class="text-xs text-muted-foreground line-clamp-2">Review volunteer map · Pack donation kits</p>
						</CardContent>
					</Card>

					<Card class="hover:border-amber-500/50 transition-colors cursor-pointer group sm:col-span-2 lg:col-span-1">
						<CardContent class="p-5">
							<div class="mb-4 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
								<div class="w-4 h-4 bg-amber-500/40 rotate-45 shadow-sm"></div>
							</div>
							<Badge variant="outline" class="mb-2 text-amber-600 border-amber-200 bg-amber-50">Following</Badge>
							<h3 class="font-semibold text-lg line-clamp-1 mb-1">Indie Film Club</h3>
							<p class="text-xs text-muted-foreground line-clamp-2">No private tasks · 2 public events upcoming</p>
						</CardContent>
					</Card>
				</div>
			</section>

			<!-- My Feed -->
			<section>
				<div class="flex items-end justify-between mb-4 mt-4">
					<div>
						<p class="text-xs font-semibold uppercase text-muted-foreground">My feed</p>
						<h2 class="text-xl font-bold">Upcoming from your communities</h2>
					</div>
					<Button variant="ghost" size="sm" href="/explore">View all</Button>
				</div>
				<div class="flex flex-col gap-3">
					<Card class="hover:bg-muted/50 transition-colors">
						<CardContent class="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
							<div class="text-center min-w-[70px] bg-secondary/50 rounded-lg py-2 px-3">
								<div class="text-xs font-medium text-muted-foreground uppercase">May 22</div>
								<div class="font-bold text-lg">18:30</div>
							</div>
							<div class="flex-1">
								<h3 class="font-semibold">Portfolio Crit Night</h3>
								<p class="text-sm text-muted-foreground mb-2">Design Circle hosts a peer feedback session for student portfolios.</p>
								<Badge variant="secondary" class="text-[10px]">Design Circle</Badge>
							</div>
							<Button
								size="sm"
								variant="outline"
								class="w-full sm:w-auto"
								href="/events/portfolio-crit-night"
							>
								Join
							</Button>
						</CardContent>
					</Card>
					
					<Card class="hover:bg-muted/50 transition-colors">
						<CardContent class="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
							<div class="text-center min-w-[70px] bg-secondary/50 rounded-lg py-2 px-3">
								<div class="text-xs font-medium text-muted-foreground uppercase">May 24</div>
								<div class="font-bold text-lg">10:00</div>
							</div>
							<div class="flex-1">
								<h3 class="font-semibold">Campus Garden Reset</h3>
								<p class="text-sm text-muted-foreground mb-2">Volunteer teams prepare shared green areas for the summer term.</p>
								<Badge variant="secondary" class="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30">Campus Volunteers</Badge>
							</div>
							<Button
								size="sm"
								variant="outline"
								class="w-full sm:w-auto"
								href="/events/campus-garden-reset"
							>
								Join
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>

		<div class="lg:col-span-2">
			<!-- Focus Queue -->
			<section class="h-full">
				<div class="mb-4">
					<p class="text-xs font-semibold uppercase text-muted-foreground">Today</p>
					<h2 class="text-xl font-bold">Focus queue</h2>
				</div>
					<Card class="h-[calc(100%-3rem)] bg-card border shadow-sm">
						<CardContent class="p-0 flex flex-col divide-y">
							<Button
								variant="ghost"
								class="h-auto w-full justify-start gap-4 rounded-none p-4 text-left hover:bg-muted/50"
								href="/tasks/finalize-event-poster"
							>
								<div class="mt-1 w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0"></div>
								<div>
									<h4 class="font-medium text-sm">Finalize event poster</h4>
									<p class="text-xs text-muted-foreground mt-1">Design Circle · In Progress</p>
								</div>
							</Button>
							<Button
								variant="ghost"
								class="h-auto w-full justify-start gap-4 rounded-none p-4 text-left hover:bg-muted/50"
								href="/tasks/review-volunteer-map"
							>
								<div class="mt-1 w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></div>
								<div>
									<h4 class="font-medium text-sm">Review volunteer map</h4>
									<p class="text-xs text-muted-foreground mt-1">Campus Volunteers · In Review</p>
								</div>
							</Button>
							<Button
								variant="ghost"
								class="h-auto w-full justify-start gap-4 rounded-none p-4 text-left hover:bg-muted/50"
								href="/tasks/assign-welcome-desk"
							>
								<div class="mt-1 w-2.5 h-2.5 rounded-full border-2 border-muted-foreground shrink-0"></div>
								<div>
									<h4 class="font-medium text-sm">Assign welcome desk</h4>
									<p class="text-xs text-muted-foreground mt-1">Code Bloom · To Be Assigned</p>
								</div>
							</Button>
						</CardContent>
					</Card>
				</section>
		</div>
	</div>
</div>
