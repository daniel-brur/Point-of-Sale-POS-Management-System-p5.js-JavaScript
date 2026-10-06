let ColorMesa = 100
let carpetas = [];let productos = [];let ordenes = [];let botones = [];let comandas = [];let herramientas = [];let tablitas = [];
//let cuadrosDeTexto = [];
let productosBusq = [];let infos = [];let buscadores=[];let inputTab=[];
let inputBox1,inputBox2,inputBox3
let inputBoton1,inputBoton2,inputBoton3
let usuario="Daniel";

let palabraIngresada = "";
let cuadBusq;
let size1 = 1495;
let size2 = 3000;
let naveImagenString =""
let tam
let ind=0; let o=0; let c=0;//'índice, órden y comanda'
let status = "Inicio";
let status2="Tabla";
let preguntaVenta=false
let preguntaCambio=false
let preguntaAportacion=false
let preguntaTablita=false
let preguntaCorte=false
let ship
let Nreg="Daniel";let VTreg="$";VEreg="$";let Greg="$";let Areg="$";let Creg="0";let Preg=[];let S1reg="$";let S2reg="$";let PRreg=0;
let hoy;
let x,y
let cuadro;
let offset
let moviendo=false
let cuantos;
let titulo,prim,seg,ter,ch
let boc=[]
let tip
let or=0
let saldoActual=0
let preguntaGasto=false
let saldoInicial=0
let ve2
let inputBox4
let buscando=false
let inputBox5=[9]
let inputBotonAll=[]
let regTipo=0
let personas=[]
let inputBoxUlt=[];let standBy=false;let men
let inputBot=[]
let inputBoxYa=[]
let SB=false
let standBy4=false
let standBy5=false
let co

class persona {
constructor(nombre){
  let start = new Date();
  this.nombre=nombre
  this.dia = (`${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()}`);
  this.llegada=(`${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`);
  this.salida=null
  this.reporte=""
  this.queja=""
  this.nota=""
  }
}

function setup() {
  createCanvas(size1, size2);
  ColorMesa = color(0,61,121);
  tam = size1 / 4.2;
////console.log(tam)
  // Crea carpetas con diferentes colores
  carpetas.push(new Carpeta(tam, 0, color(213, 159, 15), 'Escritorio'));
  carpetas.push(new Carpeta(tam * 1 / 4 + tam+20, 0, color(120, 200, 0), 'Comandas'));
  carpetas.push(new Carpeta(tam * 2 / 4 + tam+40, 0, color(0, 175, 150), 'Registro'));
  carpetas.push(new Carpeta(tam * 3 / 4 + tam+60, 0, color(200, 50, 25), 'Otros'));
  // Crea productos desde el archivo de productos
    let palabs
    for (let i = 0;i<pro.length;i++){
      palabs=pro[i].split(' ');
      for (let j=0;j<palabs.length;j++){
        if (palabs[j]=="" || palabs[j]=="  " || palabs[j]=="   " ){
          palabs.splice(j,1);
          j--;
        }
      }
      if (palabs.length>2){
        let pal = "";
        for (let k = 1;k<palabs.length-1;k++){
          pal=pal+palabs[k]+" "
        }
        productos.push(new Producto(palabs[0], pal, parseFloat(palabs[palabs.length-1]), i));//console.log(palabs[palabs.length-1])
      }
      else {
        productos.push(new Producto(palabs[0], palabs[1], parseFloat(palabs[1]-1), i));
      }
    }
let xst=tam+380
  // Crea los botones para el usuario
  botones.push(new boton('OK',   xst,150+70*0, 70,60,carpetas[1].col));
  botones.push(new boton('x',    xst,150+70*1, 70,60,carpetas[3].col));
  botones.push(new boton('-',    xst,150+70*2, 70,60,color(225, 225, 15)));
  botones.push(new boton('+',    xst,150+70*3, 70,60,color(150, 100, 215)));
  botones.push(new boton('RH',   xst,150+70*4, 70,60,carpetas[2].col));
  botones.push(new boton('=',    xst,150+70*5, 70,60,color(200, 200, 200)));
  botones.push(new boton('moto', xst,150+70*-1+15, 50,30,color(200, 200, 200)));
  botones.push(new boton('total',xst,150+70*-1.5+15, 50,30,color(200, 200, 200)));
  
  // Crea los cuadros de búsqueda para el usuario
  //cuadrosDeTexto.push(new cuadroDeTexto());
  //crea la tablita
  for (let i=0;i<2;i++){
        for (let j=0;j<11;j++){
          tablitas.push(new tablita(i,j));
        }
  }
  //crea la info del usuario
  for (let i=0;i<2;i++){
        for (let j=0;j<10;j++){
          infos.push(new info(i,j));
        }
  }

  for (let i = 0; i < carpetas.length; i++) {
    carpetas[i].mostrar();
  }
  for (let i = 0; i < carpetas.length; i++) {
    carpetas[i].mostrar();
  }
  for (let i = 0; i < 10; i++) {
    inputTab.push(createInput());
    inputTab[i].style('text-align', 'center');
  }
  
  // Muestra la tabla de productos
  mostrarTablaProductos(); 
  cuadro={x:500,y:185,a:290,l:30}
  inputBox4 = createInput();
  for (let i = 0; i < inputBox5.length; i++){
      inputBox5[i]=createInput()
      inputBox5[i].style('text-align', 'center');
    }
  let vv=["Entrada","Salida","Info","Horarios","Aceptar","Cancelar"]
  for (let i = 0; i < 6; i++){
      inputBotonAll.push(createButton(vv[i]));
    }
  inputBoxUlt[0] = createInput();
  inputBoxUlt[1] = createInput();
  inputBot[0]=createButton("");
  inputBot[1]=createButton("");
  inputBoxYa[0]=createInput()
    inputBoxYa[1]=createInput()
  inputBoxYa[2]=createButton('Aceptar');
  //console.log(cuadro.x)//,cuadro.y,cuadro.a,cuadro.l)//rect chico
}

function recursosHumanos(boton){
  
  regTipo=boton
  //console.log(regTipo)
  
}

function aceptarNuevo(boton,tipo){
  let kaka=""
  if (boton==0&&tipo=="Entrada"||status=="Inicio"){
    if(tipo=="Entrada"){kaka=inputBoxUlt[0].value()}
    if(status=="Inicio"){kaka=inputBoxYa[0].value()}
    personas.push(new persona(kaka))
    standBy=false
    regTipo=1
    registro=0
    inputBoxUlt[0].remove()
    inputBoxUlt[1].remove()
    inputBot[0].remove()
    inputBot[1].remove()
  }
  if(boton==3){
    if(inputBoxYa[4].value()==""||inputBoxYa[4].value()<0||isNaN(inputBoxYa[4].value())){return}    
       
     saldoInicial=inputBoxYa[4].value()
    status=carpetas[0].nombre
    ColorMesa=carpetas[0].col
    inputBoxYa[4].remove()
    inputBoxYa[5].remove()
    for(let kk =0;kk<10;kk++){
     inputBoxYa[6+kk].remove();
    }
    SB=false
    standBy=false
    status3=false
    standBy2=false
    
  }
  if (status=="Inicio"){
    //status=carpetas[0].nombre
    //ColorMesa=carpetas[0].col
    status="Inicio2"
    ColorMesa=color(0,61,121)
    inputBoxYa[4]=createInput()
    inputBoxYa[4].size(100,20)
    inputBoxYa[4].position(width/2,200)
    inputBoxYa[4].style('text-align', 'center');
    inputBoxYa[5]=createButton("Aceptar")
    inputBoxYa[5].size(75,20)
    inputBoxYa[5].position(width/2+(25/1.5),240)
    inputBoxYa[5].mousePressed(() => aceptarNuevo(3,""));
    for(let ii=0;ii<10;ii++){
      inputBoxYa[6+ii]=createInput()
      inputBoxYa[6+ii].position(width/2+250,100+35*ii)
      inputBoxYa[6+ii].size(25,20)
      inputBoxYa[6+ii].style('font-size', '15px');
      inputBoxYa[6+ii].style('text-align', 'center');
    }
    SB=true
    
    
    usuario=inputBoxYa[0].value()
  }
  if (boton==0&&tipo=="Salida"){
    let start = new Date();
    for(let kk=0;kk<personas.length;kk++){
      if (personas[kk].nombre==inputBoxUlt[0].value()){
            personas[kk].salida = (`${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`)
          }
      }
    standBy=false
    regTipo=1
    registro=0
    inputBoxUlt[0].remove()
    inputBoxUlt[1].remove()
    inputBot[0].remove()
    inputBot[1].remove()

  if (boton==1){}
  }  
}

let status3=false
let standBy2=false
let quien
let cierre=[0,0,0,0]

