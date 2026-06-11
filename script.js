const botao = document.querySelector("button")
        botao.addEventListener('click',curtir)

        function curtir(){
            let curtidas = document.querySelector("span")
            curtidas.textContent++;
        }


        // botao do tamanho
        const tamanho = document. getElementById("tamanho")
        tamanho.addEventListener("click", aumentarfonte)
        let fonte = 16;
        //funçao
        function aumentarfonte(){
            fonte++;
            document.body.style.fontSize = fonte + "px";
        }