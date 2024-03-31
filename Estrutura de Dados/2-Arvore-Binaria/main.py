class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1


class AVLTree:
    def __init__(self):
        self.root = None

    def height(self, node):
        if node is None:
            return 0
        return node.height

    def balance(self, node):
        if node is None:
            return 0
        return self.height(node.left) - self.height(node.right)

    def rotate_right(self, y):
        x = y.left
        T2 = x.right

        x.right = y
        y.left = T2

        y.height = 1 + max(self.height(y.left), self.height(y.right))
        x.height = 1 + max(self.height(x.left), self.height(x.right))

        return x

    def rotate_left(self, x):
        y = x.right
        T2 = y.left

        y.left = x
        x.right = T2

        x.height = 1 + max(self.height(x.left), self.height(x.right))
        y.height = 1 + max(self.height(y.left), self.height(y.right))

        return y

    def insert(self, node, value):
        if node is None:
            return TreeNode(value)
        
        if value < node.value:
            node.left = self.insert(node.left, value)
        else:
            node.right = self.insert(node.right, value)
        
        node.height = 1 + max(self.height(node.left), self.height(node.right))
        
        balance = self.balance(node)

        if balance > 1 and value < node.left.value:
            return self.rotate_right(node)
        
        if balance < -1 and value > node.right.value:
            return self.rotate_left(node)
        
        if balance > 1 and value > node.left.value:
            node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        
        if balance < -1 and value < node.right.value:
            node.right = self.rotate_right(node.right)
            return self.rotate_left(node)

        return node

    def delete(self, node, value):
        if node is None:
            return node

        if value < node.value:
            node.left = self.delete(node.left, value)
        elif value > node.value:
            node.right = self.delete(node.right, value)
        else:
            if node.left is None:
                temp = node.right
                node = None
                return temp
            elif node.right is None:
                temp = node.left
                node = None
                return temp

            temp = self.min_value_node(node.right)
            node.value = temp.value
            node.right = self.delete(node.right, temp.value)

        if node is None:
            return node

        node.height = 1 + max(self.height(node.left), self.height(node.right))

        balance = self.balance(node)

        if balance > 1 and self.balance(node.left) >= 0:
            return self.rotate_right(node)
        if balance < -1 and self.balance(node.right) <= 0:
            return self.rotate_left(node)
        if balance > 1 and self.balance(node.left) < 0:
            node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        if balance < -1 and self.balance(node.right) > 0:
            node.right = self.rotate_right(node.right)
            return self.rotate_left(node)

        return node

    def min_value_node(self, node):
        current = node
        while current.left is not None:
            current = current.left
        return current

    def inorder_traversal(self, node):
        if node:
            self.inorder_traversal(node.left)
            print(node.value, end=" ")
            self.inorder_traversal(node.right)

    def insert_value(self, value):
        self.root = self.insert(self.root, value)

    def delete_value(self, value):
        self.root = self.delete(self.root, value)


# Exemplo de uso:

avl_tree = AVLTree()
avl_tree.insert_value(10)
avl_tree.insert_value(20)
avl_tree.insert_value(30)
avl_tree.insert_value(40)
avl_tree.insert_value(50)
avl_tree.insert_value(25)

print("Árvore AVL após inserção:")
avl_tree.inorder_traversal(avl_tree.root)
print()

avl_tree.delete_value(30)

print("Árvore AVL após remoção do valor 30:")
avl_tree.inorder_traversal(avl_tree.root)
print()
