<template>
  <div>
    <h1>Administradora</h1>
    <b-form @submit="onSubmit">
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
      <form-endereco></form-endereco>
      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import FormEndereco from "../components/FormEndereco.vue";

export default {
  name: "Administradora",
  components: { FormEndereco },
  data() {
    return {
      formAdm: {
        endereco: FormEndereco.data().formEnd,
        nome: "",
        cnpj: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.formAdm));
    },
  },
};
</script>

<style>
</style>