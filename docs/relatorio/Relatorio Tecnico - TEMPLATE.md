# Informações do Projeto
`TÍTULO DO PROJETO`  

......  TimeWise ......

`ENGENHARIA DE SOFTWARE` 

......  COLOQUE AQUI O SEU TEXTO ......

## Participantes

......  Integrantes do grupo TimeWise ......


>
> Os membros do grupo são: 
> - Gabriel Pongelupe
> - Renato Cazzoletti
> - João Vitor Neri Moreira
> - João Barrel
> - Felipe Picinin
> - Gustavo Chagas Ribeiro

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

......  Na atualidade, os jovens que se encontram no período da adolescência se veem diante de muitas responsabilidades e deveres, portanto a organização se torna essencial para que os mesmos sejam capazes de seguir de modo adequado as respectivas rotinas, não somente em âmbito acadêmico mas também em âmbito social e familiar. ......


## Objetivos

......  O projeto consiste na criação de um software que ajuda estudantes a organizarem suas rotinas de estudo e lidarem com o problema de gestão de tempo em suas vidas. Este aplicativo visa ajudar as pessoas a criar uma rotina de maneira mais eficiente, permitindo que elas tenham mais tempo para se concentrar em seus estudos e alcançar melhores resultados acadêmicos.
O problema enfrentado pelos estudantes é a dificuldade de se concentrarem e conseguirem ter uma boa carga horária de estudos, visto que as diversas distrações virtuais (como celulares, jogos online e etc) e não virtuais (como festas e eventos não acadêmicos) podem ser um impasse na rotina dos jovens estudantes, que muitas vezes são  agravada pelo estresse e pela pressão de cumprir prazos e alcançar metas. Isso pode levar a uma falta de motivação e desempenho abaixo do potencial.
A ideia de solução é um aplicativo que ajuda os estudantes a planejarem suas rotinas de estudo, definirem metas e prioridades, gerenciar tarefas e projetos, e acompanhar seu progresso. O aplicativo irá fornecer uma série de recursos que auxiliam os estudantes a terem uma melhor organização, tais como listas de tarefas, cronogramas, lembretes de prazos, além de um sistema de recompensas para incentivar o cumprimento de metas e objetivos.
O objetivo do projeto é fornecer uma ferramenta que ajude os estudantes a maximizarem seu tempo e alcançarem seus objetivos acadêmicos, enquanto minimizam o estresse e a pressão. A justificativa do projeto é a necessidade de uma ferramenta que atenda às necessidades dos estudantes e auxilie no gerenciamento de tempo, já que muitos aplicativos de gerenciamento de tarefas são voltados para o ambiente profissional e não atendem às necessidades específicas dos estudantes. ......


## Justificativa

......  No contexto de tal realidade, problemas com a gestão de tempo são recorrentes e por esse motivo o nosso estudo em grupo tem o objetivo de ajudar de maneira consistente e eficaz os estudantes que de forma geral tem problemas em gerir o tempo de seu dia. Nós escolhemos estudar esse tema pois esse problema está presente em nosso dia a dia, portanto a compreensão e vivência da realidade se torna um fator que nos ajuda e impulsiona a pesquisar e desenvolver uma solução para tal problema. ......


## Público-Alvo

......  O público-alvo do projeto são estudantes de graduação e pós-graduação, que buscam uma ferramenta de gerenciamento de tempo para ajudá-los a organizarem suas rotinas de estudo. O aplicativo será direcionado para aqueles que têm dificuldade em gerenciar seu tempo e desejam melhorar seu desempenho acadêmico. ......

 
# Especificações do Projeto

......  O projeto consiste na criação de um software que ajuda estudantes a organizarem suas rotinas de estudo e lidarem com o problema de gestão de tempo em suas vidas. Este aplicativo visa ajudar as pessoas a criar uma rotina de maneira mais eficiente, permitindo que elas tenham mais tempo para se concentrar em seus estudos e alcançar melhores resultados acadêmicos. ......

## Personas, Empatia e Proposta de Valor

......  Hipóteses:

1-Imagine que você tem uma prova importante para daqui a 2 semanas, qual método de estudo/organização de tempo você utilizaria? deixaria para estudar de última hora ou teria dificuldades de organizar seu tempo?

2-Em situações de  pressão e estresse gerados por prazos apertados e muitas demandas acadêmicas, você consegue gerir de maneira eficiente seu tempo, ou você tem dificuldades em gerenciá-lo?

