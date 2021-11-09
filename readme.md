# Database

These are the required tables for successful implementation of this Project!

<ins>Peoples</ins> have {Unique ID, name, email, phone number, <ins>Planted-Trees</ins>}  

<ins>Planted-Trees</ins> has {Unique ID : ref <ins>Peoples</ins>, Tree Species, location{latitude, longitude}, Tree ID : ref <ins>Trees</ins>}  

<ins>Tree</ins> has {Unique ID : ref <ins>Peoples</ins>, TID(Tree ID), location}  

<ins>Bank</ins> has {Unique ID : ref <ins>Peoples</ins>, <ins>Transactions</ins>, account number}  

<ins>Transactions</ins> has {[<ins>account no</ins>(from), <ins>account no</ins>(to)] : ref <ins>Bank</ins>, ammount, date}
