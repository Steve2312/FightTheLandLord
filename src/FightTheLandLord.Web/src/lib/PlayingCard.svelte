<script lang="ts">
    import {Card} from "../models/card.model";

    export let card!: Card;
</script>

<div class="card" style="--color: {card.getColor()}">
    <div class="symbol">
        <p>{card.toString()}</p>
        <p>{card.getSuite()}</p>
    </div>
    <p class="artwork">{card.getArt()}</p>
    <div class="symbol">
        <p>{card.toString()}</p>
        <p>{card.getSuite()}</p>
    </div>
</div>

<style lang="scss">
    .card {
      position: relative;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      width: 70px;
      height: 130px;
      background: white;
      border: 0.25rem solid var(--on-background);
      color: var(--color);
      padding: 1rem;
      transition: transform .1s ease-in-out;
      user-select: none;

      &:hover {
        transform: translate(0, -0.5rem);
      }

      .symbol {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        height: 100%;

        &:last-child {
          transform: scale(-1);
        }
      }

      .artwork {
        display: grid;
        place-items: center;
        font-size: 2rem;
        text-align: center;
        width: 100%;
        height: 100%;
      }

      p {
        margin: 0;
      }
    }
</style>