function dialogos(){
  
  //agradecimiento final
  
  if (ssttaattuuss){
    ColorMesa=color(0,61,121)
    fill(color(213,159,15))
    stroke(0)
    textAlign(CENTER,CENTER)
    textFont('Times', 70);
    text("GRACIAS",tam+(width-tam)/2,130)
    textFont('cursive', 40);
    text("Pancheese Pizza",tam+(width-tam)/2,185)
    // textFont('Verdana', 20);
    // text("Usuario:",tam+(width-tam)/2,280)
    // text("Contraseña:",tam+(width-tam)/2,360)
  }
  
  
  //hacer brillar los productos y lista del buscador
  mostrarTablaProductos()
  if(status!="Inicio"&&status!="Inicio2"){
  for (let i = 0; i < productos.length; i++) {
    if (
      mouseX > productos[i].x &&
      mouseX < productos[i].x + productos[i].ancho &&
      mouseY > productos[i].y-productos[i].alto &&
      mouseY < productos[i].y 
    ){
      noFill()
      stroke(150,10,25)
      rect(productos[i].x,productos[i].y,productos[i].ancho,-productos[i].alto)
    }else{}
  }
  }
  
  //sección para permitir o no el cierre
  //en base a las comandas activas
  cierre=[0,0,0,0]
  for(let z=0;z<comandas.length;z++){
    if(comandas[z].activo){cierre[0]++}
    else{cierre[1]++}
  }
  for(let z=1;z<personas.length;z++){
    if(personas[z].salida===null){cierre[2]++}
    else{cierre[3]++}
  }
  
  //Ests tres preguntas son para aparecer y 
  //desaparecer el cuadro de búsqueda del escritorio
  //y los cuadros de texto de la tablita
  if (status==carpetas[0].nombre&&buscando){
    inputBox4 = createInput();
    //inputBox4.style('text-align', 'center');
    inputBox4.size(200);
    inputBox4.position(tam+40,90);
    for (let i = 0; i < 10; i++){
      inputBox5[i]=createInput()
      inputBox5[i].size(44);
      inputBox5[i].style('background-color', carpetas[0].col);
      inputBox5[i].position(tablitas[11].x,(tablitas[i+11].y+(tablitas[11].largo-20)/2));
      inputBox5[i].style('text-align', 'center');
    }
    buscando=false      
  }
  if(status!=carpetas[0].nombre){
    inputBox4.remove();//inputBox5[3].remove()
    for (let i = 0; i < inputBox5.length; i++){
      inputBox5[i].remove();
    }
    buscando=true
  }
  if (status==carpetas[0].nombre){
    tablitas[10].texto=sumaTabla()
  }
  
  //esto es para RH en status = "Registro" e "Inicio"
  if(status!=carpetas[2].nombre){regTipo=1}
  if (SB){
    textFont('Verdana', 19);
    fill(color(213,169,15))
    stroke(color(0 ,0,0))
    text("¿Cuánto dinero\nhay en la caja?",width/2-20,180)
    
    textAlign(LEFT,CENTER)
    let v=[500,200,100,50,20,10,5,2,1,0.5]
    for(let ii=0;ii<10;ii++){
      text("x $"+v[ii],width/2+250+45,112.5+35*ii)
    }
    let sss=0
    for (let mmm=0;mmm<v.length;mmm++){
      sss=sss+inputBoxYa[mmm+6].value()*v[mmm]
      if (!isNaN(inputBoxYa[mmm+6].value())) {} 
    else {inputBoxYa[mmm+6].value("");} 
    }
    textAlign(CENTER,CENTER)
    text(moneda(sss),width/2+55,295)
    textAlign(LEFT,CENTER)
    if (!isNaN(inputBoxYa[4].value())) {} 
    else {inputBoxYa[4].value("");}    
  }
  
  if(status=="Inicio"&&standBy2){
    fill(color(213,159,15))
    stroke(0)
    textAlign(CENTER,CENTER)
    textFont('Times', 70);
    text("BIENVENIDO",tam+(width-tam)/2,130)
    textFont('cursive', 40);
    text("Pancheese Pizza",tam+(width-tam)/2,185)
    textFont('Verdana', 20);
    text("Usuario:",tam+(width-tam)/2,280)
    text("Contraseña:",tam+(width-tam)/2,360)
    let names=inputBoxYa[0].value()
    let contr=inputBoxYa[1].value()
    inputBoxYa[1].attribute('type', 'password');
    let palabras
    let contrase
    for(let k=0;k<per.length;k++){
      palabras = per[k].split("\t");
      if(names==palabras[0]&&names!=""&&contr==palabras[palabras.length-1]&&!standBy4){
        //console.log(k)
        inputBoxYa[2].remove()
        inputBoxYa[2] = createButton('Aceptar');
        inputBoxYa[2].size(100, 35)
        inputBoxYa[2].position(tam+(width-tam)/2-100/2,435);
        inputBoxYa[2].mousePressed(() => aceptarNuevo(2,""));
        standBy4=true
        quien=k
      }}}
      if(standBy4){

        let palabras = per[quien].split("\t");

        if(inputBoxYa[0].value()!=palabras[0]||inputBoxYa[1].value()!=palabras[palabras.length-1]){
          
          inputBoxYa[2].remove()
          standBy4=false
        }


        
        //console.log(names+" vs "+palabras[0]+" "+contr+" vs "+palabras[palabras.length-1])
        //inputBoxYa[2].remove()
        //standBy4=false
      }
    
 
  
  if(status=="Inicio"&&!status3){
    
    inputBoxYa[0].remove()
    inputBoxYa[1].remove()
    inputBoxYa[2].remove()
    inputBoxYa[0]=createInput()
    inputBoxYa[1]=createInput()
    inputBoxYa[2] = createButton('Aceptar');
    
    
    inputBoxYa[0].style('font-size', '15px');
    inputBoxYa[0].style('background-color', color(255,255,255));
    inputBoxYa[0].style('color', 0);
    inputBoxYa[0].style('border-color', color(213,159,15));
    inputBoxYa[0].style('border-width', '3.5px');
    inputBoxYa[0].size(100, 20)
    inputBoxYa[0].position(tam+(width-tam)/2-50,295)
    
    
    inputBoxYa[1].style('font-size', '15px');
    inputBoxYa[1].style('background-color', color(255,255,255));
    inputBoxYa[1].style('color', 0);
    inputBoxYa[1].style('border-color', color(213,159,15));
    inputBoxYa[1].style('border-width', '3.5px');
    inputBoxYa[1].size(100, 20)
    inputBoxYa[1].position(tam+(width-tam)/2-50,380)
    status3=true
    standBy2=true
     }
  if(status!="Inicio"){
    inputBoxYa[0].remove()
    inputBoxYa[1].remove()
    inputBoxYa[2].remove()
  }
  
  if ((status==carpetas[2].nombre&&registro==1)) { 
    let iniciox = width/2 ; let inicioy = 105;
    let delta=120; 
    let vv=["Entrada","Horarios","Salida","Estatus","Aceptar","Cancelar"]
    for (let i = 0; i < 4; i++){
      inputBotonAll[i]=createButton(vv[i]);
      inputBotonAll[i].mousePressed(() => recursosHumanos(i+2));
    }
    inputBotonAll[0].style('border-color', color(150,150,0));
    inputBotonAll[0].style('font-family', 'Arial');
    inputBotonAll[0].style('font-size', '18px');
    inputBotonAll[0].style('color',color(10,250,10));
    inputBotonAll[0].style('background-color', color(0,0,0));
    inputBotonAll[0].size(100, 40)
    inputBotonAll[0].position(iniciox,inicioy)
    
    inputBotonAll[1].style('border-color', color(150,150,0));
    inputBotonAll[1].style('font-family', 'Arial');
    inputBotonAll[1].style('font-size', '18px');
    inputBotonAll[1].style('color',color(10,250,10));
    inputBotonAll[1].style('background-color', color(25,45,170));
    inputBotonAll[1].size(100, 40)
    inputBotonAll[1].position(iniciox+1*delta,inicioy-20)
    
    inputBotonAll[2].style('border-color', color(150,150,0));
    inputBotonAll[2].style('font-family', 'Arial');
    inputBotonAll[2].style('font-size', '19px');
    inputBotonAll[2].style('color',color(170,0,0));
    inputBotonAll[2].style('background-color', color(0,0,0));
    inputBotonAll[2].size(100, 40)
    inputBotonAll[2].position(iniciox+2*delta,inicioy)
    
    inputBotonAll[3].style('border-color', color(150,150,0));
    inputBotonAll[3].style('font-family', 'Arial');
    inputBotonAll[3].style('font-size', '19px');
    inputBotonAll[3].style('color',color(170,0,0));
    inputBotonAll[3].style('background-color', color(150,250,20));
    inputBotonAll[3].size(100, 40)
    inputBotonAll[3].position(iniciox+1*delta,inicioy+20)
    
    registro=0
  }
  if (status!=carpetas[2].nombre){
    for (let i = 0; i < inputBotonAll.length; i++){
      inputBotonAll[i].remove();      
    }
    //inputBoxUlt[0].remove();
    //inputBoxUlt[1].remove();
    //regTipo=1;
    registro=1
}
  if(standBy){
    if(men=="Entrada"){co=color(10,250,10)}
    if(men=="Salida"){co=color(220,185,70)}
    fill(color(61,61,61))
    rect(tam+(width-tam)/2-330/2,280-25,330,190)
    fill(0)
    rect(tam+(width-tam)/2-330/2,280-25,330,45)
    fill(co)
    textAlign(CENTER,CENTER)
    text("Registrando "+men,tam+(width-tam)/2,280)
    //fill(color(200))
    textSize(18)
    textAlign(RIGHT,TOP)
    //text("Registrando "+men,width/2+40,300)
    text("Usuario:",width/2+330/2-30,320)
    text("Contraseña:",width/2+330/2-30,370)
    let names=inputBoxUlt[0].value()
    let contr=inputBoxUlt[1].value()
    let palabras
    let contrase
    for(let k=0;k<per.length;k++){
      palabras = per[k].split("\t");
      if(names==palabras[0]&&names!=""&&contr==palabras[palabras.length-1]){
        inputBot[0].remove()
        inputBot[0] = createButton('Aceptar');
        inputBot[0].size(100, 35)
        inputBot[0].position(width/2+120/2,400);
        inputBot[0].mousePressed(() => aceptarNuevo(0,men));
        inputBot[1].remove()
        inputBot[1] = createButton('Nuevo');
        inputBot[1].size(100, 35)
        inputBot[1].position(width/2+120/2+115,400);
        inputBot[1].mousePressed(() => aceptarNuevo(1,""));
        standBy5=true
        quien=k
      }
    }
    //standBy=false
    registro=0
  }
  
  if(standBy5){

        let palabras = per[quien].split("\t");

        if(inputBoxUlt[0].value()!=palabras[0]||inputBoxUlt[1].value()!=palabras[palabras.length-1]){
          inputBot[1].remove()
          inputBot[0].remove()
          standBy4=false
        }
  }
  
  
  
  if (status==carpetas[2].nombre&&(regTipo==2||regTipo==4||regTipo==4)){
    
    inputBoxUlt[0].remove();
    inputBoxUlt[1].remove();
    inputBoxUlt[0]=createInput();
    inputBoxUlt[1]=createInput();
    inputBoxUlt[1].attribute('type', 'password');
    
    
    inputBoxUlt[0].size(150)
    inputBoxUlt[1].size(150)
    inputBoxUlt[0].position(width/2+330/2-30,320)
    inputBoxUlt[1].position(width/2+330/2-30,370)
    if (regTipo==2) {men="Entrada"} if (regTipo==4) {men="Salida"}
    regTipo=1
    standBy=true
  }else{if (status!=carpetas[2].nombre||regTipo==3||regTipo==5||regTipo==0){
    inputBoxUlt[0].remove();
    inputBoxUlt[1].remove();
    inputBot[0].remove()
    inputBot[1].remove()
    standBy=false;
    
    //regTipo=1;
  }
  }
  
  //esto es para RH Estatus
  if (status==carpetas[2].nombre&&regTipo==5){
    //fill(0)
    let mm=""
    textAlign(CENTER,CENTER)
    textSize(15)
    stroke(5)
    for(let ii=0;ii<personas.length;ii++){
      if(personas[ii].salida===null){fill(0);mm="Activo"}else{fill(color(150,0,0));mm=personas[ii].salida}
      text (personas[ii].nombre+"|"+personas[ii].llegada+"|"+mm,tam+(width-tam)/2,300+30*ii)
      
    }
  }
  //aquí empieza la interacción con el usuario 
  //en cuestión de ventas, gastos, etc.
  if (status=="Pregunta"&&!ssttaattuuss){
     let st=["","",""]
    // Crea dos cuadros de entrada (input) en el DOM
    if (preguntaVenta==false){
      inputBox1 = createInput();
      inputBox2 = createInput();
      inputBox3 = createInput();
      inputBox3.style('text-align', 'center');
      inputBox2.style('text-align', 'center');
      inputBox1.style('text-align', 'center');
      // Agrega botones para ocultar y mostrar los cuadros de entrada
      inputBoton1 = createButton('Aceptar');
      inputBoton2 = createButton('Cancelar');
      inputBoton3 = createButton('Cambiar')
      
      //coloca los valores iniciales en los cuadros
      if (preguntaCambio){
       inputBox1.value(ordenes[or].precio)
       inputBox2.value("")
       inputBox3.value("")
       titulo="Cambio: "+ordenes[or].nombre+" $"+ordenes[or].precio
       prim="Escribe el nuevo precio."
       seg = "Escribe por qué hiciste\nel cambio"
       ter = ""
       ch=200
      preguntaVenta=true
        color1=color(200,75,200)
      }
      else{
      color1=color(50,220,50)
      inputBox1.value(suma())
      inputBox2.value("E")
      preguntaVenta=true;//preguntaCambio=false
      titulo="COBRO"
       prim="Escribe la cantidad recibida."
       seg = "Escribe el tipo de cobro.\nE--> Efectivo \nT--> Tarjeta D--> Depósito"
       ter = "Escribe tus comentarios."
       ch=15
       if (preguntaGasto){
      inputBox1.value(0)
      color1=color(250,50,50)
      inputBox2.value("I")
      preguntaVenta=true;//preguntaGasto=false
      titulo="GASTO"
       prim="Escribe cuánto sale de la caja."
       seg = "Escribe el tipo de gasto.\nI--> Insumos \nL--> Limpieza M--> Mantenimiento\nO--> Otros"
       ter = "Describe el gasto.\n ej. 1 kg de harina\n     500 lts de gas."
       ch=15
      }
      if (preguntaAportacion){
      inputBox1.value(0)
      color1=carpetas[1].col
      inputBox2.value("S")
      preguntaVenta=true;preguntaAportacion=false
      titulo="APORTACIÓN"
       prim="Escribe cuánto se agregará a la caja."
       seg = "Escribe el tipo de aportación.\nS--> Sobre \nP--> Personal"
       ter = "Escribe quién hace la \naportación y para qué"
       ch=15
      }   
      if (preguntaCorte){
      ordenes.splice(1,ordenes.length)
        ordenes=[];
        c=0;  
      inputBox1.value(saldoActual)
      color1=carpetas[2].col
      inputBox2.value("")
      preguntaVenta=true;preguntaCorte=false
      titulo="CORTE"
       prim="¿Cuánto dinero hay en la caja?"
       seg = "¿Cuánto dinero se retirará?"
       ter = "Escribe quién retira\ny tus comentarios"
       ch=65
      }   
      }
      }
    
    //DATOS:
    
     if(titulo=="CORTE"){
      //preguntas del inputBox1 1
      
      if (isNaN(inputBox1.value())){st[0]="Escribe un número."}
       if (inputBox1.value()<saldoActual){let di=saldoActual-inputBox1.value();st[0]="$"+di+" pesos de menos.\nRevisa tus gastos, ventas\ny aportaciones."}
       if (inputBox1.value()>saldoActual){let di=saldoActual-inputBox1.value();st[0]="$"+-di+" pesos de más.\nRevisa tus gastos, ventas\ny aportaciones."}
      //preguntas del inputBox1 2
       if (isNaN(inputBox2.value())){st[0]="Escribe un número."}
       if (inputBox2.value()<0){st[0]="Escribe una cantidad positiva."}
      //preguntas del inputBox1 3
      if (!isNaN(inputBox3.value())){st[2]="No puede estar vacío"}
      else (st[2]="")
    }
    if(titulo=="GASTO"||titulo=="APORTACIÓN"){
      //preguntas del inputBox1 1
      
      if (isNaN(inputBox1.value())){st[0]="Escribe un número."}
      //preguntas del inputBox1 2
      if (!isNaN(inputBox2.value())){st[1]="Escribe una letra.\No puede estar vacío"}
      else (st[1]="")
      //preguntas del inputBox1 3
      if (!isNaN(inputBox3.value())){st[2]="No puede estar vacío"}
      else (st[2]="")
    }
    
    if(titulo=="COBRO"){
      //preguntas del inputBox1 1
      if (inputBox1.value()>suma()){st[0]="Cambio: $"+parseFloat(inputBox1.value()-suma())+" pesos."}
      if (inputBox1.value()==suma()){st[0]=""}
      if (inputBox1.value()<suma()){st[0]="¡Cuidado!\nFaltan: $"+-((inputBox1.value()-suma()))+" pesos."}
      if (isNaN(inputBox1.value())){st[0]="Escribe una número."}
      //preguntas del inputBox1 2
      if (!isNaN(inputBox2.value())){st[1]="Escribe una letra"}
      else (st[1]="")
      //preguntas del inputBox1 3
      if (inputBox1.value()<suma()){st[2]="Escribe por qué \nse cobrará de menos"}
      else (st[2]="")
  }
    
    if(titulo.substring(0, 2)=="Ca"){
      //preguntas del inputBox1 1
      if (isNaN(inputBox1.value())){st[0]="Escribe un número."}
      //preguntas del inputBox1 2
      if (!isNaN(inputBox2.value())&&inputBox2.value()!=""){st[1]="Escibe letras."}
      else (st[1]="")
    }
    
    
    
    
    let Msg=[7];
    Msg[0]=titulo
    Msg[1] =prim
    Msg[2] =st[0]//respuesta a la primera entrada
    Msg[3] =seg
    Msg[4] =st[1]//respuesta a la segunda entrada
    Msg[5] =ter 
    Msg[6] =st[2]//respuesta a la tercera entrada
        
    //Datos de espacios (coord Y) del mensaje
    let pix=10;//tamaño en pixeles de la letra
    let la=30;//tamaño del rectángulo de cobro
    let e1=20;//espacio entre línea de cobro y primera palabra
    let sp=7.5;//espacio pequeño arriba y abajo de los cuadros
    let cd = 20//tamaño de los cuadros de entrada
    let bt =25//tamaño de los botones
    let en= 20//espacio entre diferentes mensajes
    let sl=20//espacio último de salida
    
    //Datos de colores de letras y cuadrados
    let RR=random(240,251);
    let GG=random(50,95);
    let BB=random(50,190);
    let color2=color(50,100,200);
    let color3=color(100,0,100),color4=color(255,255,255); 
    
    //Generación de coordenadas para cada objeto del cuadro
    let dyy=[21];
    dyy[0]=la;dyy[10]=cd;
    dyy[1]=e1;dyy[11]=sp;
    dyy[2]="";dyy[12]="";
    dyy[3]=sp;dyy[13]=en;
    dyy[4]=cd;dyy[14]="";
    dyy[5]=sp;dyy[15]=sp;
    dyy[6]="";dyy[16]=cd;
    dyy[7]=en;dyy[17]=sp;
    dyy[8]="";dyy[18]="";
    dyy[9]=sp;dyy[19]=en;
              dyy[20]=bt;
              dyy[21]=sl;
    let L=[5];
    L[0]=((Msg[1].match(/[\r\n]/g) || []).length+1)*pix+pix*(((Msg[1].match(/[\r\n]/g) || []).length))
    L[1]=((Msg[2].match(/[\r\n]/g) || []).length+1)*pix+pix*(((Msg[2].match(/[\r\n]/g) || []).length))
    L[2]=((Msg[3].match(/[\r\n]/g) || []).length+1)*pix+pix*(((Msg[3].match(/[\r\n]/g) || []).length))
    L[3]=((Msg[4].match(/[\r\n]/g) || []).length+1)*pix+pix*(((Msg[4].match(/[\r\n]/g) || []).length))
    L[4]=((Msg[5].match(/[\r\n]/g) || []).length+1)*pix+pix*(((Msg[5].match(/[\r\n]/g) || []).length))
    L[5]=((Msg[6].match(/[\r\n]/g) || []).length+1)*pix+pix*(((Msg[6].match(/[\r\n]/g) || []).length))
    
    //st up posición de los cuadros
    let tamano=[65,ch,200]
    inputBox1.size(tamano[0]);
    inputBox2.size(tamano[1]);
    inputBox3.size(tamano[2]);
    
    // Actualizar la posición
      x=cuadro.x
      y=cuadro.y
      an=cuadro.a
      la=cuadro.l
    
    //set up de posición de los botones
    let espacio=10;
    let ancho=70;
    let xi=x+(an-(3*ancho+2*espacio))/2
    
    inputBoton1.size(ancho, bt)
    inputBoton2.size(ancho, bt)
    inputBoton3.size(ancho, bt)
    
    if (
      moviendo && 
      mouseX > cuadro.x && 
      mouseX < cuadro.x + cuadro.a && 
      mouseY > cuadro.y && 
      mouseY < cuadro.y + cuadro.l &&
      mouseButton === LEFT &&
      mouseIsPressed) {
    // Actualiza la posición del cuadro según el movimiento del ratón
    cuadro.x = mouseX - offset.x;
    cuadro.y = mouseY - offset.y;
      mostrarTablaProductos()
      for (let d = 0; d < carpetas.length; d++) {
    carpetas[d].mostrar();
   }
  }
    
    //Este es el ciclo que calcula la posición
    let cuenta=-1;let coo=0;let cy=[dyy.length-1];
    for(let m=0;m<dyy.length;m++){
      if (dyy[m]==""){cuenta++;coo=coo+L[cuenta]}
      else(coo=coo+dyy[m])
      cy[m]=y+coo;
    }
    //colocar los elementos uno a uno
    //rect chico
    fill(color1)
    stroke(0)
    rect(cuadro.x,cuadro.y,cuadro.a,cuadro.l)//rect chico
    //rect grande
    let final=dyy[20]+dyy[21]
    let vector=[7,13,19];
    let ult=cy[vector[cuantos-1]];
    fill(color2)
    rect(x,y+la,an,ult+final-y-la)//rect grande
    //mensaje de título
    textAlign(CENTER,CENTER)
    fill(color3)
    text(Msg[0],x+an/2,y+la/2)//Mens: "COBRO"
    // Primer mensaje
    textAlign(CENTER,BOTTOM)
      fill(color4)
    text(Msg[1],x+an/2,cy[2]);//+3*la/2+7.5)//Mens: "Escri..."
    // cuadro de input1
    inputBox1.position(x+(an-tamano[0])/2,cy[3]);
    //Respuesta 1
      stroke(color(RR,GG,BB))
      fill(color(250,250,0))
    text(Msg[2],x+an/2,cy[6]);//resp 1 (st)
    
    
    if (cuantos==2 || cuantos ==3){  
        fill(color4)
        stroke(0)
      text(Msg[3],x+an/2,cy[8 ]) // Mens: TIpo
      //cuadro de input
      inputBox2.position(x+(an-tamano[1])/2,cy[9]);
      //Respuesta 2
        stroke(color(RR,GG,BB))
        fill(color(250,250,0))
      text(Msg[4],x+an/2,cy[12]) // respuesta2
    }
    
    
    if (cuantos==3){
        fill(color4)
        stroke(0)
      text(Msg[5],x+an/2,cy[14]);// Mens: coloca tu Comentario
      //cuadro de input
      inputBox3.position(x+(an-tamano[2])/2,cy[15]);
      //Respuesta 3
        stroke(color(RR,GG,BB))
        fill(color(250,250,0))
      text(Msg[6],x+an/2,cy[18]);// respuesta3
     
    }
    stroke(0)
    textAlign(LEFT,CENTER)
    
    
  //Agrega un event listener para la tecla "Enter"
  inputBox1.elt.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      onEnterPressed(1);
    }})
  
    inputBox2.elt.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      onEnterPressed(2);
    }})
    inputBox3.elt.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      onEnterPressed(3);
    }})
  
  // // Configura el evento changed para los cuadros de entrada
  inputBox1.changed(() => onEnterPressed(1));
  inputBox2.changed(() => onEnterPressed(2));
  inputBox3.changed(() => onEnterPressed(3));
    
  inputBoton1.position(xi+0*(ancho+espacio),ult);
  inputBoton2.position(xi+1*(ancho+espacio),ult);
  inputBoton3.position(xi+2*(ancho+espacio),ult);
  //Posiciona los botones
  inputBoton1.mousePressed(aceptarDialogo);
  inputBoton2.mousePressed(cancelarDialogo);
  inputBoton3.mousePressed(cancelarDialogo);
    
  
    //preguntaVenta=true
}
  else{if(ssttaattuuss){
    fill(0)
    //rect(0,0,width,height)
    
  }
      }
}

