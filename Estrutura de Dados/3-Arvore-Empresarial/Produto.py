

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

