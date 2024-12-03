<script>
    import { mapColor } from "../assets/utils";
    import Hyena from "./Hyena.svelte";
    import Gnu from "./Gnu.svelte";

    export let w;
    export let h;
    export let plants;
    export let hyenas = 1;
    export let gnus = 2;

    let hyenaArray = new Array(hyenas);
    let gnuArray = new Array(gnus);

    const reserveColor = mapColor(plants);
</script>

<div
    class="reserve"
    style="width: {w}px; height: {h}px; background-color:{reserveColor};"
>
    {#each gnuArray as _, i}
        <Gnu />
    {/each}

    {#each hyenaArray as _, i}
        <Hyena />
    {/each}

    <div class="counter">{hyenas + gnus}</div>
</div>

<style>
    .reserve {
        border: 5px solid brown;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
    }

    .counter {
        position: absolute;
        right: 0.5em;
        top: 0.5em;
        border-radius: 50%;
        border: 2px solid white;
        background-color: #111;
        color: white;
        padding: 3px;
    }
</style>
