def isPalindrome(str):
  rev = str[::-1]
  if rev == str:
    print("Palindrome")
  else:
    print("Not Palindrome")

str = input("")
isPalindrome(str)