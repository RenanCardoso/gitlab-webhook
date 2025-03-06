module.exports = {
    issueInProgressComment: `**Definição de Pronto (DoD)**
--

<details><summary><strong> 1. Em andamento (Implementação e Boas Práticas) </strong></summary>

- [ ] 1.1. Foi criada a story do componente no storybook?

- [ ] 1.2. Foi usado componente StorybookContainer? 

- [ ] 1.3. Foram utilizado knobs para alterar o valor das props? 
    - Deve ter um knob para cada prop do componente.

<strong> 1.4. Acessibilidade </strong>

- [ ] 1.4.1. Foi implementada acessibilidade para o componente de acordo com o padrão?

- [ ] 1.4.2. O componente segue as melhores práticas de acessibilidade (ex.: accessibilityLabel, accessibilityRole).

<strong> 1.5. Interface e Usabilidade </strong>

- [ ] 1.5.1. A UI do componente está conforme o design?

<strong> 1.6. Documentação </strong>

- [ ] 1.6.1. O arquivo da documentação foi codificado seguindo o padrão do componente TextField?

- [ ] 1.6.2. Foi usado o componente DocumentationContainer?

- [ ] 1.6..3. Foi adicionada a tabela de props na documentação?
Apresentar tabela de Props seguindo o padrão: props que são "required" ficam no topo, e as opcionais em baixo.      

- [ ] 1.6.3. Apresentar exemplos das variações possíveis do componente.    
Quando o componente tiver muitas variações, apresentar pelo menos uma, e colocar uma seção abaixo com detalhamento.   
     
- [ ] 1.6.4. Quando as variações do componente tiverem algum detalhe importante, criar uma seção abaixo do Playground principal descrevendo o comportamento (ver exemplo do componente Image).

- [ ] 1.6.5. O componente está documentado com uma descrição clara de sua funcionalidade e uso?

- [ ] 1.6.6. A documentação contém exemplos de como usar o componente?

</details>

<details><summary><strong> 2. Code Review (Qualidade do Código) </strong></summary>

- [ ] 2.1. A estrutura de diretórios do componente está no padrão?

- [ ] 2.2. A nomenclatura dos arquivos do componente está no padrão?

- [ ] 2.3. Os estilos do componente foram definidos utilizando os tokens da biblioteca DLS?

- [ ] 2.4. Os arquivos de componente, estilos e tipos foram codificados seguindo o padrão do componente TextField?

- [ ] 2.5. Os tipos necessários foram usados?

- [ ] 2.6. Foram definidos os tipos dos estilos e das props?

- [ ] 2.7. Foram criados os comentários acima de cada atributo do tipo das props?

- [ ] 2.8. Não foi definido nenhum estilo no arquivo do componente? Todos os estilos devem ser definidos no arquivo de estilo. 

- [ ] 2.9. Foi verificado se os nomes das props do componente estão alinhados com os nomes das props da biblioteca web? 

- [ ] 2.10. Não há críticas ou melhorias pendentes após a revisão?

<strong> 2.11. Desempenho </strong>

- [ ] 2.11.1. O componente apresenta problemas de performance, como lentidão ou vazamentos de memória?

- [ ] 2.11.2. Imagens, animações e outros recursos estão otimizados para um bom desempenho?

</details>

<details><summary><strong> 3. Testes técnicos e manuais (Testabilidade)</strong></summary>

- [ ] 3.1. Testes unitários foram escritos para o componente?

- [ ] 3.2. A cobertura mínima de 90% de testes unitários foi alcançada?

- [ ] 3.3. Foi criado um teste de snapshot do componente com os valores default das props?

- [ ] 3.4. Foram criados testes para cada variação de estilo possível?

- [ ] 3.5. É possível testar todas as props do componente?
    - Deve ser possível interagir e testar os comportamentos definidos do componente.
</br>

- [ ] 3.6. Foram criados testes para os comportamentos do componente?

- [ ] 3.7. Os testes foram executados localmente e passaram com sucesso.

<strong> 3.9. Acessibilidade (Obrigatório para novos componentes) </strong>

_Android_
- [ ] 3.9.1. A acessibilidade foi testada no simulador?

- [ ] 3.9.2. A acessibilidade foi testada em dispositivo físico?

_iOS_
- [ ] 3.9.3. A acessibilidade foi testada no simulador?

- [ ] 3.9.4. A acessibilidade foi testada em dispositivo físico?

</details>

<details><summary><strong> 4. Review de Entregas</strong></summary>

- [ ] 4.1. Apresentar o componente e exemplos das variações possíveis.    
Quando o componente tiver muitas variações, apresentar pelo menos uma, e de preferência em dispositivo físico.

- [ ] 4.2. Apresentar exemplos das variações possíveis do componente com leitor de tela ativo.    
Quando o componente tiver muitas variações, apresentar pelo menos uma, e de preferência em dispositivo físico.

- [ ] 4.3. Apresentar os testes unitários sendo executados localmente e passando com sucesso.

- [ ] 4.4. Apresentar a execução do Typescript.

- [ ] 4.5. Apresentar a documentação.

- [ ] 4.6. Foi aprovado pelo time de UX?

- [ ] 4.7. Todos os apontamentos foram resolvidos? Caso não, descreva-o abaixo.

</details>`,
    // Adicione outras mensagens aqui, caso necessário
};
