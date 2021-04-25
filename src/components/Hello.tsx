import { ref } from "@vue/reactivity";
import { defineComponent } from "@vue/runtime-core";

const Hello = defineComponent({
  setup() {
    const a = ref(0);
    return () => <div onClick={() => a.value++}>{a.value}</div>;
  },
});

export default Hello;