3-Imagine que você está em um período de estudos intensos para conseguir passar em um concurso de estágio, como você utilizaria as pausas e intervalos de forma produtiva durante o estudo, de modo a maximizar a absorção do conteúdo e evitar a fadiga mental? 

4-Que outras estratégias você utilizaria para maximizar seu aprendizado sem prejudicar sua saúde mental?


DIAGRAMA PERSONAS:
Pessoa 1: 
Nome: Ana Beatriz
Idade: 19 anos
Hobby: Dançar balé e ver série
Faculdade: Marketing digital  
Trabalho: Estagiária em uma empresa de marketing digital
Personalidade: Desorganizada, focada, ansiosa e criativa
Sonhos: Se tornar uma profissional reconhecida na área de marketing

1) Eu teria dificuldades em organizar meu tempo e provavelmente deixaria para estudar de última hora, o que aumentaria minha ansiedade e diminuiria meu desempenho na prova.

2) Em situações de pressão e estresse, eu costumo ter dificuldades em gerenciar meu tempo, o que pode afetar meu desempenho e minha saúde mental, não consigo controlar minhas emoções e acabo ficando perdida.

3) Durante um período de estudos intensos para um concurso de estágio, eu tentaria usar as pausas e intervalos para fazer atividades relaxantes, como ler um livro, assistir algo on-line ou até dançar. Além disso, procuro me alimentar bem a fim de evitar a fadiga mental e maximizar a absorção do conteúdo.

4) Para maximizar meu aprendizado, eu também procuraria estudar em um ambiente tranquilo e livre de distrações para não sobrecarregar minha mente e evitar desistir dos estudos.
___________________________________________________________________________________


Pessoa 2:
Nome: João Vitor
Idade: 16 anos 
Hobby: ler livros e filmes de ficção científica 
Trabalho: estudante do ensino médio
Personalidade: organizado, determinado, mas facilmente distraído
Sonhos: cursar faculdade de administração e continuar o pequeno negócio da família.

1) Eu gosto de me organizar com antecedência e planejar meus estudos de forma estratégica. Não gosto de estudar de última hora e tenho dificuldade em lidar com pressão.

2) Eu tenho dificuldades em gerenciar meu tempo em situações de pressão e estresse. Prefiro ter um cronograma organizado para evitar alguma sobrecarga. Durante as pausas e intervalos, vou ver filmes e séries de super-heróis que eu gosto, principalmente a trilogia do senhor dos anéis.

3) Eu gosto de fazer alguma atividade física,jogar tênis com meu primo Fabiano. Também gosto de acessar o tiktok e acompanhar meus influencers favoritos, o que me ajuda a desestressar e ficar bem mais tranquilo.

4) Para melhorar eu gosto de experimentar técnicas diferentes de estudo, como fazer resumos bem coloridos. Também tento sempre praticar algum esporte e deixar meu corpo saudável para um melhor desempenho não só na escola, mas na vida.

___________________________________________________________________________________











Pessoa 3:
Nome: Isabela
Idade: 21 anos
Hobby: fotografia
Trabalho: estudante universitária
Personalidade: organizada, disciplinada, perfeccionista
Sonhos: tornar-se uma fotógrafa profissional renomada, viajar pelo mundo registrando momentos únicos

Respostas:
1) Eu me planejaria com antecedência, definiria um cronograma de estudo para as próximas duas semanas e dedicaria um tempo diário para cada disciplina. Também faria revisões periódicas do conteúdo estudado.

2) Eu consigo gerir meu tempo de maneira eficiente, mas posso ficar um pouco ansiosa em situações de muita pressão e estresse. Nessas horas, tento manter a calma e seguir minha rotina da melhor maneira possível.

3) Eu utilizaria as pausas e intervalos para realizar atividades relaxantes e prazerosas, como ouvir música, relaxar,  fotografar e editar ou ler um livro. Também separaria um tempo para fazer atividades físicas, pois acredito que isso ajuda a manter minha mente saudável.

4) Para maximizar meu aprendizado sem prejudicar minha saúde mental, separaria um tempo para descansar e relaxar, evitaria estudar durante a madrugada e tentaria manter um equilíbrio entre estudo e vida pessoal. Também utilizaria técnicas de memorização e revisão para fixar o conteúdo e evitar o acúmulo de matéria.



___________________________________________________________________________________









