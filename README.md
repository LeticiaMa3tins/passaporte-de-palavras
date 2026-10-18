# Passaporte de Palavras

Aplicativo web para explorar idiomas e culturas com cartões, perguntas de múltipla escolha e revisão espaçada.

Site: https://passaporte-de-palavras.lilac-shrew-9040.chatgpt.site

## Recursos

- Interface em português e inglês.
- 45 idiomas em 9 regiões, com escrita nativa e transliteração.
- Seleções Light, Além do óbvio, Radical e regionais.
- Opção de ocultar idiomas já conhecidos.
- Progresso local, com exportação e importação.
- Áudio pelas vozes disponíveis no navegador/aparelho.
- Link para solicitar explicações no ChatGPT.

O acervo é introdutório: 350 cartões no total. A meta de 100 frases e 300 palavras por idioma ainda não está implementada. O conteúdo precisa de revisão linguística. Não há integração de IA dentro do aplicativo.

## Executar localmente

Requer Python 3 apenas para servir os arquivos estáticos:

```sh
python -m http.server 8000 --directory dist
```

Abra http://localhost:8000. Não é necessário instalar dependências nem executar build.

## Arquivos

- `dist/index.html`: página principal.
- `dist/style.css`: apresentação e layout responsivo.
- `dist/app.js`: interface e interações.
- `dist/core.js`: fila de estudo e cálculo das revisões.
- `dist/data.js`: catálogo e conteúdo inicial.
- `dist/i18n.js`: interface e conteúdo em inglês.
- `dist/expansion.js`: idiomas adicionais e seleções.

O progresso fica no navegador de cada usuário e não é armazenado no GitHub. Use a exportação do aplicativo para transferi-lo entre aparelhos ou endereços.

Este repositório é uma cópia do código. Alterações nele não atualizam automaticamente o site hospedado.
