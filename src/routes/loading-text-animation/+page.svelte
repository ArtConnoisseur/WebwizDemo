<script>
    let value = $state('Webwiz')
</script>

<style>
    svg {
        width: 30rem;
        fill:none;
    }

    svg text {
        stroke: #ffffff;
        stroke-width: 3px;
        font-size:20rem;
        font-weight: 700;
        animation: 4s infinite alternate loader;
    }

    @keyframes loader {
        0% {
            fill: transparent;
            stroke-width: 3px;
            stroke-dashoffset: 0%;
            stroke-dasharray: 0 32%;
        }

        30% {
            fill: transparent;
            stroke-width: 3px;
            stroke-dashoffset: 40%;
            stroke-dasharray: 50px 32%;
            stroke: white
        }

        80% {
            fill: white;
            stroke-width: 1px;
            stroke-dasharray: 100px 32%;
        }

        100% {
            fill: white;
            stroke-width: 1px;
        }
    }
</style>

<div id="main-container" class="flex flex-col gap-2 h-full items-center p-12">
    <div class="self-center flex gap-2 items-center">
        Enter text to be animated:
        <input type="text" bind:value class="bg-transparent px-3 py-2 rounded-md border-[0.5px] focus:outline-none"/>
    </div>
    {#snippet SVGText(text)}
        <svg viewbox="0 0 1230 500">
            <text x="50%" y="50%" dy=".64em" text-anchor="middle">
                {text}
            </text>
        </svg>
    {/snippet}

    {#each value.split(' ') as word}
        {@render SVGText(word)}
    {/each}
</div>
