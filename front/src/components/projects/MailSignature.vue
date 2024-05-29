<template>
    <v-layout
        row wrap
        justify-center
        align-center
        class="backgroundGradient"
        px-6
        py-15
    >
        <v-flex xs12 lg5 class="formArea">
            <v-layout row wrap px-3>
                <v-flex xs12 py-3 class="signaturePrimaryText--text text-h6 font-weight-dark">
                    Gerar assinatura
                </v-flex>
                <v-flex xs6 py-6>
                    <v-btn v-show="photoAdded" color="signaturePrimary" class="photoButton" v-on:click="removeImage()">
                        <v-icon left>
                            mdi-delete
                        </v-icon>
                        Remover foto
                    </v-btn>
                    <v-btn
                        v-show="!photoAdded"
                        color="signaturePrimary"
                        class="photoButton"
                        v-on:click="insertImage()"
                    >
                        <v-icon left>
                            mdi-plus
                        </v-icon>
                        Adicionar foto
                    </v-btn>
                    <v-file-input
                        v-model="uploadedImage"
                        ref="fileInput"
                        v-show='false'
                        accept="image/png, image/jpeg, image/bmp"
                        label="File input"
                        @change="processImage()"
                    ></v-file-input>
                </v-flex>
                <v-flex xs12 lg12>
                    <v-text-field
                        light 
                        label="Colaborador" 
                        v-model="name"
                        outlined
                    />
                </v-flex>
                <v-flex xs12 lg6 :class="{ 'pr-2' : this.$vuetify.breakpoint.lgAndUp }">
                    <v-text-field
                        light 
                        label="Ocupação" 
                        v-model="ocupation"
                        outlined
                    />
                </v-flex>
                <v-flex xs12 lg6 :class="{ 'pl-2' : this.$vuetify.breakpoint.lgAndUp }">
                    <v-text-field
                        light 
                        label="Time"
                        v-model="team"
                        outlined
                    />
                </v-flex>
                <v-flex xs12 lg6 :class="{ 'pr-2' : this.$vuetify.breakpoint.lgAndUp }">
                    <v-text-field
                        light 
                        label="Celular"
                        v-model="phoneNumber"
                        placeholder="XX XXXXX-XXXX"
                        outlined
                    />
                </v-flex>
                <v-flex xs12 lg6 :class="{ 'pl-2' : this.$vuetify.breakpoint.lgAndUp }">
                    <v-text-field
                        light 
                        label="Teams" 
                        v-model="communicationTool"
                        outlined
                    />
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex 
            xs12 
            lg3 
            py-16 
            mt-2 
            class="formArea"
            :class="{ 
                'ml-4' : this.$vuetify.breakpoint.lgAndUp,
                'mt-2' : !this.$vuetify.breakpoint.lgAndUp
            }"
        >
            <v-layout row wrap align-center justify-center>
                <v-flex 
                    id="outputImg"
                    ref="outputImg"
                    xs12
                    pa-3
                    :style="brightStyle"
                >
                    <table id="tableTag" :style="centerTableStyle">
                        <tr>
                            <th style="background-color: black; border-radius: 50%; display: inline-flex">
                                <img
                                    v-show="photoAdded"
                                    :src="base64InputedPhoto"
                                />
                                <img
                                    v-show="!photoAdded"
                                    :src="base64BasePhoto"
                                />
                            </th>
                            <th>
                                <img :src="base64Src">
                            </th>
                        </tr>
                        <tr style="color: #0D517F; font-size: 24px; font-wieght: bold;">
                            <td colspan="2">
                                {{name}}
                            </td>
                        </tr>
                        <tr style="color: #0D517F; font-size: 16px; font-wieght: bold; text-align: left;">
                            <td style="padding-right: 6px"> 
                                {{ocupation}} 
                            </td>
                            <td style="padding-left: 6px;"> 
                                {{team}} 
                            </td>
                        </tr>
                        <tr style="color: #4E4E4E; font-size: 14px; font-wieght: regular; text-align: left;">
                            <td style="padding-right: 6px">
                                {{phoneNumber}}
                            </td>
                            <td style="padding-left: 6px;">
                                {{communicationTool}}
                            </td>
                        </tr>
                    </table>
                </v-flex>
                <v-flex xs12 text-center>
                    <v-layout row wrap align-center justify-center>
                        <v-flex xs12 lg2 py-3>
                            <v-btn fab v-on:click="changeBright()" color="signaturePrimary" class="photoButton" small>
                                <v-icon>mdi-brightness-6</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex xs10 lg8>
                            <v-btn
                                block
                                v-on:click="doCopyForOutlook('outputImg', 'tableTag')"
                                color="signaturePrimary"
                                class="photoButton"
                            >   
                                <v-icon>mdi-content-copy</v-icon>
                                Copiar para Outlook
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs12 v-if="false">
                    <v-btn 
                        block
                        v-on:click="doCopyForThunderBird('outputImg')"
                        color="signaturePrimary"
                        class="photoButton"
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
import companySignature from "@/assets/projectsImg/mailSignature/signature.png"
import pepeImage from "@/assets/projectsImg/pepe85.png"

