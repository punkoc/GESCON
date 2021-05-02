<template>
  <div>
    <h1>
      Unidades
      <b-icon
        @click="criar()"
        icon="folder-plus"
        class="rounded bg-primary"
        variant="light"
      ></b-icon>
    </h1>

    <div class="table">
      <b-table striped hover :items="unidades" :fields="fields">
        <template v-slot:cell(editar)="modelEdit">
          <b-button @click="editar(modelEdit.item)">Editar</b-button>
        </template>
      </b-table>
    </div>

    <b-modal
      :id="modalData.id"
      size="xl"
      title="Cadastro Unidade"
      @ok="onSubmit"
      @hide="resetarModal()"
      ok-title="Salvar"
    >
      <b-form>
        <form-unidade
          v-on:handler="atualizar"
          :editar="modalData.model"
          :callback="modalData.callback"
        ></form-unidade>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import FormUnidade from "../components/FormUnidade.vue";

export default {
  components: { FormUnidade },
  name: "Unidade",
  mounted() {
    this.$http
      .get("/unidade")
      .then((result) => {
        this.unidades = result.data;
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
      unidades: [],
      fields: [
        "idunidade",
        "numero",
        "proprietario.nome",
        "condominio.nome",
        "editar",
      ],
      modalData: {
        id: "modalEdit",
        model: null,
        callback: "",
      },
    };
  },
  methods: {
    carregarDados() {
      this.$http
        .get("/unidade")
        .then((result) => {
          this.unidades = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    criar() {
      this.modalData.callback = (dados) => {
        this.$http
          .post("/unidade", dados)
          .then(() => {
            this.carregarDados();
          })
          .catch((error) => {
            console.log(error);
          });
      };
      this.$root.$emit("bv::show::modal", this.modalData.id);
    },

    editar(modelEdit) {
      this.modalData.model = modelEdit;
      this.modalData.callback = (dados) => {
        this.$http
          .put("/unidade/" + dados.idunidade, dados)
          .then(() => {
            this.carregarDados();
          })
          .catch((error) => {
            console.log(error);
          });
      };
      this.$root.$emit("bv::show::modal", this.modalData.id);
    },

    resetarModal() {
      this.modalData.model = null;
    },

    onSubmit() {
      this.modalData.callback(this.formUnidade);
    },
    atualizar(evento) {
      this.formUnidade.idunidade = evento.idunidade;
      this.formUnidade.numero = evento.numero;
      this.formUnidade.idproprietario = evento.idproprietario;
      this.formUnidade.idcondominio = evento.idcondominio;
    },
  },
};
</script>

<style>
div.row {
  margin: 5px;
}
div.table {
  margin: 30px;
}
</style>