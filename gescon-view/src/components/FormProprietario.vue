<template>
  <div>
    <div class="row">
      <div class="col-md-1">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-id"
            v-model="formProprietario.idproprietario"
            placeholder=""
            disabled
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-5">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-nome"
            v-model="formProprietario.nome"
            placeholder="Nome"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-3">
        <b-form-group id="input-group-2">
          <b-form-input
            id="input-telefone"
            v-model="formProprietario.telefone"
            placeholder="Telefone"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-3">
        <b-form-group id="input-group-2">
          <b-form-input
            id="input-cpf"
            v-model="formProprietario.cpf"
            placeholder="CPF"
            required
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    editar: {
      idproprietario: null,
      nome: "",
      telefone: "",
      cpf: "",
    },
    callback: Function,
  },
  mounted() {
    if (this.editar) {
      console.log(this.editar);
      this.formProprietario.idproprietario = this.editar.idproprietario;
      this.formProprietario.nome = this.editar.nome;
      this.formProprietario.telefone = this.editar.telefone;
      this.formProprietario.cpf = this.editar.cpf;
    }
  },
  data() {
    return {
      formProprietario: {
        idproprietario: null,
        nome: "",
        telefone: "",
        cpf: "",
      },
    };
  },
  watch: {
    formProprietario: {
      handler() {
        this.$emit("handler", this.formProprietario);
      },
      deep: true,
    },
  },
};
</script>