<script>
    import { page } from '$app/stores';
    export let children;
    export let href;

    $: selected = $page.url.pathname === href;
</script>

<a {href} class="w-full">
    <button class={`w-full rounded-sm px-4 py-2 transition-all text-left ${selected ? 'bg-primary text-primary-fg' : 'duration-300 hover:bg-secondary/50'}`}>
        {@render children()}
    </button>
</a>