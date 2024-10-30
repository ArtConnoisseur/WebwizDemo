<style>
    #hero {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        padding: 4rem;
        box-sizing: border-box;
        height: 100%;
    }

    .image-container {
        height: 400px;
        width: 350px;
        overflow: hidden;
        position: relative;
        border-radius: 20px;
    }

    .image-container::after {
        content: '';
        height: 100%;
        width: 100%;
        background-color: rgb(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transform: translateY(-100%);
        transition-property: transform, opacity;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;
        z-index: 1;
    }

    .image-container:hover::after {
        transform: translateY(0);
        opacity: 1;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        align-self: center;
        transform: scale(1);
        transition: transform 0.2s ease-in-out;
    }

    .info-card {
        position: absolute;
        padding: 2rem;
        z-index: 2;
        bottom: 20px;
        opacity: 0;
        transition: opacity  0.2s ease-in-out, transform 0.2s ease-in-out;
        transform: translate3d(0, 70%, 0);
        color: white;
    }

    .image-container:hover > .info-card {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

    button {
        background-color: transparent;
        border: 1px solid white;
        padding: 0.6rem 1.2rem;
        color: inherit;
        font: inherit;
        border-radius: 200px;
    }

    button:hover {
        background-color: #ffffff73;
    }

    h1 {
        font-size: 4rem;
        max-width: 400px;
        align-self: center;
    }

    .image-container:hover > img {
        transform: scale(1.2);
    }

</style>

<div id="hero">
    <h1>Hover over the images!</h1>
    <div class="image-container">
        <div class="info-card">
            <h2>Caption</h2>
            <p>This is some more information about the image</p>
            <button>Button</button>
        </div>
        <img src="/src/routes/image-transition/images/Dog in Flower Field.jpg">
    </div>
    <div class="image-container">
        <div class="info-card">
            <h2>Caption</h2>
            <p>This is some more information about the image</p>
            <button>Button</button>
        </div>
        <img src="/src/routes/image-transition/images/Green plates with orange slices.jpg">
    </div>
    <div class="image-container">
        <div class="info-card">
            <h2>Caption</h2>
            <p>This is some more information about the image</p>
            <button>Button</button>
        </div>
        <img src="/src/routes/image-transition/images/Green Leaf with Water Drops.jpg">
    </div>
    <div class="image-container">
        <div class="info-card">
            <h2>Caption</h2>
            <p>This is some more information about the image</p>
            <button>Button</button>
        </div>
        <img src="/src/routes/image-transition/images/Jack Prew Unsplash.jpg">
    </div>
    <div class="image-container">
        <div class="info-card">
            <h2>Caption</h2>
            <p>This is some more information about the image</p>
            <button>Button</button>
        </div>
        <img src="/src/routes/image-transition/images/Moody Nature Leaf.jpg">
    </div>
</div>