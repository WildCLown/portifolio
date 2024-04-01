<template>
    <v-layout
        row wrap
        justify-center
        :style="{ backgroundImage: 'url('+pepeGod+')' }"
        class="oldBody"
        >
        <v-flex xs5 pa-2 ma-1 class="formArea">
            <v-layout row wrap>
                <v-flex xs6 mx-3>
                    <v-text-field label="Nome" v-model="name"/>
                    <v-text-field label="Celular" v-model="phoneNumber" placeholder="XX XXXXX-XXXX"/>
                    <v-text-field label="Número Empresa" v-model="companyName"/>
                    <v-text-field label="Email" v-model="email"/>
                    <v-text-field label="Skype" v-model="communicationChannel"/>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs5 pa-2 ma-1 class="formArea">
            <v-layout row wrap class="text-center">
                <v-flex xs12>
                    <div id="outputImg"/>
                    <v-btn>
                        Copiar para Outlook
                    </v-btn>
                </v-flex>
                <v-flex xs12>
                    <v-textarea label="ThunderBird email html" color="white"/>
                    <v-btn>
                        Copiar para ThunderBird
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import pepeGod from "@/assets/projectsImg/pepe-god.jpg"


export default {
  name: "MailSignature",

  data() {
    return {
        name: "",
        phoneNumber: "+55 81",
        companyName: "+55 11 4002-8922",
        email: "@companymail.com.br",
        communicationChannel: "Yep, we used it",
        outOfficeAdvise: false,
        holidayAdvise: false,
        vacationAdvise: false,
        pepeGod: pepeGod
    };
  },
};
</script>
<style scoped>
    .inputArea{
        font-family: "Bahnschrift"; 
    }

    .oldBody{
        font-family: 'Bahnschrift';
    }

    #capsule{
        margin-top: 10%;
        width: 100%;
        display: inline-flex;
        justify-content: center;

    }
    .holidayInput{
        display: none;
    }
    .holidayContent{
        display: none;
    }
    #listEraseButt{
        display : table-cell;
    }
    .eraseButt{
        width: 100%;
        color: white;
        background-color: #C01E24;
        font-family: "Bahnschrift";
        display: block;
    }
    button.holidayContent{
        display: none;
        width: 100%;
        font-family: "Bahnschrift";
        cursor: pointer;
        background-color: #009945;
        color: white;
    }
    .vacationInput{
        display: none;
    }
    .officeInput{
        display: none;
    }
    #genSignButt{
        font-family: "Bahnschrift";
    }
    #htmlText{
        width: 300px;
        height: 100px;
    }
    #outputImg{
        background-color: white;
    }
    .formArea{
        background-color: #313131;
        justify-content: center;
        width: 400px;
        box-shadow: 3px 3px 2px rgb(54, 54, 54);
        padding-bottom: 0.1px;
    }
    #formResult{
        margin-left: 20px;
        background-color: #C8C8C8;
        justify-content: center;
        width: 400px;
        padding-bottom: 0.1px;
        padding-top: 20px;
        box-shadow: 3px 3px 2px rgb(54, 54, 54);
    }

    .buttCopy{
        display: block;
        margin: auto;
        margin-bottom: 20px;
        margin-top: 20px;
        width: 200px;
        font-family: "Bahnschrift";
        cursor: pointer;
        background-color: #009945;
        color: white;
    }
    .buttCopy:hover{
        background-color: #007a37;
        color: white;
    }
    #htmlText{
        margin: auto;
        display: block;
    }
    #formTable{
        margin: auto;
        padding-top: 10px;
    }
    th{
        text-align: left;
    }

    input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>