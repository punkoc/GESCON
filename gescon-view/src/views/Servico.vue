<template>
  <div>
    <h1>Serviços</h1>
    <b-form @submit="onSubmit">
      <div class="col-md-8">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-nome"
            v-model="form.descricao"
            placeholder="Serviço"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Servico",
  data() {
    return {
      form: {
        descricao: "",
      },
    };
  },
  methods:{
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.form));
    },
  }
};
</script>

<style>
</style>