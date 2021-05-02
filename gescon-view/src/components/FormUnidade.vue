<template>
  <div>
    <div class="row">
      <div class="col-md-1">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-id"
            v-model="formUnidade.idunidade"
            placeholder=""
            disabled
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-3">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-numero"
            v-model="formUnidade.numero"
            type="number"
            placeholder="Numero"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-4">
        <b-form-group id="input-group-1">
          <b-form-select id="input-cond" v-model="formUnidade.idcondominio">
            <option
              v-for="modelSelected in condominios"
              :key="modelSelected.idcondominio"
              :value="modelSelected.idcondominio"
            >
              {{ modelSelected.nome }}
            </option>
          </b-form-select>
        </b-form-group>
      </div>
      <div class="col-md-4">
        <b-form-group id="input-group-1">
          <b-form-select id="input-prop" v-model="formUnidade.idproprietario">
            <option
              v-for="modelSelected in proprietarios"
              :key="modelSelected.idpropritario"
              :value="modelSelected.idpropritario"
            >
              {{ modelSelected.nome }}
            </option>
          </b-form-select>
        </b-form-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    editar: {
      idunidade: null,
      numero: null,
      idproprietario: null,
      idcondominio: null,
      proprietario: {
        idproprietario: null,
        nome: "",
        cpf: "",
        telefone: "",
      },
      condominio: {
        idcondominio: null,
        nome: "",
        telefone: "",
      },
    },
    callback: Function,
  },
  mounted() {
    if (this.editar) {
      this.formUnidade.idunidade = this.editar.idunidade;
      this.formUnidade.numero = this.editar.numero;
      this.formUnidade.idcondominio = this.editar.condominio.idcondominio;
      this.formUnidade.idproprietario = this.editar.proprietario.idproprietario;
    }
    this.$http
      .get("/proprietario")
      .then((result) => {
        this.proprietarios = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
    this.$http
      .get("/condominio")
      .then((result) => {
        this.condominios = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      formUnidade: {
        idunidade: null,
        numero: null,
        proprietario: {
          idproprietario: null,
          nome: "",
          cpf: "",
          telefone: "",
        },
        condominio: {
          idcondominio: null,
          nome: "",
          telefone: "",
        },
      },
      proprietarios: [],
      condominios: [],
    };
  },
  watch: {
    formUnidade: {
      handler() {
        this.$emit("handler", this.formUnidade);
      },
      deep: true,
    },
  },
};
</script>