function update(an,la){
 
   if (
      mouseX > x &&
      mouseX < x + an &&
      mouseY > y &&
      mouseY < y+la &&
      mouseIsPressed && 
      mouseButton === LEFT
    ) {moviendo=true;
       
       return {uno:mouseX-x,dos:mouseY-y}}else {moviendo=false;return {uno:x,dos:y} }
  
  
}
          
function onEnterPressed(inputNumber) {
  // Se activa cuando el usuario presiona "Enter"
  let inputValue;
  if (inputNumber === 1) {
    inputValue = inputBox1.value();
  } else if (inputNumber === 2) {
    inputValue = inputBox2.value();
  }

  ////console.log(`Cuadro ${inputNumber}: ${inputValue}`);
} 
    
function aceptarDialogo() {
  
  if (isNaN(inputBox1.value())){
    preguntaVenta=false;
    preguntaCambio=false
    status=carpetas[0].nombre;inputBox1.remove();
    inputBox2.remove();inputBox3.remove();
    inputBoton1.remove();
    inputBoton2.remove();
    inputBoton3.remove();
    return
  } 
  if(titulo.substring(0, 2)=="Ca"){
    // if (inputBox1.value()<=0||inputBox1.value()==""||
    //     inputBox2.value()<=0||inputBox2.value()==""||
    //     inputBox3.value()<=0||inputBox3.value()==""){return}
    preguntaVenta=false;
    preguntaCambio=false
    preguntaGasto=false
    preguntaAportacion=false
    preguntaCorte=false
    mostrarTablaProductos()
    for (let i=0;i<carpetas.length;i++){
      carpetas[i].mostrar()
    }
    status=carpetas[0].nombre;
    ordenes[or].comentario="$"+-float(ordenes[or].precio-inputBox1.value())+". "+inputBox2.value()
    ordenes[or].precio=float(inputBox1.value())
    inputBox1.remove();
    inputBox2.remove();inputBox3.remove();
    inputBoton1.remove();
    inputBoton2.remove();
    inputBoton3.remove();
    return 
  }
  if(titulo=="APORTACIÓN"){
    if (inputBox1.value()<=0||inputBox1.value()==""||
        inputBox2.value()<=0||inputBox2.value()==""||
        inputBox3.value()<=0||inputBox3.value()==""){return}
    preguntaVenta=false;
    preguntaCambio=false
    preguntaGasto=false
    preguntaAportacion=false
    preguntaCorte=false
    mostrarTablaProductos()
    for (let i=0;i<carpetas.length;i++){
      carpetas[i].mostrar()
    }
    status=carpetas[0].nombre;
    c++;
    ordenes.push(new Orden("Aportación",inputBox3.value(), float(inputBox1.value()),ind, o,c,carpetas[2].col));
    ordenes[ordenes.length-1].tipo=inputBox2.value()
    inputBox1.remove();
    inputBox2.remove();inputBox3.remove();
    inputBoton1.remove();
    inputBoton2.remove();
    inputBoton3.remove();
    // guardarArchivo("Normal")
    return 
  }   
  if(titulo=="GASTO"){
    if (inputBox1.value()<=0||inputBox1.value()==""||
        inputBox2.value()<=0||inputBox2.value()==""||
        inputBox3.value()<=0||inputBox3.value()==""){return}
    preguntaVenta=false;
    preguntaCambio=false
    preguntaGasto=false
    preguntaAportacion=false
    preguntaCorte=false
    mostrarTablaProductos()
    for (let i=0;i<carpetas.length;i++){
      carpetas[i].mostrar()
    }
    status=carpetas[0].nombre;
    c++;
    ordenes.push(new Orden("Gasto",inputBox3.value(), float(-inputBox1.value()),ind, o,c,color(250,50,50)));
    ordenes[ordenes.length-1].tipo=inputBox2.value()
    inputBox1.remove();
    inputBox2.remove();inputBox3.remove();
    inputBoton1.remove();
    inputBoton2.remove();
    inputBoton3.remove();
    // guardarArchivo("Normal")
    return 
  }
  if(titulo=="CORTE"){
    if (inputBox1.value()<=0||inputBox1.value()==""||
                              inputBox2.value()==""||
        inputBox3.value()<=0||inputBox3.value()==""){return}
    preguntaVenta=false;
    preguntaCambio=false
    preguntaGasto=false
    preguntaAportacion=false
    preguntaCorte=false
    //mostrarTablaProductos()
    // for (let i=0;i<carpetas.length;i++){
    //   carpetas[i].mostrar()
    // }
    status="Final";
    guardarArchivo("Corte")
    comandas=[]
    usuario=""
    ssttaattuuss=true 
    // c++;
    // ordenes.push(new Orden("Aportación",inputBox3.value(), float(inputBox1.value()),ind, o,c,carpetas[2].col));
    // ordenes[ordenes.length-1].tipo=inputBox2.value()
    inputBox1.remove();
    inputBox2.remove();
    inputBox3.remove();
    inputBoton1.remove();
    inputBoton2.remove();
    inputBoton3.remove();
    return 
  }  
    
    
  
  let RR=random(100,251);
  let GG=random(100,251);
  let BB=random(100,251);
  let rand=int((RR)+random(0,100));
  //status="Comandas"
  let start = new Date();
  let fecha=(`${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()}`);
  let hora=(`${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`);
  ind=ind+1
  let ti=""
  for (let i = 0; i < ordenes.length; i++) {
    if(ordenes[i].tipo === undefined){
      ordenes[i].tipo=""
      ti=inputBox2.value();
    }else{ti=ordenes[i].tipo}
    
    
 //"moto"
    let m="-"
    if(moto){m="M"}
  comandas.push(new     comanda(start,i+1,ind,ordenes.length,rand,ordenes[i].producto,ordenes[i].nombre,ordenes[i].precio,hora,"","t",usuario,ti,"",ordenes[i].comentario+m+inputBox3.value(),RR,GG,BB)); 
    
  }
  moto=false
  guardarArchivo("Normal")
  ////console.log("aqui andamios")
  ordenes.splice(1,ordenes.length)
  ordenes=[];
  c=0;
  //cuadrosDeTexto.splice(1,cuadrosDeTexto.length)
  //cuadrosDeTexto[0].borrarTexto();

  
  // Retira los cuadros de entrada del DOM
  inputBox1.remove();
  inputBox2.remove();
  inputBox3.remove();
  inputBoton1.remove();
  inputBoton2.remove();
  inputBoton3.remove();
  preguntaVenta=false;
  preguntaCambio=false
  preguntaGasto=false
  preguntaAportacion=false
  preguntaCorte=false
  status=carpetas[0].nombre
  mostrarTablaProductos()
  for (let i=0;i<carpetas.length;i++){
    carpetas[i].mostrar()
  }
}

