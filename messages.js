module.exports = {
    issueInProgressComment: `**Definição de Pronto (DoD)**
--

<details><summary><strong> 1. Em andamento (Implementação e Boas Práticas - Parte 1) </strong></summary>

- [ ] 1.1. Foi criada a story do componente no storybook?

- [ ] 1.2. Foi usado componente [StorybookContainer](http://localhost:3000/development/coding_standards#226---componente-storybookcontainer)? 

- [ ] 1.3. Foram utilizado knobs para alterar o valor das props? 
    - Deve ter um knob para cada prop do componente.

- [ ] 1.4. Caso seja um componente relacionado ao Form, foi implementado seguindo [nosso padrão](http://localhost:3000/development/forms)? 

- [ ] 1.5. Caso seja uma issue de correção de bug, foi anotado na issue de forma clara e objetiva o que gerou o bug?

<strong> 1.6. Acessibilidade </strong>

[Em casos de dúvidas, leia o nosso padrão de codificação de acessibilidade.](http://localhost:3000/development/accessibility)

- [ ] 1.6.1. Foi implementada acessibilidade para o componente de acordo [com o padrão](http://localhost:3000/development/coding_standards#230---foco-de-acessibilidade)?

- [ ] 1.6.2. O componente segue as melhores práticas de acessibilidade (ex.: accessibilityLabel, accessibilityRole). 

<strong> 1.7. Interface e Usabilidade </strong>

- [ ] 1.7.1. A UI do componente está conforme o design?

<strong> 1.8. Documentação </strong>

- [ ] 1.8.1. O arquivo da documentação foi codificado seguindo o [padrão do componente TextField](https://react-native.dls.intranet.bb.com.br/components/text_field)?

- [ ] 1.8.2. Foi usado o componente [DocumentationContainer](http://localhost:3000/development/coding_standards#225---componente-documentationcontainer)?

- [ ] 1.8.3. Foi adicionada a [tabela de props na documentação](http://localhost:3000/development/coding_standards#228-tabela-de-props-na-documenta%C3%A7%C3%A3o)?
Apresentar tabela de Props seguindo o padrão: props que são "required" ficam no topo, e as opcionais em baixo.      

- [ ] 1.8.4. Apresentar exemplos das variações possíveis do componente.    
Quando o componente tiver muitas variações, apresentar pelo menos uma, e colocar uma seção abaixo com detalhamento.   
     
- [ ] 1.8.5. Quando as variações do componente tiverem algum detalhe importante, criar uma seção abaixo do Playground principal descrevendo o comportamento (ver exemplo do componente Image).

- [ ] 1.8.6. O componente está documentado com uma descrição clara de sua funcionalidade e uso?

- [ ] 1.8.7. A documentação contém exemplos de como usar o componente?

</details>

<details><summary><strong> 2. Code Review (Qualidade do Código - Parte 2) </strong></summary>

Em casos de dúvidas, leia o nosso [padrões de codificação e boas práticas](http://localhost:3000/development/coding_standards)

- [ ] 2.1. A estrutura de diretórios do componente está [no padrão](http://localhost:3000/development/project_structure#estrutura-de-diret%C3%B3rios-e-arquivos)?

- [ ] 2.2. A nomenclatura dos arquivos do componente está [no padrão](http://localhost:3000/development/project_structure#organiza%C3%A7%C3%A3o-no-projeto)?

- [ ] 2.3. Os estilos do componente foram definidos utilizando os [tokens da biblioteca DLS](http://localhost:3000/development/tokens_and_theming)?

- [ ] 2.4. Os arquivos de componente, estilos e tipos foram codificados seguindo o [padrão do componente TextField](https://react-native.dls.intranet.bb.com.br/components/text_field)?

- [ ] 2.5. Os [tipos necessários](http://localhost:3000/development/coding_standards#1-typescript) foram usados?

- [ ] 2.6. Foram definidos os tipos dos estilos e das props?

- [ ] 2.7. Foram criados os [comentários acima de cada atributo](http://localhost:3000/development/coding_standards#17---descri%C3%A7%C3%B5es-dos-tipos-das-props) do tipo das props?

- [ ] 2.8. Não foi definido nenhum estilo no arquivo do componente? Todos os estilos devem ser definidos no arquivo de estilo. 

- [ ] 2.9. Foi verificado se os nomes das props do componente estão alinhados com os nomes das props da [biblioteca web](https://angular.dls.desenv.bb.com.br/)? 

- [ ] 2.10. Não há críticas ou melhorias pendentes após a revisão?

<strong> 2.11. Desempenho </strong>

- [ ] 2.11.1. O componente apresenta problemas de performance, como lentidão ou vazamentos de memória?

- [ ] 2.11.2. Imagens, animações e outros recursos estão otimizados para um bom desempenho?

</details>

<details><summary><strong> 3. Testes técnicos e manuais (Testabilidade - Parte 3)</strong></summary>

Em casos de dúvidas, leia o nosso [padrões de teste](http://localhost:3000/development/tests) e a seção [O que testar.](http://localhost:3000/development/tests#testando-componente-estilizados)

- [ ] 3.1. Testes unitários foram escritos para o componente?

- [ ] 3.2. A cobertura de 100% de testes unitários foi alcançada?

- [ ] 3.3. Foi criado um [teste de snapshot](http://localhost:3000/development/tests#testes-de-snapshot) do componente com os valores default das props?

- [ ] 3.4. Foram criados [testes para cada variação](http://localhost:3000/development/tests#definir-os-cen%C3%A1rios-de-teste) de estilo possível?

- [ ] 3.5. É possível testar todas as props do componente? ([Cenários relacionados às props](http://localhost:3000/development/tests#cen%C3%A1rios-relacionados-%C3%A0s-props))
    - Deve ser possível interagir e testar os comportamentos definidos do componente.
</br>

- [ ] 3.6. Foram criados testes para os comportamentos do componente?

- [ ] 3.7. Os testes foram executados localmente e passaram com sucesso.

- [ ] 3.8. A estrutura de diretórios e nomenclatura de teste está [no padrão](http://localhost:3000/development/tests#cobertura-de-testes)?

<strong> 3.9. Acessibilidade (Obrigatório para novos componentes) </strong>

Em casos de dúvidas, leia o nosso [padrões de teste de acessibilidade.](http://localhost:3000/development/tests#testes-de-acessibilidade)

- [ ] 3.9.1. Foram criados [testes relacionados a acessibilidade](http://localhost:3000/development/tests#cen%C3%A1rios-relacionados-%C3%A0-acessibilidade)? 

_Android_
- [ ] 3.9.2. A acessibilidade foi testada no emulador?

- [ ] 3.9.3. A acessibilidade foi testada em dispositivo físico?

_iOS_
- [ ] 3.9.4. A acessibilidade foi testada no emulador?

- [ ] 3.9.5. A acessibilidade foi testada em dispositivo físico?

</details>

<details><summary><strong> 4. Review de Entregas (Roteiro - Parte 4)</strong></summary>

- [ ] 4.1. Apresentar essa definição de pronto para trazer visibilidade e alinhamento ao que foi realizado.

- [ ] 4.2. Apresentar o componente e exemplos das variações possíveis.    
Quando o componente tiver muitas variações, apresentar pelo menos uma, e de preferência em dispositivo físico.

- [ ] 4.3. Apresentar exemplos das variações possíveis do componente com leitor de tela ativo.    
Quando o componente tiver muitas variações, apresentar pelo menos uma, e de preferência em dispositivo físico.

- [ ] 4.4. Apresentar todos os testes unitários sendo executados localmente e passando com sucesso.

- [ ] 4.5. Apresentar a execução do Typescript.

- [ ] 4.6. Apresentar a documentação.

- [ ] 4.7. Foi aprovado pelo time de UX?

- [ ] 4.8. Todos os apontamentos foram resolvidos? Caso não, descreva-o abaixo.

</details>`,
    // Adicione outras mensagens aqui, caso necessário
};
