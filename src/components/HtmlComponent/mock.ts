export default `
<p>A internacionalização (i18n) é um recurso importante em aplicativos modernos, especialmente aqueles com público global.</p><p>Ao adicionar suporte a i18n, você permite que seus usuários alterem o idioma do aplicativo de acordo com suas preferências e necessidades.</p><p>Neste artigo, mostraremos como criar um aplicativo React com suporte a i18n usando a biblioteca i18next.</p><h2><strong>Instalação e configuração</strong></h2><p>Começamos instalando o pacote i18next e suas dependências:</p>

<p>Em seguida, configuramos o i18next em nosso aplicativo. Podemos criar um arquivo <strong>i18n.js</strong> na raiz do projeto com a seguinte configuração:</p>

<pre><code class="language-plaintext">
import * as Styled from './styles';
import HtmlComponent from '../HtmlComponent';

export type FooterProps = {
  footerHtml: string;
};

const Footer = ({ footerHtml }: FooterProps) => {
  return (
    &lt;Styled.Container&gt;
      &lt;HtmlComponent html={footerHtml} /&gt;
    &lt;/Styled.Container&gt;
  );
};

export default Footer;

</code></pre>

<p>Aqui, estamos inicializando o i18next com um detector de idioma baseado no navegador.</p><p>Também estamos definindo um idioma padrão ("en") para usar caso o idioma do usuário não possa ser detectado.</p><h2><strong>Criando arquivos de tradução</strong></h2><p>Agora que o i18next está configurado, podemos criar nossos arquivos de tradução.</p><p>Podemos criar uma pasta <strong>locales</strong> na raiz do projeto para armazenar os arquivos de tradução. Por exemplo, podemos ter arquivos como <strong>en.json</strong> e <strong>pt-BR.json</strong> na pasta <strong>locales</strong>.</p><p>Um arquivo de tradução típico pode ser assim:</p>

<p>Aqui, estamos definindo algumas mensagens de texto com placeholders (<strong>{{name}}</strong>) e também uma mensagem aninhada (<strong>button.submit</strong>).</p><p>&nbsp;</p><figure class="image"><img src="https://res.cloudinary.com/dfmbf9sae/image/upload/v1683607748/casey_horner_9_X_Rp_Nn_Tqd_JE_unsplash_c1dafbcff4.jpg" alt="casey-horner-9XRpNnTqdJE-unsplash.jpg" srcset="https://res.cloudinary.com/dfmbf9sae/image/upload/v1683607746/thumbnail_casey_horner_9_X_Rp_Nn_Tqd_JE_unsplash_c1dafbcff4.jpg 234w, https://res.cloudinary.com/dfmbf9sae/image/upload/v1683607747/small_casey_horner_9_X_Rp_Nn_Tqd_JE_unsplash_c1dafbcff4.jpg 500w, https://res.cloudinary.com/dfmbf9sae/image/upload/v1683607747/medium_casey_horner_9_X_Rp_Nn_Tqd_JE_unsplash_c1dafbcff4.jpg 750w, https://res.cloudinary.com/dfmbf9sae/image/upload/v1683607747/large_casey_horner_9_X_Rp_Nn_Tqd_JE_unsplash_c1dafbcff4.jpg 1000w" sizes="1000vw" width="1000vw"></figure>
`;