function cancelarDialogo() {
  status=carpetas[0].nombre;inputBox1.remove();
  inputBox2.remove();inputBox3.remove();
  inputBoton1.remove();
  inputBoton2.remove();
  inputBoton3.remove();
  preguntaVenta=false;
  preguntaCambio=false
  preguntaGasto=false
  preguntaAportacion=false
  preguntaCorte=false
  mostrarTablaProductos()
  for (let i=0;i<carpetas.length;i++){
    carpetas[i].mostrar()
  }
}
  
function CAmbiarDialogo() {
  
  if (isNaN(inputBox1.value())){preguntaVenta=false
  status=carpetas[0].nombre;inputBox1.remove();
  inputBox2.remove();inputBox3.remove();
  inputBoton1.remove();
  inputBoton2.remove();
  inputBoton3.remove();
  return}
  
  
  
  let RR=random(100,251);
  let GG=random(100,251);
  let BB=random(100,251);
  let rand=int((RR)+random(0,100));
  //status="Comandas"
  let start = new Date();
  let fecha=(`${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()}`);
  let hora=(`${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`);
  ind=ind+1
  for (let i = 0; i < ordenes.length; i++) {
  //"moto"
    let m="-"
    if(moto){m="M"}
    comandas.push(new     comanda(start,i+1,ind,ordenes.length,rand,ordenes[i].producto,ordenes[i].nombre,ordenes[i].precio,hora,"","t",usuario,inputBox2.value(),"",ordenes[ord].comentario+m+inputBox3.value(),RR,GG,BB));
    moto=false
  }

                                
  ////console.log("aqui andamios")
  ordenes.splice(1,ordenes.length)
  ordenes=[];
  c=0;
                                
  //cuadrosDeTexto.splice(1,cuadrosDeTexto.length)
  //cuadrosDeTexto[0].borrarTexto();
  
  // Retira los cuadros de entrada del DOM
  inputBox1.remove();
  inputBox2.remove();
  inputBox3.remove();
  inputBoton1.remove();
  inputBoton2.remove();
  inputBoton3.remove();
  preguntaVenta=false
  preguntaCambio=false
  status=carpetas[0].nombre
}

  let per
  
