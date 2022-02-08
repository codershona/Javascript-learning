# This was the free "redo" attempt for Karat

employees = [
  "1, Bill, Engineer",
  "2, Joe, HR",
  "3, Sally, Engineer",
  "4, Richard, Business",
  "6, Tom, Engineer"
]

friendships = [
  "1, 2",
  "1, 3",
  "3, 4"
]
# Part 1 :===================


# Given employees and friendships, find all adjacencies that denote the friendship
# A friendship is bi-directional/mutual so if 1 is friends with 2, 2 is also friends with 1.
# Output:
# 1: 2, 3
# 2: 1
# 3: 1, 4
# 4: 3
# 6: None



# Part 2: =====================


# Now for each department count the number of employees that have a friend in
# another department
# Output:
# "Engineer: 2 of 3"
# "HR: 1 of 1"
# "Business: 1 of 1"

# Interviewer modified friendship so that 6 has a friend.
friendships2 = [
  "1, 2",
  "1, 3",
  "3, 4",
  "6, 1"
]

# all_departments = {"Engineer": [0,3]}






