<footer>
    <p>Made with <span class="heart">❤️</span> by <a href="https://github.com/Steve2312" target="_blank">Steve2312</a></p>
    <p>© 2022 - 2023</p>
</footer>

<style lang="scss">
    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1rem;

        font-size: 0.8rem;
        border-top: 0.1rem solid var(--on-background);
    }

    .heart {
        display: inline-block;
        animation: pound 0.35s infinite alternate;
    }

    @keyframes pound {
        to {
            transform: scale(1.05);
        }
    }
</style>