function preload(){
  let nombreArchivo ='productos.txt'
  pro = loadStrings(nombreArchivo);
  nombreArchivo ='RH.txt'
  per = loadStrings(nombreArchivo);
  }

function draw() {
  
  fill(ColorMesa);
  noStroke()
  rect(tam, 40, size1, size2);
  for (let d = 0; d < ordenes.length; d++) {
    ordenes[d].mostrar()
   }
  for (let d = 0; d < botones.length; d++) {
    botones[d].mostrar()
   }
  for (let d = 0; d < comandas.length; d++) {
    comandas[d].mostrar(d+1,comandas.length+1)
   }
  for (let d = 0; d < tablitas.length; d++) {
    tablitas[d].mostrar();
   }
  for (let d = 0; d < infos.length; d++) {
    infos[d].mostrar();
   }
  guardarPalabras()
  dialogos();
  //rect(tam,0,size1-tam,25) 
}
  
function moneda(input){
  let formatoMonedaMXN = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN'
});
  return formatoMonedaMXN.format(input)
}
  
function sumaTabla(){
  let v=[500.0,200.0,100.0,50.0,20.0,10.0,5.0,2.0,1.0,0.5]
  let cta=0
  for (let i = 0; i < 10; i++){
    if(inputBox5[i].value()>0){
    cta=parseFloat(cta+v[i]*inputBox5[i].value())
    }else{inputBox5[i].value("")}
  }
  return moneda(cta)
}
  
