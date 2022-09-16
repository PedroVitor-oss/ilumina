
const Ilumina={
    createApp:(app)=>{
        document.querySelector("body").innerHTML = app;
    },
    createElemente:(tag,conteudo,component)=>{
        conteudo = Array(conteudo);
        newConteudo = ""
        for(c of conteudo ){
            newConteudo+=c;
           
        }
        let aberto = true;
        conteudo = ""
        for(let i = 0;i<newConteudo.length;i++){
            c= newConteudo[i]
            p = newConteudo[i+1]
            if(c=="<"){
                aberto = true;
            }
            if(c=="<"&&p=="/"){
                aberto = false;
            }
            if(aberto == false){
                if(c!=","){
                    conteudo+=c
                }
            }else{
                conteudo+=c
            }
        }
        return(`
        <`+tag+` 
        class="`+component.className+`" 
        id="`+component.id+`" 
        href="`+component.href+`"
        onclick="`+component.click+`"
        >
        `+conteudo+`
        </`+tag+`>
        `
        )
        
    },
    addElement:(local,elemnt)=>{
        document.querySelector(local).innerHTML+=elemnt;
    },
    Selector:(local)=>{
        return document.querySelector(local);
    },
    selectText:(text,ini,larg)=>{
        textReturn = "";
        for(i = ini;i<ini+larg;i++){
            textReturn += text[i]
        }
        return textReturn;
    },
    createDatas:(local,data)=>{
        let list = (document.querySelectorAll(local+" * "))
        for(l of list){
            
            conteudo  = l.innerHTML;
            newConteudo = "";
            for(i = 0;i<conteudo.length;i++){
                textComparation = "";
                if(conteudo[i] == "{"&&conteudo[i+1] == "{"){
                    for(key in data){
                        textComparation ='';
                        for(l = 0;l<4+key.length;l++){
                            textComparation+=conteudo[i+l];
                        }
                        if(textComparation =="{{"+ key + "}}"){
                            console.log("iguais")
                            console.log(data[key])
                            newConteudo+=data[key];
                            i = i+3+key.length;
                           // l.innerHTML = newConteudo
                           // console.log(newConteudo)
                        }
                       
                      }
                    
                }else{
                    newConteudo += conteudo[i];
                    console.log(newConteudo)
                }  
            }
            l.innerHTML = newConteudo;
        }   
    }
}
