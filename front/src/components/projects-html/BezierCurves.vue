<template>
    <v-layout 
        pt-5 
        row wrap 
        style="background-color: grey;"
        v-on:click="reset()"
    >
        <v-flex class="text-center" xs12>
            <h1> 
                Trabalho faculdade de 
                <span 
                    v-on:click="redirectPage(githubLinks[0])" 
                    v-on:mouseover="isHovered = true" 
                    v-on:mouseleave="isHovered = false"
                    class="clickable"
                >
                    GTSA 
                </span> 
                e
                <span 
                    v-on:click="redirectPage(githubLinks[1])" 
                    v-on:mouseover="isHovered = true" 
                    v-on:mouseleave="isHovered = false"
                    class="clickable"
                >
                     LLM2  
                </span>
            </h1>
            <canvas v-on:click="storePoint()" 
                    id= "canvas" 
                    width= "750"
                    height= "500" 
                    style = "border: 3px solid #000000;"
            />
        </v-flex>
        <v-flex xs12 class="text-center" justify-center>
            <v-layout row wrap justify-center pt-5>
                <v-flex xs4>
                    <h2> Menu </h2>
                    <v-text-field label="Numero Avaliacoes" v-model="interationNumber"/>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12>
            <v-layout raw wrap justify-center class="text-center" px-7>
                <v-flex xs3>
                    <v-btn color="primary" v-on:click="CdoPoint()" id = "criar">
                        Nova Curva!
                    </v-btn>
                </v-flex>
                <v-flex xs3>
                    <v-btn color="primary" v-on:click="DeleteCurve()">
                        Bang!
                    </v-btn>
                </v-flex>
                <v-flex xs3>
                    <v-btn color="primary" v-on:click="nextCurve()">
                        Curva Anterior.
                    </v-btn>
                </v-flex>
                <v-flex xs3>
                    <v-btn color="primary" v-on:click="lastCurve()">
                        Próxima Curva.
                    </v-btn>
                </v-flex>
                <v-flex xs2>
                    <v-checkbox 
                        v-model="checkPoint"
                        label="Pontos de Controle"
                    />
                </v-flex>
                <v-flex xs2>
                    <v-checkbox
                        v-model="poliControl"
                        label="Poligonais de Controle"
                    />
                </v-flex>
                <v-flex xs2>
                    <v-checkbox
                        v-model="curves"
                        label="Curvas"
                    />
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>
  
  <script>
  export default {
    name: "BezierCurves",
    
    data() {
      return {
        githubLinks: [
            'https://github.com/wildclown',
            'https://github.com/lionliu/'
        ],
        canvas: null,
        ctx: null,
        rect: null,
        checkPoint: true,
        poliControl: true,
        matriz: [],
        matrizaux: [],
        doPoint: null,
        aktObj: 0,
        interationNumber: 15,
        dragok: false,
        lastX: null,
        lastY: null,
        actualCurve: null,
        actualPoint: null,
        curves: true
      }
    },
    mounted() {
        this.canvas = document.getElementById("canvas")
        this.canvas.onmousedown = this.myDown;
        this.canvas.onmouseup = this.myUp;
        this.ctx = this.canvas.getContext("2d");
        this.rect = this.canvas.getBoundingClientRect();
        
        if(!this.doPoint){//Como a cada click na tela reseto, caso esteja fazendo os pontos, ele não irá resetar
            this.ctx.fillStyle = "#FFFFFF";
            this.ctx.beginPath();
            this.ctx.fillRect(0,0,750,500);
            this.ctx.stroke();
            this.drawPoliCtrl();
            this.drawPoints()
            this.drawCurve();
            this.ctx.strokeStyle = '#000000';
        }
    },
    methods: {
        redirectPage(link){
            window.open(link, '_blank').focus()
        },
        myMove(e) {
            if (this.dragok) {
                this.matriz[this.actualCurve][this.actualPoint * 2] = e.pageX - this.canvas.offsetLeft;
                this.matriz[this.actualCurve][(this.actualPoint * 2) + 1] = e.pageY - this.canvas.offsetTop;
                this.reset();
            }
        },

        myDown(e) {
            for (var j = 0; j < this.matriz.length; j++) {
                let arraux = this.matriz[j];
                for (var i = 0; ((i * 2) + 1) < arraux.length; i++) {
                    let x = arraux[i * 2];
                    let y = arraux[(i * 2) + 1];
                    
                    if (e.pageX < x + 5 + this.canvas.offsetLeft && e.pageX > x - 5 +
                        this.canvas.offsetLeft && e.pageY < y + 5 + this.canvas.offsetTop &&
                        e.pageY > y - 5 + this.canvas.offsetTop) {
                        this.actualCurve = j
                        this.actualPoint = i;
                        arraux[i * 2] = e.pageX - this.canvas.offsetLeft;
                        arraux[(i * 2) + 1] = e.pageY - this.canvas.offsetTop;
                        this.dragok = true;
                        this.canvas.onmousemove = this.myMove;
                    }
                }
                
            }
        },

        myUp() {
            this.dragok = false;
            this.canvas.onmousemove = null;
        },

        reset(){
            //Pinta o quadro de branco e redesenha todos os itens.
            if(!this.doPoint){//Como a cada click na tela reseto, caso esteja fazendo os pontos, ele não irá resetar
                this.ctx.fillStyle = "#FFFFFF";
                this.ctx.beginPath();
                this.ctx.fillRect(0,0,750,500);
                this.ctx.stroke();
                this.drawPoliCtrl();
                this.drawPoints()
                this.drawCurve();
                this.ctx.strokeStyle = '#000000';
            }
        },

        storePoint(){
            //Armazena o ponto em 1 array e manda desenhar
            if(this.doPoint){
                this.matrizaux.push(event.clientX- this.rect.left);
                this.matrizaux.push(event.clientY- this.rect.top);
                this.drawTHISPoint();
            }
        },

        CdoPoint(){
            if(!this.doPoint){//Modificando botão e controle para 
                document.getElementById("criar").innerHTML = "Aperte aqui quando terminar de colocar os pontos";
                this.doPoint = true;
            }else{//Modifica botão, controle e coloca o vetor de pontos em outro vetor (matriz)
                document.getElementById("criar").innerHTML = "Nova Curva!"; 
                this.doPoint = false;
                if(this.matrizaux.length>0){
                    this.matriz.push(this.matrizaux);
                }
                this.matrizaux = [];
                this.reset();
            }
        },

        DeleteCurve(){
            //Deleta a curva selecionada
            this.matriz.splice(this.aktObj,1);//Retira um elemento do array a partir da posição aktObj
            if(this.aktObj > this.matriz.length-1){
                this.aktObj--;
            }
            if(this.aktObj < 0){
                this.aktObj=0;
            }
            alert("This curve is now dead ;-;'");
            this.reset();
        },

        nextCurve(){//Modifica o contador para saber em qual curva está
            if(this.aktObj > 0){
                this.aktObj--;
                this.reset();
            }
        },

        lastCurve(){
            //Modifica o contador para saber em qual curva está
            if(this.aktObj < this.matriz.length-1){
                this.aktObj++;
                    this.reset();
                }
        },

        drawTHISPoint(){
            //Desenha o ponto ASSIM que é clickado na tela
            if(this.checkPoint){//Verifica se a checkbox está marcada
                let arraux = this.matrizaux;
                for(let i = 0; ((i*2)+1)<arraux.length;i++){
                    this.ctx.beginPath();
                    //Desenha circulos de raios cada vez menores para ser um grande ponto
                    this.ctx.arc(arraux[i*2],arraux[(i*2)+1],5, 0, 2 * Math.PI);
                    this.ctx.fillStyle = '#000000';
                    this.ctx.fill();
                    this.ctx.stroke();
                }
            }
        },

        drawPoints(){
            //Desenha TODOS os pontos da matriz
            //Lógica semelhante a anterior
            if(this.checkPoint){
                for(let j = 0; j< this.matriz.length;j++){
                    let arraux = this.matriz[j];
                    if(this.aktObj == j){//Verifica se o ponto é o que está selecionado na HUD
                        for(let i = 0; ((i*2)+1)<arraux.length;i++){
                            this.ctx.strokeStyle = '#FF0000';
                            this.ctx.beginPath();
                            this.ctx.arc(arraux[i*2],arraux[(i*2)+1],5, 0, 2 * Math.PI);
                            this.ctx.fillStyle = '#FF0000';
                            this.ctx.fill();
                            this.ctx.stroke();
                            
                        }

                    }else{
                        for(let i = 0; ((i*2)+1)<arraux.length;i++){
                            this.ctx.strokeStyle = '#000000';
                            this.ctx.beginPath();
                            this.ctx.arc(arraux[i*2],arraux[(i*2)+1],5, 0, 2 * Math.PI);
                            this.ctx.fillStyle = '#000000';
                            this.ctx.fill();
                            this.ctx.stroke();
                        } 
                    }
                }
            }
        },

        drawPoliCtrl(){
            //Desenha as poligonais de controle
            //Lógica semelhante a de pontos para pintura
            if(this.poliControl){
                for(let j = 0; j < this.matriz.length;j++){
                    let arraux = this.matriz[j];
                    this.ctx.moveTo(arraux[0],arraux[1]);//Se move para o primeiro ponto feito para começar a fazer as ligacoes
                    if(this.aktObj === j){
                        this.ctx.strokeStyle = '#2bff00';
                        this.ctx.beginPath();
                        for(let i = 0; ((i*2)+1)<arraux.length;i++){
                            this.ctx.lineTo(arraux[i*2],arraux[(i*2)+1]);//Liga o ponto atual com o próximo ponto
                            //arraux possui nele mesmo o X e o Y, deixei dessa forma para facilitar o Delete
                            this.ctx.stroke();
                            }
                    }else{
                        this.ctx.strokeStyle = '#000000';
                        this.ctx.beginPath();
                        for(let i = 0; ((i*2)+1)<arraux.length;i++){
                            this.ctx.lineTo(arraux[i*2],arraux[(i*2)+1]);
                            this.ctx.stroke();
                            } 
                    }
                }
            }
        },

        drawCurve(){
            //Desenha as curvas
            //Para saber se vai pintar, segue o mesmo rumo... Checkbox, variavel e pah
            var pointes = [];
            if(this.curves){
                for(let j = 0; j < this.matriz.length; j++){
                    var c = document.getElementById("canvas");
                    var ctx = c.getContext("2d");
                    let arraux = this.matriz[j];
                    ctx.beginPath();
                    ctx.moveTo(arraux[0],arraux[1]);//Move para o primeiro ponto
                    for(let i = 0; i<=1;i+=(1/this.interationNumber)){
                        pointes = this.bezier(i,arraux);//X e Y que vem do bezier
                        if(this.aktObj === j){
                            ctx.strokeStyle = '#0084ff';
                            console.log(pointes);
                            ctx.lineTo(pointes[0],pointes[1]);//Faz uma linha até o ponto encontrado
                            ctx.stroke();
                        }else{
                            ctx.strokeStyle = '#000000';
                            console.log(pointes);
                            ctx.lineTo(pointes[0],pointes[1]);
                            ctx.stroke();
                        }
                    }
                    if(this.aktObj === j){
                        ctx.strokeStyle = '#0084ff';
                        console.log(pointes);
                        ctx.lineTo(arraux[arraux.length-2],arraux[arraux.length-1]);//Faz uma linha até o ponto encontrado
                        ctx.stroke();
                    }else{
                        ctx.strokeStyle = '#000000';
                        console.log(pointes);
                        ctx.lineTo(arraux[arraux.length-2],arraux[arraux.length-1]);//Faz uma linha até o ponto encontrado
                        ctx.stroke();
                    }
                } 
            }
        },

        bezier(t,arr){
            //Recebe o T que varia de 0 a 1 e o array de pontos
            //Como dito anteriormente o array de ponto fica [x0,y0,x1,y1,x2,y2...]
            var n = arr.length/2;
            var aupx = [];
            var retorm = [];
            console.log(arr);
            //Tava dando uns bugs, então passei para os arrays antes
            for(let k = 0; (k*2)<arr.length;k++){
                aupx.push(Math.floor(arr[k*2]));
            }
            var aupy = [];
            for(let k = 0; ((k*2)+1)<arr.length;k++){
                aupy.push(Math.floor(arr[(k*2)+1]));
            }
            console.log(aupx);
            console.log(aupy);
            for(let k = 1;k<=n;k++){
                for(let p =0;p<=(n-k)-1;p++){
                    aupx[p] = (1-t)*aupx[p] + t*aupx[p+1];//Encontra posicoes de X
                    aupy[p] = (1-t)*aupy[p] + t*aupy[p+1];//Encontra posicoes de Y
                }
            }
            retorm.push(aupx[0]);
            retorm.push(aupy[0]);
            return retorm;
        }
    },
  };
  </script>
  <style scoped>
    .clickable{
        cursor: pointer;
    }
  </style>