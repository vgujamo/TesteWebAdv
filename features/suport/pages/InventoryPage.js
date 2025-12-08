export default class inventoryPage {  //deve conscidir com o nome do arquivo
    constructor(page) {
        this.page = page //atribui a página do Playwright à variável this.page
        this.title = '.title'                     //seletor do título da página de inventário
    }

    async verificarPaginaInvenario(url, tituloSessao) {
        //existem tipos de espera diferentes, por um tempo fixo 
        //Esperar por um tempo fixo
        //O ideal e eserar por um elemento carregada na pagina
        await this.page.waitForSelector(this.title) //espera o seletor do título estar disponível

        const titulo_atual = await this.page.textContent(this.title) //esta constante guarda o que esta escrito neste localizador
        if(!titulo_atual.includes(tituloSessao)){ //verifica se o título atual nao  inclui o título da sessao
            throw new Error("Login falhou! nao e a pagina de inventario") //lança um erro se o título não corresponder;

        }
    }
}