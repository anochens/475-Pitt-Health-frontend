class Entry < ActiveRecord::Migration
  def self.up
	  change_column :entries, :json_blob, :string, :default => '{}'
  end

  def self.down
  end
end