function mousePressed() {
  // Verifica si se hizo clic en alguna carpeta
  for (let i = 0; i < carpetas.length; i++) {
    carpetas[i].verificarClic();
  }
     for (let i = 0; i < productos.length; i++) {
    productos[i].verificarClic();
  }
  for (let i = 0; i < ordenes.length; i++) {
    ordenes[i].verificarClic();
  }
  for (let i = 0; i < botones.length; i++) {
    botones[i].verificarClic();
  }
  // for (let i = 0; i < tablitas.length; i++) {
  //   tablitas[i].verificarClic();
  // }
  for (let i = 0; i < infos.length; i++) {
    infos[i].verificarClic();
  }
  for (let i = 0; i < comandas.length; i++) {
    comandas[i].verificarClic();
  }
  for (let i = 0; i < productosBusq.length; i++) {
    productosBusq[i].verificarClic();
  }
   // Verifica si el clic fue sobre el cuadro
  if (status=="Pregunta"){
  if (
    mouseX > cuadro.x &&
    mouseX < cuadro.x + cuadro.a &&
    mouseY > cuadro.y &&
    mouseY < cuadro.y + cuadro.l
  ) {
    moviendo = true;
    // Calcula el offset para mantener la posición relativa al cuadro
    offset = { x: mouseX - cuadro.x, y: mouseY - cuadro.y };
  }
}
  
}
  
function mouseReleased() {
  // Deja de arrastrar cuando se libera el clic del ratón
    if (status=="Pregunta"){
    moviendo = false;}
}

function mostrarTablaProductos() {
  // Muestra la tabla de productos en el lienzo
  //noStroke()
  let x1=20;let y1=16.5;let tres=0;
  fill(200);
  stroke(0)
  rect(10, 0, tam-10, size2-10);
  // Encabezados de la tabla
  fill(0);
  stroke(0)
  textAlign(CENTER,BOTTOM)
  textFont('Verdana', 18);
  text('Productos', tam/2, y1+15);
  textFont('Verdana', 15);
  noFill()
  stroke(76)
  rect(10, 0, tam-10, 38);
  noStroke()
  fill(0)
  textAlign(LEFT,BOTTOM)
  //textFont('Verdana', 16);
  // Muestra los productos
  for (let i = 0; i < productos.length; i++) {
    productos[i].mostrar(x1, 83+5 + (i-1) * y1);
    }     
}

function suma(){
  let su=0
  for (let k = 0; k < ordenes.length; k++) {
    su=su+ordenes[k].precio;
  }
  ////console.log(su)
  return su;
  
}

function guardarPalabras() {
    let cuenta=0;
    let value = inputBox4.value();
    let lista = [];
    productosBusq=[];
    ////console.log(this.value)
    if (value==""){status2="OK"}
    else {
          let palabras
          let lista=[];
          for (let i=0;i<productos.length;i++){
            palabras = [(productos[i].producto),(productos[i].nombre),("$"+productos[i].precio),]
             // Convertir a minúsculas y dividir en letras
            let letrasIngresadas = value.toLowerCase().split('');
            // Filtrar las palabras que contienen todas las letras ingresadas en cualquier posición
            coincidencias = palabras.filter(palabra =>
            letrasIngresadas.every(letra => palabra.toLowerCase().includes(letra)));
            // Mostrar las coincidencias (o realizar otras acciones con ellas)
            if(coincidencias.length==0){}
            else{
              cuenta++
              let ms=productos[i].producto+" "+productos[i].nombre+" $"+productos[i].precio
              productosBusq.push(new productoBusq(tam+50,90+30+(cuenta-1)*16,ms,i));              
            }
         ////console.log(lista[1]);
          }
     }
  
  //if(status!="Inicio"&&status!="Inicio2"){
  for (let i = 0; i < productosBusq.length; i++) {
    if (
      mouseX > productosBusq[i].x &&
      mouseX < productosBusq[i].x + productosBusq[i].ancho &&
      mouseY > productosBusq[i].y &&
      mouseY < productosBusq[i].y +productosBusq[i].largo
    ){
      noFill()
      stroke(150,10,25)
      rect(productosBusq[i].x,productosBusq[i].y,productosBusq[i].ancho,productosBusq[i].largo)
    }else{}
  }
  //}
  
  
  
}
  
  let ssttaattuuss=false
  
function guardarArchivo(tipo){
  if(tipo=="Corte"){
  let strings=[]
  for(let i=0;i<comandas.length;i++){  
    let str=""
    for(let j=0;j<comandas[i].todo2.length;j++){
      str=str+comandas[i].todo2[j]+"\t"
    }
    strings.push(str)
  }
    let start = new Date();
    let fecha=(`${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()}`);
    let hora=(`${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`);
    let nombre = "Comandas del día "+fecha+" "+hora+".txt"
   saveStrings(strings, nombre);
    strings=[]
    for (let ii=0;ii<infos.length/2-1;ii++){
      strings.push(infos[ii].texto+"\t"+ve2[ii])
    }
    strings.push("Retiro : $\t"+inputBox2.value())
    strings.push("¿Quién? : \t"+inputBox3.value())
    strings.push("Quedan : $\t"+parseFloat(inputBox1.value()-inputBox2.value()))
    nombre = "Corte del día "+fecha+" "+hora+".txt"
    // saveStrings(strings, nombre);
    // strings=[]
    for (let ii=0;ii<personas.length;ii++){
    strings.push(personas[ii].nombre+"\t"+personas[ii].llegada+"\t"+personas[ii].salida)
    }
    saveStrings(strings, nombre);  
  }
  if(tipo=="Normal"){
  let strings=[]
  for(let i=0;i<comandas.length;i++){  
    let str=""
    for(let j=0;j<comandas[i].todo2.length;j++){
      str=str+comandas[i].todo2[j]+"\t"
    }
    strings.push(str)
  }
    let start = new Date();
    let fecha=(`${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()}`);
    let hora=(`${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`);
    let nombre = "comandas "+fecha+" "+hora+".txt"
    for (let ii=1;ii<personas.length;ii++){
    strings.push(personas[ii].nombre+"\t"+personas[ii].llegada+"\t"+personas[ii].salida)
    }
    saveStrings(strings, nombre);
  }
}

class Carpeta {
  constructor(x, y, col, nombre) {
    this.x = x;
    this.y = y;
    this.col = col;
    this.ancho = size1 / 2;
    this.alto = 40;
    this.nombre = nombre;
  }

  mostrar() {
    // Dibuja la carpeta
    fill(this.col);
    rect(this.x, this.y, this.ancho, this.alto);

    // Etiqueta de la carpeta
    noStroke();
    let dan=textFont()
    textAlign(LEFT,BOTTOM)
    textFont('Verdana', 15);
    fill(0);
    text(this.nombre, this.x + 10, this.y + 30);
    textAlign(LEFT,BOTTOM)
    textFont('Verdana', 13);
  }
  
  verificarClic() {
    if(status!="Pregunta"&&status!="Inicio"&&status!="Inicio2" ){
    //verifica si es clic izq
    if (mouseButton === LEFT) {
    // Verifica si se hizo clic dentro de la carpeta
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y + this.alto
    ) {
      // Realiza la acción deseada al hacer clic (puedes cambiar esto)
      ColorMesa = this.col;
      status=this.nombre;
      if (status==carpetas[2].nombre&&registro==0){registro=0}
    }
  }}
}
}

class Producto {
  constructor(producto, nombre, precio, indice) {
    this.producto = producto;
    this.nombre = nombre;
    this.precio = precio;
    //this.indice = indice;
    this.todo=[this.producto,this.nombre,this,precio]
  }

  mostrar(x, y) {
    // Muestra el producto en la tabla
    fill(0);
    text(this.producto, x, y);
    text(this.nombre, x + 100, y);
    text('$' + this.precio, x + 275, y);
    this.x=x;
    this.y=y;
    this.ancho =tam-this.x-20;
    this.alto=15;
    //circle(this.x,this.y,3)
    //fill(color(100,100,255))
    //circle(this.x,this.y-this.alto,3);
    //fill(0)
    ////console.log(this.x+","+this.y+" Ancho:"+this.ancho+"Alto:"+this.alto)
  }
  verificarClic() {
    if (status==carpetas[0].nombre){
      //verifica si es clic izq
    if (mouseButton === LEFT) {
      
    // Verifica si se hizo clic dentro de la carpeta
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y-this.alto &&
      mouseY < this.y 
    ) {
      // Realiza la acción deseada al hacer clic (puedes cambiar esto)
      ////console.log('Clic en Producto ' + (productos.indexOf(this) + 1));
      if(status!="Pregunta"){
        c++;
      ordenes.push(new Orden(this.producto, this.nombre, this.precio,ind, o,c,carpetas[1].col));
      } 
    }
  }
}}
}
     
