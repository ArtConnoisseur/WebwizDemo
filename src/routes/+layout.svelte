<script>
	import '../app.css';
    import { page } from '$app/stores';
    import SidebarLink from "../components/SidebarLink.svelte";

	let { children } = $props();
</script>

<section class="flex h-screen">
    <div class="flex flex-col w-[20%] gap-4 py-10 px-5 items-center border-r-[0.5px] border-secondary h-full text-text">
        <a href="/" class="text-sm text-secondary-fg">
            Currently at: {$page.url.pathname}
        </a>
        <SidebarLink href="/animation-demo">
            1. Basic Animation
        </SidebarLink>
        <SidebarLink href="/image-transition">
            2. Intro to Transitions
        </SidebarLink>
        <SidebarLink href="/pull-down-menu">
            3. Pull-Down Menu Transition
        </SidebarLink>
        <SidebarLink href="/loading-text-animation">
            4. Loading Text Animation
        </SidebarLink>
        <SidebarLink href="/character-animation">
            5. Character Animation
        </SidebarLink>
        <SidebarLink href="/typewriter-animation">
            6. Typewriter
        </SidebarLink>
        <SidebarLink href="/video-header">
            7. Using Videos
        </SidebarLink>
        <SidebarLink href="/microanimations-example">
            8. Microanimations
        </SidebarLink>
    </div>
    <section class="w-[80%]">
        {@render children()}
    </section>
</section>

