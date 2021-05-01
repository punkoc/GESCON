<template>
  <div>
    <h1>Administradora</h1>
    <b-form @submit="onSubmit">
      <form-administradora v-on:GetAdm="atualizaAdm"></form-administradora>
      <form-endereco v-on:GetEnd="atualizaEnd"></form-endereco>
      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import FormEndereco from "../components/FormEndereco.vue";
import FormAdministradora from "../components/FormAdministradora.vue";

export default {
  name: "Administradora",
  components: { FormEndereco, FormAdministradora },
  data() {
    return {
      formAdm: {
        endereco: {
          logradouro: "",
          bairro: "",
          cidade: "",
          numero: 0,
          cep: "",
          uf: null,
        },
        nome: "",
        cnpj: "",
      },
    };
  },
  methods: {
    atualizaAdm(evento) {
      this.formAdm.nome = evento.nome;
      this.formAdm.cnpj = evento.cnpj;
    },
    atualizaEnd(evento) {
      this.formAdm.endereco.logradouro = evento[0];
      this.formAdm.endereco.bairro = evento[1];
      this.formAdm.endereco.cidade = evento[2];
      this.formAdm.endereco.numero = evento[3];
      this.formAdm.endereco.cep = evento[4];
      this.formAdm.endereco.uf = evento[5];
    },
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.formAdm));
    },
  },
};
</script>