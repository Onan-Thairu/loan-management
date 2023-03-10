# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_14_150259) do

  create_table "loan_applications", force: :cascade do |t|
    t.string "customer_name"
    t.string "customer_phone"
    t.string "business_name"
    t.string "business_address"
    t.string "business_history"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "field_credit_officer_id"
    t.integer "status"
    t.integer "interest_rate"
    t.integer "loan_amount"
    t.index ["field_credit_officer_id"], name: "index_loan_applications_on_field_credit_officer_id"
  end

  create_table "loan_disbursements", force: :cascade do |t|
    t.integer "loan_id", null: false
    t.date "disbursement_date"
    t.integer "disbursement_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.date "due_date"
    t.index ["loan_id"], name: "index_loan_disbursements_on_loan_id"
  end

  create_table "loans", force: :cascade do |t|
    t.integer "loan_amount"
    t.float "interest_rate"
    t.string "approved_by"
    t.date "approval_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "loan_application_id"
    t.integer "status"
    t.index ["loan_application_id"], name: "index_loans_on_loan_application_id"
  end

  create_table "receipts", force: :cascade do |t|
    t.date "receipt_date"
    t.integer "receipt_amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "loan_application_id"
    t.index ["loan_application_id"], name: "index_receipts_on_loan_application_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.integer "user_role"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "loan_applications", "users", column: "field_credit_officer_id"
  add_foreign_key "loan_disbursements", "loans"
end
