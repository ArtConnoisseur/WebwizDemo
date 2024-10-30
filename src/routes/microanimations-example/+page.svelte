<script>
    let menuOpen = $state(false);
    const toggle = () => menuOpen = !menuOpen;
</script>

<style>
    #microanimations-root {
        --color-text: #f1faff;
        --color-accent: #e71037;
    }

    h1 {
        font-family: 'Playfair Display', serif;
        font-size: 4rem;
        line-height: 1.2;
    }

    h2 {
        font-size: 2rem;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.4;
    }

    a {
        text-decoration: none;
        color: var(--color-text);
        font-size: .875rem;
        transition: color .5s ease-in-out;
    }

    img {
        display: block;
    }

    a:hover {
        color: var(--color-accent);
    }

    header {
        margin: 20px 40px 0 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        z-index: 100;
        position: relative;
    }

    .header-side-content {
        flex: 1;
        display: flex;
        justify-content: flex-start;
    }

    .header-side-content:last-child {
        justify-content: flex-end;
    }


    ul.unstyled {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    #nav-social ul {
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    #nav-social li {
        position: relative;
        display: flex;
        align-items: center;
    }

    .container {
        margin: 0 4rem;
    }

    #hero {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #hero h1,
    #hero p {
        max-width: 32vw;
        margin: 0 0 3rem;
    }

    #menu-container {
        position: absolute;
        right: 0;
        background: hsl(var(--background));
        z-index: 3;
        height: 0;
        transition: height .5s cubic-bezier(.14,.65,.15,1);
        width: 75%;
    }

    #menu-container a {
        display: inline-block;
        font-size: 2.25rem;
        line-height: 3;
        margin-bottom: 2rem;
        transition: color .5s ease-in-out;
        color: var(--color-text);
    }

    #menu-container a:hover {
        color: var(--color-accent);
    }

    #menu-container li {
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }

    #microanimations-root[menu-open="true"] #menu-container {
        height: 100%;
    }

    #microanimations-root[menu-open="true"] #menu-container li {
        opacity: 1;
    }

    #illustration {
        position: relative;
        scale: 0.8;
    }

    .i-btn {
        background-color: #ff3059;
        position: absolute;
        filter: blur(5px);
        mix-blend-mode: screen;
        animation: glow-pulse 2s ease-in-out infinite alternate;
    }

    .button-1 {
        bottom: 312px;
        left: 215.5px;
        height: 10px;
        width: 15px;
    }

    .button-2 {
        animation-delay: 1s;
        bottom: 317px;
        left: 238px;
        height: 10px;
        width: 15px;
    }

    .button-3 {
        animation-delay: 1s;
        bottom: 436px;
        left: 279px;
        height: 15px;
        width: 10px;
        animation-duration: 0.8s;
        background-color: rgb(49, 125, 255);
    }

    svg {
        width: 88.16px;
        height: auto;
        position: absolute;
        bottom: 114px;
        left: 268px;
        stroke-width: 3px;
        stroke-linecap: round;
        stroke-dasharray: 40px 50px;
        stroke: #00bfff;
        mix-blend-mode: color-dodge;
        animation: wire 5s linear infinite;
        filter: blur(2.1px);
    }

    @keyframes glow-pulse {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes wire {
        0% {
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dashoffset: 690%;
        }
    }

    #menu-button {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;
    }

    .menu-icon {
        background-color: var(--color-text);
        height: 5px;
        width: 50px;
        border-radius: 20px;
        transition: border 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    }

    #menu-button:hover .menu-icon {
        background-color: var(--color-accent);
    }

    #microanimations-root[menu-open="true"] .menu-icon {
        position: absolute;
        top: 0;
        left: 0;
    }

    #microanimations-root[menu-open="true"] .menu-icon:nth-child(2) {
        opacity: 0;
    }

    #microanimations-root[menu-open="true"] .menu-icon:nth-child(1) {
        transform: rotate(45deg);
        background-color: var(--color-text);
    }

    #microanimations-root[menu-open="true"] .menu-icon:nth-child(3) {
        transform: rotate(-45deg);
        background-color: var(--color-text);
    }
</style>

<section id="microanimations-root" menu-open={menuOpen}>
<header>
    <div class="header-side-content">
        <div id="menu-button" on:click={toggle}>
            <span class="menu-icon"></span>
            <span class="menu-icon"></span>
            <span class="menu-icon"></span>
        </div>
    </div>

    <a href="/"><h2>Webwiz</h2></a>

    <div class="header-side-content">
        <nav id="nav-social">
            <ul class="unstyled">
                <li><a href="">YouTube</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
            </ul>
        </nav>
    </div>
</header>

<div id="menu-container">
    <ul class="unstyled">
        <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Why is the astronaught glowing tho?</a></li>
    </ul>
</div>

<div class="container">
    <section id="hero">
        <div id="hero-content">
            <h1>Wheee the astronaut is glowing!!</h1>
            <p>Also, click on the menu icon!</p>
        </div>
        <div id="illustration">
            <img src="https://i.pinimg.com/564x/56/74/f4/5674f4b6491cea7cc3c5d34e84bf1a71.jpg" alt="Illustration">
            <div class="i-btn button-1"></div>
            <div class="i-btn button-1"></div>
            <div class="i-btn button-1"></div>

            <div class="i-btn button-2"></div>
            <div class="button-2 i-btn"></div>
            <div class="i-btn button-2"></div>

            <div class="button-3 i-btn"></div>
            <div class="button-3 i-btn"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="116" viewBox="0 0 90 116" fill="none">
                <path d="M1.50021 1C1.16688 11.3333 1 29.5 4.5002 41.5C7.18966 50.7205 37.0002 100 56.5002 107C73.6744 113.165 85.5003 116.667 89.5003 115"x/>
            </svg>
        </div>
    </section>
</div>

</section>