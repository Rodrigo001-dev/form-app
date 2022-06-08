## :page_with_curl: Projeto

Criando formulários de alto desempenho com React-Native!

A forma tradicional é criar um estado para armazenar as informações(valores) de cada input, Mas tem estratégias melhores.
No React existem motivos que vão gerar um novo cliclo renderização:

1º motivo - Quando o componente pai muda, conseguentemente todos os componentes filhos vão ser renderizados

2º motivo - Quando uma propriedade muda o componente também vai ser renderizado

3º motivo - Quando um estado muda, os componentes qua estão vinculado ao estado também vai ser renderizado.

<LINKEDIN>
O React faz isso de uma forma muito performática, ele usa o algoritimo de Diffing que ele consegue detectar o que mudo para conseguir renderizar somente o necessário.
Ele realiza 3 etapas:

1ª etapa - Gera uma nova versão do componente que precisa ser renderizado na memória.

2ª etapa - Compara a nova versão do componente com a versão que já está renderizada na tela.

3ª etapa - Se hover diferenças, será renderizado a nova versão do componente na tela alterando somente o que mudou.

É isso o que acontece por de baixo dos panos!
</LINKEDIN>

Uma estratégia muito boa é o React Hook Form [Veja mais dessa ferramenta aqui!](https://react-hook-form.com/). O React Hook Form tem por objetivo reduzir a verbozidade do código, deixar as validações mais simples e principalmente evitar a utilização de muitos estados, ou seja, ao invés dos estados ficarem mudando o tempo todo, ficar salvando e armazenando o valor de cada input dentro do estado o React Hook Form vai pegar todos os dados de uma vez só e manda isso de uma vez para qualquer lugar.