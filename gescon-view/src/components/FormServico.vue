<template>
  <div>
    <div class="row">
      <div class="col-md-2">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-id"
            v-model="form.idservico"
            placeholder=""
            disabled
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-10">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-nome"
            v-model="form.descricao"
            placeholder="Serviço"
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
      idservico: null,
      descricao: "",
    },
    callback: Function,
  },  
  mounted() {
    if (this.editar) {
      this.form.idservico = this.editar.idservico;
      this.form.descricao = this.editar.descricao;
    }
  },
  data() {
    return {
      form: {
        idservico: null,
        descricao: "",
      },
    };
  },
  watch: {
    form: {
      handler() {
        this.$emit("handler", this.form);
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>