<script>
    import BearAnimation from './Group 1.png';
</script>


<style>
    #main-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        gap: 20px;
    }

    #image-container {
        height: 648px;
        width: 262px;
        overflow: hidden;
        flex: 0 0 auto;
        position: relative;
        border-radius: 20px;
        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10));
        z-index: 2;
    }

    #image-container::backdrop {
        background-color: rgba(0, 0, 0, 0.6); /* dark semi-transparent overlay */
    }

    img {
        object-fit: cover;
        object-position: -20px;
        position: absolute;
        height: 648px;
        width: 100%;
    }

    #image-container:hover > img {
        animation: run 1s steps(1,start) infinite;
        object-position: -5px;
    }

    @keyframes run {
        0% {
            object-position: 0px 0;
        }
        8.33% {
            object-position: -263.25px 0;
        }
        16.67% {
            object-position: -526.5px 0;
        }
        25% {
            object-position: -789.75px 0;
        }
        33.33% {
            object-position: -1053px 0;
        }
        41.67% {
            object-position: -1316.25px 0;
        }
        50% {
            object-position: -1579.5px 0;
        }
        58.33% {
            object-position: -1842.75px 0;
        }
        66.67% {
            object-position: -2106px 0;
        }
        75% {
            object-position: -2369.25px 0;
        }
        83.33% {
            object-position: -2632.5px 0;
        }
        91.67% {
            object-position: -2895.75px 0;
        }
    }
</style>

<div id="main-container">
    <h1 class="text-4xl">
        Hover over the image!
    </h1>
    <div id="image-container">
        <img src={BearAnimation} alt="smth" />
    </div>
</div>

