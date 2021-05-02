<template>
  <div>
    <div class="row">
      <div class="col-md-1">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-id"
            v-model="formAdm.idadministradora"
            placeholder=""
            disabled
          ></b-form-input>
        </b-form-group>
      </div>
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
      <div class="col-md-3">
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
  props: {
    editar: {
      idadministradora: String,
      nome: String,
      cnpj: String,
    },
    callback: Function
  },
  data() {
    return {
      formAdm: {
        idadministradora: null,
        nome: "",
        cnpj: "",
      },
    };
  },
  mounted(){
    if(this.editar){
      this.formAdm.idadministradora = this.editar.idadministradora;
      this.formAdm.nome = this.editar.nome;
      this.formAdm.cnpj = this.editar.cnpj;
    }
  },
  watch: {
    formAdm: {
      handler() {
        this.$emit("handler", this.formAdm);
      },
      deep: true,
    },
  },
};
</script>