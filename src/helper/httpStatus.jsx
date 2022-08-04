export const status = [
  {
    id: 1,
    title: '100 - Continue',
    content: 'O Status HTTP 100 Continue indica que até o momento tudo está OK e que o cliente pode continuar com a requisição ou ignorar caso já tenha terminado.'
  },
  {
    id: 2,
    title: '101 - Switching Protocols',
    content: 'O código de resposta HTTP 101 Switching Protocols indica para qual protocolo o servidor está trocando, conforme solicitado por um cliente que tenha enviado uma mensagem incluindo Upgrade no cabeçalho da requisição.'
  },
  {
    id: 3,
    title: '103 - Early Hints',
    content: 'O código de informação de status de resposta HTTP 103 Early Hints é destinado principalmente a ser usado com o cabeçalho "Link" para permitir ao agente do usuário começar pré-carregamento de recursos enquanto o servidor ainda está preparando uma resposta.'
  },
  {
    id: 4,
    title: '200 - OK',
    content: 'O código HTTP 200 OK é a resposta de status de sucesso que indica que a requisição foi bem sucedida. Uma resposta 200 é cacheável por padrão.'
  },
  {
    id: 5,
    title: '201 - Created',
    content: 'O status HTTP "201 Created" é utilizado como resposta de sucesso, indica que a requisição foi bem sucedida e que um novo recurso foi criado. Este novo recurso é efetivamente criado antes do retorno da resposta e o novo recurso é enviado no corpo da mensagem (pode vir na URL ou na header  Location).'
  },
  {
    id: 6,
    title: '202 - Accepted',
    content: 'A requisição foi recebida mas nenhuma ação foi tomada sobre ela. Isto é uma requisição não-comprometedora, o que significa que não há nenhuma maneira no HTTP para enviar uma resposta assíncrona indicando o resultado do processamento da solicitação. Isto é indicado para casos onde outro processo ou servidor lida com a requisição, ou para processamento em lote.'
  },
  {
    id: 7,
    title: '203 - Non-Authoritative Information',
    content: 'Esse código de resposta significa que o conjunto de meta-informações retornadas não é o conjunto exato disponível no servidor de origem, mas coletado de uma cópia local ou de terceiros. Exceto essa condição, a resposta de 200 OK deve ser preferida em vez dessa resposta.'
  },
  {
    id: 8,
    title: '205 - Reset Content',
    content: 'O 205 Reset Content status de resposta HTTP informa ao cliente para reconfigurar a visualização do documento, por exemplo, para limpar o conteúdo de um formulário, reconfigurar um estado de tela ou para atualizar a IU.'
  },
  {
    id: 9,
    title: '207 - Multi-Status (WebDAV)',
    content: 'Uma resposta Multi-Status transmite informações sobre vários recursos em situações em que vários códigos de status podem ser apropriados.'
  },
  {
    id: 10,
    title: '208 - Multi-Status (WebDAV)',
    content: 'Usado dentro de um elemento de resposta <dav:propstat> para evitar enumerar os membros internos de várias ligações à mesma coleção repetidamente.'
  },
  {
    id: 11,
    title: '226 - IM Used (HTTP Delta encoding)',
    content: 'O servidor cumpriu uma solicitação GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual.'
  },
  {
    id: 12,
    title: '300 - Multiple Choice',
    content: 'A requisição tem mais de uma resposta possível. User-agent ou o user deve escolher uma delas. Não há maneira padrão para escolher uma das respostas.'
  },
  {
    id: 13,
    title: '301 - Moved Permanently',
    content: 'Esse código de resposta significa que a URI do recurso requerido mudou. Provavelmente, a nova URI será especificada na resposta.'
  },
  {
    id: 14,
    title: '302 - Found',
    content: 'Esse código de resposta significa que a URI do recurso requerido foi mudada temporariamente. Novas mudanças na URI poderão ser feitas no futuro. Portanto, a mesma URI deve ser usada pelo cliente em requisições futuras.'
  },
  {
    id: 15,
    title: '303 - See Other',
    content: 'O servidor manda essa resposta para instruir ao cliente buscar o recurso requisitado em outra URI com uma requisição GET.'
  },
  {
    id: 16,
    title: '304 - Not Modified',
    content: 'Essa resposta é usada para questões de cache. Diz ao cliente que a resposta não foi modificada. Portanto, o cliente pode usar a mesma versão em cache da resposta.'
  },
  {
    id: 17,
    title: '305 - Use Proxy',
    content: 'Foi definida em uma versão anterior da especificação HTTP para indicar que uma resposta deve ser acessada por um proxy. Foi depreciada por questões de segurança em respeito a configuração em banda de um proxy.'
  },
  {
    id: 18,
    title: '306 - unused',
    content: 'Esse código de resposta não é mais utilizado, encontra-se reservado. Foi usado numa versão anterior da especificação HTTP 1.1.'
  },
  {
    id: 19,
    title: '307 - Temporary Redirect',
    content: 'O código de estado 307 Redirecionamento temporário indica que o recurso da requisição foi temporariamente alterado para a URL informada no cabeçalho Location.'
  },
  {
    id: 20,
    title: '308 - Permanent Redirect',
    content: 'Esse código significa que o recurso agora está permanentemente localizado em outra URI, especificada pelo cabeçalho de resposta Location. Tem a mesma semântica do código de resposta HTTP 301 Moved Permanently  com a exceção de que o user-agent não deve mudar o método HTTP utilizado: se um POST foi utilizado na primeira requisição, um POST deve ser utilizado na segunda.'
  },
  {
    id: 21,
    title: '400 - Bad Request',
    content: 'Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.'
  },
  {
    id: 22,
    title: '401 - Unauthorized',
    content: 'O código de resposta de status de erro do cliente HTTP 401 Unauthorized  indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.'
  },
  {
    id: 23,
    title: '402 - Payment Required ',
    content: 'Este código de resposta está reservado para uso futuro. O objetivo inicial da criação deste código era usá-lo para sistemas digitais de pagamento porém ele não está sendo usado atualmente.'
  },
  {
    id: 24,
    title: '403 - Forbidden',
    content: 'O código de resposta de status de erro do cliente HTTP 403 Forbidden indica que o servidor entendeu o pedido, mas se recusa a autorizá-lo. Esse status é semelhante ao 401 , mas neste caso, a re-autenticação não fará diferença. O acesso é permanentemente proibido e vinculado à lógica da aplicação (como uma senha incorreta).'
  },
  {
    id: 25,
    title: '404 - Not found',
    content: 'A resposta de erro 404 Not Found indica que o servidor não conseguiu encontrar o recurso solicitado. Normalmente, links que levam para uma página 404 estão quebrados ou desativados, e podem estar sujeitos a link rot/link quebrado.'
  },
  {
    id: 26,
    title: '405 - Method Not Allowed',
    content: 'O método de solicitação é conhecido pelo servidor, mas foi desativado e não pode ser usado. Os dois métodos obrigatórios, GET e HEAD, nunca devem ser desabilitados e não devem retornar este código de erro.'
  },
  {
    id: 27,
    title: '406 - Not Acceptable',
    content: 'Essa resposta é enviada quando o servidor da Web após realizar a negociação de conteúdo orientada pelo servidor, não encontra nenhum conteúdo seguindo os critérios fornecidos pelo agente do usuário.'
  },
  {
    id: 28,
    title: '407 - Proxy Authentication Required',
    content: 'Semelhante ao 401 porem é necessário que a autenticação seja feita por um proxy.'
  },
  {
    id: 29,
    title: '408 - Request Timeout',
    content: 'Esta resposta é enviada por alguns servidores em uma conexão ociosa, mesmo sem qualquer requisição prévia pelo cliente. Ela significa que o servidor gostaria de derrubar esta conexão em desuso. Esta resposta é muito usada já que alguns navegadores, como Chrome, Firefox 27+, ou IE9, usam mecanismos HTTP de pré-conexão para acelerar a navegação. Note também que alguns servidores meramente derrubam a conexão sem enviar esta mensagem.'
  },
  {
    id: 30,
    title: '409 - Conflict',
    content: 'Esta resposta será enviada quando uma requisição conflitar com o estado atual do servidor.'
  },
  {
    id: 31,
    title: '410 - Gone',
    content: 'Esta resposta será enviada quando o conteúdo requisitado foi permanentemente deletado do servidor, sem nenhum endereço de redirecionamento. É experado que clientes removam seus caches e links para o recurso. A especificação HTTP espera que este código de status seja usado para "serviços promocionais de tempo limitado". APIs não devem se sentir obrigadas a indicar que recursos foram removidos com este código de status.'
  },
  {
    id: 32,
    title: '411 - Length Required',
    content: 'O servidor rejeitou a requisição porque o campo Content-Length do cabeçalho não está definido e o servidor o requer.'
  },
  {
    id: 33,
    title: '412 - Precondition Failed',
    content: 'O cliente indicou nos seus cabeçalhos pré-condições que o servidor não atende.'
  },
  {
    id: 34,
    title: '413 - Payload Too Large',
    content: 'A entidade requisição é maior do que os limites definidos pelo servidor; o servidor pode fechar a conexão ou retornar um campo de cabeçalho Retry-After.'
  },
  {
    id: 35,
    title: '414 - URI Too Long',
    content: 'O código de resposta 414 URI Too Long indica que o tamanho da URI requisitada pelo cliente é maior do que o tamanho que o servidor aceita interpretar.'
  },
  {
    id: 36,
    title: '415 - Unsupported Media Type',
    content: 'O formato de mídia dos dados requisitados não é suportado pelo servidor, então o servidor rejeita a requisição.'
  },
  {
    id: 37,
    title: '416 - Requested Range Not Satisfiable',
    content: 'O formato de mídia dos dados requisitados não é suportado pelo servidor, então o servidor rejeita a requisição.'
  },
  {
    id: 38,
    title: '417 - Expectation Failed',
    content: 'Este código de resposta significa que a expectativa indicada pelo campo Expect do cabeçalho da requisição não pode ser satisfeita pelo servidor.'
  },
  {
    id: 39,
    title: '418 - I`m a teapot',
    content: 'O servidor recusa a tentativa de coar café num bule de chá.'
  },
  {
    id: 40,
    title: '421 - Misdirected Request',
    content: 'A requisição foi direcionada a um servidor inapto a produzir a resposta. Pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema ("scheme") e autoridade inclusas na URI da requisição.'
  },
  {
    id: 41,
    title: '422 - Unprocessable Entity (WebDAV)',
    content: 'A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.'
  },
  {
    id: 42,
    title: '423 - Locked (WebDAV)',
    content: 'O recurso sendo acessado está travado.'
  },
  {
    id: 43,
    title: '424 - Failed Dependency (WebDAV)',
    content: 'A requisição falhou devido a falha em requisição prévia.'
  },
  {
    id: 44,
    title: '425 - Too Early',
    content: 'Indica que o servidor não está disposto a arriscar processar uma requisição que pode ser refeita.'
  },
  {
    id: 45,
    title: '426 - Upgrade Required',
    content: 'O servidor se recusa a executar a requisição usando o protocolo corrente mas estará pronto a fazê-lo após o cliente atualizar para um protocolo diferente. O servidor envia um cabeçalho Upgrade numa resposta 426 para indicar o(s) protocolo(s) requeridos.'
  },
  {
    id: 46,
    title: '428 - Precondition Required',
    content: 'O servidor de origem requer que a resposta seja condicional. Feito para prevenir o problema da `atualização perdida`, onde um cliente pega o estado de um recurso (GET) , modifica-o, e o põe de volta no servidor (PUT), enquanto um terceiro modificou o estado no servidor, levando a um conflito.'
  },
  {
    id: 47,
    title: '429 - Too Many Requests',
    content: 'O usuário enviou muitas requisições num dado tempo ("limitação de frequência").'
  },
  {
    id: 48,
    title: '431 - Request Header Fields Too Large',
    content: 'O servidor não quer processar a requisição porque os campos de cabeçalho são muito grandes. A requisição PODE ser submetida novemente depois de reduzir o tamanho dos campos de cabeçalho.'
  },
  {
    id: 49,
    title: '451 - Unavailable For Legal Reasons',
    content: 'O usuário requisitou um recurso ilegal, tal como uma página censurada por um governo.'
  },
  {
    id: 50,
    title: '500 - Internal Server Error',
    content: 'O servidor encontrou uma situação com a qual não sabe lidar.'
  },
  {
    id: 51,
    title: '501 - Not Implemented',
    content: 'O método da requisição não é suportado pelo servidor e não pode ser manipulado. Os únicos métodos exigidos que servidores suportem (e portanto não devem retornar este código) são GET e HEAD.'
  },
  {
    id: 52,
    title: '502 - Bad Gateway',
    content: 'Esta resposta de erro significa que o servidor, ao trabalhar como um gateway a fim de obter uma resposta necessária para manipular a requisição, obteve uma resposta inválida.'
  },
  {
    id: 53,
    title: '503 - Service Unavailable',
    content: 'O servidor não está pronto para manipular a requisição. Causas comuns são um servidor em manutenção ou sobrecarregado. Note que junto a esta resposta, uma página amigável explicando o problema deveria ser enviada. Estas respostas devem ser usadas para condições temporárias e o cabeçalho HTTP Retry-After: deverá, se posível, conter o tempo estimado para recuperação do serviço. O webmaster deve também tomar cuidado com os cabaçalhos relacionados com o cache que são enviados com esta resposta, já que estas respostas de condições temporárias normalmente não deveriam ser postas em cache.'
  },
  {
    id: 54,
    title: '504 - Gateway Timeout',
    content: 'Esta resposta de erro é dada quando o servidor está atuando como um gateway e não obtém uma resposta a tempo.'
  },
  {
    id: 55,
    title: '505 - HTTP Version Not Supported',
    content: 'A versão HTTP usada na requisição não é suportada pelo servidor.'
  },
  {
    id: 56,
    title: '506 - Variant Also Negotiates',
    content: 'O servidor tem um erro de configuração interno: a negociação transparente de conteúdo para a requisição resulta em uma referência circular.'
  },
  {
    id: 57,
    title: '507 - Insufficient Storage',
    content: 'O servidor tem um erro interno de configuração: o recurso variante escolhido está configurado para entrar em negociação transparente de conteúdo com ele mesmo, e portanto não é uma ponta válida no processo de negociação.'
  },
  {
    id: 58,
    title: '508 - Loop Detected (WebDAV)',
    content: 'O servidor detectou um looping infinito ao processar a requisição.'
  },
  {
    id: 59,
    title: '510 - Not Extended',
    content: 'Exigem-se extenções posteriores à requisição para o servidor atendê-la.'
  },
  {
    id: 60,
    title: '511 - Network Authentication Required',
    content: 'O código de status 511 indica que o cliente precisa se autenticar para ganhar acesso à rede.'
  }
]