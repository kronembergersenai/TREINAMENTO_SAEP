class SAEPSystem {
    constructor() {
        // System data
        this.questions = [
            {
                id: 1, weight: 1, difficulty: -0.5, discrimination: 1.2, guessing: 0.2,
                text: "Uma indústria de automação está implementando um sistema de controle para um processo de envase automático, que requer a integração de sensores de nível com atuadores para garantir a segurança e eficiência do processo. Desenvolver um algoritmo de controle utilizando um CLP que assegure a operação segura do sistema de envase, considerando a lógica de acionamento e as normas de segurança industrial.",
                options: [
                    "A ( ) Implementar um algoritmo que desliga a bomba de envase quando o nível do tanque atinge o limite superior, sem considerar a ativação de alarmes.",
                    "B ( ) Utilizar um algoritmo que aciona a bomba de envase apenas quando o nível do tanque estiver abaixo do limite inferior, com um temporizador de 5 segundos para evitar acionamentos frequentes.",
                    "C ( ) Desenvolver um algoritmo que aciona a bomba de envase quando o nível do tanque atinge o limite inferior e desliga ao atingir o limite superior, incluindo um sinal de alarme para cada condição",
                    "D ( ) Programar o CLP para manter a bomba de envase ligada continuamente, desativando-a apenas em caso de falha do sistema.",
                    "E ( ) Criar um algoritmo que liga a bomba de envase apenas em horários programados, independentemente do nível do tanque."
                ],
                correctIndex: 2
            },
            {
                id: 2, weight: 1, difficulty: -0.5, discrimination: 1.2, guessing: 0.2,
                text: "Uma indústria de automação está desenvolvendo um sistema de controle para um processo de embalagem que envolve a utilização de sensores digitais para monitoramento de presença e acionamento de atuadores. É necessário garantir que as variáveis de controle estejam alinhadas com as normas de segurança e eficiência operacional.",
                options: [
                    "A ( ) O programa deve iniciar o acionamento dos atuadores assim que um sensor digital detectar a presença do produto na linha, sem considerar o tempo de espera necessário entre os ciclos.",
                    "B ( ) O programa deve acionar os atuadores somente após a confirmação de que todos os sensores digitais estão ativos, garantindo a operação segura do sistema.",
                    "C ( ) O programa deve incluir uma rotina de verificação de falhas nos sensores digitais antes de cada ciclo de acionamento dos atuadores para evitar erros durante o processo de embalagem.",
                    "D ( ) O programa deve acionar os atuadores uma única vez por ciclo de operação, independentemente da quantidade de produtos detectados pelos sensores digitais.",
                    "E ( ) O programa deve desconsiderar a sequência de acionamento dos atuadores, permitindo que sejam ativados aleatoriamente conforme os sensores digitais são acionados."
                ],
                correctIndex: 2
            },
            {
                id: 3, weight: 1, difficulty: 0.0, discrimination: 1.5, guessing: 0.2,
                text: "Uma indústria de automação está desenvolvendo um sistema de controle para o acionamento de uma esteira transportadora que opera com sensores digitais para detectar a presença de materiais. É necessário garantir a segurança e eficiência do processo, considerando a programação de um Controlador Lógico Programável (CLP). Quais etapas devem ser seguidas para programar o CLP, garantindo a segurança e o acionamento adequado da esteira transportadora?",
                options: [
                    "A ( ) Definir as entradas e saídas do sistema, programar o CLP para acionar a esteira quando o sensor digital detectar um objeto e incluir um sistema de parada de emergência.",
                    "B ( ) Programar o CLP para acionar a esteira apenas com a presença de um operador e ignorar os sensores digitais, priorizando a segurança do operador.",
                    "C ( ) Utilizar um sensor digital para acionar a esteira continuamente, sem necessidade de programação do CLP, pois o sensor ja realiza a função de controle.",
                    "D ( ) Programar o CLP para acionar a esteira em qualquer condição, mesmo que o sensor digital não detecte objetos, e não implementar medidas de segurança.",
                    "E ( ) Realizar o acionamento manual da esteira, sem programação do CLP, e utilizar os sensores apenas para monitoramento do ambiente."
                ],
                correctIndex: 0
            },
            {
                id: 4, weight: 1, difficulty: 0.0, discrimination: 1.5, guessing: 0.2,
                text: "Um processo industrial automatizado requer o controle de temperatura e pressão em uma caldeira. O sistema deve utilizar sensores digitais para monitorar essas variáveis e um CLP para realizar o acionamento de válvulas de segurança em caso de anomalias. Desenvolver uma lógica de controle para o CLP que assegure a operação segura da caldeira, considerando os sensores digitais.",
                options: [
                    "A ( ) Implementar uma lógica que feche automaticamente as válvulas caso a temperatura ultrapasse 120ºC e a pressão atinja 10 bar.",
                    "B ( ) Programar o CLP para abrir as válvulas de segurança apenas quando a temperatura atingir 150ºC, independentemente da pressão.",
                    "C ( ) Criar uma lógica que feche as válvulas somente quando ambos os sensores de temperatura e pressão estiverem em condição normal.",
                    "D ( ) Definir um sistema de alarme que ative uma sirene quando a temperatura alcançar 100°C, mas não tomar nenhuma ação nas válvulas.",
                    "E ( ) Utilizar um controle manual das válvulas, permitindo que um operador intervenha quando necessário, sem automatizar o processo."
                ],
                correctIndex: 0
            },
            {
                id: 5, weight: 1, difficulty: 0.8, discrimination: 1.8, guessing: 0.2,
                text: "Uma indústria de automação está desenvolvendo um sistema para controlar a temperatura de um forno industrial, utilizando sensores digitais e um Controlador Lógico Programável (CLP). O sistema deve garantir a segurança e a eficiência do processo, monitorando as variáveis críticas e acionando alarmes em caso de falhas. Descreva como deve ser a implementação da lógica de controle para o acionamento do forno, considerando as normas de segurança e os requisitos técnicos relacionados à medição e controle de temperatura.",
                options: [
                    "A ( ) A lógica de controle deve acionar o forno diretamente ao atingir a temperatura mínima, sem considerar as variações ou falhas dos sensores.",
                    "B ( ) A lógica de controle deve incluir um sistema de redundância nos sensores, além de um alarme que seja acionado quando a temperatura ultrapassar limites seguros.",
                    "C ( ) A lógica de controle deve programar o CLP para monitorar continuamente a temperatura, acionando o forno apenas se as condições de segurança forem atendidas, e implementando um sistema de alarme para falhas nos sensores.",
                    "D ( ) A lógica de controle deve permitir o acionamento do forno com base em um timer, sem a necessidade de monitoramento continuo da temperatura.",
                    "E ( ) A lógica de controle deve acionar o forno apenas quando um operador manualmente confirmar a operação, desprezando a automação e o monitoramento da temperatura."
                ],
                correctIndex: 2
            },
            {
                id: 6, weight: 1, difficulty: 0.0, discrimination: 1.5, guessing: 0.2,
                text: "Uma indústria de automação está desenvolvendo um sistema de controle para um processo de enchimento de tanques que utiliza sensores digitais para monitorar o nível de líquido. O sistema deve ser capaz de acionar bombas e válvulas, garantindo a segurança e a eficiência do processo. Proponha uma solução lógica utilizando um Controlador Lógico Programável (CLP) que assegure o acionamento correto das bombas e válvulas, considerando os sensores digitais e as normas de segurança.",
                options: [
                    "A ( ) Programar o CLP para acionar as bombas sempre que o nível do líquido estiver abaixo de um determinado ponto, sem considerar a segurança das válvulas.",
                    "B ( ) Configurar o CLP para monitorar continuamente os sensores digitais e acionar as válvulas de entrada saída somente quando o nível estiver em uma faixa segura, garantindo a segurança do processo.",
                    "C ( ) Utilizar sensores digitais apenas para indicar quando as bombas devem ser desligadas, sem integrar o controle das válvulas ao sistema.",
                    "D ( ) Desenvolver um algoritmo no CLP que acione as bombas e válvulas simultaneamente, independente do nível de liquido, para otimizar o tempo de operação.",
                    "E ( ) Programar o CLP para acionar as bombas e válvulas com base em um temporizador, sem a utilização de sensores digitais para controle do nível de liquido."
                ],
                correctIndex: 1
            },
            {
                id: 7, weight: 1, difficulty: 0.8, discrimination: 1.8, guessing: 0.2,
                text: "Uma indústria de automação está desenvolvendo um sistema de controle para uma linha de produção que utiliza sensores digitais para monitorar a presença de objetos. A eficiência do acionamento dos dispositivos depende da correta programação do Controlador Lógico Programável (CLP) para garantir a segurança e a eficácia do processo. Descreva como os sensores digitais devem ser integrados ao CLP para otimizar o acionamento dos dispositivos na linha de produção.",
                options: [
                    "A ( ) Os sensores digitais devem ser conectados diretamente aos módulos de saída do CLP, permitindo que os dispositivos sejam acionados independentemente do estado dos sensores.",
                    "B ( ) Os sensores digitais devem ser usados apenas para monitoramento, sem interação com o CLP, que será programado para acionar os dispositivos manualmente.",
                    "C ( ) Os sensores digitais devem ser integrados ao CLP para fornecer dados sobre a presença de objetos, permitindo que o acionamento dos dispositivos ocorra somente quando necessário.",
                    "D ( ) Os sensores digitais devem be programados para ativar os dispositivos em qualquer situação, independentemente da análise do estado do processo.",
                    "E ( ) Os sensores digitais devem ser utilizados apenas para testes de funcionalidade do sistema, sem integração ao CLP na operação real."
                ],
                correctIndex: 2
            },
            {
                id: 8, weight: 1, difficulty: 0.8, discrimination: 1.8, guessing: 0.2,
                text: "Uma indústria de automação está desenvolvendo um sistema de controle para uma linha de produção que envolve o acionamento de motores e sensores de temperatura. O projeto exige a implementação de um Controlador Lógico Programável (CLP) para monitorar e controlar variáveis críticas de segurança durante o processo. Desenvolva uma lógica de controle que garanta a segurança operacional do sistema, considerando a atuação do CLP em caso de falha de um sensor de temperatura",
                options: [
                    "A ( ) O CLP deve ser programado para desligar todos os motores imediatamente ao detectar uma falha no sensor de temperatura.",
                    "B ( ) O CLP deve enviar um alerta visual e sonoro ao operador, permitindo que este decida a ação a ser tomada.",
                    "C ( ) O CLP deve ser programado para ativar um sistema de resfriamento automático até que a falha no sensor de temperatura seja corrigida.",
                    "D ( ) O CLP deve ser configurado para entrar em modo de segurança, desativando apenas o motor relacionado ao sensor de temperatura com falha, enquanto mantém o restante da linha de produção operacional.",
                    "E ( ) O CLP deve registrar a falha do sensor de temperatura em um log e continuar operando normalmente."
                ],
                correctIndex: 3
            },
            {
                id: 9, weight: 1, difficulty: -0.5, discrimination: 1.2, guessing: 0.2,
                text: "Uma indústria de automação está implementando um sistema de controle para um processo de envase automático, que requer a integração de sensores de nível com atuadores para garantir a segurança e eficiência do processo. Desenvolver um algoritmo de controle utilizando um CLP que assegure a operação segura do sistema de envase, considerando a lógica de acionamento e as normas de segurança industrial.",
                options: [
                    "A ( ) Implementar um algoritmo que desliga a bomba de envase quando o nível do tanque atinge o limite superior, sem considerar a ativação de alarmes.",
                    "B ( ) Utilizar um algoritmo que aciona a bomba de envase apenas quando o nível do tanque estiver abaixo do limite inferior, com um temporizador de 5 segundos para evitar acionamentos frequentes.",
                    "C ( ) Desenvolver um algoritmo que aciona a bomba de envase quando o nível do tanque atinge o limite inferior e desliga ao atingir o limite superior, incluindo um sinal de alarme para cada condição.",
                    "D ( ) Programar o CLP para manter a bomba de envase ligada continuamente, desativando-a apenas em caso de falha do sistema.",
                    "E ( ) criar um algoritmo que liga a bomba de envase apenas em horários programados, independentemente do nível do tanque."
                ],
                correctIndex: 2
            },
            {
                id: 10, weight: 1, difficulty: 0.8, discrimination: 1.8, guessing: 0.2,
                text: "Um engenheiro de automação industrial está projetando um sistema de intertravamento para uma linha de produção que envolve o controle de temperatura e pressão em um reator químico. O sistema deve garantir que o reator não opere fora dos limites de segurança estabelecidos, evitando assim riscos de acidentes. Defina a lógica de controle a ser implementada para garantir a segurança do reator, considerando os dispositivos microcontrolados envolvidos no processo.",
                options: [
                    "A ( ) Implementar um intertravamento que desliga automaticamente o reator quando a temperatura ultrapassa 100°C, independentemente da pressão.",
                    "B ( ) Criar um sistema que envie alertas sonoros e visuais quando a pressão do reator ultrapassar 50 bar, mas não desliga o sistema automaticamente.",
                    "C ( ) Desenvolver um intertravamento que desliga o reator se a temperatura exceder 100°C ou a pressão ultrapassar 50 bar.",
                    "D ( ) Programar o sistema para operar normalmente, permitindo que a temperatura e a pressão aumentem até que o operador intervenha manualmente.",
                    "E ( ) Estabelecer um intertravamento que permita a operação do reator apenas quando a temperatura e a pressão estiverem em níveis normais, mas que não desligue o sistema automaticamente em caso de falha."
                ],
                correctIndex: 2
            }
        ];

        this.performanceLevels = {
            "Insuficiente": { min: 0, max: 350, description: "O aluno não demonstra domínio esperado das competências técnicas" },
            "Intermediário": { min: 350, max: 450, description: "O aluno atende parcialmente às competências esperadas" },
            "Adequado": { min: 450, max: 650, description: "O aluno demonstra domínio técnico adequado" },
            "Avançado": { min: 650, max: 1000, description: "O aluno supera expectativas e demonstra excelência técnica" }
        };

        // State management
        this.currentQuestionIndex = 0;
        this.answers = new Array(this.questions.length).fill(null);
        this.studentData = {};
        this.examStartTime = null;
        this.questionStartTime = null;
        this.timer = null;
        this.results = {};

        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupEventListeners();
                this.showTab('identificacao');
            });
        } else {
            this.setupEventListeners();
            this.showTab('identificacao');
        }
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Tab navigation
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                console.log('Tab clicked:', btn.dataset.tab);
                if (!btn.classList.contains('disabled')) {
                    this.showTab(btn.dataset.tab);
                }
            });
        });

        // Identification form
        const identForm = document.getElementById('identificationForm');
        if (identForm) {
            identForm.addEventListener('submit', (e) => {
                console.log('Form submitted');
                e.preventDefault();
                this.handleIdentificationSubmit();
            });
        }

        // Exam navigation
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.goToPreviousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.goToNextQuestion());
        if (finishBtn) finishBtn.addEventListener('click', () => this.finishExam());

        // Report generation
        const pdfBtn = document.getElementById('generatePdfBtn');
        const driveBtn = document.getElementById('saveToGoogleDriveBtn');
        
        if (pdfBtn) pdfBtn.addEventListener('click', () => this.generatePDF());
        if (driveBtn) driveBtn.addEventListener('click', () => this.authenticateGoogleDrive());
        
        console.log('Event listeners set up complete');
    }

    showTab(tabName) {
        console.log('Showing tab:', tabName);
        
        // Hide all tabs
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(tab => {
            tab.classList.remove('active');
        });
        
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected tab
        const selectedTab = document.getElementById(tabName);
        const selectedBtn = document.querySelector(`[data-tab="${tabName}"]`);
        
        if (selectedTab) selectedTab.classList.add('active');
        if (selectedBtn) selectedBtn.classList.add('active');
    }

    handleIdentificationSubmit() {
        console.log('Handling identification submit');
        
        // Get form values directly from elements
        const nome = document.getElementById('nomeAluno').value.trim();
        const matricula = document.getElementById('matricula').value.trim();
        const curso = document.getElementById('curso').value;
        const turma = document.getElementById('turma').value.trim();

        // Validate required fields
        if (!nome || !matricula || !curso || !turma) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        this.studentData = {
            nome: nome,
            matricula: matricula,
            curso: curso,
            turma: turma
        };

        console.log('Student data:', this.studentData);

        // Enable exam tab
        const provaTab = document.getElementById('provaTab');
        if (provaTab) {
            provaTab.classList.remove('disabled');
        }
        
        // Initialize exam
        this.initializeExam();
        this.showTab('prova');
    }

    initializeExam() {
        console.log('Initializing exam');
        this.examStartTime = new Date();
        this.currentQuestionIndex = 0;
        this.answers = new Array(this.questions.length).fill(null);
        
        this.displayQuestion();
        this.startQuestionTimer();
        this.updateProgress();
        this.updateNavigationButtons();
        
        // Show timer
        const timerContainer = document.getElementById('timerContainer');
        if (timerContainer) {
            timerContainer.style.display = 'block';
        }
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const container = document.getElementById('questionContainer');
        
        if (!container || !question) {
            console.error('Question container or question not found');
            return;
        }
        
        container.innerHTML = `
            <div class="question-text">
                <strong>Questão ${this.currentQuestionIndex + 1}:</strong><br>
                ${question.text}
            </div>
            <div class="options-list">
                ${question.options.map((option, index) => `
                    <div class="option-item ${this.answers[this.currentQuestionIndex] === index ? 'selected' : ''}" 
                         data-index="${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
        `;

        // Add event listeners to options
        const optionItems = container.querySelectorAll('.option-item');
        optionItems.forEach(option => {
            option.addEventListener('click', (e) => {
                // Remove previous selection
                optionItems.forEach(opt => opt.classList.remove('selected'));
                // Add selection to clicked option
                option.classList.add('selected');
                // Store answer
                this.answers[this.currentQuestionIndex] = parseInt(option.dataset.index);
                
                console.log('Answer selected:', this.answers[this.currentQuestionIndex]);
                
                // Enable next button
                const nextBtn = document.getElementById('nextBtn');
                if (nextBtn) nextBtn.disabled = false;
            });
        });

        // Update question counter
        const currentQuestion = document.getElementById('currentQuestion');
        const totalQuestions = document.getElementById('totalQuestions');
        if (currentQuestion) currentQuestion.textContent = this.currentQuestionIndex + 1;
        if (totalQuestions) totalQuestions.textContent = this.questions.length;
    }

    startQuestionTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.questionStartTime = new Date();
        let timeLeft = 180; // 3 minutes per question
        
        const updateTimer = () => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const timerDisplay = document.getElementById('timerDisplay');
            if (timerDisplay) {
                timerDisplay.textContent = 
                    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            
            if (timeLeft <= 0) {
                this.goToNextQuestion();
                return;
            }
            
            timeLeft--;
        };

        updateTimer();
        this.timer = setInterval(updateTimer, 1000);
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
    }

    goToPreviousQuestion() {
        if (this.currentQuestionIndex > 0) {
            clearInterval(this.timer);
            this.currentQuestionIndex--;
            this.displayQuestion();
            this.startQuestionTimer();
            this.updateProgress();
            this.updateNavigationButtons();
        }
    }

    goToNextQuestion() {
        clearInterval(this.timer);
        
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
            this.startQuestionTimer();
            this.updateProgress();
            this.updateNavigationButtons();
        } else {
            this.finishExam();
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');

        if (prevBtn) prevBtn.disabled = this.currentQuestionIndex === 0;
        
        if (this.currentQuestionIndex === this.questions.length - 1) {
            if (nextBtn) nextBtn.style.display = 'none';
            if (finishBtn) finishBtn.style.display = 'inline-flex';
        } else {
            if (nextBtn) nextBtn.style.display = 'inline-flex';
            if (finishBtn) finishBtn.style.display = 'none';
        }
    }

    finishExam() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        const timerContainer = document.getElementById('timerContainer');
        if (timerContainer) {
            timerContainer.style.display = 'none';
        }
        
        // Calculate results
        this.calculateResults();
        
        // Enable results and reports tabs
        const resultadosTab = document.getElementById('resultadosTab');
        const relatoriosTab = document.getElementById('relatoriosTab');
        if (resultadosTab) resultadosTab.classList.remove('disabled');
        if (relatoriosTab) relatoriosTab.classList.remove('disabled');
        
        // Show results
        this.displayResults();
        this.showTab('resultados');
    }

    calculateResults() {
        console.log('Calculating results...');
        
        // TRI calculation using 3-parameter logistic model
        const theta = this.estimateAbility();
        const triScore = Math.round(500 + 100 * theta); // Convert to SAEP scale
        
        // Performance analysis
        const correctAnswers = this.answers.reduce((count, answer, index) => {
            return count + (answer === this.questions[index].correctIndex ? 1 : 0);
        }, 0);

        const coherenceIndex = this.calculateCoherenceIndex();
        const performanceLevel = this.getPerformanceLevel(triScore);

        this.results = {
            triScore,
            theta,
            correctAnswers,
            totalQuestions: this.questions.length,
            coherenceIndex,
            performanceLevel,
            recommendations: this.generateRecommendations(correctAnswers, coherenceIndex)
        };
        
        console.log('Results calculated:', this.results);
    }

    estimateAbility() {
        // Newton-Raphson method for maximum likelihood estimation
        let theta = 0; // Initial estimate
        const maxIterations = 20;
        const tolerance = 0.001;

        for (let iter = 0; iter < maxIterations; iter++) {
            let firstDerivative = 0;
            let secondDerivative = 0;

            for (let i = 0; i < this.questions.length; i++) {
                const question = this.questions[i];
                const response = this.answers[i] === question.correctIndex ? 1 : 0;
                
                const probability = this.calculateProbability(theta, question.discrimination, question.difficulty, question.guessing);
                
                // First derivative (score function)
                const qi = 1 - probability;
                if (probability > 0 && qi > 0) {
                    firstDerivative += question.discrimination * ((response - probability) / (probability * qi));
                    
                    // Second derivative (information function)
                    secondDerivative -= question.discrimination * question.discrimination * 
                        ((probability * qi) / Math.pow(probability * qi, 2));
                }
            }

            if (Math.abs(secondDerivative) < 0.0001) break;

            // Newton-Raphson update
            const newTheta = theta - (firstDerivative / secondDerivative);
            
            if (Math.abs(newTheta - theta) < tolerance) {
                return newTheta;
            }
            
            theta = newTheta;
        }

        return theta;
    }

    calculateProbability(theta, a, b, c) {
        // 3-parameter logistic model: P(θ) = c + (1-c) * e^(a*(θ-b)) / (1 + e^(a*(θ-b)))
        const exponent = a * (theta - b);
        const exponential = Math.exp(Math.max(-10, Math.min(10, exponent))); // Prevent overflow
        return c + (1 - c) * (exponential / (1 + exponential));
    }

    calculateCoherenceIndex() {
        // Analyze coherence by checking if easier questions are answered correctly
        let coherentAnswers = 0;
        let totalComparisons = 0;

        for (let i = 0; i < this.questions.length; i++) {
            for (let j = i + 1; j < this.questions.length; j++) {
                const q1 = this.questions[i];
                const q2 = this.questions[j];
                
                if (q1.difficulty < q2.difficulty) { // q1 is easier
                    totalComparisons++;
                    const a1 = this.answers[i] === q1.correctIndex ? 1 : 0;
                    const a2 = this.answers[j] === q2.correctIndex ? 1 : 0;
                    
                    if (a1 >= a2) { // Expected pattern: easier question score >= harder question score
                        coherentAnswers++;
                    }
                }
            }
        }

        return totalComparisons > 0 ? Math.round((coherentAnswers / totalComparisons) * 100) : 100;
    }

    getPerformanceLevel(score) {
        for (const [level, range] of Object.entries(this.performanceLevels)) {
            if (score >= range.min && score <= range.max) {
                return { name: level, ...range };
            }
        }
        return { name: 'Indefinido', min: 0, max: 0, description: 'Nível não identificado' };
    }

    generateRecommendations(correctAnswers, coherenceIndex) {
        const recommendations = [];

        // Performance-based recommendations
        if (correctAnswers < 5) {
            recommendations.push({
                category: 'Revisão Fundamental',
                text: 'Recomenda-se revisar os conceitos básicos de automação industrial, especialmente sistemas de controle com CLP e integração de sensores.'
            });
        }

        if (correctAnswers >= 5 && correctAnswers < 7) {
            recommendations.push({
                category: 'Aprofundamento',
                text: 'Concentre-se no estudo de lógicas de controle mais complexas e sistemas de segurança industrial.'
            });
        }

        if (correctAnswers >= 7) {
            recommendations.push({
                category: 'Excelência',
                text: 'Parabéns! Continue aprimorando seus conhecimentos em automação avançada e sistemas industriais integrados.'
            });
        }

        // Coherence-based recommendations
        if (coherenceIndex < 70) {
            recommendations.push({
                category: 'Estratégia de Resposta',
                text: 'Analise cuidadosamente cada questão antes de responder. Evite respostas por eliminação ou tentativa.'
            });
        }

        // Topic-specific recommendations based on wrong answers
        const difficultQuestions = this.answers.map((answer, index) => {
            return answer !== this.questions[index].correctIndex ? index : null;
        }).filter(index => index !== null);

        if (difficultQuestions.length > 0) {
            recommendations.push({
                category: 'Tópicos para Reforço',
                text: 'Foque especialmente em: sistemas de segurança industrial, programação de CLPs e integração de sensores digitais.'
            });
        }

        return recommendations;
    }

    displayResults() {
        console.log('Displaying results...');
        
        // Display student info
        const studentInfo = document.getElementById('studentInfo');
        if (studentInfo) {
            studentInfo.innerHTML = `
                <div><strong>Nome:</strong> ${this.studentData.nome}</div>
                <div><strong>Matrícula:</strong> ${this.studentData.matricula}</div>
                <div><strong>Curso:</strong> ${this.studentData.curso}</div>
                <div><strong>Turma:</strong> ${this.studentData.turma}</div>
            `;
        }

        // Display TRI score and performance level
        const triScore = document.getElementById('triScore');
        if (triScore) triScore.textContent = this.results.triScore;
        
        const levelElement = document.getElementById('performanceLevel');
        if (levelElement) {
            levelElement.textContent = this.results.performanceLevel.name;
            levelElement.className = `performance-level level-${this.results.performanceLevel.name.toLowerCase()}`;
        }

        // Display performance stats
        const correctAnswers = document.getElementById('correctAnswers');
        if (correctAnswers) {
            correctAnswers.textContent = `${this.results.correctAnswers}/${this.results.totalQuestions}`;
        }
        
        const coherenceIndex = document.getElementById('coherenceIndex');
        if (coherenceIndex) {
            coherenceIndex.textContent = `${this.results.coherenceIndex}%`;
        }

        // Display coherence analysis
        this.displayCoherenceAnalysis();
        
        // Display recommendations
        this.displayRecommendations();
        
        // Create difficulty chart
        this.createDifficultyChart();
    }

    displayCoherenceAnalysis() {
        const container = document.getElementById('coherenceAnalysis');
        if (!container) return;
        
        const analysis = this.analyzeQuestionsByDifficulty();
        
        container.innerHTML = `
            <div class="coherence-item">
                <span>Questões Fáceis:</span>
                <span>${analysis.easy.correct}/${analysis.easy.total}</span>
            </div>
            <div class="coherence-item">
                <span>Questões Médias:</span>
                <span>${analysis.medium.correct}/${analysis.medium.total}</span>
            </div>
            <div class="coherence-item">
                <span>Questões Difíceis:</span>
                <span>${analysis.hard.correct}/${analysis.hard.total}</span>
            </div>
        `;
    }

    analyzeQuestionsByDifficulty() {
        const easy = { correct: 0, total: 0 };
        const medium = { correct: 0, total: 0 };
        const hard = { correct: 0, total: 0 };

        this.questions.forEach((question, index) => {
            const isCorrect = this.answers[index] === question.correctIndex;
            
            if (question.difficulty <= -0.3) {
                easy.total++;
                if (isCorrect) easy.correct++;
            } else if (question.difficulty <= 0.3) {
                medium.total++;
                if (isCorrect) medium.correct++;
            } else {
                hard.total++;
                if (isCorrect) hard.correct++;
            }
        });

        return { easy, medium, hard };
    }

    displayRecommendations() {
        const container = document.getElementById('recommendationsList');
        if (!container) return;
        
        container.innerHTML = this.results.recommendations.map(rec => `
            <div class="recommendation-item">
                <div class="recommendation-category">${rec.category}</div>
                <div class="recommendation-text">${rec.text}</div>
            </div>
        `).join('');
    }

    createDifficultyChart() {
        const canvas = document.getElementById('difficultyChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const analysis = this.analyzeQuestionsByDifficulty();
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Fáceis', 'Médias', 'Difíceis'],
                datasets: [{
                    label: 'Acertos',
                    data: [analysis.easy.correct, analysis.medium.correct, analysis.hard.correct],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
                }, {
                    label: 'Total',
                    data: [analysis.easy.total, analysis.medium.total, analysis.hard.total],
                    backgroundColor: ['#ECEBD5', '#ECEBD5', '#ECEBD5']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: Math.max(analysis.easy.total, analysis.medium.total, analysis.hard.total)
                    }
                }
            }
        });
    }

    generatePDF() {
        if (!window.jspdf || !this.results) {
            alert('PDF não pode ser gerado. Verifique se a prova foi concluída.');
            return;
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Header
        doc.setFontSize(20);
        doc.setTextColor(0, 102, 204); // SENAI blue
        doc.text('SENAI - SAEP', 20, 20);
        
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text('Sistema de Avaliação da Educação Profissional', 20, 30);
        
        // Student info
        doc.setFontSize(12);
        doc.text(`Nome: ${this.studentData.nome}`, 20, 50);
        doc.text(`Matrícula: ${this.studentData.matricula}`, 20, 60);
        doc.text(`Curso: ${this.studentData.curso}`, 20, 70);
        doc.text(`Turma: ${this.studentData.turma}`, 20, 80);
        
        // Results
        doc.setFontSize(16);
        doc.setTextColor(0, 102, 204);
        doc.text('Resultados da Avaliação', 20, 100);
        
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`Nota TRI: ${this.results.triScore}`, 20, 120);
        doc.text(`Nível de Desempenho: ${this.results.performanceLevel.name}`, 20, 130);
        doc.text(`Acertos: ${this.results.correctAnswers}/${this.results.totalQuestions}`, 20, 140);
        doc.text(`Índice de Coerência: ${this.results.coherenceIndex}%`, 20, 150);
        
        // Performance description
        doc.text('Descrição do Nível:', 20, 170);
        const description = doc.splitTextToSize(this.results.performanceLevel.description, 170);
        doc.text(description, 20, 180);
        
        // Recommendations
        doc.setFontSize(16);
        doc.setTextColor(0, 102, 204);
        doc.text('Sugestões Pedagógicas', 20, 210);
        
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        let yPos = 220;
        this.results.recommendations.forEach(rec => {
            if (yPos > 270) { // Add new page if needed
                doc.addPage();
                yPos = 20;
            }
            doc.setFont(undefined, 'bold');
            doc.text(`${rec.category}:`, 20, yPos);
            doc.setFont(undefined, 'normal');
            const recText = doc.splitTextToSize(rec.text, 170);
            doc.text(recText, 20, yPos + 10);
            yPos += 25;
        });

        // Save PDF
        const fileName = `SENAI_${this.studentData.curso}_${this.studentData.turma}_${this.studentData.nome}.pdf`;
        doc.save(fileName);

        // Show success message
        this.showStatusMessage('PDF gerado com sucesso!', 'success');
    }

    authenticateGoogleDrive() {
        // This is a simulation - in a real application, you would implement OAuth2
        this.showStatusMessage('Conectando ao Google Drive...', 'loading');
        
        // Simulate authentication delay
        setTimeout(() => {
            this.showStatusMessage('Funcionalidade em desenvolvimento. Por favor, baixe o PDF e faça upload manual.', 'error');
        }, 2000);
    }

    showStatusMessage(message, type) {
        const statusContainer = document.getElementById('uploadStatus');
        const messageElement = document.getElementById('statusMessage');
        
        if (statusContainer && messageElement) {
            messageElement.textContent = message;
            messageElement.className = `status-message ${type}`;
            statusContainer.style.display = 'block';
            
            if (type === 'success' || type === 'error') {
                setTimeout(() => {
                    statusContainer.style.display = 'none';
                }, 5000);
            }
        }
    }
}

// Initialize the system when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing SAEP system...');
    new SAEPSystem();
});