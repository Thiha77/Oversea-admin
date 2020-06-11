<template>
    <div>
           
        <adminMenu></adminMenu>
        <hr/>
        <router-view></router-view>
            <select v-model="$i18n.locale">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
            </select>
    </div>
</template>
<script>
import adminMenu from "../menu/adminMenu";

export default {
  data() {
    return {
      langs:['ja','en']
    };
  },
  components: {
    adminMenu,
    
  },
  mounted() {}
};
</script>
