
const Ilumina={
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
    }
}
