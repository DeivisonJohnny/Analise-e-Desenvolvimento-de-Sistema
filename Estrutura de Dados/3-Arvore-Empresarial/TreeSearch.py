import time

class Produto:
    def __init__(self, nome, categoria, preco):
        self.nome = nome
        self.categoria = categoria
        self.preco = preco



lista_de_produtos = [
    Produto("Smartphone", "Eletrônicos", 1500),
    Produto("Tablet", "Eletrônicos", 800),
    Produto("Notebook", "Eletrônicos", 2500),
    Produto("Fone de Ouvido", "Acessórios", 100),
    Produto("Mochila", "Acessórios", 150),
    Produto("Mouse", "Acessórios", 50),
    Produto("Livro", "Livros", 30),
    Produto("Kindle", "Eletrônicos", 300),
]


def buscar_produtos_similares(listProdutos, produtos):
    produtos_similares = []
    for p in listProdutos:
        if p.categoria == produtos.categoria and p.nome != produtos.nome:
            produtos_similares.append(p)
    return produtos_similares


produto_exemplo = Produto('Smartphone', "Eletrônicos", 1500)

produto_similares = buscar_produtos_similares(lista_de_produtos, produto_exemplo)

for p in produto_similares:
    print(f"Produto: {p.nome}, Categoria: {p.categoria}, Preço: R${p.preco}")
    
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

    def search(self, produto):
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


arvore = ArvoreBusca()
for produto in lista_de_produtos:
    arvore.adicionar_produto(produto)


produtos_similares = arvore.search(produto_exemplo)
for p in produtos_similares:
    print(f"Produto: {p.nome}, Categoria: {p.categoria}, Preço: R${p.preco}")

