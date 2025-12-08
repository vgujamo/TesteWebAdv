const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber-report.json',   // Caminho do arquivo JSON gerado pelo Cucumber
    output: 'reports/cucumber-report.html',     // Caminho do arquivo HTML de saída
    reportSuiteAsScenarios: true,               // Relata cada cenário como uma suíte separada
    launchReport: true,                         // Abre o relatório automaticamente após a geração
    metadata: {                                 // Metadados adicionais para o relatório
        "App Version": "1.0.0",                 // Exemplo de versão do aplicativo
        "Test Environment": "STAGING",          // Ambiente de teste
        "Browser": "Chromium",                  // Navegador usado nos testes
        "Platform": process.platform,           // Plataforma do sistema operacional
    }
    }

reporter.genarete(options);                     // Gera o relatório com as opções especificadas