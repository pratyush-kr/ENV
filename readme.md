#DataBase

These are the required tables for sucessful implementation of this Project!

<ins>Peoples</ins> have {Unique ID, name, email, phone number, <ins>Planted-Trees</ins>}
<ins>Planted-Trees</ins> has {Unique ID : ref <ins>Peoples</ins>, Tree Species, location{latitude, longitude}, Tree ID : ref <ins>Trees</ins>}