
<style>
    #moving-element {
        height: 500px;
        width: 500px;
        background: hsl(var(--primary));
        animation: move-right 2s ease-in-out infinite alternate;
        position: absolute;
    }

    @keyframes move-right {
        from {
            translate: 0;
        }
        to {
            translate: 100%;
        }
    }
</style>

<div id="container" class="w-full h-full relative">
    <span id="moving-element"/>
</div>