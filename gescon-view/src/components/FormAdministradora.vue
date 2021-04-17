<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-nome"
            v-model="formAdm.nome"
            placeholder="Nome"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4">
        <b-form-group id="input-group-2">
          <b-form-input
            id="input-cnpj"
            v-model="formAdm.cnpj"
            placeholder="CNPJ"
            required
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formAdm: {
        nome: "",
        cnpj: "",
      },
    };
  },
};
</script>