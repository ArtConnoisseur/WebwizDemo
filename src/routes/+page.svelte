<style>
    #main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        align-self: center;
        gap: 40px;
    }

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

<div id="main-container">
    <h1 class="text-2xl">Welcome to</h1>

    <svg viewbox="0 0 1230 500">
        <text x="50%" y="50%" dy=".64em" text-anchor="middle">
            Webwiz
        </text>
        <text x="50%" y="50%" dy=".64em" dx="1.83em" text-anchor="middle">
            .
        </text>
    </svg>
</div>
