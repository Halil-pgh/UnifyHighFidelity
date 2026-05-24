<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
	import { Search, Sun, Moon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';

	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Sidebar.Provider>
	<AppSidebar />

	<Sidebar.Inset class="flex flex-col bg-muted/20 min-h-screen">
		<header class="flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10">
			<Sidebar.Trigger />
			<div class="flex-1"></div>
			<!-- Optional Top Right items for mobile if needed -->
			<div class="flex items-center gap-2 md:hidden">
				<a href="/profile">
					<Avatar class="h-8 w-8 cursor-pointer border">
						<AvatarFallback>MY</AvatarFallback>
					</Avatar>
				</a>
			</div>
		</header>

		<main class="flex-1 overflow-x-hidden pt-4 pb-8 md:p-6 lg:p-8">
			<div class="mx-auto w-full max-w-6xl">
				{@render children()}
			</div>
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
