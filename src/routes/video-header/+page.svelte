<style>
    a {
        color: white;
        text-decoration: none;
    }

    #hero {
        height: 60vh;
        color: white;
        position: relative;
        content: '';
        inset: 0;
        background: rgba(15, 21, 37, .8);
    }

    .container {
        width: 80%;
        margin: 0 auto;
        height: 100%;
        padding: 4rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 3rem;
    }

    nav ul a {
        text-decoration: none;
        color: white;
    }

    h1 {
        font-size: 4.875rem;
        font-weight: 700;
        max-width: 80%;
        line-height: 1.2;
    }

    h1 span {
        color: #1aabff;
    }

    video {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        z-index: -2;
    }
</style>

<section id="hero">
    <div class="container">
        <header>
            <a href="/" class="text-4xl"><h2>Webwiz</h2></a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Testimonials</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>

        <h1>Your website's <span>main text</span> comes here</h1>
        This integrates with the video and is an easy way to introduce motion to a website
        <video src="/src/routes/video-header/Trung Lam Tran 204.mp4" autoplay loop muted></video>
    </div>
</section>

