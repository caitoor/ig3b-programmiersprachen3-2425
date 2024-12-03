<script>
  import Router from "svelte-spa-router";
  import LandingPage from "./pages/LandingPage.svelte";
  import ReserveOverview from "./pages/ReserveOverview.svelte";
  import CardOverview from "./pages/CardOverview.svelte";

  const routes = {
    "/": LandingPage,
    "/reserves": ReserveOverview,
    "/cards": CardOverview,
  };
</script>

<header>
  <h1>Programmieren = Passion</h1>
  <nav>
    <a href="#/">Home</a>
    <a href="#/reserves">Reservate</a>
    <a href="#/cards">Quartettkarten</a>
  </nav>
</header>
<main>
  <Router {routes} />
</main>
<footer></footer>

<style>
</style>
