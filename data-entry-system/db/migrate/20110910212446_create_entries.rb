class CreateEntries < ActiveRecord::Migration
  def self.up
    create_table :entries do |t|
      t.string :entry_type
      t.string :json_blob
    end
  end

  def self.down
    drop_table :entries
  end
end
