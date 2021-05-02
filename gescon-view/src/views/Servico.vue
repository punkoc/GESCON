<template>
  <div>
    <h1>
      Serviços
      <b-icon
        @click="criar()"
        icon="folder-plus"
        class="rounded bg-primary"
        variant="light"
      ></b-icon>
    </h1>

    <div class="table">
      <b-table striped hover :items="servicos" :fields="fields">
        <template v-slot:cell(editar)="modelEdit">
          <b-button @click="editar(modelEdit.item)">Editar</b-button>
        </template>
      </b-table>
    </div>

    <b-modal
      :id="modalData.id"
      size="xl"
      title="Cadastro Serviço"
      @ok="onSubmit"
      @hide="resetarModal()"
      ok-title="Salvar"
    >
      <b-form>
        <form-servico
          v-on:handler="atualizar"
          :editar="modalData.model"
          :callback="modalData.callback"
        ></form-servico>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import FormServico from "../components/FormServico.vue";

export default {
  name: "Servico",
  components: { FormServico },
  mounted() {
    this.$http
      .get("/servico")
      .then((result) => {
        this.servicos = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      form: {
        idservico: null,
        descricao: "",
      },
      servicos: [],
      fields: ["idservico", "descricao", "editar"],
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
        .get("/servico")
        .then((result) => {
          this.servicos = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    criar() {
      this.modalData.callback = (dados) => {
        this.$http
          .post("/servico", dados)
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
          .put("/servico/" + dados.idservico, dados)
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
      this.modalData.callback(this.form);
    },

    atualizar(evento) {
      this.form.idservico = evento.idservico;
      this.form.descricao = evento.descricao;
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