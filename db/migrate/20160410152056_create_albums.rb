class CreateAlbums < ActiveRecord::Migration
  def self.up
    create_table :albums do |t|
      t.string :artist
      t.string :album
      t.timestamps
    end
  end

  def self.down
    drop_table :albums
  end
end