Pessoa 4:
Nome: Luiza
Idade: 22 anos
Hobby: Ler livros e jogar videogame
Trabalho: Estagiária em uma empresa de tecnologia
Personalidade: desorganizada, ambiciosa e pró-ativa
Sonhos: Se tornar uma referência na área de tecnologia e criar sua própria startup

1)Se eu tiver uma prova importante em duas semanas, me concentro em uma área específica do conteúdo a cada dia, fazendo resumos e revisões constantes.Não sou organizada e priorizo o planejamento e a gestão de tempo, então acabo deixo para estudar de última hora. Tenho dificuldades em definir o tempo adequado para cada assunto e para a revisão, por isso um aplicativo que me ajude a definir e cumprir uma agenda pode ser útil.

2)Eu não consigo gerenciar meu tempo de forma eficiente, o que me deixa sob  pressão e estresse. Não sei priorizar tarefas para concluí-las, para não deixar nada para a última hora. No entanto, tenho um aplicativo que me ajuda a gerenciar e monitorar meu tempo pode ser útil em situações em que tenho muitas demandas acadêmicas pois preciso usar o meu tempo da melhor forma possível.

3)Durante um período de estudos intensos para um concurso de estágio, eu faço  pausas e intervalos para me exercitar e fazer uma pausa mental. Sei que o exercício físico ajuda a reduzir o estresse e aumentar a energia, o que é importante para manter a produtividade ao longo do dia. Também posso usar esses intervalos para fazer tarefas pessoais, como ler um livro ou jogar videogame, desde que não me deixem cansada mentalmente.

4)Para melhorar meu aprendizado sem prejudicar minha saúde mental, tento fazer sessões de estudo mais curtas e frequentes em vez de longas horas . Também uso técnicas de estudo, como resumos, post its  e mapas mentais, para tornar o processo mais eficiente e agradável. Por fim, garanto que estou cuidando bem de mim mesma, com alimentação saudável, sono adequado e tempo para fazer coisas que gosto, como ler e jogar videogame.
 ......


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

Histórias de Usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | quero um aplicativo simples e didático para me organizar para conseguir passar na faculdade dos sonhos e para futuramente ajudar a me organizar nos estudos universitários| Apresento dificuldades em me organizar e um grau elevado de procrastinação               |
|Administrador       | preciso de uma aba de login para monitorar os usuários e ajudá-los caso precise.                 | Permitir que possam administrar contas |
|Desenvolvidor       | preciso de um app com aba de sugestões                 |  maximizar a atenção ao usuário e realizar as mudanças necessárias   |
|Usuário do sistema  | preciso de um calendário atualizado com todas as cargas horárias de estudo e futuros eventos desse mês           | para evitar procrastinação e ter uma visão geral das minhas obrigações               |
|Usuário do sistema  |preciso poder editar e mudar meus horários de maneira fácil e rápida durante o dia a dia           | para que consiga me organizar melhor e lidar com imprevistos               |
|Usuário do sistema  | preciso poder definir as prioridades dos meus afazeres do dia a dia, evitando procrastinação           | para caso necessários, excluir os itens menos importantes da minha rotina.               |
|Usuário do sistema  | quero que o software me indique momentos de descanso          | para não me estressar e sobrecarregar nos estudos              |
|Usuário do sistema  | necessito de uma funcionalidade que me indique as tarefas do dia a dia aplicadas para todos os dias que eu selecionar           | Não esquecer de fazê-las               |
|Usuário do sistema  | preciso de uma funcionalidade que indique meu progresso no dia a dia e assim acompanhar o status de cada tarefa           | Acompanhar minha rotina               |
|Usuário do sistema  | usuário quero poder compartilhar minha rotina com meus amigos           |  para que eles possam copiar ou se inspirar nela para criarem sua própria rotina               |
|Usuário do sistema  |  preciso de um app que dê para acessar pelo computador de forma simples e prática           | para que não perca tempo e consiga me organizar de qualquer forma              |
|Usuário do sistema  | como usuário daltonico preciso de um app pensado na minha deficiencia, com o modo daltonico          |  para que eu não confunda as cores e fique fácil para usar              |




## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