class Orden {
  constructor(producto, nombre, precio,indice, orden,comanda,col) {
    this.producto = producto;
    this.nombre   = nombre;
    this.precio   = precio;
    this.indice   = indice;
    this.orden    = orden;
    this.comanda  = comanda;
    this.colores = col
    this.comentario = ""
  }
  mostrar() {if(status==carpetas[0].nombre||status=="Pregunta"){
    // Muestra el producto en la tabla
    this.x=tam+30;
    this.y=125+this.comanda*35;
    this.alto=30;
    this.texto=this.producto+" "+this.nombre+" $"+this.precio+""
    textSize(15)
    this.ancho =textWidth(this.texto)+5;
    
    //formatos
    textAlign(LEFT,TOP)
    fill(this.colores);
    ////console.log(textWidth(this.texto))
    stroke(76);
    rect(this.x, this.y,this.ancho, this.alto)
    fill(0);
    text(this.texto, this.x,this.y);
    }
    
    ////console.log(this.x+","+this.y+" Ancho:"+this.ancho+"Alto:"+this.alto)
  }
  verificarClic() {if(status==carpetas[0].nombre&&status2!="Busqueda"){
    //verifica si es clic izq
    if (mouseButton === LEFT) {
    // Verifica si se hizo clic dentro de la carpeta
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y +this.alto
    ) {
      // Realiza la acción deseada al hacer clic (puedes cambiar esto)
      // ordenes.splice(ordenes.indexOf(this) ,1);
      ordenes.splice(ordenes.indexOf(this) ,1);    
      } 
    }
    if (mouseButton === RIGHT) {
    // Verifica si se hizo clic dentro de la carpeta
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y +this.alto
    ) {
      // Realiza la acción deseada al hacer clic (puedes cambiar esto)
      // this.precio=0
     status="Pregunta";
      preguntaVenta=false;
      preguntaCambio=true
      cuantos=2
      or=ordenes.indexOf(this)
      //carpetas[1].col
      } 
    }
  
  
  
  
  
  }
}
}
  
  let registro
  let moto=false
  
class boton {
  constructor(nombre,x,y,ancho,largo,colo) {
    this.nombre = nombre;
    this.x      = x;
    this.y      = y;
    this.ancho  = ancho;
    this.largo  = largo;
    this.colo  = colo;
  }
  mostrar() {if(status==carpetas[0].nombre||status=="Pregunta"){
  
    if(botones.indexOf(this) + 1<8){//PARA TODOS LOS BOTONES
      if(botones.indexOf(this) ==0){textFont('Verdana', 13)}
      else{textFont('Verdana', 15)}
       textAlign(CENTER,CENTER)
      fill(this.colo)
      if(botones.indexOf(this) + 1==6) {
        if((cierre[0]==0&&cierre[1]==0||(cierre[1]<comandas.length))||(cierre[2]==0&&cierre[3]==0||(cierre[3]<personas.length-1))){
           fill(carpetas[0].col)
           }        
      }
       ////console.log(textWidth(this.texto))
       stroke(76);
       rect(this.x-this.ancho/2, this.y+this.largo/2,this.ancho, -this.largo)
      
      stroke(0)
      fill(color(0,61,121))
       text(this.nombre, this.x,this.y);
       textAlign(LEFT, CENTER)
      }
    else {
      if(suma()==0){botones[0].nombre= "OK"}
      else{
        botones[0].nombre= "OK"+"\n"+moneda(suma())
      }
    }
  }
}
  verificarClic() {if(status==carpetas[0].nombre){
    // Verifica si se hizo clic dentro de la carpeta
    if(status==carpetas[0].nombre){
      //verifica si es clic izq
    if (mouseButton === LEFT) {
    if (
      mouseX > this.x-this.ancho/2 &&
      mouseX < this.x + this.ancho/2 &&
      mouseY > this.y-this.largo/2 &&
      mouseY < this.y+this.largo/2 
    ) {
      // Realiza la acción deseada al hacer clic (puedes cambiar esto)

      //console.log(botones.indexOf(this) + 1)
      if(botones.indexOf(this) + 1==2){//BOTÓN DE RESET
        ordenes.splice(1,ordenes.length)
        ordenes=[];
        c=0;
      }
      //Cobrar y registrar
      if(botones.indexOf(this) + 1==1||botones.indexOf(this) + 1==7){//BOTÓN DE MOTO
         if(botones.indexOf(this) + 1==7){moto=true}
        status="Pregunta";preguntaVenta=false;cuantos=3; 
      }
      if(botones.indexOf(this) + 1==3){//BOTÓN DE GASTO
        // c++;
        // ordenes.push(new Orden("Gasto", "", "",ind, o,c,color(250,50,50)));
        status="Pregunta";preguntaVenta=false;cuantos=3;
        preguntaGasto=true      
      }
      if(botones.indexOf(this) + 1==4){//BOTÓN DE APORTACIÓN
        // c++;
        // ordenes.push(new Orden("Gasto", "", "",ind, o,c,color(250,50,50)));
        status="Pregunta";preguntaVenta=false;cuantos=3;
        preguntaAportacion=true      
      }
      if(botones.indexOf(this) + 1==6){//BOTÓN DE CORTE
        
        if(cierre[0]==0&&cierre[1]==0){return}
        for(let z=0;z<comandas.length;z++){
          if(comandas[z].activo){
            return
          }
        }
        for(let z=1;z<personas.length;z++){
          if(personas[z].salida===null){
            return
          }
        }  
        
        status="Pregunta";preguntaVenta=false;cuantos=3;
        preguntaCorte=true 
      }
       if(botones.indexOf(this) + 1==5){//console.log("hola")
        status=carpetas[2].nombre
         ColorMesa=carpetas[2].col//;preguntaVenta=false;cuantos=3;
         registro=1
        //preguntaCorte=true 
      }
    } 
  }
    }
                  }
}}
  
class info{
  constructor(i,j){
    let inf=["Fecha:","Usuario:","Ventas T : $","Ventas E : $","Aportaciones: $","Gastos: $","TOTAL: $","Saldo inicial: $","Saldo Actual: $","","",""]
    let x1=tam+900;let y1=70;
    this.x=x1+3*i;
    this.y=y1+25*j;
    this.largo=25;
    this.i=i;this.j=j;
    this.texto="";
    if(i==0){
     this.texto=inf[j];
    }
  }
  mostrar(){
    
    if (status==carpetas[0].nombre||status=="Pregunta"){
    
    let vecto=["T","E","D","I","L","M","O","S","P"] 
    let vecto2=["t","e","d","i","l","m","o","s","p"] 
    let sum=[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0] 
      for(let p=0;p<comandas.length;p++){
        
        for(let s =0;s<vecto.length;s++){
          if (comandas[p].tipo==vecto[s]||comandas[p].tipo==vecto2[s]){
            //suma=suma+comandas[p].precio
            sum[s]=sum[s]+comandas[p].precio
            //console.log("(p,s) = ("+p+","+s+")\n sum["+s+"] = "+sum[s])
          }
       }
    }
    let start = new Date();
    let fecha=(`${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()}`);
    let hora=(`${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`);
    let chin 
    chin=[saldoInicial,sum[1],sum[3],sum[4],sum[5],sum[6],sum[7],sum[8]]  
    let sumation = chin.reduce((total, cadena) => total + Number(cadena), 0);
    chin=[sum[0],sum[1],sum[2],sum[3],sum[4],sum[5],sum[6],sum[7],sum[8]]
    let sumatio = chin.reduce((total, cadena) => total + Number(cadena), 0);
    chin=[sum[3],sum[4],sum[5],sum[6]]
    let sumati = chin.reduce((total, cadena) => total + Number(cadena), 0);
    chin=[sum[7],sum[8]]
    let sumat = chin.reduce((total, cadena) => total + Number(cadena), 0);   
    ve2=[fecha+" "+hora,usuario,
                           parseFloat(sum[0]+sum[2]),
                           parseFloat(sum[1]),
                           sumat,
                           sumati,
                           sumatio,
                           parseFloat(saldoInicial),sumation]
      
    this.ancho=textWidth(this.texto);  
    stroke(color(0,0,0))
    textFont('Verdana', 13);
    fill(color(0,61,121))
    //noFill();
    if(this.i==0){
      textAlign(RIGHT,CENTER);
      //rect(this.x-this.ancho,this.y,this.ancho,this.largo);
      text(this.texto,this.x,this.y+this.largo/2);
    }
    else{
    textAlign(LEFT,CENTER);
    //rect(this.x,this.y,this.ancho,this.largo);
    if (ve2[this.j]===undefined){
      //text("",this.x,this.y+this.largo/2)
    }
    else{text(ve2[this.j],this.x,this.y+this.largo/2);saldoActual=ve2[8]}
      
    }
  }
  }
  verificarClic() {if(status==carpetas[0].nombre){
     if(this.i==1){
       //verifica si es clic izq
    if (mouseButton === LEFT) {
     if (
      mouseX > this.x&&
      mouseX < this.x+this.ancho  &&
      mouseY > this.y &&
      mouseY < this.y + this.largo 
    ) {
      // Realiza la acción deseada al hacer clic (puedes cambiar esto)
      //console.log('Clic en Info  ' + (infos.indexOf(this) + 1));
      } 
    }
    // Verifica si se hizo clic dentro de la carpeta
    if(this.i==0){
      //verifica si es clic izq
    if (mouseButton === LEFT) {
     if (
      mouseX > this.x - this.ancho&&
      mouseX < this.x  &&
      mouseY > this.y &&
      mouseY < this.y + this.largo 
    ) {
      // Realiza la acción deseada al hacer clic (puedes cambiar esto)
      //console.log('Clic en Info  ' + (infos.indexOf(this) + 1));
      } 
    }
   }
  }
}
}
}
  
