
a = 15 
b =["adh","jdh","jdj","oidu"]

def add(n1,n2):
    return n1+n2

def extract(arr):
    h = []
    for value in arr:
        prefix = value[0]
        h.append(prefix)
    return h


def extract2(arr, prefix):
    arr2 = extract(arr)
    return arr2.count(prefix)

names = ["Jack","job","Molly","Mike","Sim"]
print(extract2(names, "M"))

numbers = [1,4,3,5,66,88,2,88]
# numbers.count(88)
time = numbers.count(88)
# print(time)

c = add(10,15)
d = add(5,6)
# print(add(c,d))
# print(extract(b))
# print(extract(["Jack","Job","Molly"]))

#Python列表  列表里面要加" , "逗号
g = ["keke", "fengfeng", "love", 520]

#删除一个列表元素
# print("原始列表：" ,g)
del g[2]
# print("删除第三个值：",g)

value1 = "hello"
# print(value1 + str(1))
# print(str(1) + "2")

numbers = [1,4,3,5,66,88,2,88]
# numbers.count(88)
time = numbers.count(88)
# print(time)

# numbers.reverse()
# print(numbers)




