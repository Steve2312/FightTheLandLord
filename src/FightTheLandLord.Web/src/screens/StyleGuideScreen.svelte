<script>
    import Screen from "./Screen.svelte";
    import PlayingCard from "../lib/PlayingCard.svelte";
    import {Deck} from "../models/deck.model.ts";

    const deck = new Deck();
</script>

<Screen>
    <h1>H1 Text</h1>
    <h2>H2 Text</h2>
    <p>Paragraph Text with <a>Link</a></p>
    <button>Button</button>

    <div class="cards">
        {#each deck.cards as card}
            <PlayingCard card={card}/>
        {/each}
    </div>
</Screen>

<style lang="scss">
    .elements {
      display: grid;
      flex-direction: column;
    }
    .cards {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin: 1rem 0;
    }
</style>