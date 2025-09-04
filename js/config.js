/**
 * config.js - Configurações do quiz
 * 
 * Este arquivo contém as configurações personalizáveis do quiz.
 * Altere estas configurações para adaptar o quiz à sua matéria.
 */

// Configuração do quiz
const quizConfig = {
    // Título principal que aparece na tela de login
    // Título principal que aparece na tela de login
    // Atualizado para refletir a temática dos módulos de cirurgia e processos
    // relacionados à cicatrização, coagulação e preparo pré‑operatório.
    title: "Quiz de Cirurgia",
    
    // Nome do localStorage para salvar os dados do usuário
    // Nome do localStorage para salvar os dados do usuário
    // Definido com um identificador único para este quiz, evitando conflitos
    // com outros quizzes que possam utilizar o mesmo domínio.
    storageKey: "quizCirurgiaData",
    
    // Lista de módulos disponíveis
    // O nome do arquivo deve corresponder ao valor em 'file' (sem a extensão .json)
    // Lista de módulos disponíveis
    // Cada módulo representa um tema específico. O campo `file` deve
    // corresponder ao nome do arquivo JSON sem a extensão.
    modules: [
        {
            id: "cicatrizacao",
            name: "Cicatrização Normal",
            file: "questoes_cicatrizacao"
        },
        {
            id: "cicatrizacao_patologica",
            name: "Cicatrização Patológica",
            file: "questoes_cicatrizacao_patologica"
        },
        {
            id: "coagulacao",
            name: "Coagulação e Hemostasia",
            file: "questoes_coagulacao"
        },
        {
            id: "preoperatorio",
            name: "Avaliação Pré‑operatória",
            file: "questoes_preoperatorio"
        }
    ]
};
