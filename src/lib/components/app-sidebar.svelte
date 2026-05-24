<script lang="ts">
	import RocketIcon from "@tabler/icons-svelte/icons/rocket";
	import HomeIcon from "@tabler/icons-svelte/icons/home";
	import CompassIcon from "@tabler/icons-svelte/icons/compass";
	import UsersIcon from "@tabler/icons-svelte/icons/users";
	import ListCheckIcon from "@tabler/icons-svelte/icons/list-check";
	import CalendarEventIcon from "@tabler/icons-svelte/icons/calendar-event";
	import SettingsIcon from "@tabler/icons-svelte/icons/settings";
	import HelpIcon from "@tabler/icons-svelte/icons/help";
	import SearchIcon from "@tabler/icons-svelte/icons/search";
	import InnerShadowTopIcon from "@tabler/icons-svelte/icons/inner-shadow-top";

	import HashIcon from "@tabler/icons-svelte/icons/hash";
	import StarIcon from "@tabler/icons-svelte/icons/star";
	import ShieldIcon from "@tabler/icons-svelte/icons/shield";

	import NavMain from "./nav-main.svelte";
	import NavCommunities from "./nav-communities.svelte";
	import NavSecondary from "./nav-secondary.svelte";
	import NavUser from "./nav-user.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	const data = {
		user: {
			name: "My User",
			email: "user@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		navMain: [
			{ title: "Welcome", url: "/", icon: RocketIcon },
			{ title: "Home", url: "/home", icon: HomeIcon },
			{ title: "Explore", url: "/explore", icon: CompassIcon },
			{ title: "Communities", url: "/communities", icon: UsersIcon },
			{ title: "Tasks", url: "/tasks", icon: ListCheckIcon },
			{ title: "Calendar", url: "/calendar", icon: CalendarEventIcon },
		],
		navSecondary: [
			{ title: "Settings", url: "#", icon: SettingsIcon },
			{ title: "Get Help", url: "#", icon: HelpIcon },
			{ title: "Search", url: "#", icon: SearchIcon },
		],
		communities: [
			{ name: "Svelte Developers", url: "#", icon: StarIcon },
			{ name: "UI/UX Design", url: "#", icon: HashIcon },
			{ name: "Frontend Masters", url: "#", icon: ShieldIcon },
		],
	};

	let { ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:!p-1.5">
					{#snippet child({ props })}
						<a href="/" {...props}>
							<InnerShadowTopIcon class="!size-5" />
							<span class="text-base font-semibold">Unify</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<NavCommunities items={data.communities} />
		<NavSecondary items={data.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
</Sidebar.Root>