export default {
  name: "MailSignature",

  data() {
    return {
        name: "Batatoncio",
        ocupation: "Autonomous",
        team: "Standalone",
        phoneNumber: "+1 67 899-8212",
        communicationTool: "+55 11 4002-8922",
        pepeGod: pepeGod,
        companyBanner: companySignature,
        pepeImage: pepeImage,
        uploadedImage: null,
        base64Src: "",
        base64BasePhoto: "",
        base64InputedPhoto: "",
        bright: true,
        centerTableStyle: "margin-left: auto; margin-right: auto;"
    };
  },
  mounted() {
    fetch(pepeImage)
    .then(res => res.blob())
    .then(async blob => {
        const file = new File([blob], 'pepeImage.png', blob)
        let response = await this.fileToBase64(file)
        this.base64BasePhoto = `data:image/png;base64,${response}`
        this.resizeImage(this.base64BasePhoto, 96, 96).then((result) => {
            this.base64BasePhoto = result;
        });
    })

    fetch(companySignature)
    .then(res => res.blob())
    .then(async blob => {
        const file = new File([blob], 'companySignature.png', blob)
        let response = await this.fileToBase64(file)
        this.base64Src = `data:image/png;base64,${response}`
        this.resizeImage(this.base64Src, 130, 50).then((result) => {
            this.base64Src = result;
        });
    })
  },
  computed: {
    photoAdded: function() {
        return this.uploadedImage != null;
    },

    brightStyle: function() {
        if(this.bright) {
            return 'background-color: #FFF;'
        }else {
            return 'background-color: #222;'
        }
    },
  },
  methods: {
    async processImage() {
        if(this.uploadedImage != null){
            let response = await this.fileToBase64(this.uploadedImage)
            this.base64InputedPhoto = `data:image/png;base64,${response}`
            this.resizeImage(this.base64InputedPhoto, 96, 96).then((result) => {
                this.base64InputedPhoto = result;
            });
        }
    },
    insertImage() {
        this.$refs.fileInput.$refs.input.click()
    },
    removeImage() {
        this.uploadedImage = null;
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

    doCopyForOutlook(id, tableId) {
        let table = document.getElementById(tableId)
        table.style = ""
        let sel, range;
        let el = document.getElementById(id); //get element id
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
        setTimeout(() => { 
            document.execCommand('copy');
            table.style = this.centerTableStyle;
        }, 30);
    },
    resizeImage(base64Str, maxWidth = 400, maxHeight = 400) {
        return new Promise((resolve) => {
            let img = new Image()
            img.src = base64Str
            img.onload = () => {
            let canvas = document.createElement('canvas')
            const MAX_WIDTH = maxWidth
            const MAX_HEIGHT = maxHeight
            let width = img.width
            let height = img.height

            if (width > height) {
                if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width
                width = MAX_WIDTH
                }
            } else {
                if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height
                height = MAX_HEIGHT
                }
            }
            canvas.width = width
            canvas.height = height
            let ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0, width, height)
            resolve(canvas.toDataURL())
            }
        })
    }
  }
};
</script>
<style scoped>
    .formArea{
        background-color: #FFF;
        border-radius: 25px;
    }

    .photoButton{
        border-radius: 25px;
    }

    .backgroundGradient{
        background: rgb(32,19,242);
        background: linear-gradient(90deg, rgba(32,19,242,1) 0%, rgba(193,193,212,1) 0%, rgba(169,169,207,1) 9%, rgba(11,11,102,1) 37%, rgba(2,23,45,1) 77%, rgba(0,0,0,1) 100%);
    }
    
</style>