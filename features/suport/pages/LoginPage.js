export default class LoginPage {  //deve conscidir com o nome do arquivo
    constructor(page) {
        this.page=page
        this.username = '#user-name'                    //seletor do campo username
        this.password = '#password'                      //seletor do campo password
        this.loginButton = '[data-test=login-button]'   //seletor do botão login
        this.url = 'https://www.saucedemo.com'          //url da página de login

    }

    //Funcoes que interagem com os elementos da página
    async login(username, password) {
        await this.page.fill(this.username, username) //Preencher <localizador ,<valor>
        await this.page.fill(this.password, password) //Preencher <localizador ,<valor>
    }
    async clicar_no_botao_login() {
        await this.page.click(this.loginButton)        //Clicar no botão login
}
}