Requisitos Funcionais: 

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Manter Usuários: ter aba de cadastrar usuário, Alterar Usuário, Excluir usuário, Consultar usuário | MÉDIA | 
|RF-002| Organizar calendário: poder adicionar coisas na lista de afazeres, adicionar atividades constantes (ex. que se aplica a toda segunda-feira) ,Adicionar sistema de prioridade (com cores) para as tarefas do dia ,ter a função de poder organizar automaticamente horários para descanso   | ALTA |
|RF-003| Calendário: Opção de mudar datas/horários de eventos ,Opção de navegar pelos dias do mês, checklist das tarefas no calendário. | ALTA | 
|RF-004| Tutorial: ter um vídeo-tutorial de como usar o app, Compartilhamento de rotina, ter a opção de compartilhar sua rotina, copiar rotina para o seu próprio timewise   | MÉDIA |
|RF-005| Programação semanal: Área para ver e editar a programação semanal, Ter horários da atividades e lembretes (com descrição até 25 palavras), Ter definição de prioridade das atividades (caso o horário não esteja especificado), ter um checklist do que já foi feito no dia/semana, Ter barra de progresso das tarefas | ALTA | 
|RF-006| Aba de sugestões Com o login feito ter a funcionalidade de dar sugestões, junto a isso um feedback do software com uma nota de 0 a 10, Aba com dicas de eficiênciadicas para realizar tarefas de modo mais eficiente, métodos de estudo, Personalização do app, Aba para personalizar o app do agrado do cliente   | MÉDIA | 



### Requisitos não Funcionais


Requisitos Não Funcionais:

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Disponibilidade, o sistema deve estar disponível quando necessário  | MÉDIA | 
|RNF-002| Funcionar para celular e windows, |ter website com as funcionalidades do app |  BAIXA | 
|RNF-001|Publicidade, O site deve ser publicado em um ambiente acessível publicamente na Internet  | MÉDIA | 





>   Relação histórias de usuário e requisitos

História de usuário:

Como usuário: quero um aplicativo simples e didático para me organizar para conseguir passar na faculdade dos sonhos e para futuramente ajudar a me organizar nos estudos universitários. Apresento dificuldades em me organizar e um grau elevado de procrastinação
Requisito:
Calendário
Opção de mudar datas/horários de eventos
Opção de navegar pelos dias do mês
checklist das tarefas no calendário
___________________________________________________________________________________
História de usuário:
Como usuário: quero um aplicativo simples e didático para me organizar para conseguir passar na faculdade dos sonhos e para futuramente ajudar a me organizar nos estudos universitários. Apresento dificuldades em me organizar e um grau elevado de procrastinação
Requisito:
Tutorial
ter um vídeo-tutorial de como usar o app
___________________________________________________________________________________


História de usuário:

Como Usuário preciso poder editar e mudar meus horários de maneira fácil e rápida durante o dia a dia para que consiga me organizar melhor e lidar com imprevistos
Como usuário preciso poder definir as prioridades dos meus afazeres do dia a dia, evitando procrastinação, e, para caso necessários, excluir os itens menos importantes da minha rotina.
Como Usuário quero que o software me indique momentos de descanso para não me estressar e sobrecarregar nos estudos
Requisito:
Organizar calendário
poder adicionar coisas na lista de afazeres
adicionar atividades constantes (ex. que se aplica a toda segunda-feira)
Adicionar sistema de prioridade (com cores) para as tarefas do dia
ter a função de poder organizar automaticamente horários para descanso
___________________________________________________________________________________



História de usuário:
Como Usuário necessito de uma funcionalidade que me indique as tarefas do dia a dia aplicadas para todos os dias que eu selecionar
Como Usuário preciso poder editar e mudar meus horários de maneira fácil e rápida durante o dia a dia para que consiga me organizar melhor e lidar com imprevistos
Requisito:
Programação semanal
Área para ver e editar a programação semanal
Ter horários da atividades e lembretes (com descrição até 25 palavras)
Ter definição de prioridade das atividades (caso o horário não esteja especificado)
ter um checklist do que já foi feito no dia/semana
Ter barra de progresso das tarefas
___________________________________________________________________________________
História de usuário:
Como usuário quero poder compartilhar minha rotina com meus amigos para que eles possam copiar ou se inspirar nela para criarem sua própria rotina
Requisito:
Compartilhamento de rotina
ter a opção de compartilhar sua rotina 
copiar rotina para o seu próprio timewise
___________________________________________________________________________________
História de usuário:
Como administrador preciso de uma aba de login para monitorar os usuários e ajudá-los caso precise.


