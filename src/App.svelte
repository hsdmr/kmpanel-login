<script>
  import Translator from "src/Translator.svelte";
  import { Router, Route } from "svelte-navigator";
  import Login from "src/pages/Login.svelte";
  import Register from "src/pages/Register.svelte";
  import Password from "src/pages/Password.svelte";
  import { __ } from "src/i18n.js";
</script>

<Translator>
  <Router>
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="forget-password" component={Password} />
  </Router>
</Translator>
