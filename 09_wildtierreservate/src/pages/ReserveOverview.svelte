<script>
    import { getRandomInt } from "../assets/utils";
    import Reserve from "../components/Reserve.svelte";

    let reserveCount = getRandomInt(3, 5);
    let reserveArray = new Array(reserveCount);
</script>

<h3>Wildtierreservate</h3>
<div id="reserve-wrapper">
    {#each reserveArray as reserve, i}
        <Reserve
            w={getRandomInt(50, 300)}
            h={getRandomInt(50, 300)}
            plants={getRandomInt(0, 100)}
            hyenas={getRandomInt(2, 6)}
            gnus={getRandomInt(6, 20)}
        />
    {/each}
</div>

<style>
    #reserve-wrapper {
        display: flex;
        max-width: 1200px;
        margin: auto;
        justify-content: center;
        gap: 1em;
    }
</style>
