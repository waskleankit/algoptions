# sandc = {
#     'Gujarat' :  'Gandhinagar',
#     'Maharashtra' : 'Mumbai',
#     'Rajasthan':'Jaipur',
#     'Bihar':'Patna'
#     }
# print('List of given states :\n')
# print(sandc)
# #Iterating over keys
# for state in sandc:
#     print(state)
# print(sandc["Gujarat"])
# print(sandc.values())
# for capital in sandc.values():
#     print(capital)


# statesAndCapitals = {
#     'Gujarat':'Gandhinagar',
#     'Maharashtra':'Mumbai',
#     'Rajasthan' : 'Jaipur',
#     'Bihar' : 'Patna'
#     }
# print('List of given states and their capitals:\n')
#
# #iterating over values
# for state,capital in statesAndCapitals.items():
#     print(state,":",capital)


# Iterating through value lists dictionary
# Using list comprehension
# test_dict = {'gfg' : [1,2], 'is' : [4,5],'best' : [7,8]}
#printing original dictionary
# print("The original dictionary :" + str(test_dict))
# print(test_dict)

#Using list comprehension
#Iterating through value lists dictionary

# res = []
# for x in test_dict.keys():
#     list1 = []
#     for i in test_dict[x]:
#         list1.append(i)
#     res.append(list1)

# res = [[i for i in test_dict[x]] for x in test_dict.keys()]
# print("the list values of keys are : " + str(res))
# the list values of keys are : [[1, 2], [4, 5], [7, 8]]


# # Python3 code to demonstrate working of
# # Iterating through value lists dictionary
# # Using from_iterable() + product() + items()
# import itertools
#
# # Initialize dictionary
# test_dict = {'gfg': [1, 2], 'is': [4, 5], 'best': [7, 8]}
#
# # printing original dictionary
# print("The original dictionary : " + str(test_dict))
#
# #Iterating through value lists dictionary
# #Using from_iterable() + product() + items()
# res = []
# for key ,value in (itertools.chain.from_iterable([itertools.product((k, ),v) for k, v in test_dict.items()])):
#     res.append(value)
#
# # printing result
# print("The list values of keys are : " + str(res))



# in a dictionary in a specific order

# from collections import OrderedDict
# stateAndCapitals = OrderedDict([
#                                  ('Gujarat', 'Gandhinagar'),
#                                  ('Maharashtra', 'Mumbai'),
#                                  ('Rajasthan', 'Jaipur'),
#                                  ('Bihar', 'Patna')
#                                 ])
# print(type(stateAndCapitals))
# # Iterating over keys
# for state in stateAndCapitals:
#     print(state)


data = {
    'Student 1' : {'Name' : 'Bobby', 'Id': 1 , "Age": 20},
    'Student 2' : {'Name' : 'ojaswi', 'Id': 2 , "Age": 22},
    'Student 3' : {'Name' : 'rohith', 'Id': 3 , "Age": 20},
}
for i in data:
    # print(i)
    # print(data[i])
    # print(data[i].keys())
    print(data[i].values())