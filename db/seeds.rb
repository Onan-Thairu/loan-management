# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

LoanApplication.destroy_all
loanApp1 = LoanApplication.create(customer_name:"Victor Tatua",customer_phone: "0718562075",business_name: "Tatua and Sons",business_address: "Githurai",business_history: "3 years", loan_amount: 10000, interest_rate: 3, field_credit_officer_id: 4)
loanApp1 = LoanApplication.create(customer_name:"Cynthia Gichuki",customer_phone: "0718562075",business_name: "Gichuki and Cats",business_address: "Nyeri",business_history: "4 years", loan_amount: 100000, interest_rate: 3, field_credit_officer_id: 4)
loanApp1 = LoanApplication.create(customer_name:"Ian Kamande",customer_phone: "0718562075",business_name: "Kamande Enterprises",business_address: "Karatina",business_history: "3 years", loan_amount: 25000, interest_rate: 3, field_credit_officer_id: 4)
loanApp1 = LoanApplication.create(customer_name:"Mark Mlango",customer_phone: "0718562075",business_name: "Mlango Builders",business_address: "Embu",business_history: "10 years", loan_amount: 50000, interest_rate: 3, field_credit_officer_id: 4)
loanApp1 = LoanApplication.create(customer_name:"Royford Wanyoike",customer_phone: "0718562075",business_name: "Svelte Limited",business_address: "Nairobi",business_history: "6 years", loan_amount: 70000, interest_rate: 3, field_credit_officer_id: 4)
