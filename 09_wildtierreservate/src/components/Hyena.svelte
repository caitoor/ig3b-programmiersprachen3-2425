<script>
    import { getRandomInt } from "../assets/utils";
</script>

<div
    class="hyena"
    style="top: {getRandomInt(0, 100)}%; left: {getRandomInt(0, 100)}%;"
></div>

<style>
    .hyena {
        background-color: beige;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        border: 1px solid white;
        position: absolute;
    }
</style>
