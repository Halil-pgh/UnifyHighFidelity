<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="flex flex-col gap-8 max-w-6xl mx-auto py-4">
	<!-- Page Heading -->
	<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
		<div>
			<p class="text-xs font-semibold tracking-wide text-primary uppercase">My tasks</p>
			<h1 class="text-3xl font-bold tracking-tight mt-1">All assigned work across communities</h1>
		</div>
		<div class="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 hide-scrollbar">
			<Button variant="default" size="sm" class="rounded-full shrink-0">All</Button>
			<Button variant="outline" size="sm" class="rounded-full shrink-0 bg-background/50 backdrop-blur">In Progress</Button>
			<Button variant="outline" size="sm" class="rounded-full shrink-0 bg-background/50 backdrop-blur">In Review</Button>
			<Button variant="outline" size="sm" class="rounded-full shrink-0 bg-background/50 backdrop-blur">Due soon</Button>
		</div>
	</div>

	<Card>
		<div class="overflow-x-auto">
			<table class="w-full text-sm text-left">
				<thead class="bg-muted/50 text-muted-foreground uppercase text-xs">
					<tr>
						<th class="px-6 py-4 font-semibold">Task</th>
						<th class="px-6 py-4 font-semibold">Community</th>
						<th class="px-6 py-4 font-semibold">Status</th>
						<th class="px-6 py-4 font-semibold">Deadline</th>
						<th class="px-6 py-4 font-semibold">Dependencies</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-border/50 bg-card">
					<!-- In Progress -->
					<tr class="hover:bg-muted/30 transition-colors cursor-pointer group">
						<td class="px-6 py-4 font-medium text-foreground">
							<div class="flex items-center gap-3">
								<div class="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
								Finalize event poster
							</div>
						</td>
						<td class="px-6 py-4 text-muted-foreground group-hover:text-foreground transition-colors">Design Circle</td>
						<td class="px-6 py-4"><Badge variant="secondary" class="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300">In Progress</Badge></td>
						<td class="px-6 py-4 text-foreground font-medium">May 21</td>
						<td class="px-6 py-4 text-muted-foreground">Venue confirmed</td>
					</tr>
					
					<!-- In Review -->
					<tr class="hover:bg-muted/30 transition-colors cursor-pointer group">
						<td class="px-6 py-4 font-medium text-foreground">
							<div class="flex items-center gap-3">
								<div class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></div>
								Review volunteer map
							</div>
						</td>
						<td class="px-6 py-4 text-muted-foreground group-hover:text-foreground transition-colors">Campus Volunteers</td>
						<td class="px-6 py-4"><Badge variant="secondary" class="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300">In Review</Badge></td>
						<td class="px-6 py-4">May 23</td>
						<td class="px-6 py-4 text-muted-foreground">None</td>
					</tr>

					<!-- To Be Assigned -->
					<tr class="hover:bg-muted/30 transition-colors cursor-pointer group">
						<td class="px-6 py-4 font-medium text-foreground">
							<div class="flex items-center gap-3">
								<div class="w-2 h-2 rounded-full border-2 border-muted-foreground shrink-0"></div>
								Prepare mentor notes
							</div>
						</td>
						<td class="px-6 py-4 text-muted-foreground group-hover:text-foreground transition-colors">Code Bloom</td>
						<td class="px-6 py-4"><Badge variant="outline" class="text-muted-foreground border-muted">To Be Assigned</Badge></td>
						<td class="px-6 py-4">May 27</td>
						<td class="px-6 py-4 text-muted-foreground">Mentor list</td>
					</tr>

					<!-- Done -->
					<tr class="hover:bg-muted/30 transition-colors cursor-pointer group">
						<td class="px-6 py-4 font-medium text-muted-foreground line-through">
							<div class="flex items-center gap-3">
								<div class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
								Publish event recap
							</div>
						</td>
						<td class="px-6 py-4 text-muted-foreground">Design Circle</td>
						<td class="px-6 py-4"><Badge variant="secondary" class="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300">Done</Badge></td>
						<td class="px-6 py-4 text-muted-foreground">May 18</td>
						<td class="px-6 py-4 text-muted-foreground">Photos uploaded</td>
					</tr>
				</tbody>
			</table>
		</div>
	</Card>
</div>