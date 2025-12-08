import { Given, When, Then } from '@cucumber/cucumber'
import LoginPage from "../pages/LoginPage.js"
import InventoryPage from "../pages/InventoryPage.js"


let loginPage, inventoryPage                     //Variaveis globais para as páginas para receberem as instancias das classes

Given('que estou na pagina de login do SauceDemo', async () => {
    loginPage = new LoginPage(page)         //Instancia a classe LoginPage e atribui à variável global loginPage
    inventoryPage = new InventoryPage(page) //Instancia a classe InventoryPage e atribui à variável global inventoryPage

    await page.goto('https://www.saucedemo.com') //abrir o navegador na pagina indicada
    
})

When('preencho o {string} e a {string}', async (usuario, senha) => { //Recebe os parâmetros usuario e senha da feature
    await loginPage.login(usuario, senha) //Chama o método login da classe LoginPage, passando os parâmetros usuario e senha
    await page.waitForTimeout(2000)
})

When('clico no botao de login', async () => {
   await loginPage.clicar_no_botao_login() //Chama o método para clicar no botão de login


})

    Then('vou para a pagina {string} e vejo o {string}', async (url, titulo_sessao) => { //Recebe os parâmetros url e titulo_sessao da feature
        //await page.waitForTimeout(2000)
        await inventoryPage.verificarPaginaInvenario(url, titulo_sessao) //Chama o método para verificar a página de inventário
    
        //await page.waitForTimeout(3000) //Espera bruta de 2 segundos antes de finalizar o teste / alfinete
})      


