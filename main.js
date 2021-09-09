class List{
    constructor(){
        this.data=[]
    }

    add(nome){
        this.data.push(nome);
        console.log(this.data);
    }
}

class Tolist extends List{
    constructor(){
        super();
        this.usuario='Lucas';
    }
   getUsuario(){
       console.log(this.usuario)
   }
}

const tolist = new Tolist()

document.getElementById('novatodo').onclick = function(){
    tolist.add('Lucasparadepassaratividade');
    tolist.getUsuario();
}