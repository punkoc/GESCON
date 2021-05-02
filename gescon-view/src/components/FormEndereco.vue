<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <b-form-group id="input-group-endereco">
          <b-form-input
            id="input-logradouro"
            v-model="formEnd.logradouro"
            placeholder="Logradouro"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-1">
        <b-form-group id="input-group-endereco">
          <b-form-input
            id="input-numero"
            v-model="formEnd.numero"
            type="number"
            placeholder="Numero"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-3">
        <b-form-group id="input-group-endereco">
          <b-form-input
            id="input-cep"
            v-model="formEnd.cep"
            placeholder="CEP"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5">
        <b-form-group id="input-group-endereco">
          <b-form-input
            id="input-bairro"
            v-model="formEnd.bairro"
            placeholder="Bairro"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-5">
        <b-form-group id="input-group-endereco">
          <b-form-input
            id="input-cidade"
            v-model="formEnd.cidade"
            placeholder="Cidade"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="col-md-2">
        <b-form-group id="input-group-endereco">
          <b-form-select
            id="input-uf"
            v-model="formEnd.uf"
            :options="ufs"
          ></b-form-select>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    editar: {
        logradouro: String,
        bairro: String,
        cidade: String,
        numero: String,
        cep: String,
        uf: null,
      },
  },
  data() {
    return {
      formEnd: {
        logradouro: "",
        bairro: "",
        cidade: "",
        numero: null,
        cep: "",
        uf: null,
      },
      ufs: [
        { text: "UF", value: null },
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO",
      ],
    };
  },
  mounted(){
    if(this.editar){
      this.formEnd.logradouro = this.editar.logradouro;
      this.formEnd.bairro = this.editar.bairro;
      this.formEnd.cidade = this.editar.cidade;
      this.formEnd.numero = this.editar.numero;
      this.formEnd.cep = this.editar.cep;
      this.formEnd.uf = this.editar.uf;
    }
  },
  watch: {
    formEnd: {
      handler(){
        this.$emit("handler", 
        [this.formEnd.logradouro, 
        this.formEnd.bairro, 
        this.formEnd.cidade, 
        this.formEnd.numero,
        this.formEnd.cep,
        this.formEnd.uf
        ])
      },
      deep: true
    }
  }
};
</script>