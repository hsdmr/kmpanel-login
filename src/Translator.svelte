<script>
  import translations from "src/translate.js";
  import { dict } from "src/i18n.js";

  $: dict.set(translations);
</script>

<slot />
