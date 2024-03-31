import mysql.connector
name_db = 'clientes'

cnx = mysql.connector.connect(user='root',password='',host='127.0.0.1',database=name_db)
# cnx.close()


TABLES = {}

TABLES['usuarios'] = (
    "CREATE TABLE user ()" 
)