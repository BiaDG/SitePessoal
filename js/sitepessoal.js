function togglelang(lang){
    if (lang === 'pt'){
        document.getElementById('pt').classList.add('active');
        document.getElementById('en').classList.remove('active');
    }
    else if (lang === 'en'){
        document.getElementById('en').classList.add('active');
        document.getElementById('pt').classList.remove('active');
    }
}
function tema(){
    let light= document.getElementById('tema').innerHTML
    if (light=="Escuro"){
        document.getElementById('tema').innerHTML="Claro";
    }
    if (light=="Claro"){
        document.getElementById('tema').innerHTML="Escuro";
    }
}
function nav(navigation){
    if (navigation === 'sobre'){
        document.getElementById('sobrenav').classList.add('active');
        document.getElementById('projetonav').classList.remove('active');
        document.getElementById('contactonav').classList.remove('active');
    }
    else if (navigation === 'projeto'){
        document.getElementById('sobrenav').classList.remove('active');
        document.getElementById('projetonav').classList.add('active');
        document.getElementById('contactonav').classList.remove('active');
    }
    else if (navigation === 'contacto'){
        document.getElementById('sobrenav').classList.remove('active');
        document.getElementById('projetonav').classList.remove('active');
        document.getElementById('contactonav').classList.add('active');
    }
}