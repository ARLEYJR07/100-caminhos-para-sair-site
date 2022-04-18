
    function acesso(){
        var senha = document.getElementById('senha').value;
        if(senha == codigo){
            location.href = "fase2.html"
            
        }else{
            alert('senha errada')
        }

    }

