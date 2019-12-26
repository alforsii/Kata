## How to Convert Decimal to Hex ?

    Decimal to hexadecimal conversion can be achieved by applying the repeated division and remainder algorithm. Simply put, the decimal number is repeatedly divided by the radix 16. In between these divisions, the remainders give the hex equivalent in reverse order.

```
hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F];
decimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
```

Here is how to convert decimal to hex step by step:

- Step 1: If the given decimal number is less than 16, the hex equivalent is the
  same. Remembering that the letters A, B, C, D, E and F are used for the values
  10, 11, 12, 13, 14 and 15, convert accordingly. For example, the decimal
  number 15 will be F in hex.

- Step 2: If the given decimal number is 16 or greater, divide the number by 16.

- Step 3: Write down the remainder.

- Step 4: Divide the part before the decimal point of your quotient by 16 again.
  Write down the remainder.

- Step 5: Continue this process of dividing by 16 and noting the remainders
  until the last decimal digit you are left with is less than 16.

- Step 6: When the last decimal digit is less than 16, the quotient will be less
  than 0 and the remainder will be the digit itself.

- Step 7: The last remainder you get will be the most significant digit of your
  hex value while the first remainder from Step 3 is the least significant
  digit. Therefore, when you write the remainders in reverse order - starting at
  the bottom with the most significant digit and going to the top- you will
  reach the hex value of the given decimal number.

Now, let’s apply these steps to, for example, the decimal number (501)10

```
- Step 1: As 501 is greater than 16, divide by 16.
501 ÷ 16 = 31.3125

- Step 2: To calculate the remainder, you need to multiply the part after the decimal point by 16.
0.3125 * 16 = 5
So the first remainder (and the least significant digit in hex) is 5.

- Step 3: Divide 31 (the part of the quotient that is before the decimal point) by 16.
31 ÷ 16 = 1.9375

- Step 4: Calculate the remainder.
0.9375 * 16 = 15

- Step 5: Divide the integer part of the last quotient by 16.
1 ÷ 16 = 0.0625

- Step 6: Calculate the remainder.
0.0625 * 16 = 1

- Step 7: The remainders written from below to top give you the hex values 1, 15 and 5.
Since 15 equals F in the hexadecimal numerals, (501)10 = (1F5)16
```
