<script>
    import { getRandomInt } from "../assets/utils";
</script>

<div
    class="gnu"
    style="top: {getRandomInt(0, 100)}%; left: {getRandomInt(0, 100)}%;"
></div>

<style>
    .gnu {
        background-color: gray;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        border: 1px solid white;
        position: absolute;
    }
</style>
