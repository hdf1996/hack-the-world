# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170408205745) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hashtags", force: :cascade do |t|
    t.string   "name"
    t.integer  "pub_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pub_id"], name: "index_hashtags_on_pub_id", using: :btree
  end

  create_table "interactions", force: :cascade do |t|
    t.integer  "amount"
    t.integer  "type_content",     default: 0
    t.integer  "type_interaction", default: 0
    t.string   "text"
    t.string   "image_url"
    t.string   "original_link"
    t.string   "name"
    t.string   "profile_picture"
    t.string   "nick"
    t.string   "uid",              default: ""
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.integer  "hashtag_id"
    t.integer  "social_network"
    t.datetime "when"
    t.index ["hashtag_id"], name: "index_interactions_on_hashtag_id", using: :btree
  end

  create_table "pubs", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "hashtags", "pubs"
  add_foreign_key "interactions", "hashtags"
end
