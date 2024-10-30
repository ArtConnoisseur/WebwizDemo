
<style>
    #root-typewriter {
        --bg: rgb(23, 27, 45);
        --text: white;
        --accent: rgb(199, 44, 49);
        --primary: rgb(57, 67, 85);

        font-size: 16px;
        color: var(--text);
        background-color: var(--bg);

        font-family: Poppins
    }

    h1, h2, h3, h4, h5 {
        font-family: 'Playfair Display';
    }

    h1 {
        font-size: 4.3rem;
    }

    h2{
        font-size: 2.4rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s ease-in-out;
    }

    a:hover {
        color: var(--accent);
    }

    #root-typewriter {
        padding: 5rem 20rem;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    #root-typewriter #header-links {
        display: flex;
        align-items: baseline;
        width: auto;
    }

    #root-typewriter nav ul {
        list-style-type: none;
        display: flex;
        gap: 2rem;
    }

    #root-typewriter h2 {
        margin-right: auto;
    }

    button {
        background-color: var(--primary);
        font-size: 1rem;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        color: inherit;
        border: 1px solid transparent;
        transition-property: border, background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
    }

    button:hover {
        border: 1px solid var(--accent);
        background-color: transparent;
    }

    #arrow-icon {
        font-size: 3rem;
    }

    #text {
        color: var(--accent)
    }

    #text::before {
        content: "Designer";
        animation: typewriter 1s infinite alternate steps(1);
    }

    @keyframes typewriter {
        0% {
            content: "Designer";
        }

        10% {
            content: "Designe";
        }

        20% {
            content: "Design";
        }

        30% {
            content: "Desig";
        }

        40% {
            content: "Desi";
        }

        50% {
            content: "Des";
        }

        60% {
            content: "De";
        }

        70% {
            content: "D";
        }

        80% {
            content: "";
        }
    }

    #header-content {
        display: flex;
        gap: 100px;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    #image-container {
        position: relative;
        height: 564px;
        min-width: 564px;
        overflow: hidden;
    }

    #image-container::after {
        content: '';
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.637) 0%, rgba(0, 0, 0, 0.00) 100%);;
        position: absolute;
        top:0;
        left: 0;
        opacity: 0;
        transform: translateY(-100%);
        transition: opacity 0.3s ease-in-out 0.1s, transform 0.3s ease-in-out;
    }

    #image-container:hover::after, #image-container:hover #image-info{
        transform: translateY(0);
        opacity: 1;
    }

    #image-info {
        position: absolute;
        padding: 2rem;
        z-index: 2;
        bottom: 20px;
        opacity: 0;
        transition: opacity  0.2s ease-in-out, transform 0.2s ease-in-out;
        transform: translateY(50%);
    }
</style>


<section id="root-typewriter" class="h-screen">
    <header id="header-links">
        <h2>Webwiz</h2>
        <nav>
            <ul>
                <li><a href="#" class="links">About</a></li>
                <li><a href="#" class="links">See My Work</a></li>
                <li><a href="#" class="links">Contact</a></li>
            </ul>
        </nav>
    </header>
    <div id="header-content">
        <div class="flex flex-col gap-4 items-start min-w-[50%]">
            <h1>I am a</h1>
            <h1><span id="text">| </span></h1>
            <br>and I would like to work with you!

            <button>Learn More</button>
        </div>
        <div id="image-container">
            <div id="image-info">
                <h2>
                    See more of my work?
                </h2>
                <a id="arrow-icon">&#8594;</a>
            </div>
            <img src="https://i.pinimg.com/564x/a9/af/dd/a9afdd2e83721579c4b3501d9d7bb7f0.jpg">
        </div>
    </div>
</section>