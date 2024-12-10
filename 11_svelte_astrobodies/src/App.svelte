<script>
  let selectedOption;
  let bodies = [];

  function handleSelectChange(event) {
    selectedOption = event.target.value;
    console.log(`${selectedOption} is selected`);
    fetchBodies();
  }

  async function fetchBodies() {
    try {
      const response = await fetch(
        `https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,${selectedOption}&data=id,bodyType,englishName`,
      );
      const data = await response.json();
      console.log(data);
      bodies = data.bodies;
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  }
</script>

<select on:change={handleSelectChange}>
  <option value="Planet">Planets</option>
  <option value="Moon">Moons</option>
  <option value="Dwarf Planet">Dwarf Planets</option>
</select>

<p>
  {#if bodies.length > 0}
    Found {bodies.length} bodies.
  {:else}
    No bodies found.
  {/if}
</p>

<ul>
  {#each bodies as body}
    <li>{body.englishName}</li>
  {/each}
</ul>