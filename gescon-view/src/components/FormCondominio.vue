<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-nome"
            v-model="formCondominio.nome"
            placeholder="Nome"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4">
        <b-form-group id="input-group-2">
          <b-form-input
            id="input-cnpj"
            v-model="formCondominio.telefone"
            placeholder="Telefone"
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
      formCondominio: {
        nome: "",
        telefone: "",
      },
    };
  },
  watch: {
    formCondominio: {
      handler(){
        this.$emit("handlerCondominio", this.formCondominio)
      },
      deep: true
    }
  }
};
</script>