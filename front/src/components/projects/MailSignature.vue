<template>
    <v-layout
        row wrap
        justify-center
        align-center
        :style="{ 
            backgroundImage: 'url('+pepeGod+')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
        }"
        class="oldBody"
        pa-15
    >
        <v-flex xs11 lg5 pa-2 ma-1 class="formArea">
            <v-layout row wrap px-3>
                <v-flex xs12 pt-3>
                    Gerar assinatura
                </v-flex>
                <v-flex xs6 py-6>
                    <v-btn v-show="photoAdded">
                        <v-icon left>
                            mdi-delete
                        </v-icon>
                        Remover foto
                    </v-btn>
                    <v-btn v-show="!photoAdded">
                        <v-icon left>
                            mdi-plus
                        </v-icon>
                        Adicionar foto
                    </v-btn>
                </v-flex>
                <v-flex xs12 lg12>
                    <v-text-field 
                        label="Colaborador" 
                        v-model="name"
                        outlined
                    />
                </v-flex>
                <v-flex xs12 lg6 :class="{ 'pr-2' : this.$vuetify.breakpoint.lgAndUp }">
                    <v-text-field 
                        label="Ocupação" 
                        v-model="ocupation"
                        outlined
                    />
                </v-flex>
                <v-flex xs12 lg6 :class="{ 'pl-2' : this.$vuetify.breakpoint.lgAndUp }">
                    <v-text-field 
                        label="Time"
                        v-model="team"
                        outlined
                    />
                </v-flex>
                <v-flex xs12 lg6 :class="{ 'pr-2' : this.$vuetify.breakpoint.lgAndUp }">
                    <v-text-field 
                        label="Celular"
                        v-model="phoneNumber"
                        placeholder="XX XXXXX-XXXX"
                        outlined
                    />
                </v-flex>
                <v-flex xs12 lg6 :class="{ 'pl-2' : this.$vuetify.breakpoint.lgAndUp }">
                    <v-text-field 
                        label="Teams" 
                        v-model="communicationTool"
                        outlined
                    />
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12 lg5 pa-2 class="formArea">
            <v-layout row wrap class="text-center" align-center>
                <v-flex 
                    id="outputImg"
                    ref="outputImg"
                    xs11
                    pa-3
                    :style="brightStyle"
                >
                    <table>
                        <tr>
                            <th>
                                <img :src="base64Photo" style="width: 100px; background-color: black; border-radius: 50%">
                            </th>
                            <th>
                                <img :src="base64Src" style="width: 100px;">
                            </th>
                        </tr>
                        <tr>
                            <td colspan="2">{{name}}</td>
                        </tr>
                        <tr>
                            <td> {{ocupation}} </td>
                            <td> {{team}} </td>
                        </tr>
                        <tr>
                            <td>{{phoneNumber}}</td>
                            <td>{{communicationTool}}</td>
                        </tr>
                    </table>
                </v-flex>
                <v-flex xs1>
                    <v-btn fab v-on:click="changeBright()">
                        <v-icon>mdi-brightness-6</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex xs12 my-8 mb-8 mx-3>
                    <v-btn
                        block
                        v-on:click="doCopyForOutlook('outputImg')"
                    >
                        Copiar para Outlook
                    </v-btn>
                </v-flex>

                <v-flex xs12 my-8 mx-3> 
                    <v-btn 
                        block
                        v-on:click="doCopyForThunderBird('outputImg')"
                    >
                        Copiar para ThunderBird
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import pepeGod from "@/assets/projectsImg/pepe-god.jpg"
import wildclown from "@/assets/projectsImg/WildClown.png"
import pepePhoto from "@/assets/projectsImg/pepe85.png"


export default {
  name: "MailSignature",

  data() {
    return {
        name: "Batatoncio",
        ocupation: "",
        team: "",
        phoneNumber: "+55 81",
        communicationTool: "+55 11 4002-8922",
        pepeGod: pepeGod,
        companyBanner: wildclown,
        pepePhoto: pepePhoto,
        base64Src: "",
        base64Photo: "",
        photoAdded: false,
        bright: true,
    };
  },
  mounted() {
    fetch(wildclown)
    .then(res => res.blob())
    .then(async blob => {
        const file = new File([blob], 'wildclown.png', blob)
        let response = await this.fileToBase64(file)
        this.base64Src = `data:image/png;base64,${response}`
    })

    fetch(pepePhoto)
    .then(res => res.blob())
    .then(async blob => {
        const file = new File([blob], 'pepePhoto.png', blob)
        let response = await this.fileToBase64(file)
        this.base64Photo = `data:image/png;base64,${response}`
    })
  },
  computed: {
    brightStyle: function() {
        if(this.bright) {
            return 'background-color: #FFF;'
        }else {
            return 'background-color: #222;'
        }
    },
  },
  methods: {
    createImage(file) {
        const reader = new FileReader();
        reader.onloadend = () => (console.log(reader.result));
        reader.readAsDataURL(file.target.files[0]);
    },
    fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                const base64String = reader.result.split(',')[1];
                resolve(base64String);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    },
    changeBright(){
        this.bright = !this.bright
    },
    doCopyForThunderBird(id) {
        let element = document.getElementById(id).innerHTML
        navigator.clipboard.writeText(element)
    },
    doCopyForOutlook(id) {
        var sel, range;
        var el = document.getElementById(id); //get element id
        if (window.getSelection && document.createRange) { //Browser compatibility
        sel = window.getSelection();
        if(sel.toString() == ''){ //no text selection
            window.setTimeout(function(){
                range = document.createRange(); //range object
                range.selectNodeContents(el); //sets Range
                sel.removeAllRanges(); //remove all ranges from selection
                sel.addRange(range);//add Range to a Selection.
            },1);
        }
        }else if (document.selection) { //older ie
            sel = document.selection.createRange();
            if(sel.text == ''){ //no text selection
                range = document.body.createTextRange();//Creates TextRange object
                range.moveToElementText(el);//sets Range
                range.select(); //make selection.
            }
        }
        setTimeout(() => { document.execCommand('copy'); }, 500);
    }
  }
};
</script>
<style scoped>
    .formArea{
        background-color: #313131;
        box-shadow: 3px 3px 2px rgb(54, 54, 54);
    }
    
</style>