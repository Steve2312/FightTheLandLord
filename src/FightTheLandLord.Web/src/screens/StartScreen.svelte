<script>
    import Screen from "./Screen.svelte";
    import {Link} from "svelte-navigator";
</script>

<Screen>
    <div class="start-screen">
        <div>
            <h2>斗地主 / 鬥地主</h2>
            <h1>Fight the landlord</h1>
            <p>A card game in the genre of shedding and gambling. It is one of the most popular card games played in China.</p>
        </div>
        <div class="buttons">
            <Link to="/offline"><button>OFFLINE GAME</button></Link>
            <Link to="/host"><button>HOST GAME</button></Link>
            <Link to="/join"><button>JOIN GAME</button></Link>
            <Link to="/rules"><button>RULES</button></Link>
            <Link to="/styleguide"><button>STYLEGUIDE</button></Link>
        </div>
    </div>
</Screen>

<style lang="scss">
    .start-screen {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100%;
    }

    .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin: 2rem 0;

      & :global(a) {
        &:after {
          content: unset;
        }
      }
    }

    h1 {
      margin: 0;
    }

    p {
      max-width: 500px;
    }
</style>
