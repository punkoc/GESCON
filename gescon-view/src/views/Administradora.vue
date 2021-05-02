<template>
  <div>
    <h1>
      Administradora
      <b-icon
        @click="criar()"
        icon="folder-plus"
        class="rounded bg-primary"
        variant="light"
      ></b-icon>
    </h1>

    <div class="table">
      <b-table striped hover :items="administradoras" :fields="fields">
        <template v-slot:cell(editar)="modelEdit">
          <b-button @click="editar(modelEdit.item)">Editar</b-button>
        </template>
      </b-table>
    </div>

    <b-modal
      :id="modalData.id"
      size="xl"
      title="Cadastro Administradoras"
      @ok="onSubmit"
      @hide="resetarModal()"
      ok-title="Salvar"
    >
      <b-form>
        <form-administradora
          v-on:handler="atualizar"
          :editar="modalData.model"
          :callback="modalData.callback"
        ></form-administradora>
        <form-endereco
          v-on:handler="atualizarEnd"
          :editar="modalData.endereco"
        ></form-endereco>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import FormEndereco from "../components/FormEndereco.vue";
import FormAdministradora from "../components/FormAdministradora.vue";

export default {
  name: "Administradora",
  components: { FormEndereco, FormAdministradora },
  mounted() {
    this.$http
      .get("/administradora")
      .then((result) => {
        this.administradoras = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      formAdm: {
        idadministradora: 0,
        nome: "",
        cnpj: "",
        endereco: {
          logradouro: "",
          bairro: "",
          cidade: "",
          numero: 0,
          cep: "",
          uf: null,
        },
      },
      administradoras: [],
      fields: ["idadministradora", "nome", "cnpj", "editar"],
      modalData: {
        id: "modalEdit",
        model: null,
        endereco: null,
        callback: "",
      },
    };
  },
  methods: {
    carregarDados() {
      this.$http
        .get("/administradora")
        .then((result) => {
          this.administradoras = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    criar() {
      this.modalData.callback = (dados) => {
        this.$http
          .post("/administradora", dados)
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
      this.modalData.endereco = modelEdit.endereco;

      this.modalData.callback = (dados) => {
        this.$http
          .put("/administradora/" + dados.idadministradora, dados)
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
      this.modalData.endereco = null;
    },

    onSubmit() {
      this.modalData.callback(this.formAdm);
    },

    atualizar(evento) {
      this.formAdm.idadministradora = evento.idadministradora;
      this.formAdm.nome = evento.nome;
      this.formAdm.cnpj = evento.cnpj;
    },

    atualizarEnd(evento) {
      this.formAdm.endereco.logradouro = evento[0];
      this.formAdm.endereco.bairro = evento[1];
      this.formAdm.endereco.cidade = evento[2];
      this.formAdm.endereco.numero = evento[3];
      this.formAdm.endereco.cep = evento[4];
      this.formAdm.endereco.uf = evento[5];
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