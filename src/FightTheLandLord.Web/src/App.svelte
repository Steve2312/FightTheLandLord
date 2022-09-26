<script lang="ts">
    import Footer from './lib/Footer.svelte';
    import StartScreen from './screens/StartScreen.svelte';
    import {Route, Router} from "svelte-navigator";
    import StyleScreen from "./screens/StyleGuideScreen.svelte";
    import NotFoundScreen from "./screens/NotFoundScreen.svelte";
</script>

<Router>
    <Route component={NotFoundScreen} primary={false} />
    <Route path="/" component={StartScreen} primary={false} />
    <Route path="/styleguide" component={StyleScreen} primary={false} />
    <Footer />
</Router>
