<template>
  <div>
    <h1>Condomínios</h1>
    <b-form @submit="onSubmit">
      <form-condominio v-on:handlerCondominio="atualizaCondominio"></form-condominio>
      <form-endereco v-on:GetEnd="atualizaEnd"></form-endereco>
      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import FormCondominio from "../components/FormCondominio.vue";
import FormEndereco from "../components/FormEndereco.vue";

export default {
  name: "Condominio",
  components: { FormCondominio, FormEndereco },
  data() {
    return {
      formCondominio: {
        endereco: {
          logradouro: "",
          bairro: "",
          cidade: "",
          numero: 0,
          cep: "",
          uf: null,
        },
        nome: "",
        telefone: "",
      },
    };
  },
  methods: {
    atualizaCondominio(evento) {
      this.formCondominio.nome = evento.nome;
      this.formCondominio.telefone = evento.telefone;
    },
    atualizaEnd(evento) {
      this.formCondominio.endereco.logradouro = evento[0];
      this.formCondominio.endereco.bairro = evento[1];
      this.formCondominio.endereco.cidade = evento[2];
      this.formCondominio.endereco.numero = evento[3];
      this.formCondominio.endereco.cep = evento[4];
      this.formCondominio.endereco.uf = evento[5];
    },
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.formCondominio));
    },
  },
};
</script>