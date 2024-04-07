import Produto
# Modificando a lista de produtos para utilizar uma árvore binária de busca


class No:
    def __init__(self, produto):
        self.produto = produto
        self.esquerda = None
        self.direita = None

class ArvoreBusca:
    def __init__(self):
        self.raiz = None

    def adicionar_produto(self, produto):
        if self.raiz is None:
            self.raiz = No(produto)
        else:
            self._adicionar_produto_recursivamente(produto, self.raiz)

    def _adicionar_produto_recursivamente(self, produto, no_atual):
        if produto.nome < no_atual.produto.nome:
            if no_atual.esquerda is None:
                no_atual.esquerda = No(produto)
            else:
                self._adicionar_produto_recursivamente(produto, no_atual.esquerda)
        elif produto.nome > no_atual.produto.nome:
            if no_atual.direita is None:
                no_atual.direita = No(produto)
            else:
                self._adicionar_produto_recursivamente(produto, no_atual.direita)

    def buscar_produtos_similares(self, produto):
        produtos_similares = []
        self._buscar_similares_recursivamente(produto, self.raiz, produtos_similares)
        return produtos_similares

    def _buscar_similares_recursivamente(self, produto, no_atual, produtos_similares):
        if no_atual is None:
            return
        if no_atual.produto.categoria == produto.categoria and no_atual.produto.nome != produto.nome:
            produtos_similares.append(no_atual.produto)
        if produto.nome < no_atual.produto.nome:
            self._buscar_similares_recursivamente(produto, no_atual.esquerda, produtos_similares)
        elif produto.nome > no_atual.produto.nome:
            self._buscar_similares_recursivamente(produto, no_atual.direita, produtos_similares)


# Construção da árvore de busca
arvore = ArvoreBusca()
for produto in lista_de_produtos:
    arvore.adicionar_produto(produto)

# Exemplo de uso da árvore de busca para encontrar produtos similares
produtos_similares = arvore.buscar_produtos_similares(produto_exemplo)
for p in produtos_similares:
    print(f"Produto: {p.nome}, Categoria: {p.categoria}, Preço: R${p.preco}")
