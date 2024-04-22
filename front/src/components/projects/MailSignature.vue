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
                    <v-btn v-if="photoAdded">
                        <v-icon left>
                            mdi-delete
                        </v-icon>
                        Remover foto
                    </v-btn>
                    <v-btn v-else>
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
        <v-flex xs12 lg5 pa-2 ma-1 class="formArea">
            <v-layout row wrap class="text-center">
                <v-flex 
                    id="outputImg" 
                    xs12
                    style="justify-content: center;"
                    :style="brightStyle"
                    v-html="html85Based"
                />
                <v-flex xs12>
                    <v-btn fab v-on:click="changeBright()">
                        <v-icon>mdi-brightness-6</v-icon>
                    </v-btn>
                </v-flex>
                <v-flex xs12 my-8 mb-8 mx-3>
                    <v-btn
                        block
                        v-on:click="doCopyTable('outputImg')"
                    >
                        Copiar para Outlook
                    </v-btn>
                </v-flex>

                <v-flex xs12 my-8 mx-3> 
                    <v-btn 
                        block
                        v-on:click="doCopyText()"
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
import pepe85 from "@/assets/projectsImg/pepe85.png"
import pepe264 from "@/assets/projectsImg/pepe264.png"


export default {
  name: "MailSignature",

  data() {
    return {
        name: "Batatoncio",
        ocupation: "",
        team: "",
        phoneNumber: "+55 81",
        communicationTool: "+55 11 4002-8922",
        email: "lil.guyextreme@companymail.com.br",
        companyPage: "https://wildclown.github.io/portifolio/",
        pepeGod: pepeGod,
        pepe85: pepe85,
        pepe264: pepe264,
        base64Image85: "",
        base64Image264: "",
        photoAdded: false,
        bright: true,
    };
  },
  mounted() {
    fetch(pepe85)
    .then(res => res.blob())
    .then(async blob => {
        const file = new File([blob], 'pepeGod.png', blob)
        let response = await this.fileToBase64(file)
        this.base64Image85 = `<img src="data:image/png;base64,${response}" style="padding-right: 5px;">`;
    })

    fetch(pepe264)
    .then(res => res.blob())
    .then(async blob => {
        const file = new File([blob], 'pepeGod.png', blob)
        let response = await this.fileToBase64(file)
        this.base64Image264 = `<img src="data:image/png;base64,${response}" style="width: 85px;">`;
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
    html264Based: function() {
        return this.makeHtmlString(this.base64Image264, true)
    },
    html85Based: function() {
        return this.makeHtmlString(this.base64Image85)
    }
  },
  methods: {
    createImage(file) {
        const reader = new FileReader();
        reader.onloadend = () => (console.log(reader.result));
        reader.readAsDataURL(file.target.files[0]);
    },
    makeHtmlString(base64StringImg, isOutlook = false) {
        return (
            "<table id=\"assinaturaMV\" style=\"border: 1px solid black" +
            (isOutlook? ";margin: 0 auto; text-align:center\">" : "\">") +
            "<th style=\"padding-right: 15px;border-right: 2px solid #595959;\">"+
            base64StringImg +
            "</th>"+
            "<th style=\"text-align: left;padding-left: 15px;width: 300px;\">"+
            "<div style=\"font-size:12.0pt;font-family:Bahnschrift;color:black;\">"+
            "<b>" + this.name + "</b>"+
            "</div>"+
            "<div style=\"font-size:11pt;font-family:Bahnschrift;color:black;display: inline-block;font-weight: normal;\">"+
            (this.phoneNumber   == "+55 81" ? "" : "Mobile: " + this.phoneNumber + "<br>") +
            "Corporate: " + this.companyPhone + "<br>" +
            "<a href=\"mailto:"+ this.email + "\" style=\"color:#17365D\">" + this.email + "</a><br>"+
            "<a href=\"" + this.companyPage + "\" style=\"color:#17365D\">" + this.companyPage + "</a><br>" +
            "</div>"+
            "<div style=\"display: inline;\">"+
            "<a href=\"" + this.companyPage + "\" target=\"_blank\"></a><br>" +
            "</div>" +
            "</th>" +
            "</table>"
        )
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
    doCopyText() {
        navigator.clipboard.writeText(this.html264Based)
    },
    doCopyTable(id) {
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
    #outputImg{
        background-color: white;
    }

    .formArea{
        background-color: #313131;
        box-shadow: 3px 3px 2px rgb(54, 54, 54);
    }
    
</style>