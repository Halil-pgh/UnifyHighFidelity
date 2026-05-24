<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
</script>

<div class="flex flex-col gap-8 max-w-4xl mx-auto py-4">
	<!-- Page Heading -->
	<div>
		<p class="text-xs font-semibold tracking-wide text-primary uppercase">Profile & settings</p>
		<h1 class="text-3xl font-bold tracking-tight mt-1">Mira Yilmaz</h1>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<Card class="md:col-span-1 border shadow-sm h-fit">
			<CardContent class="p-6 flex flex-col items-center text-center">
				<Avatar class="w-24 h-24 mb-4 border-2">
					<AvatarFallback class="text-2xl">MY</AvatarFallback>
				</Avatar>
				<h2 class="text-xl font-bold">Mira Yilmaz</h2>
				<p class="text-sm text-muted-foreground mt-2">
					Moderator in Design Circle<br/>
					Member in Campus Volunteers
				</p>
			</CardContent>
		</Card>

		<Card class="md:col-span-2 border shadow-sm">
			<CardContent class="p-6">
				<p class="text-xs font-semibold uppercase text-muted-foreground mb-1">Preferences</p>
				<h2 class="text-xl font-bold mb-6">Notifications</h2>
				
				<div class="flex flex-col gap-4">
					<label class="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
						<span class="font-medium">Task deadline reminders</span>
						<input type="checkbox" checked class="w-4 h-4 rounded text-primary focus:ring-primary border-muted-foreground" />
					</label>
					<label class="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
						<span class="font-medium">Joined event updates</span>
						<input type="checkbox" checked class="w-4 h-4 rounded text-primary focus:ring-primary border-muted-foreground" />
					</label>
					<label class="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
						<span class="font-medium">Community companion milestones</span>
						<input type="checkbox" checked class="w-4 h-4 rounded text-primary focus:ring-primary border-muted-foreground" />
					</label>
					<label class="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
						<span class="font-medium">Weekly summary email</span>
						<input type="checkbox" class="w-4 h-4 rounded text-primary focus:ring-primary border-muted-foreground" />
					</label>
				</div>
			</CardContent>
		</Card>
	</div>
</div>