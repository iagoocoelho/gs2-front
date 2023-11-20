export const UF = [
  { nome: "Acre", sigla: "AC" },
  { nome: "Alagoas", sigla: "AL" },
  { nome: "Amapá", sigla: "AP" },
  { nome: "Amazonas", sigla: "AM" },
  { nome: "Bahia", sigla: "BA" },
  { nome: "Ceará", sigla: "CE" },
  { nome: "Distrito Federal", sigla: "DF" },
  { nome: "Espírito Santo", sigla: "ES" },
  { nome: "Goiás", sigla: "GO" },
  { nome: "Maranhão", sigla: "MA" },
  { nome: "Mato Grosso", sigla: "MT" },
  { nome: "Mato Grosso do Sul", sigla: "MS" },
  { nome: "Minas Gerais", sigla: "MG" },
  { nome: "Pará", sigla: "PA" },
  { nome: "Paraíba", sigla: "PB" },
  { nome: "Paraná", sigla: "PR" },
  { nome: "Pernambuco", sigla: "PE" },
  { nome: "Piauí", sigla: "PI" },
  { nome: "Rio de Janeiro", sigla: "RJ" },
  { nome: "Rio Grande do Norte", sigla: "RN" },
  { nome: "Rio Grande do Sul", sigla: "RS" },
  { nome: "Rondônia", sigla: "RO" },
  { nome: "Roraima", sigla: "RR" },
  { nome: "Santa Catarina", sigla: "SC" },
  { nome: "São Paulo", sigla: "SP" },
  { nome: "Sergipe", sigla: "SE" },
  { nome: "Tocantins", sigla: "TO" },
];

export const OrderStatus = {
  AGUARDANDO_PRODUCAO: "Aguardando",
  EM_PRODUCAO: "Em andamento",
  FINALIZADO: "Finalizado",
  ENTREGUE: "Entregue",
};

export const OrderStatusId = {
  0: "AGUARDANDO_PRODUCAO",
  1: "EM_PRODUCAO",
  2: "FINALIZADO",
  3: "ENTREGUE",
};

export const PermissionsByProfile = {
  GESTOR: [
    "lista_fornecedor",
    "edit_fornecedor",
    "cadastro_fornecedor",
    "lista_cliente",
    "cadastro_cliente",
    "edit_cliente",
    "lista_material",
    "cadastro_material",
    "edit_material",
    "lista_produto",
    "cadastro_produto",
    "edit_produto",
    "lista_pedido",
    "cadastro_pedido",
    "edit_pedido",
    "view_pedido",
  ],
  ADMINISTRATIVO: [
    "lista_fornecedor",
    "edit_fornecedor",
    "cadastro_fornecedor",
    "lista_cliente",
    "cadastro_cliente",
    "edit_cliente",
    "lista_material",
    "cadastro_material",
    "edit_material",
    "lista_produto",
    "cadastro_produto",
    "edit_produto",
    "lista_pedido",
    "view_pedido",
  ],
  PRODUCAO: [
    "lista_fornecedor",
    "lista_cliente",
    "lista_material",
    "lista_produto",
    "lista_pedido",
    "view_pedido",
  ],
};

export const handleStatusOrderColor = (status) => {
  switch (status) {
    case "AGUARDANDO_PRODUCAO":
      return "warning";
    case "EM_PRODUCAO":
      return "primary";
    case "FINALIZADO":
      return "info";
    case "ENTREGUE":
      return "success";
    default:
      return;
  }
};