Requisito:
Manter Usuários
ter aba de cadastrar usuário
Alterar Usuário
Excluir usuário
Consultar usuário
___________________________________________________________________________________
História de usuário:
como desenvolvedor preciso de um app com aba de sugestões para maximizar a atenção ao usuário e realizar as mudanças necessárias 
como usuário daltonico preciso de um app pensado na minha deficiencia, com modo daltonico, para que eu não confunda as cores e fique fácil para usar
Requisito:
Aba de sugestões 
Com o login feito ter a funcionalidade de dar sugestões 
Junto a isso um feedback do software com uma nota de 0 a 10
Aba com dicas de eficiência
dicas para realizar tarefas de modo mais eficiente 
métodos de estudo
___________________________________________________________________________________
História de usuário:
Como usuário preciso de um app que dê para acessar pelo computador de forma simples e prática para que não perca tempo e consiga me organizar de qualquer forma
Requisito:
Funcionar para celular e windows (não funcional)
ter website com as funcionalidades do app
___________________________________________________________________________________
História de usuário:
como usuário daltonico preciso de um app pensado na minha deficiencia, com modo daltonico, para que eu não confunda as cores e fique fácil para usar
Requisito:
Acessibilidade  para daltónicos
Ajuste de cores para daltónicos 
Personalização do app
Aba para personalizar o app do agrado do cliente  
___________________________________________________________________________________


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

......  A simplicidade e a fluidez do  user flow  em nosso aplicativo de gestão de tempo é fundamental para proporcionar uma experiência eficiente e intuitiva aos usuários. Ao projetar o user flow, é essencial simplificar e otimizar cada etapa do processo, garantindo que o usuário possa realizar suas tarefas de maneira rápida e sem complicações.

Para que nosso aplicativo apresente uma estrutura clara e concisa, com uma interface de usuário intuitiva é necessário que os elementos visuais, como ícones e botões, sejam bem definidos e de fácil compreensão, permitindo que o usuário navegue pelo aplicativo de forma natural, sem a necessidade de consultar manuais ou tutoriais.

A fluidez do nosso user flow está relacionada à sequência lógica das ações e transições entre as telas. Um aplicativo de gestão de tempo eficiente deve permitir que o usuário execute suas tarefas de forma contínua, sem interrupções desnecessárias ou excesso de etapas. A transição suave entre as funcionalidades e a resposta ágil às interações do usuário são elementos essenciais para criar um user flow fluido. ......

## User Flow

......  ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/94ad2be8-1fbb-4236-9cb0-861d0068fe60)  ......


## Wireframes

 ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130617546/26669507-d494-45a1-b251-420d4dd3e509)
 
 wireframe do nosso site de gestão de tempo para estudantes

Calendario & Agenda
 ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/bd00a70c-99ee-4715-9a33-7200e6c1dd64)

 Aba de edição de perfil
 ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/394fe787-a640-43d8-9b06-0c0d2a5867c9)

 Criação de listas de tarefas
 ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/c593c4f6-b3c1-4780-870b-8407aa8baefc)

 Timers
 ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/e747d601-91e9-417c-825d-fffc34d378c3)

 Aba de cadastro
 ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/e9314697-44b3-4bbe-97df-199a7a309667)

 Aba de avaliação do site
 ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/fa99fe82-d153-4f67-89f5-ba2c37152382)

 Aba de dicas de estudo e sujestões 
 ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/b92b19e2-8fe5-48e1-bbae-7ac3d5296b37)










# Metodologia

......  Metodologia feita por meio do trello baseado em metodologias ágeis.
![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/ccc0d5da-64b5-4cd2-9fbd-b1eb18c177fd) ......


## Divisão de Papéis

......  ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/20a1a240-c689-4428-a435-7e60817e55d5)
 ......


## Ferramentas

