//Antes de tudo ---> BeforeAll

/// Primeiro Teste
///Blocos de passos
///Antes de cada Passo ---> BeforeStep
///Given
///Depois de cada Passo ---> AfterStep
///When
///Then
///Depois de cada Teste ---> After

/// Antes de cada Teste ---> Before
/// Segundo Teste
///Blocos de passos
///Given
///When
///Then
///Depois de cada Teste ---> After

/// Depois de tudo ---> AfterAll

    import {BeforeAll, AfterAll} from '@cucumber/cucumber'
    import { chromium } from 'playwright'

let browser, context, page                            //Variaveis do Playwright

BeforeAll (async () => {
    browser = await chromium.launch({ headless: false }) //Inicia o navegador em modo visível - false e true para modo headless
    context = await browser.newContext()                 //Cria um novo contexto de navegação
    page = await context.newPage()                       //Abre uma nova página no contexto criado
    global.page = page                                   //Torna a variável page global para ser acessada em outros arquivos
})

AfterAll (async () => {
    await browser.close()                                //Fecha o navegador após todos os testes
})