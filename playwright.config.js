import { defineConfig } from "@playwright/test"

export default defineConfig({
    testDir: "./features",                     //Diretório dos testes onde estao os arquivos .feature
    timeout: 30000,                                  //Tempo máximo de execucao em para cada teste
    retries: 1,                                      //Número de tentativas em caso de falha
    reporter: [["list"]],        //Relatório em forma de lista que abre automaticamente após os testes
    use: {
        baseURL: "https://www.saucedemo.com",        //URL do site base para os testes
        headless: false,                             //Executa os testes em modo visível (false) ou headless (true)
        screenshots: "only-on-failure",              //Tira screenshots apenas em caso de falha
        video: "retain-on-failure",                  //Grava vídeos apenas em caso de falha
        trace: "on-first-retry",                     //Coleta rastreamento na primeira tentativa de falha
       
    },
    workers: 1,
    timeout: 60000,
    launchOptions: {
        slowMo: 1000,                                //Desacelera as ações em 500ms para melhor visualização
    },
    reporter: [["list"],["html",
        { outoutFolder: "report-html" }]],            //Gera relatório em HTML na pasta especificada

})