......  ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/12ea4205-d73e-4aca-a630-2fa4418766d5)
  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Trello |  [https://miro.com/XXXXXXX](https://trello.com/invite/b/kDQZKvCl/ATTId23d5cc76bcbcc7a27a2463e4db6af598EBC53A5/untitled-board) | 
|Repositório de código | GitHub | [https://github.com/XXXXXXX](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise) | 
|Hospedagem do site | LiveServer |  N/A | 
|Protótipo Interativo |  Figma |[https://figma.com/XXXXXXX](https://www.figma.com/file/YmNiGwbBfNUtis8MjYTRYP/Mobile-Applications-Wireframes-(Community)?node-id=0%3A1&t=JpVyYjtEhhS07O28-1) | 


## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  O TimeWise é um aplicativo inovador de gestão de tempo projetado especialmente para estudantes de graduação e pós-graduação. Com o objetivo de ajudar os estudantes a organizar suas rotinas de estudo e lidar com o desafio da gestão do tempo, o aplicativo oferece uma variedade de recursos que permitem uma melhor organização, definição de metas e acompanhamento do progresso. O TimeWise foi desenvolvido para maximizar o tempo disponível, minimizar o estresse e a pressão, e melhorar o desempenho acadêmico dos estudantes.

Objetivos do Projeto:

Criar uma plataforma intuitiva e fácil de usar, que permita aos estudantes gerenciar suas rotinas de estudo de forma eficiente.
Oferecer recursos de planejamento, definição de metas e prioridades para auxiliar os estudantes na organização de suas tarefas acadêmicas.
Proporcionar lembretes de prazos e notificações personalizadas para ajudar os estudantes a manterem-se atualizados com seus compromissos acadêmicos.
Fornecer relatórios e estatísticas para que os estudantes possam acompanhar seu progresso e identificar áreas de melhoria em sua rotina de estudos. ......

## Tecnologias Utilizadas

......  



Calendário e Cronograma: Os estudantes poderão criar e visualizar um calendário personalizado com seus compromissos, aulas, provas e prazos de entrega de trabalhos. O aplicativo permitirá a definição de lembretes e notificações para ajudar os estudantes a se manterem organizados e cumprirem seus compromissos.

Lista de Tarefas: Os estudantes poderão criar listas de tarefas específicas para cada disciplina ou projeto. O aplicativo permitirá a priorização de tarefas, estabelecendo prazos e metas para cada uma delas.

Estatísticas e Relatórios: O aplicativo fornecerá relatórios e estatísticas detalhadas sobre o tempo gasto em cada tarefa, o progresso alcançado e o cumprimento das metas estabelecidas. Essas informações ajudarão os estudantes a avaliarem seu desempenho e identificarem áreas de melhoria em sua rotina de estudos.

 ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  ![image](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2023-1-ti1-0385200-timewise/assets/130700804/97dbbb13-e53f-422e-aad0-36d431acfe7a) .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  
Cenário de Teste 1: Login no Aplicativo
Descrição: Verificar se os usuários conseguem fazer login no aplicativo TimeWise.

Cenário de Teste 2: Adicionar Tarefa
Descrição: Verificar se os usuários conseguem adicionar uma nova tarefa no aplicativo TimeWise.

Cenário de Teste 3: Marcar Tarefa como Concluída
Descrição: Verificar se os usuários conseguem marcar uma tarefa como concluída no aplicativo TimeWise.
Passos:

Cenário de Teste 4: Visualização de Rotina
Descrição: Verificar se os usuários conseguem visualizar sua rotina de estudo no aplicativo TimeWise.

Cenário de Teste 5: Configurações de Notificações
Descrição: Verificar se os usuários conseguem configurar as notificações no aplicativo TimeWise.


> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  Cenário de Teste 1: Login no Aplicativo
Descrição: Verificar se os usuários conseguem fazer login no aplicativo TimeWise.
Passos:

Abrir o aplicativo TimeWise.
Clicar na opção "Fazer Login".
Informar o nome de usuário e senha corretos.
Clicar no botão "Entrar".
Resultado Esperado: O usuário consta como logado.

Cenário de Teste 2: Adicionar Tarefa
Descrição: Verificar se os usuários conseguem adicionar uma nova tarefa no aplicativo TimeWise.
Passos:

Abrir o aplicativo TimeWise.
Acessar a seção "Lista de Tarefas".
Clicar no botão "Adicionar Tarefa".
Informar o nome da tarefa.
Clicar no botão "Salvar".
Resultado Esperado: A tarefa é adicionada com sucesso na lista de tarefas do usuário.

Cenário de Teste 3: Marcar Tarefa como Concluída
Descrição: Verificar se os usuários conseguem marcar uma tarefa como concluída no aplicativo TimeWise.
Passos:

Abrir o aplicativo TimeWise.
Acessar a seção "Lista de Tarefas".
Selecionar uma tarefa da lista.
Clicar no botão de conclusão da tarefa.
Verificar se a tarefa é marcada como concluída na lista.
Resultado Esperado: A tarefa é marcada como concluída com sucesso na lista de tarefas do usuário.

Cenário de Teste 4: Visualização de Rotina
Descrição: Verificar se os usuários conseguem visualizar sua rotina de estudo no aplicativo TimeWise.
Passos:

Abrir o aplicativo TimeWise.
Acessar a seção "Minha Rotina".
Verificar se os horários e disciplinas da rotina são exibidos corretamente.
Resultado Esperado: A rotina de estudo é exibida corretamente na seção "Minha Rotina" do usuário.

Cenário de Teste 5: Configurações de Notificações
Descrição: Verificar se os usuários conseguem configurar as notificações no aplicativo TimeWise.
Passos:

Abrir o aplicativo TimeWise.
Acessar a seção "Configurações".
Ajustar as preferências de notificações, como horários e tipos de lembretes.
Salvar as configurações.
Resultado Esperado: As configurações de notificações são salvas com sucesso e as notificações são exibidas de acordo com as preferências do usuário. ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  Framework de Testes: Para realizar os testes automatizados, foi utilizado um framework de testes. Esses frameworks permitem a criação e execução de scripts de teste automatizados, facilitando a simulação de interações do usuário e a verificação de comportamentos esperados.

Ambiente de Testes: Foi utilizado um ambiente de testes dedicado, separado do ambiente de produção, para garantir a integridade dos dados e evitar interferências nos testes. 

Ferramentas de Gerenciamento de Defeitos: Para registrar e acompanhar os defeitos encontrados durante os testes, para o gerenciamento de defeitos foi utilizado o Trello. Tal ferraments nos permitiu o registro detalhado dos defeitos, atribuição de responsáveis, acompanhamento do status e comunicação eficiente entre os membros da equipe de desenvolvimento e teste.

Testes Manuais: Além dos testes automatizados, também foram realizados testes manuais para verificar a usabilidade, a interface do usuário e outros aspectos que exigem uma avaliação subjetiva. Esses testes foram executados por membros da equipe de teste, seguindo cenários de teste pré-definidos e explorando diferentes casos de uso. ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  Durante os testes realizados no aplicativo TimeWise, foram identificados pontos fortes e pontos fracos na solução. Essas descobertas fornecem informações valiosas para o grupo a fim de aprimorar o aplicativo nas próximas iterações. A seguir, são apresentados os resultados dos testes e as ações planejadas para abordar os pontos fracos:

Pontos Fortes:

Funcionalidades Essenciais: O aplicativo TimeWise demonstrou ser eficaz na organização da rotina de estudo e gestão de tempo dos usuários. As funcionalidades de criação de rotina, definição de metas e lembretes de prazos foram consideradas pontos fortes, auxiliando os estudantes a manterem o foco e melhorarem seu desempenho acadêmico.

Interface Intuitiva: A interface do usuário do aplicativo TimeWise preza pela simplicidade e usabilidade. pode ser descatacada  a facilidade de navegação e a clareza das informações apresentadas. Isso contribui para uma experiência positiva do usuário e uma adoção mais fácil da solução.

Pontos Fracos:

Estabilidade e Desempenho: Alguns testes evidenciaram problemas de estabilidade e desempenho do aplicativo TimeWise, como lentidão na resposta e eventuais travamentos. Essas questões podem impactar negativamente a experiência do usuário e comprometer sua confiança na aplicação.

Testes de Usuários Diversificados: Os testes realizados envolveram principalmente membros da equipe , o que pode ter limitado a diversidade de experiências e feedbacks. É importante envolver um grupo mais amplo de usuários, com diferentes perfis e necessidades, para obter uma visão mais abrangente sobre o aplicativo.

Ações Planejadas:

Otimização de Desempenho: O grupo pretende realizar a otimização do aplicativo TimeWise, identificando e corrigindo as áreas problemáticas que impactam na estabilidade e no desempenho. 

Coleta de Feedback dos Usuários: Nos implementamos um mecanismo de coleta de feedback dos usuários, por meio de uma aba de avaliação dentro do próprio aplicativo. Isso permitirá obter insights valiosos sobre as necessidades e expectativas dos usuários, auxiliando na identificação de melhorias e no direcionamento do desenvolvimento futuro.

Testes de Usuários Diversificados: Serão realizados esforços para envolver um grupo mais amplo de usuários durante os testes, incluindo estudantes de diferentes idades, áreas de estudo e níveis de experiência. Essa diversidade permitirá identificar melhorias específicas para atender às necessidades variadas dos usuários. ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
