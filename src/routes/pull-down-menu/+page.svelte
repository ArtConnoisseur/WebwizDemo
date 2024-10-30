<script>
    import Logo from './logo.svg';
</script>

<style>
    #main-header {
        display: flex;
        align-items: center;
        width: 90%;
        margin: 0 auto;
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
        color: #A1A2A3;
        display: inline-block;
        padding: 1.5rem 0;
        transition: color 0.2s ease-in-out;
    }

    nav ul a:hover {
        color: #E8E8E8;
    }

    .has-submenu {
        position: relative;
        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: flex-start;
    }

    .has-submenu:hover ul {
        display: block;
    }

    .has-submenu ul {
        position: absolute;
        top: 100%;
        left: -2rem;
        background-color: #212224;
        min-width: 20rem;
        border-radius: .5rem;
        padding: .5rem;
        opacity: 0;
        display: block;
        transform: translateX(-1rem);
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, visibility .2s ease-in-out;
    }

    .has-submenu:hover ul {
        display: block;
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
    }

    .has-submenu ul a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-radius: 0.5rem;
        transition-property: background-color, padding;
        transition-duration: 0.2s;
    }


    .has-submenu ul a:hover {
        background-color: #2C2D2F;
        padding: 1rem 1.5rem;
    }

    .has-submenu:hover > a {
        color: #ffffff;
    }

    img[alt="Logo"] {
        width: 30%;
    }

</style>


<div id="hero" class="flex flex-col justify-between w-full h-full relative">
    <header id="main-header">
        <a href="/"><img src={Logo} alt="Logo"></a>
        <nav>
            <ul>
                <li class="has-submenu">
                    <a href="/">Services</a>
                    <ul>
                        <li><a href="/">Branding</a></li>
                        <li><a href="/">Web Design</a></li>
                        <li><a href="/">Web Development</a></li>
                        <li><a href="/">eCommerce</a></li>
                        <li><a href="/">Print</a></li>
                    </ul>
                </li>
                <li><a href="/">Company</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    </header>
    <div class="absolute inset-0 m-auto -z-10 flex items-center justify-center">
        Hover over services link to see the menu!
    </div>
</div>