class comanda {
constructor(start,ind1,ind2,ind3,ind4,producto,nombre,precio,ini,fin,tiempo,cajero,tipo,moto,comentario,RR,GG,BB) {
    this.producto = producto;
    this.nombre   = nombre;
    this.precio   = precio;
    if (tipo == "T"||tipo == "t"){this.precio=(precio*0.95)}//comisión
    this.ini      = ini;
    this.fin      = fin;
    this.tiempo   = tiempo;
    this.comentario = comentario;
    this.tipo     = tipo;
    this.moto     = moto;
    this.cajero   = cajero;
    this.comanda   = ind1;
    this.ind1   = ind1;
    this.ind2   = ind2;
    this.ind3   = ind3;
    this.ind4=ind4;
    this.col = color(RR, GG, BB)
    this.start=start;
    this.hh=start.getHours();
    this.mm=start.getMinutes();
    this.ss=start.getSeconds();
    this.dd=start.getDate()
    this.MM=start.getMonth()+1
    this.aa=start.getFullYear()
    this.tt=`${this.dd}/${this.MM}/${this.aa}`
    this.todo = [this.tt+"|",ind1+"|",ind2+"|",ind3+"|",ind4+"|",producto,nombre,moneda(this.precio),ini+"|",fin,"|"+tiempo,cajero,tipo,moto,comentario];
  this.todo2 = [this.tt,ind1,ind2,ind3,ind4,producto,nombre,moneda(this.precio),ini,fin,tiempo,cajero,tipo,moto,comentario];
  this.activo=true
  
  
  }
  mostrar(d,g) {if(status=="Comandas"){
            let altCuad = 25
            let startY = 85
            let startX = tam-10
            this.x=startX+30;
            this.y=g*altCuad+startY-d*altCuad;//startY+d*altCuad;
            
            let dif1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            let dif2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            let testo = 0
            for (let ii=0; ii<comandas.length;ii++){
             for (let jj=0; jj<dif1.length;jj++){
               testo=textWidth(comandas[ii].todo[jj])
              if (dif1[jj]<testo) {dif1[jj]=testo;dif2[jj]=comandas[ii].todo[jj].length;}
             }
            }
            //textFont('Verdana', 11);
            let tepsto = 0
            let tttam=""
            for (let ii=0; ii<comandas.length;ii++){
             for (let jj=0; jj<dif1.length;jj++){
              tepsto=comandas[ii].todo[jj].length
              tttam =textWidth(comandas[ii].todo[jj])
               //ajusta el valor a tu necesidad
               while (dif1[jj]>tttam+3&&tttam<170){////console.log(dif1[jj]+">"+tttam+1)
               comandas[ii].todo[jj]=comandas[ii].todo[jj]+" ";
                tepsto=comandas[ii].todo[jj].length
                 tttam =textWidth(comandas[ii].todo[jj])
              }
             }
            }
            
            this.texto="";
            for(let mm=0;mm<dif2.length;mm++)
            
            {
             this.texto=this.texto+" "+this.todo[mm];
            }
    
    //this.texto=this.producto+" "+this.nombre+" "+this.precio+""
            // Usar el método reduce para sumar todos los valores
            this.ancho = 5+textWidth(this.texto)//.reduce(function(acumulador, valorActual) {
            //return acumulador + valorActual;
             //}, 0);
            //formatos
            let colorear=0
            if (this.texto.includes("Gasto")){
              this.col=color(250,0,0)
              colorear=255
            } 
            if (this.texto.includes("Aportacion")||this.texto.includes("Aportación")){
              this.col=color(0,61,121)
              colorear=255
            }
            fill(this.col);
            ////console.log(textWidth(this.texto))
            noStroke();
            rect(this.x-5, this.y+4,this.ancho+5, -altCuad)
            fill(colorear);
            textAlign(LEFT,CENTER)
            textFont('Verdana', 12);
            if (this.fin==""){stroke(76)}else(noStroke)        
            text(this.texto, this.x,this.y);
            //circle(this.x-5, this.y+4, 5)
            //circle(this.x-5+this.ancho+5, this.y+4, 5)
            //circle(this.x-5, this.y+4-25, 5)
            //circle(this.x-5+this.ancho+5, this.y+4-25, 5)
    //circle(0, 0, 100)
            
  }
  }
  verificarClic() {if(status=="Comandas"){
    //verifica si es clic izq
    if (mouseButton === LEFT) {
    // Verifica si se hizo clic dentro de la carpeta
    if (
      mouseX > this.x-5&&
      mouseX < this.x-5+this.ancho+5 &&
      mouseY > this.y+4-25&&
      mouseY < this.y+4 &&
      this.activo
    ) {
      
        let now = new Date();
        let old = this.start
        let tie = now-old
        // Convertir la diferencia a minutos
        let diferenciaEnMinutos = (tie / (1000 * 60)).toFixed(1);//Math.floor(tie / (1000 * 60));

        let fecha=(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`);
        let hora=(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
      comandas[comandas.indexOf(this)].fin=hora;
      comandas[comandas.indexOf(this)].todo[9]=hora;
      comandas[comandas.indexOf(this)].todo2[9]=hora;
      //comandas[comandas.indexOf(this)].fin=hora;
      comandas[comandas.indexOf(this)].todo[10]=diferenciaEnMinutos;
      comandas[comandas.indexOf(this)].todo2[10]=diferenciaEnMinutos;
      comandas[comandas.indexOf(this)].tiempo=diferenciaEnMinutos;
      comandas[comandas.indexOf(this)].x=comandas[comandas.indexOf(this)].x;
      //console.log('Clic en Comanda  ' + (comandas.indexOf(this) + 1));
      //rect(this.x,this.y,+ this.ancho,this.alto)
      //ColorMesa = this.col;
      this.activo=false
    } 
}}}}
  
  let coincidencias = []

class tablita{
  constructor(i,j){
    let x1=tam+540;let y1=90;
    this.i=i;
    this.j=j;
    if(this.j==10 && this.i==0){this.x=x1+60*i;this.y=y1+25*j;this.ancho=110;}
    else{if(this.j==10 && this.i==1){this.x=x1+60*(i-1);this.y=y1+25*j;this.ancho=110;}
    else{this.x=x1+60*i;this.y=y1+25*j;this.ancho=50;}}
    this.largo=25;
    let denom=[500,200,100,50,20,10,5,2,1,0.5,""];
    this.texto=denom[this.j]
  }
  mostrar(){if (status==carpetas[0].nombre||status=="Pregunta"){ 
      
      stroke(color(0,0,0))
      textAlign(RIGHT,CENTER)
      fill(color(0,61,121))
      if(this.i==0){
        text(this.texto,this.x+this.ancho/2+25,this.y+this.largo/2)
      }
      textAlign(LEFT,CENTER)
    }
  }
  mostrarCuadro() {
    
  }
  verificarClic() {if(status==carpetas[0].nombre){
    //verifica si es clic izq
    if (mouseButton === LEFT) {
    // Verifica si se hizo clic dentro de la carpeta
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y+this.largo 
    ) {
      
      //console.log("Clic en Tablitas "+tablitas.indexOf(this)) 
    } 
    else{}
    }
  }
}
}

class productoBusq{
  constructor(x,y,ms,i) {
    status2="Busqueda"
    this.x=x
    this.y=y
    this.ancho=250;
    this.largo=16
    this.texto = ms;
    this.i=i;
    this.col=color(250,250,250)
    noStroke()
    fill(this.col);
    rect(this.x,this.y,this.ancho,this.largo)
    fill(0)
    noStroke()
    textAlign(LEFT,TOP)
    text(this.texto,this.x,this.y)
    textAlign(LEFT,BOTTOM)
  }
  verificarClic() {if(status==carpetas[0].nombre){
    //verifica si es clic izq
    if (mouseButton === LEFT) {
    // Verifica si se hizo clic dentro de la carpeta
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y+this.largo 
    ) {
      // Realiza la acción deseada al hacer clic (puedes cambiar esto)
      //console.log('Clic en Prod Buscado  ' + (productosBusq.indexOf(this) + 1));
      
      c++;
      ordenes.push(new Orden(productos[this.i].producto, productos[this.i].nombre,productos[this.i].precio,ind, o,c,carpetas[1].col));
      
      }
    else {
      //cuadrosDeTexto[0].borrarTexto();
      inputBox4.value("")
      status2="OK"
      
    }
    }
  }
}}
  